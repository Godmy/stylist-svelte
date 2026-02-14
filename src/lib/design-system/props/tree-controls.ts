import type { HTMLAttributes } from 'svelte/elements';

export type TreeNode = {
  id: string;
  label: string;
  children?: TreeNode[];
  expanded?: boolean;
};

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
