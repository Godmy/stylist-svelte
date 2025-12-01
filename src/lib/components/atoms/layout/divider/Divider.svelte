<script lang="ts">
  import type { IDividerProps, DividerOrientation, DividerAlign } from './types';

  let {
    orientation = 'horizontal',
    label,
    align = 'center',
    dashed = false,
    class: className = ''
  }: IDividerProps = $props();

  const isHorizontal = $derived(orientation === 'horizontal');

const baseLineClass = $derived(
  dashed ? 'border-dashed border-[--color-border-secondary]' : 'border-solid border-[--color-border-secondary]'
);

const leftLineFlex = $derived(
  align === 'start' ? 'flex-none w-4' : 'flex-1'
);

const rightLineFlex = $derived(
  align === 'end' ? 'flex-none w-4' : 'flex-1'
);
</script>

{#if isHorizontal}
  <div class="flex items-center text-sm text-[--color-text-secondary] {className}">
    <span class="{leftLineFlex} border-t {baseLineClass}"></span>
    {#if label}
      <span class="px-3 uppercase tracking-widest text-xs font-medium text-[--color-text-tertiary]">{label}</span>
    {/if}
    <span class="{rightLineFlex} border-t {baseLineClass}"></span>
  </div>
{:else}
  <span class="inline-block h-full w-px border-l {baseLineClass} {className}" aria-hidden="true"></span>
{/if}
