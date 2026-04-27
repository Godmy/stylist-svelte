import type { PlaygroundTreeNodeStory } from '$stylist/playground/type/struct/playground-tree-node-story';
import type { PlaygroundTreeNodeTreeNodeData } from '$stylist/playground/type/struct/playground-tree-node-tree-node-data';

export type PlaygroundTreeNodeProps = {
  node: PlaygroundTreeNodeTreeNodeData;
  level: number;
  expandedNodes: Set<string>;
  categoryConfig: Record<string, {
    icon: any;
    color: string;
    bg: string;
    border: string;
  }>;
  onToggle: (path: string) => void;
  onComponentClick: (story: PlaygroundTreeNodeStory) => void;
  selectedStoryId?: string | null;
  focusedPath?: string | null;
}
