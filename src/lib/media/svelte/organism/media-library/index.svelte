<script lang="ts">
  import type { InformationHTMLAttributes } from '$stylist/information/type/struct';
  import { createMediaLibraryState, type MediaLibraryProps, type MediaType } from '$stylist/media/function/state/media-library';
  import { Icon as BaseIcon } from '$stylist';
const Folder = 'folder';
const File = 'file';
const Image = 'image';
const Film = 'film';
const Music = 'music';
const Upload = 'upload';
const Search = 'search';
const Grid3X3 = 'grid-3-x-3';
const List = 'list';
const Trash2 = 'trash-2';
const Download = 'download';
const Eye = 'eye';
const X = 'x';


  let props: MediaLibraryProps & InformationHTMLAttributes<HTMLDivElement> = $props();
  const vm = createMediaLibraryState(props);

  let searchQuery = $state('');
  let selectedViewMode = $state(vm.viewMode);
  let fileInputRef: HTMLInputElement;
  let selectedItems: string[] = $state([]);

  function handleFileUpload(e: Event) {
    const target = e.target as HTMLInputElement;
    if (target.files && props.onUpload) {
      props.onUpload(target.files);
      target.value = '';
    }
  }

  function handleItemSelect(item: any) {
    if (props.onItemSelect) {
      props.onItemSelect(item);
    }
  }

  function handleItemDelete(id: string) {
    if (props.onItemDelete) {
      props.onItemDelete(id);
    }
  }

  function handleItemDownload(id: string) {
    if (props.onItemDownload) {
      props.onItemDownload(id);
    }
  }

  function triggerFileInput() {
    if (fileInputRef) {
      fileInputRef.click();
    }
  }

  function getFilteredItems() {
    return vm.items.filter((item: any) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }
</script>

<div class={vm.hostClasses} {...vm.restProps}>
  <!-- Header with search and controls -->
  <div class={`border-b px-4 py-3 bg-[var(--color-background-primary)] ${vm.headerClass}`}>
    <div class="flex items-center">
      <div class="flex-1">
        <div class="relative rounded-md shadow-sm">
          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <BaseIcon name={Search} class="h-5 w-5 text-[var(--color-text-tertiary)]" />
          </div>
          <input
            type="text"
            class="focus:ring-blue-500 focus:border-[var(--color-primary-500)] block w-full pl-10 pr-12 py-2 border border-[var(--color-border-primary)] rounded-md text-sm"
            placeholder={vm.searchPlaceholder}
            bind:value={searchQuery}
          />
        </div>
      </div>

      <div class="ml-4 flex items-center space-x-3">
        {#if vm.allowUpload}
          <button
            type="button"
            class="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-[var(--color-text-inverse)] bg-[var(--color-primary-600)] hover:bg-[var(--color-primary-700)] focus:outline-none"
            onclick={triggerFileInput}
          >
            <BaseIcon name={Upload} class="h-4 w-4 mr-1" />
            Upload
          </button>
        {/if}

        <div class="flex border border-[var(--color-border-primary)] rounded-md">
          <button
            type="button"
            class={`p-2 rounded-l-md ${
              selectedViewMode === 'grid'
                ? 'bg-[var(--color-primary-100)] text-[var(--color-primary-600)]'
                : 'bg-[var(--color-background-primary)] text-[var(--color-text-secondary)] hover:bg-[var(--color-background-secondary)]'
            }`}
            onclick={() => selectedViewMode = 'grid'}
            title="Grid view"
          >
            <BaseIcon name={Grid3X3} class="h-4 w-4" />
          </button>
          <button
            type="button"
            class={`p-2 rounded-r-md ${
              selectedViewMode === 'list'
                ? 'bg-[var(--color-primary-100)] text-[var(--color-primary-600)]'
                : 'bg-[var(--color-background-primary)] text-[var(--color-text-secondary)] hover:bg-[var(--color-background-secondary)]'
            }`}
            onclick={() => selectedViewMode = 'list'}
            title="List view"
          >
            <BaseIcon name={List} class="h-4 w-4" />
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
    <div class={`border-b px-4 py-2 bg-[var(--color-primary-50)] flex items-center justify-between ${vm.toolbarClass}`}>
      <span class="text-sm font-medium text-[var(--color-primary-800)]">
        {selectedItems.length} item{selectedItems.length !== 1 ? 's' : ''} selected
      </span>
      <div class="flex space-x-2">
        {#if vm.allowDownload}
          <button
            type="button"
            class="inline-flex items-center px-3 py-1 border border-transparent text-xs font-medium rounded text-[var(--color-primary-700)] bg-[var(--color-primary-100)] hover:bg-[var(--color-primary-200)] focus:outline-none"
          >
            <BaseIcon name={Download} class="h-4 w-4 mr-1" />
            Download
          </button>
        {/if}
        {#if vm.allowDelete}
          <button
            type="button"
            class="inline-flex items-center px-3 py-1 border border-transparent text-xs font-medium rounded text-[var(--color-danger-700)] bg-[var(--color-danger-100)] hover:bg-[var(--color-danger-200)] focus:outline-none"
          >
            <BaseIcon name={Trash2} class="h-4 w-4 mr-1" />
            Delete
          </button>
        {/if}
        <button
          type="button"
          class="inline-flex items-center px-3 py-1 border border-[var(--color-border-primary)] text-xs font-medium rounded text-[var(--color-text-primary)] bg-[var(--color-background-primary)] hover:bg-[var(--color-background-secondary)] focus:outline-none"
          onclick={() => selectedItems = []}
        >
          <BaseIcon name={X} class="h-4 w-4 mr-1" />
          Clear
        </button>
      </div>
    </div>
  {/if}

  <!-- Media grid/list -->
  <div class={`p-4 ${selectedViewMode === 'grid' ? `grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 ${vm.gridClass}` : 'space-y-2'}`}>
    {#each getFilteredItems() as item}
      {#if selectedViewMode === 'grid'}
        <!-- Grid view item -->
        <div
          class={`border rounded-lg overflow-hidden cursor-pointer hover:shadow-md transition-shadow ${
            selectedItems.includes(item.id) ? 'ring-2 ring-blue-500' : 'border-[var(--color-border-primary)]'
          } ${vm.itemClass}`}
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
          <div class="aspect-square bg-[var(--color-background-secondary)] flex items-center justify-center">
            {#if item.thumbnail}
              <img
                src={item.thumbnail}
                alt={item.name}
                class="w-full h-full object-cover"
              />
            {:else}
              {#if true}
                {@const FileIcon = vm.getFileIcon(item.type as MediaType)}
                <BaseIcon name={FileIcon} class="h-10 w-10 text-[var(--color-text-tertiary)]" />
              {/if}
            {/if}
          </div>
          <div class="p-2">
            <p class="text-xs font-medium text-[var(--color-text-primary)] truncate">{item.name}</p>
            <p class="text-xs text-[var(--color-text-secondary)]">{vm.formatFileSize(item.size)}</p>
          </div>
        </div>
      {:else}
        <!-- List view item -->
        <div
          class={`flex items-center p-3 border rounded-lg ${
            selectedItems.includes(item.id) ? 'bg-[var(--color-primary-50)] border-[var(--color-primary-500)]' : 'border-[var(--color-border-primary)]'
          } ${vm.itemClass}`}
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
          <div class="flex-shrink-0 w-16 h-16 bg-[var(--color-background-secondary)] rounded flex items-center justify-center">
            {#if true}
              {@const FileIcon = vm.getFileIcon(item.type as MediaType)}
              <BaseIcon name={FileIcon} class="h-8 w-8 text-[var(--color-text-tertiary)]" />
            {/if}
          </div>
          <div class="ml-4 flex-1 min-w-0">
            <p class="text-sm font-medium text-[var(--color-text-primary)] truncate">{item.name}</p>
            <p class="text-sm text-[var(--color-text-secondary)]">{vm.formatFileSize(item.size)} • {vm.formatDate(item.uploadDate)}</p>
          </div>
          <div class="ml-4 flex space-x-2">
            {#if vm.allowDownload}
              <button
                type="button"
                class="text-[var(--color-text-tertiary)] hover:text-[var(--color-text-secondary)]"
                onclick={(e) => {
                  e.stopPropagation();
                  handleItemDownload(item.id);
                }}
                title="Download"
              >
                <BaseIcon name={Download} class="h-5 w-5" />
              </button>
            {/if}
            <button
              type="button"
              class="text-[var(--color-text-tertiary)] hover:text-[var(--color-text-secondary)]"
              onclick={(e) => {
                e.stopPropagation();
                handleItemSelect(item);
              }}
              title="View"
            >
              <BaseIcon name={Eye} class="h-5 w-5" />
            </button>
            {#if vm.allowDelete}
              <button
                type="button"
                class="text-[var(--color-text-tertiary)] hover:text-[var(--color-danger-500)]"
                onclick={(e) => {
                  e.stopPropagation();
                  handleItemDelete(item.id);
                }}
                title="Delete"
              >
                <BaseIcon name={Trash2} class="h-5 w-5" />
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
      <BaseIcon name={Folder} class="h-12 w-12 text-[var(--color-text-tertiary)] mx-auto mb-2" />
      <h3 class="text-sm font-medium text-[var(--color-text-primary)] mb-1">No media files</h3>
      <p class="text-sm text-[var(--color-text-secondary)]">
        {searchQuery ? 'No files match your search' : 'Upload files to get started'}
      </p>
      {#if vm.allowUpload && !searchQuery}
        <button
          type="button"
          class="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-[var(--color-text-inverse)] bg-[var(--color-primary-600)] hover:bg-[var(--color-primary-700)] focus:outline-none"
          onclick={triggerFileInput}
        >
          <BaseIcon name={Upload} class="h-4 w-4 mr-1" />
          Upload files
        </button>
      {/if}
    </div>
  {/if}
</div>
