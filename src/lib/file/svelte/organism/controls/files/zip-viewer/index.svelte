<script lang="ts">
  import type { InformationHTMLAttributes } from '$stylist/information/type/struct';
  import { Icon as BaseIcon } from '$stylist';
  const File = 'file';
  const Folder = 'folder';
  const Archive = 'archive';
  const Download = 'download';
  const Eye = 'eye';
  const Search = 'search';
  const ChevronRight = 'chevron-right';
  const ChevronDown = 'chevron-down';
  const ExternalLink = 'external-link';
  import { Button, InputField } from '$stylist';
  import { createZipViewerState } from '$stylist/file/function/state/zip-viewer';
  import type { ZipEntry } from '$stylist/file/type/struct/zip-viewer/entry';
  import type { Props } from '$stylist/file/type/struct/zip-viewer/props';
  import {
    handleSearchInput as handleSearchInputFn,
    handleEntryClick as handleEntryClickFn,
    handlePreview as handlePreviewFn,
    handleDownload as handleDownloadFn,
    handleExtract as handleExtractFn,
    toggleFolder as toggleFolderFn,
    formatFileSize,
    getEntryIcon,
  } from '$stylist/file/function/script/zip-viewer';

  let props: Props = $props();

  let searchQuery = $state('');
  let expandedFolders = $state(new Set() as Set<string>);
  let currentPath = $state('/');
  let entries = $derived(props.entries ?? []);
  let archiveName = $derived(props.archiveName ?? 'Archive.zip');
  let searchable = $derived(props.searchable ?? true);
  let showPath = $derived(props.showPath ?? true);
  let enableFiltering = $derived(props.enableFiltering ?? true);
  let defaultExpanded = $derived(props.defaultExpanded ?? false);
  const zipViewerState = createZipViewerState(props);

  let restProps = $derived.by(() => {
    const {
      entries: _entries, archiveName: _archiveName,
      class: _class, entryClass, headerClass,
      onEntryClick, onEntryPreview, onEntryDownload, onEntryExtract,
      searchable: _searchable, showPath: _showPath, enableFiltering: _enableFiltering,
      defaultExpanded: _defaultExpanded, disabled,
      ...rest
    } = props;
    return rest;
  });

  let filteredEntries = $derived.by(() => {
    let result = entries;
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = entries.filter(entry =>
        entry.name.toLowerCase().includes(query) ||
        entry.path.toLowerCase().includes(query)
      );
    }
    return result;
  });

  let zipTree = $derived.by(() => {
    const tree: ZipEntry[] = [];
    const map = new Map<string, ZipEntry>();
    for (const entry of entries) {
      map.set(entry.path, entry);
    }
    for (const entry of entries) {
      if (entry.type === 'directory') {
        if (!expandedFolders.has(entry.path) && !defaultExpanded) continue;
        const parts = entry.path.split('/').filter(p => p);
        if (parts.length === 0) {
          tree.push(entry);
        } else {
          let parentPath = parts.slice(0, parts.length - 1).join('/') + '/';
          if (parentPath === '/') parentPath = '';
          const parentExists = entries.some(e => e.path === parentPath);
          if (parentPath === '' || parentExists) {
            if (!map.get(parentPath) || expandedFolders.has(parentPath) || defaultExpanded) {
              tree.push(entry);
            }
          } else {
            tree.push(entry);
          }
        }
      } else {
        const parentPath = entry.path.substring(0, entry.path.lastIndexOf('/') + 1);
        if (parentPath === '/') {
          tree.push(entry);
        } else if (expandedFolders.has(parentPath) || defaultExpanded) {
          tree.push(entry);
        }
      }
    }
    return tree;
  });

  function setSearchQuery(value: string) {
    searchQuery = value;
  }

  function setExpandedFolders(folders: Set<string>) {
    expandedFolders = folders;
  }

  function handleSearchInput(e: Event) {
    handleSearchInputFn(e, setSearchQuery);
  }

  function handleEntryClick(entry: ZipEntry) {
    handleEntryClickFn(entry, zipViewerState.disabled, expandedFolders, setExpandedFolders, props.onEntryClick);
  }

  function handlePreview(entry: ZipEntry) {
    handlePreviewFn(entry, zipViewerState.disabled, props.onEntryPreview);
  }

  function handleDownload(entry: ZipEntry) {
    handleDownloadFn(entry, zipViewerState.disabled, props.onEntryDownload);
  }

  function handleExtract(entry: ZipEntry) {
    handleExtractFn(entry, zipViewerState.disabled, props.onEntryExtract);
  }

  function toggleFolder(entry: ZipEntry) {
    toggleFolderFn(entry, zipViewerState.disabled, expandedFolders, setExpandedFolders);
  }
