<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';

  type Snippet = any; // Placeholder for now

  type Props = {
    content?: Snippet; // Add content prop
  } & HTMLAttributes<HTMLTableSectionElement>;

  let { class: className = '', content, ...restProps }: Props = $props();
</script>

<tbody {...restProps} class="bg-white divide-y divide-gray-200 {className}">
  {#if content}
    {@render content()}
  {/if}
</tbody>
