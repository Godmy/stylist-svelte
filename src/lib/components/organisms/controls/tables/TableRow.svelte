<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';

  type Snippet = any; // Placeholder for now

  type Props = {
    striped?: boolean;
    active?: boolean;
    content?: Snippet; // Add content prop
  } & HTMLAttributes<HTMLTableRowElement>;

  let { striped, active, class: className = '', content, ...restProps }: Props = $props();

  let classes = $derived(`
    ${striped ? 'odd:bg-white even:bg-gray-50' : 'bg-white'}
    ${active ? 'bg-blue-50' : ''}
    ${className}
  `.trim());
</script>

<tr {...restProps} class={classes}>
  {#if content}
    {@render content()}
  {/if}
</tr>
