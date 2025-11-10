<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { File, Folder, Archive, Download, Eye, Search, ChevronRight, ChevronDown, Copy, ExternalLink } from 'lucide-svelte';
  import Button from '../../atoms/controls/buttons/Button.svelte';
  import Input from '../../atoms/input/base/Input.svelte';

  type ZipEntryType = 'file' | 'directory';

  type ZipEntry = {
    id: string;
    name: string;
    type: ZipEntryType;
    size?: number; // in bytes
    compressedSize?: number;
    modified?: Date;
    isText?: boolean; // Is it a text file that can be viewed
    path: string;
    parentPath?: string;
  };

  type RestProps = Omit<HTMLAttributes<HTMLDivElement>, 'class'>;

  type Props = RestProps & {
    entries: ZipEntry[];
    archiveName?: string;
    class?: string;
    entryClass?: string;
    headerClass?: string;
    onEntryClick?: (entry: ZipEntry) => void;
    onEntryPreview?: (entry: ZipEntry) => void;
    onEntryDownload?: (entry: ZipEntry) => void;
    onEntryExtract?: (entry: ZipEntry) => void;
    searchable?: boolean;
    showPath?: boolean;
    enableFiltering?: boolean;
    defaultExpanded?: boolean;
    disabled?: boolean;
  };

  let {
    entries = [],
    archiveName = 'Archive.zip',
    class: hostClass = '',
    entryClass = '',
    headerClass = '',
    onEntryClick,
    onEntryPreview,
    onEntryDownload,
    onEntryExtract,
    searchable = true,
    showPath = true,
    enableFiltering = true,
    defaultExpanded = false,
    disabled = false,
    ...restProps
  }: Props = $props();

  let searchQuery = $state('');
  let expandedFolders = $state<Set<string>>(new Set());
  let currentPath = $state('/');
  let filteredEntries = $derived(() => {
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

  // Build a tree structure for the zip entries
  let zipTree = $derived(() => {
    const tree: ZipEntry[] = [];
    const map = new Map<string, ZipEntry>();
    
    // Create map for quick lookup
    for (const entry of entries) {
      map.set(entry.path, entry);
    }
    
    // Add entries to appropriate parent
    for (const entry of entries) {
      if (entry.type === 'directory') {
        if (!expandedFolders.has(entry.path) && !defaultExpanded) {
          continue; // Skip unexpanded directories
        }
        
        // Find parent directory
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
        // For files, check if parent directory is expanded
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

  function handleSearchInput(e: Event) {
    const target = e.target as HTMLInputElement;
    searchQuery = target.value;
  }

  function handleEntryClick(entry: ZipEntry) {
    if (disabled) return;
    
    if (entry.type === 'directory') {
      const isExpanded = expandedFolders.has(entry.path);
      if (isExpanded) {
        expandedFolders.delete(entry.path);
      } else {
        expandedFolders.add(entry.path);
      }
    }
    
    onEntryClick?.(entry);
  }

  function handlePreview(entry: ZipEntry) {
    if (disabled) return;
    onEntryPreview?.(entry);
  }

  function handleDownload(entry: ZipEntry) {
    if (disabled) return;
    onEntryDownload?.(entry);
  }

  function handleExtract(entry: ZipEntry) {
    if (disabled) return;
    onEntryExtract?.(entry);
  }

  function toggleFolder(entry: ZipEntry) {
    if (entry.type === 'file' || disabled) return;
    
    const isExpanded = expandedFolders.has(entry.path);
    if (isExpanded) {
      expandedFolders.delete(entry.path);
    } else {
      expandedFolders.add(entry.path);
    }
  }

  function formatFileSize(bytes: number): string {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  function getEntryIcon(entry: ZipEntry) {
    return entry.type === 'directory' ? Folder : File;
  }

  let ArchiveIcon = Archive;
  let FolderIcon = Folder;
  let FileIcon = File;
  let ChevronRightIcon = ChevronRight;
  let ChevronDownIcon = ChevronDown;
  let SearchIcon = Search;
  let DownloadIcon = Download;
  let EyeIcon = Eye;
  let ExternalLinkIcon = ExternalLink;
  let CopyIcon = Copy;
</script>

<div class={`zip-viewer border rounded-lg overflow-hidden ${hostClass}`} {...restProps}>
  <!-- Archive header -->
  <div class={`p-4 bg-gray-50 border-b ${headerClass}`}>
    <div class="flex items-center">
      <ArchiveIcon class="h-6 w-6 text-blue-500 mr-3" />
      <div>
        <h3 class="font-medium text-gray-900">{archiveName}</h3>
        <p class="text-sm text-gray-500">{entries.length} items</p>
      </div>
    </div>
    
    {#if searchable}
      <div class="mt-3 relative">
        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <SearchIcon class="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          class="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          placeholder="Search in archive..."
          value={searchQuery}
          oninput={handleSearchInput}
          disabled={disabled}
        />
      </div>
    {/if}
  </div>
  
  <!-- Entries list -->
  <div class="overflow-y-auto max-h-[500px]">
    {#if zipTree.length === 0}
      <div class="text-center py-8 text-gray-500">
        {searchQuery ? 'No matching items found' : 'Archive is empty'}
      </div>
    {:else}
      <div class="divide-y divide-gray-200">
        {#each zipTree() as entry}
          {@const EntryIcon = getEntryIcon(entry)}
          <div 
            class={`flex items-center p-3 hover:bg-gray-50 ${
              entry.type === 'directory' ? 'bg-gray-25' : ''
            } ${entryClass}`}
          >
            <button
              type="button"
              class="flex h-6 w-6 items-center justify-center rounded hover:bg-gray-200 focus:outline-none mr-2"
              aria-label={expandedFolders.has(entry.path) ? `Collapse ${entry.name}` : `Expand ${entry.name}`}
              onclick={() => toggleFolder(entry)}
              disabled={entry.type === 'file' || disabled}
            >
              {#if entry.type === 'directory'}
                {#if expandedFolders.has(entry.path)}
                  <ChevronDownIcon class="h-4 w-4 text-gray-600" />
                {:else}
                  <ChevronRightIcon class="h-4 w-4 text-gray-600" />
                {/if}
              {/if}
            </button>
            
            <EntryIcon class={`h-5 w-5 mr-3 ${entry.type === 'directory' ? 'text-blue-500' : 'text-gray-500'}`} />
            
            <div class="flex-1 min-w-0">
              <div class="flex items-center">
                <span class="font-medium text-gray-900 truncate">{entry.name}</span>
                {#if entry.type === 'directory'}
                  <span class="ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    Directory
                  </span>
                {/if}
              </div>
              <div class="flex items-center text-xs text-gray-500 mt-1">
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
                  disabled={disabled}
                  title="Preview"
                >
                  <EyeIcon class="h-4 w-4 text-gray-500" />
                </Button>
              {/if}
              
              <Button 
                variant="ghost" 
                size="sm" 
                onclick={() => handleDownload(entry)}
                disabled={disabled}
                title="Download"
              >
                <DownloadIcon class="h-4 w-4 text-gray-500" />
              </Button>
              
              <Button 
                variant="ghost" 
                size="sm" 
                onclick={() => handleExtract(entry)}
                disabled={disabled}
                title="Extract"
              >
                <ExternalLinkIcon class="h-4 w-4 text-gray-500" />
              </Button>
            </div>
          </div>
        {/each}
      </div>
    {/if}
  </div>
</div>
