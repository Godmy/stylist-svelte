<script lang="ts">
  import type { HTMLButtonAttributes } from 'svelte/elements';

  type Props = {
    page: number;
    isActive?: boolean;
    disabled?: boolean;
  } & HTMLButtonAttributes;

  let {
    page,
    isActive = false,
    disabled = false,
    ...restProps
  }: Props = $props();

  let classes = $derived(`
    flex items-center justify-center px-3 py-2 text-sm font-medium
    ${isActive
      ? 'bg-blue-600 text-white border-blue-700'
      : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'}
    ${disabled
      ? 'opacity-50 cursor-not-allowed'
      : 'cursor-pointer'}
    border
  `);
</script>

<button
  class={classes}
  disabled={disabled || isActive}
  aria-current={isActive ? 'page' : undefined}
  {...restProps}
>
  {page}
</button>