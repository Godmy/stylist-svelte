import type { InteractionHTMLAttributes } from '$stylist/interaction/type/attribute/interaction';
import type { Snippet } from 'svelte';

export interface TreeNodeItemNode {
  key?: string;
  desc: string;
  child?: TreeNodeItemNode[];
  [key: string]: unknown;
}

export interface ITreeNodeItemProps extends InteractionHTMLAttributes<HTMLDivElement> {
  node: TreeNodeItemNode;
  onSelectCallback?: (key: string | undefined) => void;
  secondaryIcon?: any;
  faIcon?: boolean;
  expandedNodes?: Set<string>;
  class?: string;
  children?: Snippet;
  onNodeSelect?: (event: CustomEvent<{ node: TreeNodeItemNode }>) => void;
  onNodeToggle?: (event: CustomEvent<{ node: TreeNodeItemNode }>) => void;
}

export interface ITreeNodeItemStyleClasses {
  expanded: string;
  selected: string;
  disabled: string;
}


