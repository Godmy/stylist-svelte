import type { TabPanelsProps } from '$stylist/design-system/interaction/controls/tabs/tab-panels';

export function createTabPanelsState(props: TabPanelsProps) {
  const classes = $derived(
    `mt-2 ${
      props.class ?? ''
    }`.trim()
  );

  return {
    get classes() {
      return classes;
    }
  };
}