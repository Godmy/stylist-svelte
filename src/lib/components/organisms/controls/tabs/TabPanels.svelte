<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';

  type Snippet = any; // Placeholder for now

  type Props = {
    class?: string;
    content?: Snippet; // Add content prop
  } & HTMLAttributes<HTMLDivElement>;

  let { class: className = '', content, ...restProps }: Props = $props();
</script>

<div {...restProps} class="mt-4 {className}">
  {#if content}
    {@render content()}
  {/if}
</div>
