import type { Category } from '@/app/types/blog';

const categories: (Category | 'All')[] = [
  'All',
  'Evidence & Science',
  'Conditions & Treatment',
  'Pet Owner Guides',
  'Vet Professional',
  'Case Studies',
];

interface CategoryFilterProps {
  selected: Category | 'All';
  onChange: (category: Category | 'All') => void;
}

export function CategoryFilter({ selected, onChange }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onChange(category)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            selected === category
              ? 'bg-accent text-accent-foreground'
              : 'bg-white text-foreground/70 hover:bg-accent/10 hover:text-accent border border-gray-200'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
