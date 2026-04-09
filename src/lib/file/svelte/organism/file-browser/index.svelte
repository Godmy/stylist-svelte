<script lang="ts">
  import type { InformationHTMLAttributes } from '$stylist/information/type/struct';
  import { Icon as BaseIcon } from '$stylist';
const Folder = 'folder';
const FolderOpen = 'folder-open';
const File = 'file';
const ChevronRight = 'chevron-right';
const ChevronDown = 'chevron-down';

  import type { FolderItem } from '$stylist/file/type/struct/file-browser/folder-item';

  type RestProps = Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'>;

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
        selectedItem?.id === item.id ? 'bg-[var(--color-primary-100)] text-[var(--color-primary-700)]' : 'hover:bg-[var(--color-background-secondary)]'
      } ${disabled ? 'opacity-[var(--opacity-50)]' : ''} ${itemClass}`}
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
          class="flex h-5 w-5 items-center justify-center rounded hover:bg-[var(--color-background-tertiary)] focus:outline-none mr-1"
          aria-label={isExpanded(item.id) ? `Collapse ${item.name}` : `Expand ${item.name}`}
          onclick={(e) => {
            e.stopPropagation();
            toggleItem(item);
          }}
          disabled={disabled}
        >
          {#if isExpanded(item.id)}
            <BaseIcon name={ChevronDown} class="h-4 w-4 text-[var(--color-text-secondary)]" />
          {:else}
            <BaseIcon name={ChevronRight} class="h-4 w-4 text-[var(--color-text-secondary)]" />
          {/if}
        </button>
      {:else}
        <span class="w-5 h-5 mr-1"></span>
      {/if}

      <div class="flex items-center flex-1 min-w-0">
        {#if item.type === 'folder'}
          {#if isExpanded(item.id)}
            <BaseIcon name={FolderOpen} class="h-5 w-5 flex-shrink-0 text-[var(--color-primary-600)] mr-2" />
          {:else}
            <BaseIcon name={Folder} class="h-5 w-5 flex-shrink-0 text-[var(--color-primary-600)] mr-2" />
          {/if}
        {:else}
          <BaseIcon name={File} class="h-5 w-5 flex-shrink-0 text-[var(--color-text-secondary)] mr-2" />
        {/if}

        <span class="truncate">{item.name}</span>
      </div>

      {#if showItemCount && item.children}
        <span class="ml-2 text-xs px-2 py-0.5 bg-[var(--color-background-tertiary)] rounded-full">
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




