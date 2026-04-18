import { TabGroupStyleManager } from '$stylist/control/class/style-manager/tab-group';
import type { SlotTabGroup as ITabGroupProps } from '$stylist/control/interface/slot/tab-group';

export function createTabGroupState(props: ITabGroupProps) {
  let currentTab = $state(props.activeTab ?? props.tabs?.[0]?.id ?? '');

  $effect(() => {
    if (props.tabs.length > 0 && !props.tabs.some((tab) => tab.id === currentTab)) {
      currentTab = props.tabs[0].id;
    }
  });

  $effect(() => {
    if (!props.activeTab && props.tabs.length > 0) {
      currentTab = props.tabs[0].id;
    } else if (props.activeTab) {
      currentTab = props.activeTab;
    }
  });

  const wrapperClasses = $derived(TabGroupStyleManager.getWrapperClasses(props.class ?? ''));
  const tabListClasses = $derived(TabGroupStyleManager.getTabListClasses(props.variant ?? 'rectangle', props.tabListClass ?? ''));
  const panelClasses = $derived(TabGroupStyleManager.getPanelClasses(props.panelClass ?? ''));

  return {
    get currentTab() {
      return currentTab;
    },
    get wrapperClasses() {
      return wrapperClasses;
    },
    get tabListClasses() {
      return tabListClasses;
    },
    get panelClasses() {
      return panelClasses;
    },
    changeTab(tabId: string) {
      const tab = props.tabs.find((item) => item.id === tabId);
      if (tab && !tab.disabled) {
        currentTab = tabId;
        props.onValueInput?.(tabId);
        props.onValueChange?.(tabId);
        props.onChange?.(tabId);
      }
    }
  };
}

export default createTabGroupState;
