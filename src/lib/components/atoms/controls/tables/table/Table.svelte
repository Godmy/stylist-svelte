<script lang="ts">
  import type { ITableProps } from './types';
  import { TableStyleManager } from './styles';

  let {
    caption,
    striped,
    bordered,
    hoverable,
    class: className = '',
    content,
    ...restProps
  }: ITableProps = $props();

  const tableClasses = TableStyleManager.getTableClasses(String(className || ''));
  const captionClasses = TableStyleManager.getCaptionClasses();
</script>

<table {...restProps} class={tableClasses}>
  {#if caption}
    <caption class={captionClasses}>
      {caption}
    </caption>
  {/if}
  {#if content}
    {@render content()}
  {/if}
</table>
