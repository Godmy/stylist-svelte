<script lang="ts">
  import { getContext, onMount, onDestroy } from 'svelte';
  import type { ITabProps } from './types';
  import { TabStyleManager } from './styles';

  let { id, class: className = '', children, ...restProps }: ITabProps = $props();

  const context = getContext<{
    tabsId: string;
    selectedTabId: string;
    registerTab: (id: string) => void;
    unregisterTab: (id: string) => void;
    handleTabChange: (id: string) => void;
  }>('tabs-context');

  onMount(() => {
    context.registerTab(id);
  });

  onDestroy(() => {
    context.unregisterTab(id);
  });

  let isSelected = $derived(context.selectedTabId === id);
  let tabId = $derived(`tab-${context.tabsId}-${id}`);
  let panelId = $derived(`panel-${context.tabsId}-${id}`);

  let tabClasses = $derived(TabStyleManager.getTabClasses(isSelected, className));

  function handleClick() {
    context.handleTabChange(id);
  }
</script>

<button
  {...restProps}
  id={tabId}
  role="tab"
  aria-selected={isSelected}
  aria-controls={panelId}
  class={tabClasses}
  onclick={handleClick}
>
  {@render children()}
</button>
