<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import type { Snippet } from 'svelte';

  import type { ITabGroupProps } from './types';
  import { TabGroupStyleManager } from './styles';

  /**
   * TabGroup component - A flexible tab component with various visual styles and states
   *
   * Following SOLID principles:
   * - Single Responsibility: Only handles component rendering and state
   * - Open/Closed: Extendable through properties but closed for modification
   * - Liskov Substitution: Can be substituted with other tab components
   * - Interface Segregation: Small focused interface
   * - Dependency Inversion: Depends on abstractions (interfaces) rather than concretions
   *
   * @param tabs - Array of tab objects with id, title and content
   * @param activeTab - ID of the currently active tab
   * @param variant - Visual style of the tabs ('line' | 'boxed' | 'pill')
   * @param class - CSS class for the wrapper element
   * @param tabListClass - CSS class for the tab list container
   * @param tabClass - CSS class for individual tabs
   * @param activeTabClass - CSS class for active tab
   * @param inactiveTabClass - CSS class for inactive tabs
   * @param panelClass - CSS class for the tab panels
   * @param onChange - Callback function called when tab changes
   * @returns An accessible, styled tab component
   */
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
  }: ITabGroupProps = $props();

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

  // Calculate classes using the style manager
  let wrapperClasses = $derived(TabGroupStyleManager.getWrapperClasses(className));
  let tabListClasses = $derived(TabGroupStyleManager.getTabListClasses(variant, tabListClass));
  let panelClasses = $derived(TabGroupStyleManager.getPanelClasses(panelClass));
</script>

<div class={wrapperClasses} {...restProps}>
  <!-- Tab List -->
  <div class={tabListClasses}>
    {#each tabs as tab}
      <button
        type="button"
        class={TabGroupStyleManager.getTabClasses(
          variant,
          currentTab === tab.id,
          !!tab.disabled,
          tabClass,
          activeTabClass,
          inactiveTabClass
        )}
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
  <div class={panelClasses}>
    {#each tabs as tab}
      {#if currentTab === tab.id}
        <div role="tabpanel" class="p-4" aria-labelledby={`tab-${tab.id}`}>
          {@render tab.content()}
        </div>
      {/if}
    {/each}
  </div>
</div>