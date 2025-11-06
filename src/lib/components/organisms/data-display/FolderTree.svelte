<script module lang="ts">
  export type FolderNode = {
    id: string | number;
    name: string;
    children?: FolderNode[];
    count?: number;
    disabled?: boolean;
  };
</script>

<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import type { FolderNode as FolderTreeNode } from './FolderTree.svelte';

  type FolderNode = FolderTreeNode;

  type RestProps = Omit<HTMLAttributes<HTMLDivElement>, 'class'>;

  type Props = RestProps & {
    nodes: FolderNode[];
    defaultExpanded?: boolean;
    onNodeClick?: (node: FolderNode) => void;
    onNodeToggle?: (node: FolderNode, expanded: boolean) => void;
    class?: string;
  };

  let {
    nodes,
    defaultExpanded = false,
    onNodeClick,
    onNodeToggle,
    class: hostClass = '',
    ...restProps
  }: Props = $props();

  let expanded = $state<Set<string | number>>(new Set());

  function collectIds(list: FolderNode[], acc: Set<string | number>) {
    for (const node of list) {
      acc.add(node.id);
      if (node.children?.length) {
        collectIds(node.children, acc);
      }
    }
  }

  $effect(() => {
    if (defaultExpanded) {
      const all = new Set<string | number>();
      collectIds(nodes, all);
      expanded = all;
    } else {
      expanded = new Set();
    }
  });

  function toggle(node: FolderNode) {
    if (node.disabled || !node.children?.length) return;
    const next = new Set(expanded);
    if (next.has(node.id)) {
      next.delete(node.id);
      onNodeToggle?.(node, false);
    } else {
      next.add(node.id);
      onNodeToggle?.(node, true);
    }
    expanded = next;
  }

  function handleClick(node: FolderNode) {
    if (node.disabled) return;
    onNodeClick?.(node);
    if (node.children?.length) {
      toggle(node);
    }
  }

  function handleKeydown(node: FolderNode, event: KeyboardEvent) {
    if (node.disabled) return;
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleClick(node);
    } else if (event.key === 'ArrowRight' && node.children?.length && !expanded.has(node.id)) {
      toggle(node);
    } else if (event.key === 'ArrowLeft' && node.children?.length && expanded.has(node.id)) {
      toggle(node);
    }
  }
</script>

<div class={`folder-tree ${hostClass}`} {...restProps}>
  <ul role="tree" class="space-y-1">
    {@render NodeList(nodes)}
  </ul>
</div>

{#snippet NodeList(items: FolderNode[])}
  {#each items as node (node.id)}
    {@const hasChildren = !!node.children?.length}
    {@const isExpanded = expanded.has(node.id)}
    <li role="treeitem" aria-expanded={hasChildren ? isExpanded : undefined} aria-selected="false" class="list-none">
      <div
        class="flex items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 transition-colors cursor-pointer"
        class:opacity-50={node.disabled}
        role="button"
        tabindex={node.disabled ? -1 : 0}
        onclick={() => handleClick(node)}
        onkeydown={(event) => handleKeydown(node, event)}
      >
        {#if hasChildren}
          <button
            type="button"
            class="flex h-5 w-5 items-center justify-center rounded hover:bg-gray-200 focus:outline-none"
            aria-label={isExpanded ? `Свернуть ${node.name}` : `Развернуть ${node.name}`}
            onclick={(event) => {
              event.stopPropagation();
              toggle(node);
            }}
          >
            <svg
              class="h-3.5 w-3.5 text-gray-600 transition-transform"
              class:rotate-90={isExpanded}
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 6l6 4-6 4" />
            </svg>
          </button>
        {:else}
          <span class="w-5"></span>
        {/if}

        <span class="flex-1 truncate">{node.name}</span>

        {#if node.count !== undefined}
          <span class="rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-700">
            {node.count}
          </span>
        {/if}
      </div>

      {#if hasChildren && isExpanded}
        <ul role="group" class="ml-6 space-y-1 mt-1">
          {@render NodeList(node.children ?? [])}
        </ul>
      {/if}
    </li>
  {/each}
{/snippet}


<style>
  .folder-tree {
    font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      "Helvetica Neue", Arial, "Noto Sans", sans-serif;
  }

  ul[role='tree'],
  ul[role='group'] {
    padding-left: 0;
    margin: 0;
    list-style: none;
  }
</style>
