import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
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
      {/* Hero */}
      <section className="bg-primary py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl font-serif text-primary-foreground leading-tight">
                Veterinary Acupuncture for Dogs & Cats
              </h1>
              <p className="text-lg text-primary-foreground/80 leading-relaxed">
                Acupuncture is a time-tested therapy that involves the insertion of very fine needles into specific points on the body. In veterinary medicine, it is used to treat pain, promote healing, and improve function — all without the side effects often associated with long-term medication use.
              </p>
              <p className="text-lg text-primary-foreground/80 leading-relaxed">
                At Greenway Veterinary Acupuncture, we use acupuncture as part of an integrated approach to your pet's health, working alongside your regular vet and other therapists to achieve the best possible outcomes.
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
              Acupuncture works by stimulating specific points on the body — known as acupoints — using very fine, sterile needles. These points correspond to areas rich in nerve endings, blood vessels, and immune cells.
            </p>
            <p>
              When needles are placed at these points, they trigger a cascade of physiological responses including:
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
            {/* Animated connecting line */}
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "calc(100% - 40px)" }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="absolute left-[19px] top-[20px] w-0.5 bg-accent/30"
            />

            {[
              { title: 'Initial Consultation', desc: 'Allow a good hour for the first session. We\'ll examine your pet, watch them move, discuss their history and lifestyle, and review their clinical records (which we obtain from your regular vet). We then begin the first acupuncture treatment.' },
              { title: 'The Treatment', desc: 'Fine needles are gently placed at specific acupoints. We start with fewer points on the first session and build up in subsequent treatments. The needles remain in place for approximately 15–20 minutes. 95% of the time your pet won\'t feel anything at all.' },
              { title: 'Aftercare & Follow-Up', desc: 'After the session, allow your pet an hour or so of relaxation. We\'ll discuss what we found, our treatment plan going forward, and any complementary advice. Most pets show improvement within 1–3 sessions.' },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.15, duration: 0.5 }}
                className="flex gap-6 relative z-10"
              >
                <motion.div
                  whileHover={{ scale: 1.15, transition: { duration: 0.2 } }}
                  className="bg-gradient-to-br from-accent to-accent/80 text-accent-foreground rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold shadow-md"
                >
                  {i + 1}
                </motion.div>
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
          <img src={ctaBackground} alt="" className="w-full h-full object-cover" />
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
