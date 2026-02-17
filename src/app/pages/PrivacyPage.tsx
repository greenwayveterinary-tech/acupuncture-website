export function PrivacyPage() {
  return (
    <div className="min-h-screen bg-primary">
      {/* Header */}
      <section className="bg-gradient-to-b from-primary to-primary/95 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl text-primary-foreground mb-4">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground text-lg">
            Last updated: February 1, 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card rounded-lg shadow-lg p-8 md:p-12 space-y-8">
            
            {/* Introduction */}
            <div>
              <h2 className="text-2xl text-card-foreground mb-4">1. Introduction</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Greenway Veterinary Acupuncture ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site or use our services.
              </p>
            </div>

            {/* Information We Collect */}
            <div>
              <h2 className="text-2xl text-card-foreground mb-4">2. Information We Collect</h2>
              
              <h3 className="text-xl text-card-foreground mb-3 mt-6">Personal Information</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-2 ml-4">
                <li>Register for our services</li>
                <li>Book an appointment</li>
                <li>Contact us via email or phone</li>
                <li>Fill out forms on our website</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                This information may include:
              </p>
              <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-2 ml-4">
                <li>Your name and contact details (email, phone number, address)</li>
                <li>Pet information (name, species, breed, age, medical history)</li>
                <li>Veterinary records and treatment history</li>
                <li>Payment and billing information</li>
              </ul>

              <h3 className="text-xl text-card-foreground mb-3 mt-6">Automatically Collected Information</h3>
              <p className="text-muted-foreground leading-relaxed">
                When you visit our website, we may automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies installed on your device.
              </p>
            </div>

            {/* How We Use Your Information */}
            <div>
              <h2 className="text-2xl text-card-foreground mb-4">3. How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-2 ml-4">
                <li>Provide, operate, and maintain our veterinary acupuncture services</li>
                <li>Process your appointments and treatments</li>
                <li>Communicate with you about your pet's care</li>
                <li>Send appointment reminders and follow-up information</li>
                <li>Process payments and maintain billing records</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations and professional standards</li>
                <li>Respond to your inquiries and support requests</li>
              </ul>
            </div>

            {/* Data Protection and Security */}
            <div>
              <h2 className="text-2xl text-card-foreground mb-4">4. Data Protection and Security</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-2 ml-4">
                <li>Secure servers and encrypted data transmission</li>
                <li>Limited access to personal information by authorized personnel only</li>
                <li>Regular security assessments and updates</li>
                <li>Compliance with UK GDPR and Data Protection Act 2018</li>
              </ul>
            </div>

            {/* Disclosure of Your Information */}
            <div>
              <h2 className="text-2xl text-card-foreground mb-4">5. Disclosure of Your Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                We may share your information in the following situations:
              </p>
              <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-2 ml-4">
                <li><strong>With Your Veterinarian:</strong> We may share treatment information with your regular veterinary practice with your consent</li>
                <li><strong>Legal Obligations:</strong> When required by law or to protect our rights</li>
                <li><strong>Service Providers:</strong> With third-party service providers who assist in operating our business (e.g., payment processors, appointment scheduling software)</li>
                <li><strong>Professional Bodies:</strong> With the RCVS or other regulatory bodies when required for professional compliance</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                We do not sell, rent, or trade your personal information to third parties for marketing purposes.
              </p>
            </div>

            {/* Your Data Protection Rights */}
            <div>
              <h2 className="text-2xl text-card-foreground mb-4">6. Your Data Protection Rights (UK GDPR)</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Under UK GDPR, you have the following rights:
              </p>
              <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-2 ml-4">
                <li><strong>Right to Access:</strong> Request copies of your personal data</li>
                <li><strong>Right to Rectification:</strong> Request correction of inaccurate or incomplete data</li>
                <li><strong>Right to Erasure:</strong> Request deletion of your personal data (subject to legal and professional obligations)</li>
                <li><strong>Right to Restrict Processing:</strong> Request limitation of how we process your data</li>
                <li><strong>Right to Data Portability:</strong> Request transfer of your data to another organization</li>
                <li><strong>Right to Object:</strong> Object to our processing of your personal data</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                To exercise any of these rights, please contact us at office@acupuncture-vet.co.uk.
              </p>
            </div>

            {/* Data Retention */}
            <div>
              <h2 className="text-2xl text-card-foreground mb-4">7. Data Retention</h2>
              <p className="text-muted-foreground leading-relaxed">
                We retain your personal information for as long as necessary to provide our services and comply with legal obligations. Veterinary records are retained in accordance with RCVS guidelines and UK legal requirements, typically for a minimum of 6 years from the last treatment date.
              </p>
            </div>

            {/* Cookies */}
            <div>
              <h2 className="text-2xl text-card-foreground mb-4">8. Cookies and Tracking Technologies</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                We use cookies and similar tracking technologies to track activity on our website and store certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Types of cookies we use include:
              </p>
              <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-2 ml-4 mt-3">
                <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
                <li><strong>Preference Cookies:</strong> Remember your preferences and settings</li>
              </ul>
            </div>

            {/* Third-Party Websites */}
            <div>
              <h2 className="text-2xl text-card-foreground mb-4">9. Third-Party Websites</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
              </p>
            </div>

            {/* Children's Privacy */}
            <div>
              <h2 className="text-2xl text-card-foreground mb-4">10. Children's Privacy</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
              </p>
            </div>

            {/* Changes to This Policy */}
            <div>
              <h2 className="text-2xl text-card-foreground mb-4">11. Changes to This Privacy Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
              </p>
            </div>

            {/* Contact Us */}
            <div className="bg-primary/5 rounded-lg p-6 border border-border">
              <h2 className="text-2xl text-card-foreground mb-4">12. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or wish to exercise your data protection rights, please contact us:
              </p>
              <div className="text-muted-foreground space-y-2">
                <p><strong>Email:</strong> office@acupuncture-vet.co.uk</p>
                <p><strong>Phone:</strong> 020 1234 5678</p>
                <p><strong>Address:</strong> London & Surrounding Areas</p>
              </div>
              <p className="text-muted-foreground leading-relaxed mt-4">
                You also have the right to lodge a complaint with the Information Commissioner's Office (ICO), the UK's data protection regulator, at <a href="https://ico.org.uk" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">ico.org.uk</a>.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}