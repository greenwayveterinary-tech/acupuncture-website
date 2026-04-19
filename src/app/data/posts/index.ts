import type { BlogPost } from '@/app/types/blog';
import { doesAcupunctureWorkForDogs } from './does-acupuncture-work-for-dogs';
import { whatToExpectFirstAcupunctureSession } from './what-to-expect-first-acupuncture-session';

export const posts: BlogPost[] = [
  whatToExpectFirstAcupunctureSession,
  doesAcupunctureWorkForDogs,
];
