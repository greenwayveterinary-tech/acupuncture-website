import { CheckCircle2 } from 'lucide-react';
import type { KeyTakeawayBlock as KeyTakeawayBlockType } from '@/app/types/blog';

export function KeyTakeawayBlock({ title, points }: KeyTakeawayBlockType) {
  return (
    <div className="my-8 bg-gradient-to-br from-[#0a2e2e]/5 to-accent/5 border border-[#0a2e2e]/10 rounded-xl p-6">
      <h4 className="font-serif text-lg text-primary font-semibold mb-4 flex items-center gap-2">
        <CheckCircle2 className="w-5 h-5 text-accent" />
        {title || 'Key Takeaways'}
      </h4>
      <ul className="space-y-3">
        {points.map((point, i) => (
          <li key={i} className="flex items-start gap-3 text-foreground/85 text-[15px] leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
            <span dangerouslySetInnerHTML={{ __html: point }} />
          </li>
        ))}
      </ul>
    </div>
  );
}
