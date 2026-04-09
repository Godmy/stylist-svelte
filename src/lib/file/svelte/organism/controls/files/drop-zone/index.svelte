<script lang="ts">
  import type { Snippet } from 'svelte';
  import { Icon as BaseIcon } from '$stylist';
  const Upload = 'upload';
  const X = 'x';
  const Check = 'check';
  import { Button } from '$stylist';
  import { createDropZoneState } from '$stylist/file/function/state/drop-zone';
  import type { Props } from '$stylist/file/type/struct/drop-zone/props';
  import type { DropItem } from '$stylist/file/type/struct/drop-zone/item';
  import {
    handleDragOver as handleDragOverFn,
    handleDragLeave as handleDragLeaveFn,
    handleDrop as handleDropFn,
    handleFileInput as handleFileInputFn,
    processFiles as processFilesFn,
    removeItem as removeItemFn,
    clearAll as clearAllFn,
    formatFileSize,
  } from '$stylist/file/function/script/drop-zone';

  let props: Props = $props();

  let isDragOver = $state(false);
  let items = $state<DropItem[]>([]);
  let isProcessing = $state(false);
  let accept = $derived(props.accept ?? '');
  let multiple = $derived(props.multiple ?? false);
  let maxSize = $derived(props.maxSize);
  let maxItems = $derived(props.maxItems);
  let label = $derived(props.label);
  let description = $derived(props.description);
  let children = $derived(props.children);
  const state = createDropZoneState(props);

  let restProps = $derived.by(() => {
    const {
      children: _children, class: _class, accept: _accept, multiple: _multiple,
      disabled, maxSize: _maxSize, maxItems: _maxItems,
      onDrop, onDragOver, onDragLeave, onItemAdded, onItemRemoved,
      preview, label: _label, description: _description,
      ...rest
    } = props;
    return rest;
  });
</script>

<div
  class={`c-drop-zone border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${
    isDragOver ? 'border-[var(--color-primary-500)] bg-[var(--color-primary-50)]' : 'border-[var(--color-border-primary)] hover:border-[var(--color-border-primary)]'
  } ${state.disabled ? 'opacity-[var(--opacity-50)] cursor-not-allowed' : ''} ${state.classes}`}
  ondragover={(e) => {
    e.preventDefault();
    isDragOver = true;
    props.onDragOver?.(e);
  }}
  ondragleave={(e) => {
    e.preventDefault();
    isDragOver = false;
    props.onDragLeave?.(e);
  }}
  ondrop={(e) => {
    e.preventDefault();
    isDragOver = false;
    if (state.disabled) return;
    const files = e.dataTransfer?.files;
    if (files && files.length > 0) {
      isProcessing = true;
      const result = processFiles(files, items, props.accept ?? '*', props.maxSize ?? Infinity, props.maxItems ?? Infinity, props.onItemAdded);
      items = result;
      isProcessing = false;
      props.onDrop?.(result);
    }
  }}
  {...restProps}
>
  {#if children}
    {@render children()}
  {:else}
    <div class="flex flex-col items-center justify-center">
      <BaseIcon name={Upload} class="h-10 w-10 text-[var(--color-text-tertiary)] mb-2" />
      <h3 class="text-lg font-medium text-[var(--color-text-primary)]">{label}</h3>
      <p class="text-sm text-[var(--color-text-secondary)] mt-1">{description}</p>
      <p class="text-xs text-[var(--color-text-tertiary)] mt-2">Accepts: {accept}</p>
    </div>

    <input
      type="file"
      class="hidden"
      accept={accept}
      multiple={multiple}
      disabled={disabled}
      onchange={(e) => {
        if (state.disabled) return;
        const target = e.target as HTMLInputElement;
        if (target.files && target.files.length > 0) {
          isProcessing = true;
          const result = processFiles(target.files, items, props.accept ?? '*', props.maxSize ?? Infinity, props.maxItems ?? Infinity, props.onItemAdded);
          items = result;
          isProcessing = false;
          props.onDrop?.(result);
        }
      }}
    />

    <div class="mt-4">
      <Button
        variant="secondary"
        onclick={(e) => {
          e.preventDefault();
          const element = e.target as HTMLElement;
          const parentElement = element.parentElement;
          const fileInput = parentElement ? parentElement.querySelector('input[type="file"]') : null;
          if (fileInput) (fileInput as HTMLInputElement).click();
        }}
        disabled={state.disabled}
      >
        Browse Files
      </Button>
    </div>
  {/if}

  {#if items.length > 0}
    <div class="mt-6">
      <div class="flex justify-between items-center mb-3">
        <h4 class="text-md font-medium text-[var(--color-text-primary)]">Dropped Items ({items.length})</h4>
        <Button
          variant="ghost"
          size="sm"
          onclick={() => { items = []; }}
          disabled={state.disabled}
        >
          Clear All
        </Button>
      </div>

      <div class="space-y-2 max-h-60 overflow-y-auto">
        {#each items as item}
          <div class="flex items-center justify-between p-3 bg-[var(--color-background-primary)] border border-[var(--color-border-primary)] rounded-md">
            <div class="flex items-center truncate">
              <div class="flex-shrink-0 h-5 w-5 text-[var(--color-primary-500)]">
                <BaseIcon name={Check} class="h-5 w-5" />
              </div>
              <div class="ml-3 min-w-0">
                <p class="text-sm font-medium text-[var(--color-text-primary)] truncate">{item.name}</p>
                <p class="text-xs text-[var(--color-text-secondary)]">{item.type} • {formatFileSize(item.size || 0)}</p>
              </div>
            </div>

            <div class="flex items-center">
              <Button
                variant="ghost"
                size="sm"
                onclick={() => { items = items.filter((i: DropItem) => i.id !== item.id); props.onItemRemoved?.(item); }}
                disabled={state.disabled}
              >
                <BaseIcon name={X} class="h-4 w-4" />
              </Button>
            </div>
          </div>
        {/each}
      </div>
    </div>
  {/if}

  {#if isProcessing}
    <div class="mt-4 flex justify-center">
      <div class="text-sm text-[var(--color-text-secondary)]">Processing...</div>
    </div>
  {/if}
</div>
