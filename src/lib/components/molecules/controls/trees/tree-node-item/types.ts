/**
 * TreeNodeItem types and interfaces following SOLID principles
 */

import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';
import type { TreeNode } from '$lib/types';

export interface ITreeNodeItemProps extends HTMLAttributes<HTMLDivElement> {
  node: TreeNode;
  onSelectCallback?: (key: string | undefined) => void;
  secondaryIcon?: any;
  faIcon?: boolean;
  expandedNodes?: Set<string>;
  class?: string;
  children?: Snippet;
  onNodeSelect?: (event: CustomEvent<{ node: TreeNode }>) => void;
  onNodeToggle?: (event: CustomEvent<{ node: TreeNode }>) => void;
}

export interface ITreeNodeItemStyleClasses {
  expanded: string;
  selected: string;
  disabled: string;
}