</script>

<div class={`c-zip-viewer border rounded-lg overflow-hidden ${zipViewerState.classes}`} {...restProps}>
  <!-- Archive header -->
  <div class={`p-4 bg-[var(--color-background-secondary)] border-b ${props.headerClass ?? ''}`}>
    <div class="flex items-center">
      <BaseIcon name={Archive} class="h-6 w-6 text-[var(--color-primary-500)] mr-3" />
      <div>
        <h3 class="font-medium text-[var(--color-text-primary)]">{archiveName}</h3>
        <p class="text-sm text-[var(--color-text-secondary)]">{entries.length} items</p>
      </div>
    </div>

    {#if searchable}
      <div class="mt-3 relative">
        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <BaseIcon name={Search} class="h-5 w-5 text-[var(--color-text-tertiary)]" />
        </div>
        <input
          type="text"
          class="block w-full pl-10 pr-3 py-2 border border-[var(--color-border-primary)] rounded-md leading-5 bg-[var(--color-background-primary)] placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-[var(--color-primary-500)] sm:text-sm"
          placeholder="Search in archive..."
          value={searchQuery}
          oninput={handleSearchInput}
          disabled={zipViewerState.disabled}
        />
      </div>
    {/if}
  </div>

  <!-- Entries list -->
  <div class="overflow-y-auto max-h-[500px]">
    {#if zipTree.length === 0}
      <div class="text-center py-8 text-[var(--color-text-secondary)]">
        {searchQuery ? 'No matching items found' : 'Archive is empty'}
      </div>
    {:else}
      <div class="divide-y divide-gray-200">
        {#each zipTree as entry}
          {@const EntryIcon = getEntryIcon(entry)}
          <div
            class={`flex items-center p-3 hover:bg-[var(--color-background-secondary)] ${
              entry.type === 'directory' ? 'bg-[var(--color-background-secondary)]' : ''
            } ${props.entryClass ?? ''}`}
          >
            <button
              type="button"
              class="flex h-6 w-6 items-center justify-center rounded hover:bg-[var(--color-background-tertiary)] focus:outline-none mr-2"
              aria-label={expandedFolders.has(entry.path) ? `Collapse ${entry.name}` : `Expand ${entry.name}`}
              onclick={() => toggleFolder(entry)}
              disabled={entry.type === 'file' || zipViewerState.disabled}
            >
              {#if entry.type === 'directory'}
                {#if expandedFolders.has(entry.path)}
                  <BaseIcon name={ChevronDown} class="h-4 w-4 text-[var(--color-text-secondary)]" />
                {:else}
                  <BaseIcon name={ChevronRight} class="h-4 w-4 text-[var(--color-text-secondary)]" />
                {/if}
              {/if}
            </button>

            <BaseIcon name={entry.type === 'directory' ? Folder : File} class={`h-5 w-5 mr-3 ${entry.type === 'directory' ? 'text-[var(--color-primary-500)]' : 'text-[var(--color-text-secondary)]'}`} />

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
                <Button
                  variant="ghost"
                  size="sm"
                  onclick={() => handlePreview(entry)}
                  disabled={zipViewerState.disabled}
                  title="Preview"
                >
                  <BaseIcon name={Eye} class="h-4 w-4 text-[var(--color-text-secondary)]" />
                </Button>
              {/if}

              <Button
                variant="ghost"
                size="sm"
                onclick={() => handleDownload(entry)}
                disabled={zipViewerState.disabled}
                title="Download"
              >
                <BaseIcon name={Download} class="h-4 w-4 text-[var(--color-text-secondary)]" />
              </Button>

              <Button
                variant="ghost"
                size="sm"
                onclick={() => handleExtract(entry)}
                disabled={zipViewerState.disabled}
                title="Extract"
              >
                <BaseIcon name={ExternalLink} class="h-4 w-4 text-[var(--color-text-secondary)]" />
              </Button>
            </div>
          </div>
        {/each}
      </div>
    {/if}
  </div>
</div>
