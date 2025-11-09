<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import type { Snippet } from 'svelte';

  type Props = {
    current?: boolean;
    href?: string;
    children?: Snippet;
  } & HTMLAttributes<HTMLElement>;

  let {
    current = false,
    href,
    children,
    ...restProps
  }: Props = $props();

  let classes = $derived(
    current 
      ? 'text-gray-500 cursor-default' 
      : 'text-blue-600 hover:text-blue-800 hover:underline'
  );
</script>

{#if current}
  <span class={`inline-block ${classes}`} {...restProps}>
    {@render children?.()}
  </span>
{:else}
  <a href={href} class={`inline-block ${classes}`} {...restProps}>
    {@render children?.()}
  </a>
{/if}