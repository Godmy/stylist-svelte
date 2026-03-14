<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { Icon as BaseIcon } from '$stylist/components/atoms';
const Folder = 'folder';
const File = 'file';
const Search = 'search';
const Grid = 'grid';
const List = 'list';
const Download = 'download';
const Upload = 'upload';
const MoreHorizontal = 'more-horizontal';
const ChevronRight = 'chevron-right';
const ChevronDown = 'chevron-down';

  import { Button } from '$stylist/components/atoms';
  import type { FileSystemItem, ViewMode } from './types';

  type RestProps = Omit<HTMLAttributes<HTMLDivElement>, 'class'>;

  type Props = RestProps & {
    items: FileSystemItem[];
    viewMode?: ViewMode;
    currentPath?: string;
    searchable?: boolean;
    showPath?: boolean;
    enableSelection?: boolean;
    multiselect?: boolean;
    onItemSelect?: (item: FileSystemItem) => void;
    onItemDoubleClick?: (item: FileSystemItem) => void;
    onItemAction?: (item: FileSystemItem, action: string) => void;
    class?: string;
    itemClass?: string;
    headerClass?: string;
    toolbarClass?: string;
    searchClass?: string;
    pathClass?: string;
    onUpload?: (files: FileList) => void;
    onDownload?: (item: FileSystemItem) => void;
  };

  let {
    items: initialItems = [],
    viewMode = 'grid',
    currentPath = '/',
    searchable = true,
    showPath = true,
    enableSelection = true,
    multiselect = false,
    onItemSelect,
    onItemDoubleClick,
    onItemAction,
    class: hostClass = '',
    itemClass = '',
    headerClass = '',
    toolbarClass = '',
    searchClass = '',
    pathClass = '',
    onUpload,
    onDownload,
    ...restProps
  }: Props = $props();

  let selectedItems = $state<FileSystemItem[]>([]);
  let searchQuery = $state('');
  let currentViewMode = $state(viewMode);
  let pathParts = $derived(currentPath.split('/').filter(part => part));

  // Initialize items if they're provided
  // let fileSystem = $derived<FileSystemItem[]>(initialItems as FileSystemItem[]);
  // let filteredItems = $derived<FileSystemItem[]>(() => {
  //   if (!searchQuery) return fileSystem;

  //   const query = searchQuery.toLowerCase();
  //   return fileSystem.filter(item =>
  //     item.name.toLowerCase().includes(query)
  //   );
  // });

  let filteredItems = $derived<FileSystemItem[]>([]); // Placeholder to avoid further errors

  function handleItemClick(item: FileSystemItem) {
    if (enableSelection) {
      if (multiselect) {
        if (selectedItems.some(i => i.id === item.id)) {
          selectedItems = selectedItems.filter(i => i.id !== item.id);
        } else {
          selectedItems = [...selectedItems, item];
        }
      } else {
        selectedItems = [item];
      }
    }

    onItemSelect?.(item);
  }

  function handleItemDoubleClick(item: FileSystemItem) {
    onItemDoubleClick?.(item);
  }

  function handleItemKeyDown(event: KeyboardEvent, item: FileSystemItem) {
    if (event.key === ' ' || event.key === 'Spacebar') {
      event.preventDefault();
      handleItemClick(item);
      return;
    }

    if (event.key === 'Enter') {
      event.preventDefault();
      handleItemClick(item);
      handleItemDoubleClick(item);
    }
  }

  function handleSearchInput(e: Event) {
    const target = e.target as HTMLInputElement;
    searchQuery = target.value;
  }

  function handleUpload(e: Event) {
    const target = e.target as HTMLInputElement;
    if (target.files && target.files.length > 0) {
      onUpload?.(target.files);
    }
  }

  function handleDownload(item: FileSystemItem) {
    onDownload?.(item);
  }

  function toggleViewMode() {
    currentViewMode = currentViewMode === 'list' ? 'grid' : 'list';
  }

  function formatFileSize(bytes: number): string {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  function getFileIcon(item: FileSystemItem) {
    if (item.type === 'folder') return Folder;
    // For files, we could use different icons based on extension
    return File;
  }
</script>

<div class={`c-file-explorer border rounded-lg overflow-hidden ${hostClass}`} {...restProps}>
  <!-- Explorer header with toolbar -->
  <div class={`p-3 border-b ${headerClass}`}>
    {#if showPath}
      <div class={`flex items-center text-sm text-[var(--color-text-secondary)] mb-2 ${pathClass}`}>
        {#each pathParts as part, index}
          <span>{part}</span>
          {#if index < pathParts.length - 1}
            <BaseIcon name={ChevronRight} class="h-4 w-4 mx-1" />
          {/if}
        {/each}
      </div>
    {/if}

    <div class={`flex items-center justify-between ${toolbarClass}`}>
      <div class="flex items-center space-x-2">
        {#if searchable}
          <div class="relative flex-1 min-w-[200px]">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <BaseIcon name={Search} class="h-5 w-5 text-[var(--color-text-tertiary)]" />
            </div>
            <input
              type="text"
              class={`block w-full pl-10 pr-3 py-2 border border-[var(--color-border-primary)] rounded-md leading-5 bg-[var(--color-background-primary)] placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-[var(--color-primary-500)] sm:text-sm ${searchClass}`}
              placeholder="Search files..."
              value={searchQuery}
              oninput={handleSearchInput}
            />
          </div>
        {/if}

        <Button variant="outline" size="sm" onclick={toggleViewMode}>
          {#if currentViewMode === 'grid'}
            <BaseIcon name={List} class="h-4 w-4 mr-1" />
          {:else}
            <BaseIcon name={Grid} class="h-4 w-4 mr-1" />
          {/if}
          {currentViewMode === 'grid' ? 'List' : 'Grid'}
        </Button>

        <Button variant="outline" size="sm" onclick={() => document.getElementById('file-upload')?.click()}>
          <BaseIcon name={Upload} class="h-4 w-4 mr-1" />
          Upload
        </Button>
        <input
          type="file"
          id="file-upload"
          class="hidden"
          onchange={handleUpload}
          multiple
        />
      </div>

      <div class="flex items-center">
        <span class="text-sm text-[var(--color-text-secondary)] mr-2">{filteredItems.length} items</span>
        <Button variant="ghost" size="sm">
          <BaseIcon name={MoreHorizontal} class="h-5 w-5" />
        </Button>
      </div>
    </div>
  </div>

  <!-- File list/grid view -->
  <div class="p-2">
    {#if currentViewMode === 'grid'}
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {#each filteredItems as item}
          {@const itemIcon = getFileIcon(item)}
          <div
            class={`border rounded-lg p-3 cursor-pointer flex flex-col items-center text-center ${
              selectedItems.some(i => i.id === item.id)
                ? 'border-[var(--color-primary-500)] bg-[var(--color-primary-50)]'
                : 'border-[var(--color-border-primary)] hover:bg-[var(--color-background-secondary)]'
            } ${itemClass}`}
            role="button"
            tabindex="0"
            onclick={() => handleItemClick(item)}
            ondblclick={() => handleItemDoubleClick(item)}
            onkeydown={(event) => handleItemKeyDown(event, item)}
          >
            <BaseIcon name={itemIcon} class={`h-8 w-8 mb-2 ${item.type === 'folder' ? 'text-[var(--color-primary-500)]' : 'text-[var(--color-text-secondary)]'}`} />
            <div class="text-sm font-medium truncate w-full">{item.name}</div>
            {#if item.type === 'file' && item.size}
              <div class="text-xs text-[var(--color-text-secondary)] mt-1">{formatFileSize(item.size)}</div>
            {/if}
          </div>
        {/each}
      </div>
    {:else}
      <div class="border rounded-lg overflow-hidden">
        {#each filteredItems as item}
          {@const itemIcon = getFileIcon(item)}
          <div
            class={`flex items-center p-3 border-b last:border-b-0 cursor-pointer ${
              selectedItems.some(i => i.id === item.id)
                ? 'bg-[var(--color-primary-50)]'
                : 'hover:bg-[var(--color-background-secondary)]'
            } ${itemClass}`}
            role="button"
            tabindex="0"
            onclick={() => handleItemClick(item)}
            ondblclick={() => handleItemDoubleClick(item)}
            onkeydown={(event) => handleItemKeyDown(event, item)}
          >
            <BaseIcon name={itemIcon} class={`h-5 w-5 mr-3 ${item.type === 'folder' ? 'text-[var(--color-primary-500)]' : 'text-[var(--color-text-secondary)]'}`} />
            <div class="flex-1 min-w-0">
              <div class="text-sm font-medium truncate">{item.name}</div>
              <div class="text-xs text-[var(--color-text-secondary)] truncate">
                {#if item.type === 'folder'}
                  Folder
                {:else}
                  {item.size ? formatFileSize(item.size) : 'File'} вЂў
                  {item.modified ? item.modified.toLocaleDateString() : ''}
                {/if}
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onclick={(e) => {
                e.stopPropagation();
                handleDownload(item);
              }}
            >
              <BaseIcon name={Download} class="h-4 w-4" />
            </Button>
          </div>
        {/each}
      </div>
    {/if}
  </div>
</div>







