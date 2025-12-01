<script lang="ts">
  import type { ITabListProps } from './types';
  import { TabListStyleManager } from './styles';

  let {
    class: className = '',
    content,
    ...restProps
  }: ITabListProps = $props();

  const tabListClasses = TabListStyleManager.getTabListClasses(className);
</script>

<div
  {...restProps}
  role="tablist"
  aria-orientation="horizontal"
  class={tabListClasses}
>
  {#if content}
    {@render content()}
  {/if}
</div>
