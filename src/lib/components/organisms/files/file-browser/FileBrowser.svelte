<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import type { Snippet } from 'svelte';
  import { Folder, FolderOpen, File, ChevronRight, ChevronDown } from 'lucide-svelte';

  type FolderItem = {
    id: string;
    name: string;
    children?: FolderItem[];
    expanded?: boolean;
    selected?: boolean;
    type?: 'folder' | 'file';
    icon?: Snippet;
    data?: any; // Additional data
  };

  type RestProps = Omit<HTMLAttributes<HTMLDivElement>, 'class'>;

  type Props = RestProps & {
    items: FolderItem[];
    class?: string;
    itemClass?: string;
    contentClass?: string;
    onItemSelect?: (item: FolderItem) => void;
    onItemToggle?: (item: FolderItem, expanded: boolean) => void;
    onItemAction?: (item: FolderItem, action: string) => void;
    showItemCount?: boolean;
    enableSelection?: boolean;
    defaultExpanded?: boolean;
    disabled?: boolean;
  };

  let {
    items = [],
    class: hostClass = '',
    itemClass = '',
    contentClass = '',
    onItemSelect,
    onItemToggle,
    onItemAction,
    showItemCount = true,
    enableSelection = true,
    defaultExpanded = false,
    disabled = false,
    ...restProps
  }: Props = $props();

  // State to manage expansion
  let expandedItems = $state<Set<string>>(new Set());
  let selectedItem: FolderItem | null = $state(null);

  // Initialize expanded items based on defaultExpanded prop
  $effect(() => {
    if (defaultExpanded) {
      const allFolders = new Set<string>();
      const addItems = (items: FolderItem[]) => {
        for (const item of items) {
          if (item.type !== 'file') {
            allFolders.add(item.id);
            if (item.children) {
              addItems(item.children);
            }
          }
        }
      };
      addItems(items);
      expandedItems = allFolders;
    }
  });

  function toggleItem(item: FolderItem) {
    if (item.type === 'file' || disabled) return;
    
    const isExpanded = expandedItems.has(item.id);
    if (isExpanded) {
      expandedItems.delete(item.id);
    } else {
      expandedItems.add(item.id);
    }
    
    onItemToggle?.(item, !isExpanded);
  }

  function handleSelect(item: FolderItem) {
    if (!enableSelection || disabled) return;
    selectedItem = item;
    onItemSelect?.(item);
  }

  function handleAction(item: FolderItem, action: string) {
    onItemAction?.(item, action);
  }

  function isExpanded(id: string): boolean {
    return expandedItems.has(id);
  }

  function getItemCount(item: FolderItem): number {
    if (!item.children) return 0;
    
    let count = 0;
    const stack = [...item.children];
    
    while (stack.length) {
      const current = stack.pop()!;
      if (current.children) {
        stack.push(...current.children);
      }
      count++;
    }
    
    return count;
  }

  let FolderIcon = Folder;
  let FolderOpenIcon = FolderOpen;
  let FileIcon = File;
  let ChevronRightIcon = ChevronRight;
  let ChevronDownIcon = ChevronDown;
</script>

<div class={`folder-tree ${hostClass}`} {...restProps}>
  <ul role="tree" class="space-y-1">
    {#each items as item}
      {@render TreeNode(item)}
    {/each}
  </ul>
</div>

{#snippet TreeNode(item: FolderItem)}
  <li 
    role="treeitem" 
    aria-expanded={item.children?.length ? isExpanded(item.id) : undefined} 
    aria-selected={selectedItem?.id === item.id}
    class="select-none"
  >
    <div 
      class={`flex items-center rounded-md px-3 py-2 text-sm cursor-pointer ${
        selectedItem?.id === item.id ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-100'
      } ${disabled ? 'opacity-50' : ''} ${itemClass}`}
      role="button"
      tabindex={disabled ? -1 : 0}
      onclick={() => {
        handleSelect(item);
        if (item.type !== 'file') {
          toggleItem(item);
        }
      }}
      onkeydown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleSelect(item);
          if (item.type !== 'file') {
            toggleItem(item);
          }
        } else if (e.key === 'ArrowRight' && item.children?.length && !isExpanded(item.id)) {
          toggleItem(item);
        } else if (e.key === 'ArrowLeft' && item.children?.length && isExpanded(item.id)) {
          toggleItem(item);
        }
      }}
    >
      {#if item.children}
        <button
          type="button"
          class="flex h-5 w-5 items-center justify-center rounded hover:bg-gray-200 focus:outline-none mr-1"
          aria-label={isExpanded(item.id) ? `Collapse ${item.name}` : `Expand ${item.name}`}
          onclick={(e) => {
            e.stopPropagation();
            toggleItem(item);
          }}
          disabled={disabled}
        >
          {#if isExpanded(item.id)}
            <ChevronDownIcon class="h-4 w-4 text-gray-600" />
          {:else}
            <ChevronRightIcon class="h-4 w-4 text-gray-600" />
          {/if}
        </button>
      {:else}
        <span class="w-5 h-5 mr-1"></span>
      {/if}

      <div class="flex items-center flex-1 min-w-0">
        {#if item.type === 'folder'}
          {#if isExpanded(item.id)}
            <FolderOpenIcon class="h-5 w-5 flex-shrink-0 text-blue-600 mr-2" />
          {:else}
            <FolderIcon class="h-5 w-5 flex-shrink-0 text-blue-600 mr-2" />
          {/if}
        {:else}
          <FileIcon class="h-5 w-5 flex-shrink-0 text-gray-600 mr-2" />
        {/if}

        <span class="truncate">{item.name}</span>
      </div>

      {#if showItemCount && item.children}
        <span class="ml-2 text-xs px-2 py-0.5 bg-gray-200 rounded-full">
          {getItemCount(item)}
        </span>
      {/if}
    </div>

    {#if item.children && isExpanded(item.id)}
      <ul role="group" class="ml-6 space-y-1 mt-1">
        {#each item.children as child}
          {@render TreeNode(child)}
        {/each}
      </ul>
    {/if}
  </li>
{/snippet}
