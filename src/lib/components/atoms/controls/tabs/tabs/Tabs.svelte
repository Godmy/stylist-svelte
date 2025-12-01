<script lang="ts">
  import { setContext } from 'svelte';
  import type { ITabsProps } from './types';
  import { TabsStyleManager } from './styles';

  let {
    selectedId,
    onTabChange,
    class: className = '',
    content, // Destructure content
    ...restProps
  }: ITabsProps = $props();

  const tabsId = Math.random().toString(36).substring(2, 9);
  let selectedTabId = $state<string>(selectedId || '');
  let tabs = $state<string[]>([]);

  const tabsClasses = TabsStyleManager.getTabsClasses(className);

  function handleTabChange(id: string) {
    selectedTabId = id;
    onTabChange?.(id);
  }

  function registerTab(id: string) {
    if (!tabs.includes(id)) {
      tabs = [...tabs, id];
      if (tabs.length === 1 && !selectedId) {
        selectedTabId = id;
      }
    }
  }

  function unregisterTab(id: string) {
    tabs = tabs.filter(tabId => tabId !== id);
  }

  setContext('tabs-context', {
    tabsId,
    get selectedTabId() { return selectedTabId; },
    registerTab,
    unregisterTab,
    handleTabChange
  });
</script>

<div {...restProps} class={tabsClasses}>
  {#if content}
    {@render content()}
  {/if}
</div>
