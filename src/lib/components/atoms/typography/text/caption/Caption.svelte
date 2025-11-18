<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import type { Snippet } from 'svelte';

  type Props = {
    muted?: boolean;
    children?: Snippet;
  } & HTMLAttributes<HTMLDivElement>;

  let {
    muted = false,
    children,
    ...restProps
  }: Props = $props();

  let mutedClass = muted ? 'text-gray-500' : 'text-gray-700';
</script>

<div class={`text-xs ${mutedClass}`} {...restProps}>
  {@render children?.()}
</div>