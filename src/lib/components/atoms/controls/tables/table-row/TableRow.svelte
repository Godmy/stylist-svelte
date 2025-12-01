<script lang="ts">
  import type { ITableRowProps } from './types';
  import { TableRowStyleManager } from './styles';

  let {
    striped = false,
    active = false,
    class: className = '',
    content,
    ...restProps
  }: ITableRowProps = $props();

  const rowClasses = TableRowStyleManager.getTableRowClasses(striped, active, String(className || ''));
</script>

<tr {...restProps} class={rowClasses}>
  {#if content}
    {@render content()}
  {/if}
</tr>
