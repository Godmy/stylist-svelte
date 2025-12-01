<script lang="ts">
  import { getContext } from 'svelte';
  import type { ITabPanelProps } from './types';
  import { TabPanelStyleManager } from './styles';

  let { id, class: className = '', children, ...restProps }: ITabPanelProps = $props();

  const context = getContext<{
    tabsId: string;
    selectedTabId: string;
    registerTab: (id: string) => void;
    unregisterTab: (id: string) => void;
    handleTabChange: (id: string) => void;
  }>('tabs-context');

  let isSelected = $derived(context.selectedTabId === id);
  let tabId = $derived(`tab-${context.tabsId}-${id}`);
  let panelId = $derived(`panel-${context.tabsId}-${id}`);

  const panelClasses = $derived.by(() => TabPanelStyleManager.getTabPanelClasses(isSelected, String(className || '')));
</script>

<div
  {...restProps}
  id={panelId}
  role="tabpanel"
  aria-labelledby={tabId}
  hidden={!isSelected}
  class={panelClasses}
>
  {#if isSelected}
    {@render children()}
  {/if}
</div>
