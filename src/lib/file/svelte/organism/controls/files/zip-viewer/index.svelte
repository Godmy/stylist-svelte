<script lang="ts">
  import { Icon as BaseIcon } from '$stylist';
  import { Button } from '$stylist';
  import { ZipViewerStyleManager } from '$stylist/file/class/style-manager/zip-viewer';
  import { createZipViewerState } from '$stylist/file/function/state/zip-viewer';
  import type { Props } from '$stylist/file/type/struct/zip-viewer/props';
  import {
    formatFileSize,
    getEntryIcon,
  } from '$stylist/file/function/script/zip-viewer';

  let props: Props = $props();
  const state = createZipViewerState(props);
</script>

<div class={ZipViewerStyleManager.getBaseClasses(state.classes)} {...state.restProps}>
  <div class={ZipViewerStyleManager.getHeaderClasses(props.headerClass ?? '')}>
    <div class="flex items-center">
      <BaseIcon name="archive" class="h-6 w-6 text-[var(--color-primary-500)] mr-3" />
      <div>
        <h3 class="font-medium text-[var(--color-text-primary)]">{state.archiveName}</h3>
        <p class="text-sm text-[var(--color-text-secondary)]">{state.filteredEntries.length} items</p>
      </div>
    </div>

    {#if state.searchable}
      <div class="mt-3 relative">
        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <BaseIcon name="search" class="h-5 w-5 text-[var(--color-text-tertiary)]" />
        </div>
        <input
          type="text"
          class={ZipViewerStyleManager.getSearchClasses()}
          placeholder="Search in archive..."
          value={state.searchQuery}
          oninput={state.handleSearchInput}
          disabled={state.disabled}
        />
      </div>
    {/if}
  </div>

  <div class="overflow-y-auto max-h-[500px]">
    {#if state.zipTree.length === 0}
      <div class="text-center py-8 text-[var(--color-text-secondary)]">
        {state.searchQuery ? 'No matching items found' : 'Archive is empty'}
      </div>
    {:else}
      <div class="divide-y divide-gray-200">
        {#each state.zipTree as entry}
          {@const entryIcon = getEntryIcon(entry)}
          <div class={ZipViewerStyleManager.getEntryClasses(entry.type === 'directory', props.entryClass ?? '')}>
            <button
              type="button"
              class="flex h-6 w-6 items-center justify-center rounded hover:bg-[var(--color-background-tertiary)] focus:outline-none mr-2"
              aria-label={state.expandedFolders.has(entry.path) ? `Collapse ${entry.name}` : `Expand ${entry.name}`}
              onclick={() => state.toggleFolder(entry)}
              disabled={entry.type === 'file' || state.disabled}
            >
              {#if entry.type === 'directory'}
                {#if state.expandedFolders.has(entry.path)}
                  <BaseIcon name="chevron-down" class="h-4 w-4 text-[var(--color-text-secondary)]" />
                {:else}
                  <BaseIcon name="chevron-right" class="h-4 w-4 text-[var(--color-text-secondary)]" />
                {/if}
              {/if}
            </button>

            <BaseIcon name={entryIcon} class={ZipViewerStyleManager.getIconClasses(entry.type)} />

            <div class="flex-1 min-w-0">
              <div class="flex items-center">
                <span class="font-medium text-[var(--color-text-primary)] truncate">{entry.name}</span>
                {#if entry.type === 'directory'}
                  <span class="ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-[var(--color-primary-100)] text-[var(--color-primary-800)]">
                    Directory
                  </span>
                {/if}
              </div>
              <div class="flex items-center text-xs text-[var(--color-text-secondary)] mt-1">
                {#if entry.size !== undefined}
                  <span>{formatFileSize(entry.size)}</span>
                {/if}
                {#if entry.modified}
                  <span class="mx-2">•</span>
                  <span>{entry.modified.toLocaleDateString()}</span>
                {/if}

              </div>
            </div>

            <div class="ml-4 flex items-center space-x-2">
              {#if entry.isText}
                <Button variant="ghost" size="sm" onclick={() => state.handlePreview(entry)} disabled={state.disabled} title="Preview">
                  <BaseIcon name="eye" class="h-4 w-4 text-[var(--color-text-secondary)]" />
                </Button>
              {/if}

              <Button variant="ghost" size="sm" onclick={() => state.handleDownload(entry)} disabled={state.disabled} title="Download">
                <BaseIcon name="download" class="h-4 w-4 text-[var(--color-text-secondary)]" />
              </Button>

              <Button variant="ghost" size="sm" onclick={() => state.handleExtract(entry)} disabled={state.disabled} title="Extract">
                <BaseIcon name="external-link" class="h-4 w-4 text-[var(--color-text-secondary)]" />
              </Button>
            </div>
          </div>
        {/each}
      </div>
    {/if}
  </div>
</div>
