<script lang="ts">
  import type { HTMLButtonAttributes } from 'svelte/elements';
  import { getContext } from 'svelte';
  import type { Snippet } from 'svelte';

  type Props = {
    value: string;
    disabled?: boolean;
    children?: Snippet;
  } & HTMLButtonAttributes;

  let {
    value,
    disabled = false,
    children,
    ...restProps
  }: Props = $props();

  // This component expects to be inside ToggleGroupRoot and receive context
  type ToggleGroupContext = {
    updateValue: (val: string) => void;
    value: string | string[] | null | undefined;
    disabled: boolean;
  };

  let { updateValue, value: groupValue, disabled: groupDisabled }: ToggleGroupContext = getContext('toggleGroup');

  let itemDisabled = $derived(disabled || groupDisabled);

  let isActive = $derived(() => {
    if (Array.isArray(groupValue)) {
      return groupValue.includes(value);
    }
    return groupValue === value;
  });

  let classes = $derived(`
    inline-flex items-center justify-center rounded-sm px-3 py-1 text-sm font-medium
    ${isActive()
      ? 'bg-white text-gray-900 shadow-sm'
      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'}
    ${itemDisabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
  `);

  function handleClick() {
    if (!itemDisabled && updateValue) {
      updateValue(value);
    }
  }
</script>

<button
  class={classes}
  disabled={itemDisabled}
  onclick={handleClick}
  type="button"
  {...restProps}
>
  {@render children?.()}
</button>