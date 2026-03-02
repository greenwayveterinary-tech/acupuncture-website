import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function BlogCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-br from-primary to-primary/90 rounded-2xl p-8 md:p-10 text-center"
    >
      <h3 className="text-2xl md:text-3xl font-serif text-white mb-3">
        Wondering if acupuncture could help your pet?
      </h3>
      <p className="text-white/80 mb-6 max-w-lg mx-auto">
        We treat dogs and cats in their own homes across London and the surrounding areas.
        Get in touch for a no-obligation chat about your pet.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-lg transition-colors font-medium"
        >
          Get in Touch <ArrowRight className="w-4 h-4" />
        </Link>
        <Link
          to="/acupuncture"
          className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors font-medium"
        >
          Learn More About Acupuncture <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </motion.div>
  );
}
