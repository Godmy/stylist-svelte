import type { TabPanelProps } from '$stylist/design-system/interaction/controls/tabs/tab-panel';

export function createTabPanelState(props: TabPanelProps) {
  const classes = $derived(
    `p-4 border border-t-0 rounded-b-lg ${
      props.class ?? ''
    }`.trim()
  );

  return {
    get classes() {
      return classes;
    }
  };
}