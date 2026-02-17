import { Link } from 'react-router-dom';
import { Check, ArrowRight, FileText, Phone, Mail } from 'lucide-react';
import rcvsLogo from '@/assets/c6b0e8d6547a901cfb5d2c9fe772a37e507d2b69.png';
import abvaLogo from '@/assets/503f0fcb693db01f094b4f8509dfb58a2480c451.png';

export function ForVetsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-primary py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-serif text-primary-foreground mb-6">
            For Veterinary Professionals
          </h1>
          <p className="text-xl text-primary-foreground/80 leading-relaxed max-w-2xl mx-auto">
            We work collaboratively with referring veterinary surgeons to provide acupuncture as part of an integrated treatment approach for your patients.
          </p>
        </div>
      </section>

      {/* How We Work Together */}
      <section className="bg-card py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-serif text-foreground text-center mb-12">
            How We Work With You
          </h2>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Greenway Veterinary Acupuncture operates as a complementary service that supports — never replaces — the treatment plan you have in place for your patient. We believe the best outcomes for patients come from a collaborative, multi-disciplinary approach.
            </p>
            <p>
              When a client contacts us, we will always seek a referral and obtain clinical history from the primary care veterinary practice. After each session, we provide a full treatment report so you remain informed and involved in your patient's care.
            </p>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="bg-secondary py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-serif text-foreground text-center mb-12">
            The Referral Process
          </h2>
          <div className="space-y-6">
            <div className="bg-card p-6 rounded-xl border border-border flex gap-6">
              <div className="bg-accent text-accent-foreground rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">1</div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-1">Client Enquiry</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  The client contacts us directly, or you refer them to us. We can also discuss potential cases with you beforehand to assess suitability.
                </p>
              </div>
            </div>
            <div className="bg-card p-6 rounded-xl border border-border flex gap-6">
              <div className="bg-accent text-accent-foreground rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">2</div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-1">Referral & Clinical Notes</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We request a referral and full clinical history from your practice. This includes diagnostics, current medications, and any relevant imaging or blood results.
                </p>
              </div>
            </div>
            <div className="bg-card p-6 rounded-xl border border-border flex gap-6">
              <div className="bg-accent text-accent-foreground rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">3</div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-1">Assessment & Treatment</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We carry out a thorough examination and acupuncture session, developing a treatment plan tailored to the patient's condition and needs.
                </p>
              </div>
            </div>
            <div className="bg-card p-6 rounded-xl border border-border flex gap-6">
              <div className="bg-accent text-accent-foreground rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">4</div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-1">Reporting Back</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  After each session, we send a detailed treatment report to you. We're always happy to discuss progress, adjustments, or concerns by phone or email.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cases We See */}
      <section className="bg-card py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-serif text-foreground text-center mb-12">
            Cases We Commonly See
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              'Osteoarthritis and degenerative joint disease',
              'Chronic musculoskeletal pain',
              'Intervertebral disc disease (IVDD)',
              'Post-operative recovery and rehabilitation',
              'Neurological conditions and nerve damage',
              'Geriatric mobility and quality-of-life support',
              'Muscle spasm and myofascial pain',
              'Cases where medication options are limited',
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3 p-4">
                <Check className="text-accent flex-shrink-0 mt-0.5" size={20} />
                <p className="text-foreground text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="bg-primary py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif text-primary-foreground mb-8">
            Our Credentials
          </h2>
          <p className="text-primary-foreground/80 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            All treatments are carried out by RCVS-registered veterinary surgeons who are members of the Association of British Veterinary Acupuncturists (ABVA), with years of experience in veterinary acupuncture.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12">
            <a href="https://www.rcvs.org.uk" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <img src={rcvsLogo} alt="RCVS Registered" className="h-24 w-auto" />
            </a>
            <a href="https://www.abva.co.uk" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <img src={abvaLogo} alt="ABVA Member" className="h-16 w-auto" />
            </a>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-card py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-secondary rounded-2xl p-8 md:p-12 text-center border border-border">
            <FileText className="w-12 h-12 text-accent mx-auto mb-4" />
            <h2 className="text-3xl font-serif text-foreground mb-4">
              Refer a Patient or Discuss a Case
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              We're happy to discuss potential cases before referral. Get in touch with any questions about suitability, approach, or the referral process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                to="/contact"
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 rounded-lg transition-colors inline-flex items-center justify-center gap-2 font-medium shadow-lg"
              >
                Contact Us
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center text-sm text-muted-foreground">
              <a href="mailto:office@acupuncture-vet.co.uk" className="inline-flex items-center gap-2 hover:text-accent transition-colors">
                <Mail className="w-4 h-4" />
                office@acupuncture-vet.co.uk
              </a>
              <a href="tel:02012345678" className="inline-flex items-center gap-2 hover:text-accent transition-colors">
                <Phone className="w-4 h-4" />
                020 1234 5678
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
