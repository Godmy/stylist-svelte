<script lang="ts">
  import type { ITabPanelsProps } from './types';
  import { TabPanelsStyleManager } from './styles';

  let {
    class: className = '',
    content,
    ...restProps
  }: ITabPanelsProps = $props();

  const panelsClasses = TabPanelsStyleManager.getTabPanelsClasses(className);
</script>

<div {...restProps} class={panelsClasses}>
  {#if content}
    {@render content()}
  {/if}
</div>
