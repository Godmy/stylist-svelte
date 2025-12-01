<script lang="ts">
  import type { ITableHeaderProps } from './types';
  import { TableHeaderStyleManager } from './styles';

  let {
    class: className = '',
    content,
    ...restProps
  }: ITableHeaderProps = $props();

  const tableHeaderClasses = TableHeaderStyleManager.getTableHeaderClasses(String(className || ''));
</script>

<thead {...restProps} class={tableHeaderClasses}>
  {#if content}
    {@render content()}
  {/if}
</thead>
