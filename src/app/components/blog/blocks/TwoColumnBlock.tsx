import type { TwoColumnBlock as TwoColumnBlockType, ContentBlock } from '@/app/types/blog';
import { ParagraphBlock } from './ParagraphBlock';
import { HeadingBlock } from './HeadingBlock';
import { ListBlock } from './ListBlock';

function renderSimpleBlock(block: ContentBlock, index: number) {
  switch (block.type) {
    case 'paragraph':
      return <ParagraphBlock key={`${block.type}-${index}`} {...block} />;
    case 'heading':
      return <HeadingBlock key={block.id} {...block} />;
    case 'list':
      return <ListBlock key={`list-${index}`} {...block} />;
    default:
      return null;
  }
}

export function TwoColumnBlock({ left, right }: TwoColumnBlockType) {
  return (
    <div className="grid md:grid-cols-2 gap-4 my-8">
      <div className="bg-white border border-gray-100 rounded-xl p-5 space-y-3">
        {left.map((block, i) => renderSimpleBlock(block, i))}
      </div>
      <div className="bg-white border border-gray-100 rounded-xl p-5 space-y-3">
        {right.map((block, i) => renderSimpleBlock(block, i))}
      </div>
    </div>
  );
}
