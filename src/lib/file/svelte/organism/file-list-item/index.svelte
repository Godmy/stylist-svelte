<script lang="ts">
  import type { InformationHTMLAttributes } from '$stylist/information/type/struct';
  import { Icon as BaseIcon } from '$stylist';
const File = 'file';
const Folder = 'folder';
const Download = 'download';
const Eye = 'eye';
const Archive = 'archive';
const Image = 'image';
const Music = 'music';
const Video = 'video';
const Code = 'code';
const FileText = 'file-text';
const MoreHorizontal = 'more-horizontal';

  import { Button } from '$lib';

  type FileType = 'file' | 'folder' | 'image' | 'video' | 'audio' | 'archive' | 'text' | 'code' | 'document';

  type FileItem = {
    id: string;
    name: string;
    type: FileType;
    size?: number; // in bytes
    modified?: Date;
    created?: Date;
    path?: string;
    thumbnail?: string; // For preview
    permissions?: string; // 'read', 'write', 'execute'
    owner?: string;
    icon?: string; // Custom icon
    selected?: boolean;
  };

  type RestProps = Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'>;

  type Props = RestProps & {
    item: FileItem;
    class?: string;
    cellClass?: string;
    onItemSelect?: (item: FileItem) => void;
    onItemDoubleClick?: (item: FileItem) => void;
    onItemAction?: (item: FileItem, action: string) => void;
    showThumbnail?: boolean;
    showSize?: boolean;
    showModified?: boolean;
    showOwner?: boolean;
    enableSelection?: boolean;
    disabled?: boolean;
    variant?: 'default' | 'compact';
  };

  let {
    item,
    class: hostClass = '',
    cellClass = '',
    onItemSelect,
    onItemDoubleClick,
    onItemAction,
    showThumbnail = false,
    showSize = true,
    showModified = true,
    showOwner = false,
    enableSelection = true,
    disabled = false,
    variant = 'default',
    ...restProps
  }: Props = $props();

  let isSelected = $state(item.selected || false);

  $effect(() => {
    isSelected = item.selected || false;
  });

  function handleSelect() {
    if (!disabled && enableSelection) {
      isSelected = !isSelected;
      onItemSelect?.({...item, selected: isSelected});
    }
  }

  function handleDoubleClick() {
    if (!disabled) {
      onItemDoubleClick?.(item);
    }
  }

  function handleAction(action: string) {
    if (!disabled) {
      onItemAction?.(item, action);
    }
  }

  function formatFileSize(bytes: number): string {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  function getFileIcon(item: FileItem) {
    if (item.type === 'folder') return Folder;
    if (item.type === 'image') return Image;
    if (item.type === 'video') return Video;
    if (item.type === 'audio') return Music;
    if (item.type === 'archive') return Archive;
    if (item.type === 'text' || item.type === 'document') return FileText;
    if (item.type === 'code') return Code;
    return File;
  }

  let FileIcon = getFileIcon(item);
</script>

<div 
  class={`file-list-item flex items-center p-3 border-b border-[var(--color-border-primary)] cursor-pointer ${
    isSelected ? 'bg-[var(--color-primary-50)]' : 'hover:bg-[var(--color-background-secondary)]'
  } ${
    variant === 'compact' ? 'py-2' : ''
  } ${
    disabled ? 'opacity-[var(--opacity-50)] cursor-not-allowed' : ''
  } ${hostClass}`}
  onclick={handleSelect}
  ondblclick={handleDoubleClick}
  {...restProps}
>
  {#if enableSelection}
    <input
      type="checkbox"
      class="h-4 w-4 text-[var(--color-primary-600)] rounded focus:ring-blue-500"
      checked={isSelected}
      onclick={(e) => e.stopPropagation()}
      onchange={handleSelect}
      disabled={disabled}
    />
  {/if}
  
  <div class="ml-3 flex-shrink-0">
    <BaseIcon name={File} class="h-5 w-5 text-[var(--color-text-secondary)]" />
  </div>
  
  {#if showThumbnail && item.thumbnail}
    <div class="ml-3 flex-shrink-0 w-8 h-8 rounded border border-[var(--color-border-primary)] overflow-hidden">
      <img 
        src={item.thumbnail} 
        alt={item.name} 
        class="w-full h-full object-cover"
      />
    </div>
  {/if}
  
  <div class="ml-3 min-w-0 flex-1">
    <div class={`font-medium truncate ${cellClass}`}>
      {item.name}
      {#if item.type === 'folder'}
        <span class="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[var(--color-primary-100)] text-[var(--color-primary-800)]">
          Folder
        </span>
      {/if}
    </div>
    
    {#if variant !== 'compact'}
      <div class="flex items-center text-xs text-[var(--color-text-secondary)] mt-1">
        {#if showSize && item.size}
          <span>{formatFileSize(item.size)}</span>
        {/if}
        {#if showModified && item.modified}
          <span class="mx-2">вЂў</span>
          <span>{item.modified.toLocaleDateString()}</span>
        {/if}
        {#if showOwner && item.owner}
          <span class="mx-2">вЂў</span>
          <span>{item.owner}</span>
        {/if}
      </div>
    {/if}
  </div>
  
  <div class="ml-4 flex items-center space-x-1">
    <Button 
      variant="ghost" 
      size="sm" 
      onclick={(e) => {
        e.stopPropagation();
        handleAction('preview');
      }}
      disabled={disabled}
    >
      <BaseIcon name={Eye} class="h-4 w-4 text-[var(--color-text-secondary)]" />
    </Button>
    <Button 
      variant="ghost" 
      size="sm" 
      onclick={(e) => {
        e.stopPropagation();
        handleAction('download');
      }}
      disabled={disabled}
    >
      <BaseIcon name={Download} class="h-4 w-4 text-[var(--color-text-secondary)]" />
    </Button>
    <Button 
      variant="ghost" 
      size="sm" 
      onclick={(e) => {
        e.stopPropagation();
        handleAction('more');
      }}
      disabled={disabled}
    >
      <BaseIcon name={MoreHorizontal} class="h-4 w-4 text-[var(--color-text-secondary)]" />
    </Button>
  </div>
</div>





