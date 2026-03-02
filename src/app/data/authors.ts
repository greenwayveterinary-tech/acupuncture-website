import type { Author } from '@/app/types/blog';

export const authors: Record<string, Author> = {
  'alastair-greenway': {
    slug: 'alastair-greenway',
    name: 'Dr Alastair Greenway',
    qualifications: 'BVM&S MRCVS ABVA',
    role: 'Veterinary Acupuncturist',
    bio: 'Alastair graduated from Edinburgh in 1995 and was one of the first vets in the UK to train with the ABVA. With over 25 years of acupuncture experience, he brings a pragmatic, evidence-based approach to every patient he treats.',
  },
  'claire-greenway': {
    slug: 'claire-greenway',
    name: 'Dr Claire Greenway',
    qualifications: 'BVM&S MRCVS ABVA',
    role: 'Veterinary Acupuncturist',
    bio: 'Claire graduated from Edinburgh in 1997 and specialises in chronic pain management for elderly patients. She was drawn to acupuncture by a desire to offer kind, effective treatment options for older animals, and focuses on making every session as calm and comfortable as possible.',
  },
};

export function getAuthor(slug: string): Author | undefined {
  return authors[slug];
}
