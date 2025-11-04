<script lang="ts">
  import { getContext } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';

  type Props = {
    id: string;
    class?: string;
    children?: any;
  } & HTMLAttributes<HTMLDivElement>;

  let { id, class: className = '', children, ...restProps }: Props = $props();

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
</script>

<div
  {...restProps}
  id={panelId}
  role="tabpanel"
  aria-labelledby={tabId}
  hidden={!isSelected}
  class="{isSelected ? 'block' : 'hidden'} {className}"
>
  {#if isSelected}
    {@render children()}
  {/if}
</div>
