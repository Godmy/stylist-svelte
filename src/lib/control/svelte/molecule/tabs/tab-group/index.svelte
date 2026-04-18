<script lang="ts">
  import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
  import type { SlotTabGroup as ITabGroupProps } from '$stylist/control/interface/slot/tab-group';
  import { TabGroupStyleManager } from '$stylist/control/class/style-manager/tab-group';
  import { createTabGroupState } from '$stylist/control/function/state/tab-group';

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
   * @param variant - Visual shape of the tabs ('rectangle' | 'square' | 'pill')
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
    variant = 'rectangle',
    class: className = '',
    tabListClass = '',
    tabClass = '',
    activeTabClass = '',
    inactiveTabClass = '',
    panelClass = '',
    onValueInput,
    onValueChange,
    onChange,
    ...restProps
  }: ITabGroupProps = $props();

  const state = createTabGroupState({
    tabs,
    activeTab,
    variant,
    class: className,
    tabListClass,
    tabClass,
    activeTabClass,
    inactiveTabClass,
    panelClass,
    onValueInput,
    onValueChange,
    onChange
  });
</script>

<div class={state.wrapperClasses} {...restProps}>
  <!-- Tab List -->
  <div class={state.tabListClasses}>
    {#each tabs as tab}
      <button
        type="button"
        class={TabGroupStyleManager.getTabClasses(
          variant,
          state.currentTab === tab.id,
          !!tab.disabled,
          tabClass,
          activeTabClass,
          inactiveTabClass
        )}
        onclick={() => state.changeTab(tab.id)}
        disabled={tab.disabled}
        aria-selected={state.currentTab === tab.id}
        role="tab"
      >
        {tab.title}
      </button>
    {/each}
  </div>

  <!-- Tab Panels -->
  <div class={state.panelClasses}>
    {#each tabs as tab}
      {#if state.currentTab === tab.id}
        <div role="tabpanel" class="p-4" aria-labelledby={`tab-${tab.id}`}>
          {@render tab.content()}
        </div>
      {/if}
    {/each}
  </div>
</div>





