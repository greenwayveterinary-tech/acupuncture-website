import { Link } from 'react-router-dom';
import { useLayoutEffect, useRef, useState } from 'react';
import { Check, ArrowRight, FileText, Phone, Mail } from 'lucide-react';
import { motion } from 'motion/react';
import { SEO } from '@/app/components/SEO';
import rcvsLogo from '@/assets/c6b0e8d6547a901cfb5d2c9fe772a37e507d2b69.png';
import abvaLogo from '@/assets/503f0fcb693db01f094b4f8509dfb58a2480c451.png';

export function ForVetsPage() {
  const timelineRef = useRef<HTMLDivElement | null>(null);
  const [timelineLine, setTimelineLine] = useState({ top: 28, left: 43, height: 0 });

  useLayoutEffect(() => {
    const container = timelineRef.current;
    if (!container) return;

    const getOffsetWithin = (element: HTMLElement, ancestor: HTMLElement) => {
      let x = 0;
      let y = 0;
      let node: HTMLElement | null = element;

      while (node && node !== ancestor) {
        x += node.offsetLeft;
        y += node.offsetTop;
        node = node.offsetParent as HTMLElement | null;
      }

      return { x, y };
    };

    const updateTimelineLine = () => {
      const circles = container.querySelectorAll<HTMLElement>('[data-referral-circle]');
      if (circles.length === 0) return;

      const firstCircle = circles[0];
      const lastCircle = circles[circles.length - 1];
      const firstOffset = getOffsetWithin(firstCircle, container);
      const lastOffset = getOffsetWithin(lastCircle, container);

      const top = firstOffset.y + firstCircle.offsetHeight / 2;
      const left = firstOffset.x + firstCircle.offsetWidth / 2;
      const bottom = lastOffset.y + lastCircle.offsetHeight / 2;
      const height = Math.max(0, bottom - top);

      setTimelineLine({ top, left, height });
    };

    updateTimelineLine();

    const resizeObserver = new ResizeObserver(updateTimelineLine);
    resizeObserver.observe(container);
    container.querySelectorAll<HTMLElement>('[data-referral-circle]').forEach((circle) => {
      resizeObserver.observe(circle);
    });

    window.addEventListener('resize', updateTimelineLine);
    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', updateTimelineLine);
    };
  }, []);

  return (
    <div className="flex flex-col">
      <SEO
        title="For Veterinary Professionals"
        description="Refer patients to Greenway Veterinary Acupuncture. We work collaboratively with vets, providing treatment reports and maintaining your involvement in patient care."
        path="/for-vets"
      />
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
              <strong>
                Greenway Veterinary Acupuncture provides a service that complements and supports the treatment plan you have put place for your patient. We also co-ordinate with other professionals involved in the health and well-being of the patient, such as hydro- and physiotherapists.
              </strong>
            </p>
            <p>
              <strong>
                This collaborative, integrated approach enhances the effects of each therapy, reaching for our shared goal of happy, long-lived patients and happy clients.
              </strong>
            </p>
            <p>
              When a client contacts us, we seek a referral and clinical history from you, the primary care vet. Alastair and Claire are both veterinary surgeons experienced in all aspects of general medicine and surgery so if we suspect any clinical issues other than the primary reason for the referral, we direct your client back to your clinic for further investigations, treatment and advice.
            </p>
            <p>
              At all times, the welfare and quality of life of both pet and care-giver are our primary focus.
            </p>
          </div>
        </div>
      </section>

      {/* The Referral Process */}
      <section className="bg-secondary py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-serif text-foreground text-center mb-12"
          >
            The Referral Process
          </motion.h2>
          <div ref={timelineRef} className="space-y-6 relative">
            {/* Animated connecting line */}
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: `${timelineLine.height}px` }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="absolute z-20 w-0.5 bg-accent/30 hidden md:block pointer-events-none"
              style={{
                left: `${timelineLine.left}px`,
                top: `${timelineLine.top}px`,
                transform: 'translateX(-50%)',
              }}
            />

            {[
              { title: 'Client Enquiry', desc: 'The client contacts us directly, or you refer them to us. We can also discuss potential cases with you beforehand to assess suitability.' },
              { title: 'Referral & Clinical Notes', desc: 'We request a referral and full clinical history from your practice. This includes diagnostics, current medications, and any relevant imaging or blood results.' },
              { title: 'Assessment & Treatment', desc: 'We carry out a thorough examination and acupuncture session, developing a treatment plan tailored to the patient\'s condition and needs.' },
              { title: 'After-Care', desc: 'We remain available to the client by phone or messaging to discuss any queries or concerns related to the acupuncture session. For everything else, you remain their first port of call.' },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.15, duration: 0.5 }}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                className="bg-card p-6 rounded-xl border border-border flex gap-6 relative shadow-sm hover:shadow-md transition-shadow"
              >
                <div data-referral-circle className="relative z-30 bg-gradient-to-br from-accent to-accent/80 text-accent-foreground rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold shadow-md">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-1">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
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
            Integrated - Supportive - Collaborative
          </h2>
          <p className="text-primary-foreground/80 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            All treatments are carried out by RCVS-registered veterinary surgeons who are members of the Association of British Veterinary Acupuncturists (ABVA), with years of experience in both veterinary acupuncture and general practice.
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
              <a href="tel:03333397274" className="inline-flex items-center gap-2 hover:text-accent transition-colors">
                <Phone className="w-4 h-4" />
                0333 339 7274
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
