import { motion } from 'motion/react';
import type { Author } from '@/app/types/blog';

interface AuthorBioProps {
  author: Author;
}

export function AuthorBio({ author }: AuthorBioProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="bg-secondary/50 rounded-xl p-6 flex items-start gap-5"
    >
      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-white text-xl font-serif shrink-0">
        {author.name.split(' ').slice(1, 3).map(n => n[0]).join('')}
      </div>
      <div>
        <p className="font-serif text-lg text-primary font-medium">{author.name}</p>
        <p className="text-sm text-accent font-medium mb-2">{author.qualifications}</p>
        <p className="text-foreground/70 text-sm leading-relaxed">{author.bio}</p>
      </div>
    </motion.div>
  );
}
