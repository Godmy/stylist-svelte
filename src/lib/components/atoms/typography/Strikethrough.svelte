<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import type { Snippet } from 'svelte';

  type Props = {
    children: Snippet;
    className?: string;
    ariaHidden?: boolean;
  } & HTMLAttributes<HTMLElement>;

  const {
    children,
    className = '',
    ariaHidden = undefined,
    ...restProps
  }: Props = $props();

  // The aria-hidden attribute handles boolean values correctly.
  // If undefined, the attribute will not be rendered.
  const ariaHiddenValue = $derived(ariaHidden);

</script>

<s class={`line-through ${className}`} aria-hidden={ariaHiddenValue} {...restProps}>
  {@render children()}
</s>