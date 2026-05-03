<script lang="ts">
  import { Icon as BaseIcon } from '$stylist/media';
  import { Button } from '$stylist/control';
  import { DropZoneStyleManager } from '$stylist/file/class/style-manager/drop-zone';
  import { createDropZoneState } from '$stylist/file/function/state/drop-zone';
  import { formatFileSize } from '$stylist/file/function/script/drop-zone-format-file-size';
  import type { Props } from '$stylist/file/type/struct/drop-zone/props';

  let props: Props = $props();
  const state = createDropZoneState(props);
</script>

<div
  class={DropZoneStyleManager.getBaseClasses(state.isDragOver, state.disabled, state.classes)}
  ondragover={state.handleDragOver}
  ondragleave={state.handleDragLeave}
  ondrop={state.handleDrop}
  {...state.restProps}
>
  {#if state.children}
    {#if state.children}{@render state.children()}{/if}
  {:else}
    <div class="flex flex-col items-center justify-center">
      <BaseIcon name="upload" class="h-10 w-10 text-[var(--color-text-tertiary)] mb-2" />
      <h3 class="text-lg font-medium text-[var(--color-text-primary)]">{state.label}</h3>
      <p class="text-sm text-[var(--color-text-secondary)] mt-1">{state.description}</p>
      <p class="text-xs text-[var(--color-text-tertiary)] mt-2">Accepts: {state.accept}</p>
    </div>

    <input
      bind:this={state.fileInputElement}
      type="file"
      class="hidden"
      accept={state.accept}
      multiple={state.multiple}
      disabled={state.disabled}
      onchange={state.handleFileInput}
    />

    <div class="mt-4">
      <Button variant="secondary" onclick={state.browse} disabled={state.disabled}>
        Browse Files
      </Button>
    </div>
  {/if}

  {#if state.items.length > 0}
    <div class="mt-6">
      <div class="flex justify-between items-center mb-3">
        <h4 class="text-md font-medium text-[var(--color-text-primary)]">Dropped Items ({state.items.length})</h4>
        <Button variant="ghost" size="sm" onclick={state.clearItems} disabled={state.disabled}>
          Clear All
        </Button>
      </div>

      <div class={DropZoneStyleManager.getListClasses()}>
        {#each state.items as item}
          <div class={DropZoneStyleManager.getItemClasses()}>
            <div class="flex items-center truncate">
              <div class="flex-shrink-0 h-5 w-5 text-[var(--color-primary-500)]">
                <BaseIcon name="check" class="h-5 w-5" />
              </div>
              <div class="ml-3 min-w-0">
                <p class="text-sm font-medium text-[var(--color-text-primary)] truncate">{item.name}</p>
                <p class="text-xs text-[var(--color-text-secondary)]">{item.type} • {formatFileSize(item.size || 0)}</p>

              </div>
            </div>

            <div class="flex items-center">
              <Button variant="ghost" size="sm" onclick={() => state.removeDroppedItem(item.id)} disabled={state.disabled}>
                <BaseIcon name="x" class="h-4 w-4" />
              </Button>
            </div>
          </div>
        {/each}
      </div>
    </div>
  {/if}

  {#if state.isProcessing}
    <div class="mt-4 flex justify-center">
      <div class="text-sm text-[var(--color-text-secondary)]">Processing...</div>
    </div>
  {/if}
</div>
