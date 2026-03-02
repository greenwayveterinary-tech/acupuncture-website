import { Info, Lightbulb, AlertTriangle, FlaskConical } from 'lucide-react';
import type { CalloutBlock as CalloutBlockType } from '@/app/types/blog';

const variants = {
  info: {
    border: 'border-l-blue-500',
    bg: 'bg-blue-50',
    icon: Info,
    iconColor: 'text-blue-500',
    titleColor: 'text-blue-900',
  },
  tip: {
    border: 'border-l-emerald-500',
    bg: 'bg-emerald-50',
    icon: Lightbulb,
    iconColor: 'text-emerald-500',
    titleColor: 'text-emerald-900',
  },
  warning: {
    border: 'border-l-amber-500',
    bg: 'bg-amber-50',
    icon: AlertTriangle,
    iconColor: 'text-amber-500',
    titleColor: 'text-amber-900',
  },
  science: {
    border: 'border-l-[#0a2e2e]',
    bg: 'bg-[#0a2e2e]/5',
    icon: FlaskConical,
    iconColor: 'text-[#0a2e2e]',
    titleColor: 'text-[#0a2e2e]',
  },
};

export function CalloutBlock({ variant, title, text }: CalloutBlockType) {
  const style = variants[variant];
  const Icon = style.icon;

  return (
    <div className={`${style.bg} ${style.border} border-l-4 rounded-r-lg p-5 my-6`}>
      <div className="flex items-start gap-3">
        <Icon className={`${style.iconColor} w-5 h-5 mt-0.5 shrink-0`} />
        <div>
          {title && (
            <p className={`${style.titleColor} font-semibold mb-1.5`}>{title}</p>
          )}
          <p className="text-foreground/80 leading-relaxed text-[15px]">{text}</p>
        </div>
      </div>
    </div>
  );
}
