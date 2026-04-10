<script lang="ts">
  import { Icon as BaseIcon } from '$stylist';
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
  import { Button } from '$stylist';
  import { createFileExplorerState } from '$stylist/file/function/state/file-explorer';
  import type { FileSystemItem } from '$stylist/file/type/struct/file-explorer/file-system-item';
  import type { ViewMode } from '$stylist/file/type/struct/file-explorer/view-mode';
  import type { Props } from '$stylist/file/type/struct/file-explorer/props';
  import {
    handleItemClick as handleItemClickFn,
    handleItemDoubleClick as handleItemDoubleClickFn,
    handleItemKeyDown as handleItemKeyDownFn,
    handleSearchInput as handleSearchInputFn,
    handleUpload as handleUploadFn,
    handleDownload as handleDownloadFn,
    toggleViewMode as toggleViewModeFn,
    formatFileSize,
    getFileIcon,
  } from '$stylist/file/function/script/file-explorer';

  let props: Props = $props();

  let selectedItems = $state([] as FileSystemItem[]);
  let searchQuery = $state('');
  let currentViewMode = $state(props.viewMode ?? 'grid');
  let currentPath = $derived(props.currentPath ?? '/');
  let searchable = $derived(props.searchable ?? true);
  let showPath = $derived(props.showPath ?? true);
  let enableSelection = $derived(props.enableSelection ?? true);
  let multiselect = $derived(props.multiselect ?? false);
  let items = $derived(props.items ?? []);
  const explorerState = createFileExplorerState(props);
  let pathParts = $derived(currentPath.split('/').filter(part => part));
  let filteredItems = $derived([] as FileSystemItem[]);

  let restProps = $derived.by(() => {
    const {
      items: _items, viewMode, currentPath: _currentPath, searchable: _searchable,
      showPath: _showPath, enableSelection: _enableSelection, multiselect: _multiselect,
      onItemSelect, onItemDoubleClick, onItemAction,
      class: _class, itemClass, headerClass, toolbarClass, searchClass, pathClass,
      onUpload, onDownload,
      ...rest
    } = props;
    return rest;
  });

  function setSelectedItems(items: FileSystemItem[]) {
    selectedItems = items;
  }

  function handleItemClick(item: FileSystemItem) {
    handleItemClickFn(item, enableSelection, multiselect, selectedItems, setSelectedItems, props.onItemSelect);
  }

  function handleItemDoubleClick(item: FileSystemItem) {
    handleItemDoubleClickFn(item, props.onItemDoubleClick);
  }

  function handleItemKeyDown(event: KeyboardEvent, item: FileSystemItem) {
    handleItemKeyDownFn(
      event, item,
      () => handleItemClick(item),
      () => handleItemDoubleClick(item)
    );
  }

  function setSearchQuery(value: string) {
    searchQuery = value;
  }

  function handleSearchInput(e: Event) {
    handleSearchInputFn(e, setSearchQuery);
  }

  function handleUpload(e: Event) {
    handleUploadFn(e, props.onUpload);
  }

  function handleDownload(item: FileSystemItem) {
    handleDownloadFn(item, props.onDownload);
  }

  function toggleViewMode() {
    toggleViewModeFn(currentViewMode, (mode) => { currentViewMode = mode; });
  }
</script>

<div class={`c-file-explorer border rounded-lg overflow-hidden ${explorerState.classes}`} {...restProps}>
  <!-- Explorer header with toolbar -->
  <div class={`p-3 border-b ${props.headerClass ?? ''}`}>
    {#if showPath}
      <div class={`flex items-center text-sm text-[var(--color-text-secondary)] mb-2 ${props.pathClass ?? ''}`}>
        {#each pathParts as part, index}
          <span>{part}</span>
          {#if index < pathParts.length - 1}
            <BaseIcon name={ChevronRight} class="h-4 w-4 mx-1" />
          {/if}
        {/each}
      </div>
    {/if}

    <div class={`flex items-center justify-between ${props.toolbarClass ?? ''}`}>
      <div class="flex items-center space-x-2">
        {#if searchable}
          <div class="relative flex-1 min-w-[200px]">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <BaseIcon name={Search} class="h-5 w-5 text-[var(--color-text-tertiary)]" />
            </div>
            <input
              type="text"
              class={`block w-full pl-10 pr-3 py-2 border border-[var(--color-border-primary)] rounded-md leading-5 bg-[var(--color-background-primary)] placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-[var(--color-primary-500)] sm:text-sm ${props.searchClass ?? ''}`}
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
              selectedItems.some((i: FileSystemItem) => i.id === item.id)
                ? 'border-[var(--color-primary-500)] bg-[var(--color-primary-50)]'
                : 'border-[var(--color-border-primary)] hover:bg-[var(--color-background-secondary)]'
            } ${props.itemClass ?? ''}`}
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
              selectedItems.some((i: FileSystemItem) => i.id === item.id)
                ? 'bg-[var(--color-primary-50)]'
                : 'hover:bg-[var(--color-background-secondary)]'
            } ${props.itemClass ?? ''}`}
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
              <BaseIcon name={Download} class="h-4 w-4" />
            </Button>
          </div>
        {/each}
      </div>
    {/if}
  </div>
</div>
