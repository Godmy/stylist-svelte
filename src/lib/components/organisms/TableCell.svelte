<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';

  type Snippet = any; // Placeholder for now

  type Props = {
    variant?: 'header' | 'data';
    align?: 'left' | 'center' | 'right';
    content?: Snippet; // Add content prop
  } & HTMLAttributes<HTMLTableCellElement>;

  let { variant = 'data', align = 'left', class: className = '', content, ...restProps }: Props = $props();

  let isHeader = $derived(variant === 'header');
  const alignmentMap: Record<NonNullable<Props['align']>, string> = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  };
  let alignmentClass = $derived(alignmentMap[align]);

  let classes = $derived(`
    px-6 py-4
    ${isHeader ? 'px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider' : 'whitespace-nowrap'}
    ${alignmentClass}
    ${className}
  `.trim());
</script>

{#if isHeader}
  <th class={classes} {...restProps}>
    {#if content}
      {@render content()}
    {/if}
  </th>
{:else}
  <td class={classes} {...restProps}>
    {#if content}
      {@render content()}
    {/if}
  </td>
{/if}
