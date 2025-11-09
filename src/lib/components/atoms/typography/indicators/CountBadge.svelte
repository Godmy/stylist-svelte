<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import type { Snippet } from 'svelte';

  type Props = {
    count?: number;
    max?: number;
    showZero?: boolean;
    children?: Snippet;
  } & HTMLAttributes<HTMLSpanElement>;

  let {
    count = 0,
    max = 99,
    showZero = false,
    children,
    ...restProps
  }: Props = $props();

  let displayValue = $derived(
    count > max ? `${max}+` : count.toString()
  );
</script>

{#if showZero || count > 0}
  <span class="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-500 rounded-full" {...restProps}>
    {displayValue}
  </span>
{/if}