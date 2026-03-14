import type { HTMLAttributes } from 'svelte/elements';

import type { TreeNode } from '../../types/interaction/tree-controls';
export interface VirtualTreeProps extends HTMLAttributes<HTMLDivElement> {
  nodes: TreeNode[];
  class?: string;
}

export interface FlatTreeProps extends HTMLAttributes<HTMLDivElement> {
  nodes: TreeNode[];
  class?: string;
}

export interface FolderTreeProps extends HTMLAttributes<HTMLDivElement> {
  nodes: TreeNode[];
  class?: string;
}

export interface AdvancedVirtualTreeProps extends HTMLAttributes<HTMLDivElement> {
  nodes: TreeNode[];
  class?: string;
}


