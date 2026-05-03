<script lang="ts">
  import { Icon as BaseIcon } from '$stylist/media';
  import { Button } from '$stylist/control';
  import { FileExplorerStyleManager } from '$stylist/file/class/style-manager/file-explorer';
  import { createFileExplorerState } from '$stylist/file/function/state/file-explorer';
  import type { SlotFileSystemItem } from '$stylist/file/type/struct/file-explorer/file-system-item';
  import type { Props } from '$stylist/file/type/struct/file-explorer/props';
  import { getFileIcon } from '$stylist/file/function/script/file-explorer-get-file-icon';
  import { formatFileSize } from '$stylist/file/function/script/file-explorer-format-file-size';

  let props: Props = $props();
  const state = createFileExplorerState(props);
</script>

<div class={FileExplorerStyleManager.getBaseClasses(state.classes)} {...state.restProps}>
  <div class={FileExplorerStyleManager.getHeaderClasses(props.headerClass ?? '')}>
    {#if state.showPath}
      <div class={FileExplorerStyleManager.getPathClasses(props.pathClass ?? '')}>
        {#each state.pathParts as part, index}
          <span>{part}</span>
          {#if index < state.pathParts.length - 1}
            <BaseIcon name="chevron-right" class="h-4 w-4 mx-1" />
          {/if}
        {/each}
      </div>
    {/if}

    <div class={FileExplorerStyleManager.getToolbarClasses(props.toolbarClass ?? '')}>
      <div class="flex items-center space-x-2">
        {#if state.searchable}
          <div class="relative flex-1 min-w-[200px]">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <BaseIcon name="search" class="h-5 w-5 text-[var(--color-text-tertiary)]" />
            </div>
            <input
              type="text"
              class={FileExplorerStyleManager.getSearchClasses(props.searchClass ?? '')}
              placeholder="Search files..."
              value={state.searchQuery}
              oninput={state.handleSearchInput}
            />
          </div>
        {/if}

        <Button variant="outline" size="sm" onclick={state.toggleViewMode}>
          {#if state.currentViewMode === 'grid'}
            <BaseIcon name="list" class="h-4 w-4 mr-1" />
          {:else}
            <BaseIcon name="grid" class="h-4 w-4 mr-1" />
          {/if}
          {state.currentViewMode === 'grid' ? 'List' : 'Grid'}
        </Button>

        <Button variant="outline" size="sm" onclick={state.openUploadDialog}>
          <BaseIcon name="upload" class="h-4 w-4 mr-1" />
          Upload
        </Button>
        <input
          bind:this={state.fileInputElement}
          type="file"
          class="hidden"
          onchange={state.handleUpload}
          multiple
        />
      </div>

      <div class="flex items-center">
        <span class="text-sm text-[var(--color-text-secondary)] mr-2">{state.filteredItems.length} items</span>
        <Button variant="ghost" size="sm">
          <BaseIcon name="more-horizontal" class="h-5 w-5" />
        </Button>
      </div>
    </div>
  </div>

  <div class="p-2">
    {#if state.currentViewMode === 'grid'}
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {#each state.filteredItems as item}
          {@const itemIcon = getFileIcon(item)}
          <div
            class={`border rounded-lg p-3 cursor-pointer flex flex-col items-center text-center ${
              state.selectedItems.some((candidate: SlotFileSystemItem) => candidate.id === item.id)
                ? 'border-[var(--color-primary-500)] bg-[var(--color-primary-50)]'
                : 'border-[var(--color-border-primary)] hover:bg-[var(--color-background-secondary)]'
            } ${props.itemClass ?? ''}`}
            role="button"
            tabindex="0"
            onclick={() => state.handleItemClick(item)}
            ondblclick={() => state.handleItemDoubleClick(item)}
            onkeydown={(event) => state.handleItemKeyDown(event, item)}
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
        {#each state.filteredItems as item}
          {@const itemIcon = getFileIcon(item)}
          <div
            class={`flex items-center p-3 border-b last:border-b-0 cursor-pointer ${
              state.selectedItems.some((candidate: SlotFileSystemItem) => candidate.id === item.id)
                ? 'bg-[var(--color-primary-50)]'
                : 'hover:bg-[var(--color-background-secondary)]'
            } ${props.itemClass ?? ''}`}
            role="button"
            tabindex="0"
            onclick={() => state.handleItemClick(item)}
            ondblclick={() => state.handleItemDoubleClick(item)}
            onkeydown={(event) => state.handleItemKeyDown(event, item)}
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
              onclick={(event) => {
                event.stopPropagation();
                state.handleDownload(item);
              }}
            >
              <BaseIcon name="download" class="h-4 w-4" />
            </Button>
          </div>
        {/each}
      </div>
    {/if}
  </div>
</div>
