<script lang="ts">
  import type { ITableBodyProps } from './types';
  import { TableBodyStyleManager } from './styles';

  let {
    class: className = '',
    content,
    ...restProps
  }: ITableBodyProps = $props();

  const tableBodyClasses = TableBodyStyleManager.getTableBodyClasses(String(className || ''));
</script>

<tbody {...restProps} class={tableBodyClasses}>
  {#if content}
    {@render content()}
  {/if}
</tbody>
