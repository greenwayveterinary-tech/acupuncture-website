import { motion } from 'motion/react';
import { Stethoscope } from 'lucide-react';
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
      className="flex items-center gap-4 py-6 border-t border-gray-200"
    >
      <Stethoscope className="w-8 h-8 text-primary/40 shrink-0" />
      <div>
        <p className="font-serif text-base text-primary font-medium">{author.name}</p>
        <p className="text-sm text-muted-foreground">{author.qualifications}</p>
      </div>
    </motion.div>
  );
}
