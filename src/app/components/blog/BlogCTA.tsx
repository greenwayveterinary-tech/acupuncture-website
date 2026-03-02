import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export function BlogCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="text-center py-6"
    >
      <p className="text-foreground/70 text-[17px]">
        If you think acupuncture could help your pet,{' '}
        <Link
          to="/contact"
          className="text-accent hover:text-accent/80 font-medium transition-colors underline underline-offset-2"
        >
          get in touch
        </Link>
        .
      </p>
    </motion.div>
  );
}
