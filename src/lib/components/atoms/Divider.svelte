<script lang="ts">
  type Orientation = 'horizontal' | 'vertical';
  type Align = 'start' | 'center' | 'end';

  type Props = {
    orientation?: Orientation;
    label?: string;
    align?: Align;
    dashed?: boolean;
    class?: string;
  };

  let {
    orientation = 'horizontal',
    label,
    align = 'center',
    dashed = false,
    class: className = ''
  }: Props = $props();

  const isHorizontal = $derived(orientation === 'horizontal');

const baseLineClass = $derived(
  dashed ? 'border-dashed border-gray-300' : 'border-solid border-gray-200'
);

const leftLineFlex = $derived(
  align === 'start' ? 'flex-none w-4' : 'flex-1'
);

const rightLineFlex = $derived(
  align === 'end' ? 'flex-none w-4' : 'flex-1'
);
</script>

{#if isHorizontal}
  <div class="flex items-center text-sm text-gray-500 {className}">
    <span class="{leftLineFlex} border-t {baseLineClass}"></span>
    {#if label}
      <span class="px-3 uppercase tracking-widest text-xs font-medium">{label}</span>
    {/if}
    <span class="{rightLineFlex} border-t {baseLineClass}"></span>
  </div>
{:else}
  <span class="inline-block h-full w-px border-l {baseLineClass} {className}" aria-hidden="true"></span>
{/if}
