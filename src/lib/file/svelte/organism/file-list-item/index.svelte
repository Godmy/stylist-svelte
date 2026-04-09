<script lang="ts">
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
  import { createFileListItemState } from '$stylist/file/function/state/file-list-item';
  import type { FileItem } from '$stylist/file/type/struct/file-list-item/file-item';
  import type { Props } from '$stylist/file/type/struct/file-list-item/props';
  import {
    handleSelect as handleSelectFn,
    handleDoubleClick as handleDoubleClickFn,
    handleAction as handleActionFn,
    formatFileSize,
    getFileIcon,
  } from '$stylist/file/function/script/file-list-item';

  let props: Props = $props();

  let item = $derived(props.item);
  let showThumbnail = $derived(props.showThumbnail ?? false);
  let showSize = $derived(props.showSize ?? true);
  let showModified = $derived(props.showModified ?? true);
  let showOwner = $derived(props.showOwner ?? false);
  let enableSelection = $derived(props.enableSelection ?? true);
  let variant = $derived(props.variant ?? 'default');
  let isSelected = $state(item?.selected || false);

  $effect(() => {
    isSelected = item?.selected || false;
  });

  const state = createFileListItemState(props);

  let restProps = $derived.by(() => {
    const {
      item: _item,
      class: _class, cellClass,
      onItemSelect, onItemDoubleClick, onItemAction,
      showThumbnail: _showThumbnail, showSize: _showSize, showModified: _showModified,
      showOwner: _showOwner, enableSelection: _enableSelection, disabled, variant: _variant,
      ...rest
    } = props;
    return rest;
  });

  function setIsSelected(value: boolean) {
    isSelected = value;
  }

  function handleSelect() {
    handleSelectFn(item, state.disabled, enableSelection, isSelected, setIsSelected, onItemSelect);
  }

  function handleDoubleClick() {
    handleDoubleClickFn(item, state.disabled, onItemDoubleClick);
  }

  function handleAction(action: string) {
    handleActionFn(item, action, state.disabled, onItemAction);
  }

  let FileIcon = getFileIcon(item);
</script>

<div
  class={`file-list-item flex items-center p-3 border-b border-[var(--color-border-primary)] cursor-pointer ${
    isSelected ? 'bg-[var(--color-primary-50)]' : 'hover:bg-[var(--color-background-secondary)]'
  } ${
    variant === 'compact' ? 'py-2' : ''
  } ${
    state.disabled ? 'opacity-[var(--opacity-50)] cursor-not-allowed' : ''
  } ${state.classes}`}
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
      disabled={state.disabled}
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
    <div class={`font-medium truncate ${props.cellClass ?? ''}`}>
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
          <span class="mx-2">•</span>
          <span>{item.modified.toLocaleDateString()}</span>
        {/if}
        {#if showOwner && item.owner}
          <span class="mx-2">•</span>
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
      disabled={state.disabled}
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
      disabled={state.disabled}
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
      disabled={state.disabled}
    >
      <BaseIcon name={MoreHorizontal} class="h-4 w-4 text-[var(--color-text-secondary)]" />
    </Button>
  </div>
</div>
