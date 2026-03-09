import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { SEO } from '@/app/components/SEO';
import acupunctureImage from '@/assets/3dada79126756c3434669a8dc76521f8f051ca78.jpg';
import ctaBackground from '@/assets/4f7fa0999a01cc24cf63ce2a5e72fbc69929e953.jpg';

export function AcupuncturePage() {
  const conditions = [
    {
      title: 'Arthritis & Joint Pain',
      description: 'Acupuncture stimulates the release of natural pain-relieving chemicals, helping to ease stiffness and improve comfort in arthritic joints.',
    },
    {
      title: 'Stiffness & Mobility Decline',
      description: 'By improving blood circulation and reducing muscle tension, acupuncture can help your pet move more freely and comfortably.',
    },
    {
      title: 'Post-Operative Recovery',
      description: 'Acupuncture supports healing after surgery by reducing inflammation, managing pain, and promoting tissue repair.',
    },
    {
      title: 'Chronic Pain',
      description: 'For pets with ongoing pain conditions, acupuncture provides a drug-free option to manage discomfort and improve quality of life.',
    },
    {
      title: 'Neurological & Spinal Cases',
      description: 'Acupuncture can help with intervertebral disc disease (IVDD), nerve damage, and other neurological conditions by stimulating nerve function and reducing inflammation.',
    },
    {
      title: 'General Wellbeing for Older Pets',
      description: 'Senior pets benefit from acupuncture as a gentle way to maintain mobility, manage age-related conditions, and support overall vitality.',
    },
  ];

  return (
    <div className="flex flex-col">
      <SEO
        title="Veterinary Acupuncture for Dogs, Cats & Rabbits"
        description="Learn how veterinary acupuncture works, what conditions it treats, and what to expect during a session. Arthritis, pain relief, mobility support, and post-operative recovery."
        path="/acupuncture"
      />
      {/* Hero */}
      <section className="bg-primary py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl font-serif text-primary-foreground leading-tight">
                Veterinary Acupuncture for Dogs, Cats & Rabbits
              </h1>
              <p className="text-lg text-primary-foreground/80 leading-relaxed">
                Acupuncture is a clinically proven therapy that involves the insertion of very fine needles into specific points on the body. In veterinary medicine, it is used to treat pain, promote healing and improve function - all without the side effects often associated with long-term medication use.
              </p>
              <p className="text-lg text-primary-foreground/80 leading-relaxed">
                At Greenway Veterinary Acupuncture, we use acupuncture as part of an integrated approach to your pet's health, working alongside your regular vet and other professionals to achieve the best possible outcomes for you both.
              </p>
              <Link
                to="/contact"
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 rounded-lg transition-colors inline-flex items-center gap-2 font-medium shadow-lg"
              >
                Find Out If Acupuncture Is Right for Your Pet
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={acupunctureImage}
                alt="Veterinary acupuncture treatment"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-card py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-serif text-foreground text-center mb-12">
            How Does Acupuncture Work?
          </h2>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Acupuncture works by stimulating specific points on the body, known as acupoints. These points often correspond to areas rich in nerve bundles, neurovascular junctions and significant areas of muscle and fascia.
            </p>
            <p>
              When needles are placed at these points, the <strong>musculoskeletal, hormonal, cardiovascular and nervous systems are all affected</strong> and there is a cascade of physiological responses including:
            </p>
            <div className="grid md:grid-cols-2 gap-4 my-8">
              {[
                'Release of endorphins (natural painkillers)',
                'Reduced inflammation at the site of injury',
                'Improved local blood circulation',
                'Muscle relaxation and reduced spasm',
                'Stimulation of nerve repair and function',
                'Support for the immune system',
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 bg-secondary p-4 rounded-lg">
                  <Check className="text-accent flex-shrink-0 mt-0.5" size={20} />
                  <p className="text-foreground text-sm">{item}</p>
                </div>
              ))}
            </div>
            <p>
              Most animals tolerate acupuncture very well. Many become visibly relaxed during treatment, and some even fall asleep. Sessions typically last 15–20 minutes once the needles are placed, with the full appointment allowing time for examination, discussion, and treatment.
            </p>
          </div>
        </div>
      </section>

      {/* What It Can Help With */}
      <section className="bg-secondary py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-serif text-foreground text-center mb-12">
            What Can Acupuncture Help With?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {conditions.map((condition, index) => (
              <div key={index} className="bg-card p-6 rounded-xl border border-border">
                <h3 className="text-lg font-medium text-foreground mb-2">{condition.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{condition.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="bg-card py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-serif text-foreground text-center mb-12"
          >
            What to Expect
          </motion.h2>
          <div className="space-y-8 relative">
            {[
              { title: 'Initial Consultation', desc: 'Allow a good hour for the first session. We\'ll get to know your pet, watch how they move and behave, discuss their history and lifestyle, review their clinical records from your regular vet and then carefully examine them before explaining our treatment plan to you.' },
              { title: 'The Treatment', desc: 'Fine needles are gently placed at specific acupoints. We often start with fewer points on the first session, particularly if the patient is sensitised by recent pain issues, and build up in subsequent treatments. The needles remain in place for approximately 15–20 minutes. We listen to and observe your pet throughout, to maximise a comfortable, relaxing experience for them.' },
              { title: 'Aftercare', desc: 'After the session, your pet needs to relax for an hour or so. We\'ll discuss a plan with you and provide advice on additional therapeutic options. Patients respond and adjust individually to their first acupuncture sessions so we are available to talk to directly following those early sessions, with any queries or concerns.' },
              { title: 'Follow-Up', desc: 'Pets who respond well tend to show improvement within 2-3 treatments, and you\'ll have the option of continuing with monthly sessions or as needed.' },
            ].map((step, i, steps) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.15, duration: 0.5 }}
                className="flex gap-6 relative z-10"
              >
                <div className="relative w-10 flex-shrink-0">
                  {i < steps.length - 1 && (
                    <div className="absolute left-1/2 top-5 -translate-x-1/2 w-0.5 h-[calc(100%+2rem)] bg-accent/30" />
                  )}
                  <motion.div
                    whileHover={{ scale: 1.15, transition: { duration: 0.2 } }}
                    className="relative z-10 bg-gradient-to-br from-accent to-accent/80 text-accent-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold shadow-md"
                  >
                    {i + 1}
                  </motion.div>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={ctaBackground} alt="" role="presentation" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
          <h2 className="text-4xl font-serif text-white">
            Ready to help your pet feel better?
          </h2>
          <p className="text-white/80 text-lg">
            Get in touch to find out if acupuncture is right for your pet.
          </p>
          <Link
            to="/contact"
            className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 rounded-lg transition-colors inline-block font-medium shadow-lg"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
}
