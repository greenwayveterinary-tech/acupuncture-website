export function TermsPage() {
  return (
    <div className="min-h-screen bg-primary">
      {/* Header */}
      <section className="bg-gradient-to-b from-primary to-primary/95 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl text-primary-foreground mb-4">
            Terms of Service
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
              <h2 className="text-2xl text-card-foreground mb-4">1. Agreement to Terms</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                These Terms of Service ("Terms") constitute a legally binding agreement between you and Greenway Veterinary Acupuncture ("we", "our", or "us") concerning your access to and use of our website and veterinary acupuncture services.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                By accessing our website or using our services, you agree to be bound by these Terms. If you do not agree with any part of these Terms, you must not use our website or services.
              </p>
            </div>

            {/* Services */}
            <div>
              <h2 className="text-2xl text-card-foreground mb-4">2. Our Services</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Greenway Veterinary Acupuncture provides veterinary acupuncture services for dogs and cats in London and surrounding areas. Our services include:
              </p>
              <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-2 ml-4">
                <li>Home visit acupuncture treatments</li>
                <li>In-clinic acupuncture appointments</li>
                <li>Initial consultations and assessments</li>
                <li>Follow-up treatments and care plans</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                All services are provided by RCVS registered veterinary surgeons who are members of the Association of British Veterinary Acupuncturists (ABVA).
              </p>
            </div>

            {/* Professional Relationship */}
            <div>
              <h2 className="text-2xl text-card-foreground mb-4">3. Veterinary-Client-Patient Relationship</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                By using our services, you acknowledge and agree that:
              </p>
              <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-2 ml-4">
                <li>You are the legal owner or authorized caregiver of the pet receiving treatment</li>
                <li>You have the authority to make medical decisions for the pet</li>
                <li>You will provide complete and accurate information about your pet's medical history</li>
                <li>Acupuncture is a complementary therapy and not a replacement for conventional veterinary care</li>
                <li>We may communicate with your regular veterinarian regarding your pet's treatment</li>
                <li>You are responsible for following post-treatment care instructions</li>
              </ul>
            </div>

            {/* Appointments and Cancellations */}
            <div>
              <h2 className="text-2xl text-card-foreground mb-4">4. Appointments and Cancellations</h2>
              
              <h3 className="text-xl text-card-foreground mb-3 mt-6">Booking</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Appointments can be booked through our online booking system, by phone, or by email. All appointments are subject to availability and confirmation.
              </p>

              <h3 className="text-xl text-card-foreground mb-3">Cancellation Policy</h3>
              <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-2 ml-4">
                <li><strong>24+ hours notice:</strong> Full refund or free rescheduling</li>
                <li><strong>Less than 24 hours notice:</strong> 50% cancellation fee applies</li>
                <li><strong>No-show:</strong> Full appointment fee will be charged</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                We understand that emergencies happen. Please contact us as soon as possible if you need to cancel or reschedule an appointment.
              </p>

              <h3 className="text-xl text-card-foreground mb-3 mt-6">Late Arrivals</h3>
              <p className="text-muted-foreground leading-relaxed">
                If you arrive more than 15 minutes late for a clinic appointment, we may need to reschedule to avoid delays for other clients. For home visits, please ensure someone is available at the scheduled time.
              </p>
            </div>

            {/* Fees and Payment */}
            <div>
              <h2 className="text-2xl text-card-foreground mb-4">5. Fees and Payment</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Payment terms:
              </p>
              <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-2 ml-4">
                <li>All fees are displayed on our Pricing page and confirmed at booking</li>
                <li>Payment is due at the time of service unless otherwise arranged</li>
                <li>We accept payment by card, bank transfer, or cash</li>
                <li>Prices are subject to change with reasonable notice</li>
                <li>Additional charges may apply for areas outside our standard service area</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Pet insurance may cover acupuncture treatments. We can provide itemized receipts for insurance claims, but you are responsible for submitting claims and ensuring coverage.
              </p>
            </div>

            {/* Suitability and Consent */}
            <div>
              <h2 className="text-2xl text-card-foreground mb-4">6. Suitability Assessment and Consent</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Before providing treatment, we will assess whether acupuncture is suitable for your pet. We reserve the right to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-2 ml-4">
                <li>Decline treatment if we determine acupuncture is not appropriate</li>
                <li>Request additional information or veterinary records</li>
                <li>Recommend alternative or conventional veterinary care</li>
                <li>Discontinue treatment if it is not providing benefit</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                By proceeding with treatment, you consent to the veterinary acupuncture procedures and acknowledge that you have been informed of the potential risks and benefits.
              </p>
            </div>

            {/* Limitation of Liability */}
            <div>
              <h2 className="text-2xl text-card-foreground mb-4">7. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                While we strive to provide the highest standard of care:
              </p>
              <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-2 ml-4">
                <li>We cannot guarantee specific treatment outcomes</li>
                <li>Individual results may vary</li>
                <li>We are not liable for adverse reactions that occur despite proper care and technique</li>
                <li>Our liability is limited to the amount paid for the specific service in question</li>
                <li>We maintain professional indemnity insurance in accordance with RCVS requirements</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Nothing in these Terms excludes or limits our liability for death or personal injury caused by negligence, fraud, or any other liability that cannot be excluded by law.
              </p>
            </div>

            {/* Client Responsibilities */}
            <div>
              <h2 className="text-2xl text-card-foreground mb-4">8. Your Responsibilities</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                As a client, you agree to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-2 ml-4">
                <li>Provide accurate and complete information about your pet's health</li>
                <li>Inform us of any changes to your pet's condition or medications</li>
                <li>Ensure your pet is appropriately restrained and controlled during appointments</li>
                <li>Follow post-treatment care instructions</li>
                <li>Maintain regular veterinary care alongside acupuncture treatment</li>
                <li>Report any concerns or adverse reactions promptly</li>
                <li>Treat our staff with respect and professionalism</li>
              </ul>
            </div>

            {/* Home Visit Specific Terms */}
            <div>
              <h2 className="text-2xl text-card-foreground mb-4">9. Home Visit Specific Terms</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                For home visit appointments, you agree to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-2 ml-4">
                <li>Provide a safe, clean, and suitable environment for treatment</li>
                <li>Ensure pets and people do not pose a risk to our veterinarian</li>
                <li>Provide accurate directions and parking information</li>
                <li>Be present during the entire appointment</li>
                <li>Inform us of any household hazards or aggressive animals</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                We reserve the right to terminate a home visit if we determine the environment is unsafe or unsuitable for treatment.
              </p>
            </div>

            {/* Intellectual Property */}
            <div>
              <h2 className="text-2xl text-card-foreground mb-4">10. Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                All content on our website, including text, images, logos, and design elements, is the property of Greenway Veterinary Acupuncture and protected by copyright and intellectual property laws. You may not reproduce, distribute, or use our content without written permission.
              </p>
            </div>

            {/* Privacy and Data Protection */}
            <div>
              <h2 className="text-2xl text-card-foreground mb-4">11. Privacy and Data Protection</h2>
              <p className="text-muted-foreground leading-relaxed">
                Your use of our services is also governed by our Privacy Policy, which explains how we collect, use, and protect your personal information. By using our services, you consent to our data practices as described in the Privacy Policy.
              </p>
            </div>

            {/* Professional Standards */}
            <div>
              <h2 className="text-2xl text-card-foreground mb-4">12. Professional Standards and Regulation</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                We operate in accordance with:
              </p>
              <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-2 ml-4">
                <li>Royal College of Veterinary Surgeons (RCVS) Code of Professional Conduct</li>
                <li>Association of British Veterinary Acupuncturists (ABVA) guidelines</li>
                <li>UK veterinary legislation and regulations</li>
                <li>Data protection and privacy laws</li>
              </ul>
            </div>

            {/* Complaints */}
            <div>
              <h2 className="text-2xl text-card-foreground mb-4">13. Complaints and Disputes</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you have a complaint or concern about our services, please contact us directly. We aim to resolve all complaints promptly and professionally.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                If you are not satisfied with our response, you may contact the Royal College of Veterinary Surgeons (RCVS) or the Veterinary Client Mediation Service (VCMS).
              </p>
            </div>

            {/* Termination */}
            <div>
              <h2 className="text-2xl text-card-foreground mb-4">14. Termination</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to refuse or discontinue service to any client who breaches these Terms, behaves inappropriately, or whose pet poses a safety risk. You may discontinue using our services at any time, subject to our cancellation policy.
              </p>
            </div>

            {/* Changes to Terms */}
            <div>
              <h2 className="text-2xl text-card-foreground mb-4">15. Changes to These Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update these Terms from time to time. We will notify you of significant changes by posting the new Terms on our website and updating the "Last updated" date. Your continued use of our services after changes are posted constitutes acceptance of the updated Terms.
              </p>
            </div>

            {/* Governing Law */}
            <div>
              <h2 className="text-2xl text-card-foreground mb-4">16. Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms are governed by and construed in accordance with the laws of England and Wales. Any disputes arising from these Terms or our services will be subject to the exclusive jurisdiction of the courts of England and Wales.
              </p>
            </div>

            {/* Severability */}
            <div>
              <h2 className="text-2xl text-card-foreground mb-4">17. Severability</h2>
              <p className="text-muted-foreground leading-relaxed">
                If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary so that these Terms will otherwise remain in full force and effect.
              </p>
            </div>

            {/* Contact Us */}
            <div className="bg-primary/5 rounded-lg p-6 border border-border">
              <h2 className="text-2xl text-card-foreground mb-4">18. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="text-muted-foreground space-y-2">
                <p><strong>Email:</strong> office@acupuncture-vet.co.uk</p>
                <p><strong>Phone:</strong> 020 1234 5678</p>
                <p><strong>Address:</strong> London & Surrounding Areas</p>
              </div>
              <p className="text-muted-foreground leading-relaxed mt-4 text-sm">
                Greenway Veterinary Acupuncture is a registered veterinary practice regulated by the Royal College of Veterinary Surgeons (RCVS).
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}