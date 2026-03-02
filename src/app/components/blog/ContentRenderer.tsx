import { motion } from 'motion/react';
import type { ContentBlock } from '@/app/types/blog';
import { ParagraphBlock } from './blocks/ParagraphBlock';
import { HeadingBlock } from './blocks/HeadingBlock';
import { CalloutBlock } from './blocks/CalloutBlock';
import { QuoteBlock } from './blocks/QuoteBlock';
import { ListBlock } from './blocks/ListBlock';
import { ImageBlock } from './blocks/ImageBlock';
import { KeyTakeawayBlock } from './blocks/KeyTakeawayBlock';
import { DividerBlock } from './blocks/DividerBlock';
import { EmphasizedParagraphBlock } from './blocks/EmphasizedParagraphBlock';
import { TwoColumnBlock } from './blocks/TwoColumnBlock';

interface ContentRendererProps {
  content: ContentBlock[];
}

function renderBlock(block: ContentBlock, index: number) {
  switch (block.type) {
    case 'paragraph':
      return <ParagraphBlock key={index} {...block} />;
    case 'heading':
      return <HeadingBlock key={index} {...block} />;
    case 'callout':
      return <CalloutBlock key={index} {...block} />;
    case 'quote':
      return <QuoteBlock key={index} {...block} />;
    case 'list':
      return <ListBlock key={index} {...block} />;
    case 'image':
      return <ImageBlock key={index} {...block} />;
    case 'keyTakeaway':
      return <KeyTakeawayBlock key={index} {...block} />;
    case 'divider':
      return <DividerBlock key={index} />;
    case 'emphasizedParagraph':
      return <EmphasizedParagraphBlock key={index} {...block} />;
    case 'twoColumn':
      return <TwoColumnBlock key={index} {...block} />;
    default:
      return null;
  }
}

export function ContentRenderer({ content }: ContentRendererProps) {
  return (
    <div className="space-y-6">
      {content.map((block, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.4, delay: 0.05 }}
        >
          {renderBlock(block, index)}
        </motion.div>
      ))}
    </div>
  );
}
