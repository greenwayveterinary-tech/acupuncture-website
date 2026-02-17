import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, phone, petName, petType, appointmentType, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required' });
  }

  const appointmentLabels: Record<string, string> = {
    home: 'Home Visit',
    clinic: 'Clinic Visit',
    unsure: 'Not Sure Yet',
  };

  try {
    await resend.emails.send({
      from: 'Greenway Acupuncture Website <noreply@acupuncture-vet.co.uk>',
      to: 'office@acupuncture-vet.co.uk',
      replyTo: email,
      subject: `New enquiry from ${name}`,
      html: `
        <h2>New Contact Form Enquiry</h2>
        <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
          <tr>
            <td style="padding: 8px 12px; font-weight: bold; vertical-align: top; width: 180px;">Name</td>
            <td style="padding: 8px 12px;">${name}</td>
          </tr>
          <tr style="background: #f9f9f9;">
            <td style="padding: 8px 12px; font-weight: bold; vertical-align: top;">Email</td>
            <td style="padding: 8px 12px;"><a href="mailto:${email}">${email}</a></td>
          </tr>
          ${phone ? `<tr>
            <td style="padding: 8px 12px; font-weight: bold; vertical-align: top;">Phone</td>
            <td style="padding: 8px 12px;"><a href="tel:${phone}">${phone}</a></td>
          </tr>` : ''}
          ${petName ? `<tr style="background: #f9f9f9;">
            <td style="padding: 8px 12px; font-weight: bold; vertical-align: top;">Pet's Name</td>
            <td style="padding: 8px 12px;">${petName}</td>
          </tr>` : ''}
          ${petType ? `<tr>
            <td style="padding: 8px 12px; font-weight: bold; vertical-align: top;">Pet Type</td>
            <td style="padding: 8px 12px;">${petType}</td>
          </tr>` : ''}
          ${appointmentType ? `<tr style="background: #f9f9f9;">
            <td style="padding: 8px 12px; font-weight: bold; vertical-align: top;">Appointment Preference</td>
            <td style="padding: 8px 12px;">${appointmentLabels[appointmentType] || appointmentType}</td>
          </tr>` : ''}
          <tr>
            <td style="padding: 8px 12px; font-weight: bold; vertical-align: top;">Message</td>
            <td style="padding: 8px 12px; white-space: pre-wrap;">${message}</td>
          </tr>
        </table>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Failed to send email:', error);
    return res.status(500).json({ error: 'Failed to send message' });
  }
}
