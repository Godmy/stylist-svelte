<script lang="ts">
  import { InteractionInputStyleManager } from '$stylist/design-system/styles/interaction/interaction-input';
  import type { AdvancedColorPickerProps } from '$stylist/design-system/contracts/interaction/advanced-color-picker';

  let {
    value = 'var(--color-text-primary)',
    disabled = false,
    showInput = true,
    showPalette = true,
    class: className = '',
    onInput,
    onChange,
    ...restProps
  }: AdvancedColorPickerProps = $props();

  let isOpen = $state(false);
  let internalValue = $state(value);

  $effect(() => {
    internalValue = value || 'var(--color-text-primary)';
  });

  function setColor(color: string) {
    internalValue = color;
    onInput?.(color);
    onChange?.(color);
  }
</script>

<div class={InteractionInputStyleManager.root('c-advanced-color-picker relative inline-block', className)} {...restProps}>
  <button type="button" class={InteractionInputStyleManager.input('flex items-center px-3 py-2 min-w-[140px]')} onclick={() => !disabled && (isOpen = !isOpen)} disabled={disabled}>
    <div class="w-6 h-6 rounded border mr-2" style="background-color: {internalValue}"></div>
    {#if showInput}<input type="text" bind:value={internalValue} class="outline-none bg-transparent w-24" onblur={() => setColor(internalValue)} />{/if}
  </button>

  {#if isOpen && !disabled}
    <div class={InteractionInputStyleManager.panel('absolute top-full left-0 mt-2 p-3 z-[var(--z-index-popover)]')}>
      {#if showPalette}
        <div class="grid grid-cols-5 gap-1 mb-2">
          {#each ['var(--color-text-primary)','var(--color-text-secondary)','var(--color-danger-600)','var(--color-warning-500)','var(--color-warning-200)','var(--color-success-500)','var(--color-info-500)','var(--color-primary-600)','var(--color-secondary-500)','var(--color-background-primary)'] as color}
            <button type="button" aria-label={`Select color ${color}`} class="w-6 h-6 rounded border" style="background-color: {color}" onclick={() => setColor(color)}></button>
          {/each}
        </div>
      {/if}
      <input type="color" bind:value={internalValue} oninput={() => onInput?.(internalValue)} onchange={() => onChange?.(internalValue)} />
      <button type="button" class="ml-2 px-2 py-1 border rounded" onclick={() => (isOpen = false)}>OK</button>
    </div>
  {/if}
</div>






