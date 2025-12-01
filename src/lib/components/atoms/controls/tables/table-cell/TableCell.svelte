<script lang="ts">
  import type { ITableCellProps } from './types';
  import { TableCellStyleManager } from './styles';

  let {
    variant = 'data',
    align = 'left',
    class: className = '',
    content,
    ...restProps
  }: ITableCellProps = $props();

  let isHeader = $derived(variant === 'header');
  const cellClasses = TableCellStyleManager.getTableCellClasses(variant, align, String(className || ''));
</script>

{#if isHeader}
  <th class={cellClasses} {...restProps}>
    {#if content}
      {@render content()}
    {/if}
  </th>
{:else}
  <td class={cellClasses} {...restProps}>
    {#if content}
      {@render content()}
    {/if}
  </td>
{/if}
