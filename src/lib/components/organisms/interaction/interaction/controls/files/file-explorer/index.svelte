<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { Folder, File, Search, Grid, List, Download, Upload, MoreHorizontal, ChevronRight, ChevronDown } from 'lucide-svelte';
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
      <div class={`flex items-center text-sm text-gray-600 mb-2 ${pathClass}`}>
        {#each pathParts as part, index}
          <span>{part}</span>
          {#if index < pathParts.length - 1}
            <ChevronRight class="h-4 w-4 mx-1" />
          {/if}
        {/each}
      </div>
    {/if}

    <div class={`flex items-center justify-between ${toolbarClass}`}>
      <div class="flex items-center space-x-2">
        {#if searchable}
          <div class="relative flex-1 min-w-[200px]">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search class="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              class={`block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${searchClass}`}
              placeholder="Search files..."
              value={searchQuery}
              oninput={handleSearchInput}
            />
          </div>
        {/if}

        <Button variant="outline" size="sm" onclick={toggleViewMode}>
          {#if currentViewMode === 'grid'}
            <List class="h-4 w-4 mr-1" />
          {:else}
            <Grid class="h-4 w-4 mr-1" />
          {/if}
          {currentViewMode === 'grid' ? 'List' : 'Grid'}
        </Button>

        <Button variant="outline" size="sm" onclick={() => document.getElementById('file-upload')?.click()}>
          <Upload class="h-4 w-4 mr-1" />
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
        <span class="text-sm text-gray-500 mr-2">{filteredItems.length} items</span>
        <Button variant="ghost" size="sm">
          <MoreHorizontal class="h-5 w-5" />
        </Button>
      </div>
    </div>
  </div>

  <!-- File list/grid view -->
  <div class="p-2">
    {#if currentViewMode === 'grid'}
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {#each filteredItems as item}
          {@const ItemIcon = getFileIcon(item)}
          <div
            class={`border rounded-lg p-3 cursor-pointer flex flex-col items-center text-center ${
              selectedItems.some(i => i.id === item.id)
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-200 hover:bg-gray-50'
            } ${itemClass}`}
            role="button"
            tabindex="0"
            onclick={() => handleItemClick(item)}
            ondblclick={() => handleItemDoubleClick(item)}
            onkeydown={(event) => handleItemKeyDown(event, item)}
          >
            <ItemIcon class={`h-8 w-8 mb-2 ${item.type === 'folder' ? 'text-blue-500' : 'text-gray-500'}`} />
            <div class="text-sm font-medium truncate w-full">{item.name}</div>
            {#if item.type === 'file' && item.size}
              <div class="text-xs text-gray-500 mt-1">{formatFileSize(item.size)}</div>
            {/if}
          </div>
        {/each}
      </div>
    {:else}
      <div class="border rounded-lg overflow-hidden">
        {#each filteredItems as item}
          {@const ItemIcon = getFileIcon(item)}
          <div
            class={`flex items-center p-3 border-b last:border-b-0 cursor-pointer ${
              selectedItems.some(i => i.id === item.id)
                ? 'bg-blue-50'
                : 'hover:bg-gray-50'
            } ${itemClass}`}
            role="button"
            tabindex="0"
            onclick={() => handleItemClick(item)}
            ondblclick={() => handleItemDoubleClick(item)}
            onkeydown={(event) => handleItemKeyDown(event, item)}
          >
            <ItemIcon class={`h-5 w-5 mr-3 ${item.type === 'folder' ? 'text-blue-500' : 'text-gray-500'}`} />
            <div class="flex-1 min-w-0">
              <div class="text-sm font-medium truncate">{item.name}</div>
              <div class="text-xs text-gray-500 truncate">
                {#if item.type === 'folder'}
                  Folder
                {:else}
                  {item.size ? formatFileSize(item.size) : 'File'} •
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
              <Download class="h-4 w-4" />
            </Button>
          </div>
        {/each}
      </div>
    {/if}
  </div>
</div>



