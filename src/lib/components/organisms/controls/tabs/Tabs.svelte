<script lang="ts">
  import { setContext } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';

  type Snippet = any; // Placeholder for now

  type Props = {
    selectedId?: string;
    onTabChange?: (id: string) => void;
    class?: string;
    content?: Snippet; // Add content prop
  } & HTMLAttributes<HTMLDivElement>;

  let {
    selectedId,
    onTabChange,
    class: className = '',
    content, // Destructure content
    ...restProps
  }: Props = $props();

  const tabsId = Math.random().toString(36).substring(2, 9);
  let selectedTabId = $state<string>(selectedId || '');
  let tabs = $state<string[]>([]);

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

<div {...restProps} class="w-full {className}">
  {#if content}
    {@render content()}
  {/if}
</div>
