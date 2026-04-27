<script lang="ts">
  import { Icon as BaseIcon } from '$stylist';
  import { Button } from '$lib';
  import { createFileListItemState } from '$stylist/file/function/state/file-list-item';
  import { formatFileSize } from '$stylist/file/function/script/file-list-item-format-file-size';
  import type { Props } from '$stylist/file/type/struct/file-list-item/props';

  let props: Props = $props();
  const state = createFileListItemState(props);
</script>

<div
  class={`file-list-item flex items-center p-3 border-b border-[var(--color-border-primary)] cursor-pointer ${
    state.isSelected ? 'bg-[var(--color-primary-50)]' : 'hover:bg-[var(--color-background-secondary)]'
  } ${state.variant === 'compact' ? 'py-2' : ''} ${state.disabled ? 'opacity-[var(--opacity-50)] cursor-not-allowed' : ''} ${state.classes}`}
  onclick={state.handleSelect}
  ondblclick={state.handleDoubleClick}
  {...state.restProps}
>
  {#if state.enableSelection}
    <input
      type="checkbox"
      class="h-4 w-4 text-[var(--color-primary-600)] rounded focus:ring-blue-500"
      checked={state.isSelected}
      onclick={(event) => event.stopPropagation()}
      onchange={state.handleSelect}
      disabled={state.disabled}
    />
  {/if}

  <div class="ml-3 flex-shrink-0">
    <BaseIcon name={state.iconName} class="h-5 w-5 text-[var(--color-text-secondary)]" />
  </div>

  {#if state.showThumbnail && state.item.thumbnail}
    <div class="ml-3 flex-shrink-0 w-8 h-8 rounded border border-[var(--color-border-primary)] overflow-hidden">
      <img src={state.item.thumbnail} alt={state.item.name} class="w-full h-full object-cover" />
    </div>
  {/if}

  <div class="ml-3 min-w-0 flex-1">
    <div class={`font-medium truncate ${props.cellClass ?? ''}`}>
      {state.item.name}
      {#if state.item.type === 'folder'}
        <span class="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[var(--color-primary-100)] text-[var(--color-primary-800)]">
          Folder
        </span>
      {/if}
    </div>

    {#if state.variant !== 'compact'}
      <div class="flex items-center text-xs text-[var(--color-text-secondary)] mt-1">
        {#if state.showSize && state.item.size}
          <span>{formatFileSize(state.item.size)}</span>
        {/if}
        {#if state.showModified && state.item.modified}
          <span class="mx-2">•</span>
          <span>{state.item.modified.toLocaleDateString()}</span>
        {/if}
        {#if state.showOwner && state.item.owner}
          <span class="mx-2">•</span>
          <span>{state.item.owner}</span>
        {/if}

      </div>
    {/if}
  </div>

  <div class="ml-4 flex items-center space-x-1">
    <Button variant="ghost" size="sm" onclick={(event) => {
      event.stopPropagation();
      state.handleAction('preview');
    }} disabled={state.disabled}>
      <BaseIcon name="eye" class="h-4 w-4 text-[var(--color-text-secondary)]" />
    </Button>
    <Button variant="ghost" size="sm" onclick={(event) => {
      event.stopPropagation();
      state.handleAction('download');
    }} disabled={state.disabled}>
      <BaseIcon name="download" class="h-4 w-4 text-[var(--color-text-secondary)]" />
    </Button>
    <Button variant="ghost" size="sm" onclick={(event) => {
      event.stopPropagation();
      state.handleAction('more');
    }} disabled={state.disabled}>
      <BaseIcon name="more-horizontal" class="h-4 w-4 text-[var(--color-text-secondary)]" />
    </Button>
  </div>
</div>
