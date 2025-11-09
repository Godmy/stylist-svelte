<script lang="ts">
  import { getContext, onMount, onDestroy } from 'svelte';
  import type { HTMLButtonAttributes } from 'svelte/elements';

  type Props = {
    id: string;
    selected?: boolean;
    class?: string;
    children?: any;
  } & HTMLButtonAttributes;

  let { id, class: className = '', children, ...restProps }: Props = $props();

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
  class="
    py-4 px-6 text-center border-b-2 font-medium text-sm
    {isSelected
      ? 'border-indigo-500 text-indigo-600'
      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}
    {className}
  "
  onclick={handleClick}
>
  {@render children()}
</button>
