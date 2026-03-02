import type { TwoColumnBlock as TwoColumnBlockType, ContentBlock } from '@/app/types/blog';
import { ParagraphBlock } from './ParagraphBlock';
import { HeadingBlock } from './HeadingBlock';
import { ListBlock } from './ListBlock';

function renderSimpleBlock(block: ContentBlock, index: number) {
  switch (block.type) {
    case 'paragraph':
      return <ParagraphBlock key={index} {...block} />;
    case 'heading':
      return <HeadingBlock key={index} {...block} />;
    case 'list':
      return <ListBlock key={index} {...block} />;
    default:
      return null;
  }
}

export function TwoColumnBlock({ left, right }: TwoColumnBlockType) {
  return (
    <div className="grid md:grid-cols-2 gap-6 my-8 p-5 bg-secondary/50 rounded-xl">
      <div className="space-y-3">
        {left.map((block, i) => renderSimpleBlock(block, i))}
      </div>
      <div className="space-y-3">
        {right.map((block, i) => renderSimpleBlock(block, i))}
      </div>
    </div>
  );
}
