<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { 
    Folder, 
    File, 
    Image, 
    Film, 
    Music, 
    Upload, 
    Search, 
    Grid3X3, 
    List,
    Trash2,
    Download,
    Eye,
    X
  } from 'lucide-svelte';

  type MediaType = 'image' | 'video' | 'audio' | 'document' | 'other';

  type MediaItem = {
    id: string;
    name: string;
    type: MediaType;
    size: number; // in bytes
    url: string;
    thumbnail?: string;
    uploadDate: Date;
    tags?: string[];
  };

  type Props = {
    items: MediaItem[];
    onItemSelect?: (item: MediaItem) => void;
    onItemDelete?: (id: string) => void;
    onItemDownload?: (id: string) => void;
    onUpload?: (files: FileList) => void;
    viewMode?: 'grid' | 'list';
    allowDelete?: boolean;
    allowDownload?: boolean;
    allowUpload?: boolean;
    searchPlaceholder?: string;
    class?: string;
    headerClass?: string;
    toolbarClass?: string;
    gridClass?: string;
    itemClass?: string;
  } & HTMLAttributes<HTMLDivElement>;

  let {
    items = [],
    onItemSelect,
    onItemDelete,
    onItemDownload,
    onUpload,
    viewMode = 'grid',
    allowDelete = true,
    allowDownload = true,
    allowUpload = true,
    searchPlaceholder = 'Search media...',
    class: className = '',
    headerClass = '',
    toolbarClass = '',
    gridClass = '',
    itemClass = '',
    ...restProps
  } = $props();

  let searchQuery = $state('');
  let selectedViewMode = $state(viewMode);
  let fileInputRef: HTMLInputElement;
  let selectedItems: string[] = $state([]);

  function handleFileUpload(e: Event) {
    const target = e.target as HTMLInputElement;
    if (target.files && onUpload) {
      onUpload(target.files);
      target.value = ''; // Reset input
    }
  }

  function handleItemSelect(item: MediaItem) {
    if (onItemSelect) {
      onItemSelect(item);
    }
  }

  function handleItemDelete(id: string) {
    if (onItemDelete) {
      onItemDelete(id);
    }
  }

  function handleItemDownload(id: string) {
    if (onItemDownload) {
      onItemDownload(id);
    }
  }

  function triggerFileInput() {
    if (fileInputRef) {
      fileInputRef.click();
    }
  }

  function formatFileSize(bytes: number): string {
    if (bytes < 1024) return bytes + ' B';
    else if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' KB';
    else return (bytes / 1048576).toFixed(1) + ' MB';
  }

  function getFileIcon(type: MediaType) {
    switch(type) {
      case 'image': return Image;
      case 'video': return Film;
      case 'audio': return Music;
      case 'document': return File;
      default: return File;
    }
  }

  function getFilteredItems() {
    return items.filter((item: MediaItem) => 
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  function formatDate(date: Date) {
    return date.toLocaleDateString([], {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  }
</script>

<div class={`border border-gray-200 rounded-lg overflow-hidden ${className}`} {...restProps}>
  <!-- Header with search and controls -->
  <div class={`border-b px-4 py-3 bg-white ${headerClass}`}>
    <div class="flex items-center">
      <div class="flex-1">
        <div class="relative rounded-md shadow-sm">
          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search class="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            class="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 pr-12 py-2 border border-gray-300 rounded-md text-sm"
            placeholder={searchPlaceholder}
            bind:value={searchQuery}
          />
        </div>
      </div>
      
      <div class="ml-4 flex items-center space-x-3">
        {#if allowUpload}
          <button
            type="button"
            class="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
            onclick={triggerFileInput}
          >
            <Upload class="h-4 w-4 mr-1" />
            Upload
          </button>
        {/if}
        
        <div class="flex border border-gray-300 rounded-md">
          <button
            type="button"
            class={`p-2 rounded-l-md ${
              selectedViewMode === 'grid' 
                ? 'bg-blue-100 text-blue-600' 
                : 'bg-white text-gray-500 hover:bg-gray-50'
            }`}
            onclick={() => selectedViewMode = 'grid'}
            title="Grid view"
          >
            <Grid3X3 class="h-4 w-4" />
          </button>
          <button
            type="button"
            class={`p-2 rounded-r-md ${
              selectedViewMode === 'list' 
                ? 'bg-blue-100 text-blue-600' 
                : 'bg-white text-gray-500 hover:bg-gray-50'
            }`}
            onclick={() => selectedViewMode = 'list'}
            title="List view"
          >
            <List class="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
    
    <!-- Hidden file input -->
    <input
      type="file"
      bind:this={fileInputRef}
      class="hidden"
      onchange={handleFileUpload}
      multiple
      accept="image/*,video/*,audio/*,.pdf,.doc,.docx,.xls,.xlsx"
    />
  </div>

  <!-- Toolbar with selection actions -->
  {#if selectedItems.length > 0}
    <div class={`border-b px-4 py-2 bg-blue-50 flex items-center justify-between ${toolbarClass}`}>
      <span class="text-sm font-medium text-blue-800">
        {selectedItems.length} item{selectedItems.length !== 1 ? 's' : ''} selected
      </span>
      <div class="flex space-x-2">
        {#if allowDownload}
          <button
            type="button"
            class="inline-flex items-center px-3 py-1 border border-transparent text-xs font-medium rounded text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none"
          >
            <Download class="h-4 w-4 mr-1" />
            Download
          </button>
        {/if}
        {#if allowDelete}
          <button
            type="button"
            class="inline-flex items-center px-3 py-1 border border-transparent text-xs font-medium rounded text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none"
          >
            <Trash2 class="h-4 w-4 mr-1" />
            Delete
          </button>
        {/if}
        <button
          type="button"
          class="inline-flex items-center px-3 py-1 border border-gray-300 text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"
          onclick={() => selectedItems = []}
        >
          <X class="h-4 w-4 mr-1" />
          Clear
        </button>
      </div>
    </div>
  {/if}

  <!-- Media grid/list -->
  <div class={`p-4 ${selectedViewMode === 'grid' ? `grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 ${gridClass}` : 'space-y-2'}`}>
    {#each getFilteredItems() as item}
      {#if selectedViewMode === 'grid'}
        <!-- Grid view item -->
        <div 
          class={`border rounded-lg overflow-hidden cursor-pointer hover:shadow-md transition-shadow ${
            selectedItems.includes(item.id) ? 'ring-2 ring-blue-500' : 'border-gray-200'
          } ${itemClass}`}
          role="button"
          tabindex="0"
          onclick={(e) => {
            e.stopPropagation();
            handleItemSelect(item);
            if (selectedItems.includes(item.id)) {
              selectedItems = selectedItems.filter(id => id !== item.id);
            } else {
              selectedItems = [...selectedItems, item.id];
            }
          }}
          onkeydown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              e.stopPropagation();
              handleItemSelect(item);
              if (selectedItems.includes(item.id)) {
                selectedItems = selectedItems.filter(id => id !== item.id);
              } else {
                selectedItems = [...selectedItems, item.id];
              }
            }
          }}
        >
          <div class="aspect-square bg-gray-100 flex items-center justify-center">
            {#if item.thumbnail}
              <img 
                src={item.thumbnail} 
                alt={item.name} 
                class="w-full h-full object-cover"
              />
            {:else}
              {#if true}
                {@const FileIcon = getFileIcon(item.type)}
                <FileIcon class="h-10 w-10 text-gray-400" />
              {/if}
            {/if}
          </div>
          <div class="p-2">
            <p class="text-xs font-medium text-gray-900 truncate">{item.name}</p>
            <p class="text-xs text-gray-500">{formatFileSize(item.size)}</p>
          </div>
        </div>
      {:else}
        <!-- List view item -->
        <div 
          class={`flex items-center p-3 border rounded-lg ${
            selectedItems.includes(item.id) ? 'bg-blue-50 border-blue-500' : 'border-gray-200'
          } ${itemClass}`}
          role="button"
          tabindex="0"
          onclick={(e) => {
            e.stopPropagation();
            handleItemSelect(item);
            if (selectedItems.includes(item.id)) {
              selectedItems = selectedItems.filter(id => id !== item.id);
            } else {
              selectedItems = [...selectedItems, item.id];
            }
          }}
          onkeydown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              e.stopPropagation();
              handleItemSelect(item);
              if (selectedItems.includes(item.id)) {
                selectedItems = selectedItems.filter(id => id !== item.id);
              } else {
                selectedItems = [...selectedItems, item.id];
              }
            }
          }}
        >
          <div class="flex-shrink-0 w-16 h-16 bg-gray-100 rounded flex items-center justify-center">
            {#if true}
              {@const FileIcon = getFileIcon(item.type)}
              <FileIcon class="h-8 w-8 text-gray-400" />
            {/if}
          </div>
          <div class="ml-4 flex-1 min-w-0">
            <p class="text-sm font-medium text-gray-900 truncate">{item.name}</p>
            <p class="text-sm text-gray-500">{formatFileSize(item.size)} • {formatDate(item.uploadDate)}</p>
          </div>
          <div class="ml-4 flex space-x-2">
            {#if allowDownload}
              <button
                type="button"
                class="text-gray-400 hover:text-gray-600"
                onclick={(e) => {
                  e.stopPropagation();
                  handleItemDownload(item.id);
                }}
                title="Download"
              >
                <Download class="h-5 w-5" />
              </button>
            {/if}
            <button
              type="button"
              class="text-gray-400 hover:text-gray-600"
              onclick={(e) => {
                e.stopPropagation();
                handleItemSelect(item);
              }}
              title="View"
            >
              <Eye class="h-5 w-5" />
            </button>
            {#if allowDelete}
              <button
                type="button"
                class="text-gray-400 hover:text-red-500"
                onclick={(e) => {
                  e.stopPropagation();
                  handleItemDelete(item.id);
                }}
                title="Delete"
              >
                <Trash2 class="h-5 w-5" />
              </button>
            {/if}
          </div>
        </div>
      {/if}
    {/each}
  </div>

  <!-- Empty state -->
  {#if getFilteredItems().length === 0}
    <div class="py-12 text-center">
      <Folder class="h-12 w-12 text-gray-400 mx-auto mb-2" />
      <h3 class="text-sm font-medium text-gray-900 mb-1">No media files</h3>
      <p class="text-sm text-gray-500">
        {searchQuery ? 'No files match your search' : 'Upload files to get started'}
      </p>
      {#if allowUpload && !searchQuery}
        <button
          type="button"
          class="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
          onclick={triggerFileInput}
        >
          <Upload class="h-4 w-4 mr-1" />
          Upload files
        </button>
      {/if}
    </div>
  {/if}
</div>
