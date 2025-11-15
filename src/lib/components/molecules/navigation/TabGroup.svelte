<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import type { Snippet } from 'svelte';

  type Tab = {
    id: string;
    title: string;
    content: Snippet;
    disabled?: boolean;
  };

  type Props = {
    tabs: Tab[];
    activeTab?: string;
    variant?: 'line' | 'boxed' | 'pill';
    class?: string;
    tabListClass?: string;
    tabClass?: string;
    activeTabClass?: string;
    inactiveTabClass?: string;
    panelClass?: string;
    onChange?: (tabId: string) => void;
  } & HTMLAttributes<HTMLDivElement>;

  let {
    tabs = [],
    activeTab = tabs[0]?.id || '',
    variant = 'line',
    class: className = '',
    tabListClass = '',
    tabClass = '',
    activeTabClass = '',
    inactiveTabClass = '',
    panelClass = '',
    onChange,
    ...restProps
  }: Props = $props();

  let currentTab = $state(activeTab);

  $effect(() => {
    if (tabs.length > 0 && !tabs.some(tab => tab.id === currentTab)) {
      currentTab = tabs[0].id;
    }
  });

  function changeTab(tabId: string) {
    const tab = tabs.find(t => t.id === tabId);
    if (tab && !tab.disabled) {
      currentTab = tabId;
      if (onChange) {
        onChange(tabId);
      }
    }
  }

  // Set default active tab if not provided
  $effect(() => {
    if (!activeTab && tabs.length > 0) {
      currentTab = tabs[0].id;
    } else if (activeTab) {
      currentTab = activeTab;
    }
  });
</script>

<div class={`w-full ${className}`} {...restProps}>
  <!-- Tab List -->
  <div class={`flex border-b border-gray-200 ${tabListClass}`}>
    {#each tabs as tab}
      <button
        type="button"
        class={`px-4 py-2 font-medium text-sm rounded-t-lg focus:outline-none transition-colors ${
          variant === 'line' ? 
            `border-b-2 ${
              currentTab === tab.id ? 
                `border-blue-500 text-blue-600 ${activeTabClass}` : 
                `border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 ${inactiveTabClass}`
            }` :
          variant === 'boxed' ?
            `border ${
              currentTab === tab.id ? 
                `border-blue-500 bg-blue-50 text-blue-600 ${activeTabClass}` : 
                `border-gray-200 text-gray-500 hover:bg-gray-50 ${inactiveTabClass}`
            }` :
          // pill variant
          `${
            currentTab === tab.id ? 
              `bg-blue-500 text-white ${activeTabClass}` : 
              `text-gray-500 hover:bg-gray-100 ${inactiveTabClass}`
          }`
        } ${
          tab.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
        } ${tabClass}`}
        onclick={() => changeTab(tab.id)}
        disabled={tab.disabled}
        aria-selected={currentTab === tab.id}
        role="tab"
      >
        {tab.title}
      </button>
    {/each}
  </div>

  <!-- Tab Panels -->
  <div class={`mt-4 ${panelClass}`}>
    {#each tabs as tab}
      {#if currentTab === tab.id}
        <div role="tabpanel" class="p-4" aria-labelledby={`tab-${tab.id}`}>
          {@render tab.content()}
        </div>
      {/if}
    {/each}
  </div>
</div>