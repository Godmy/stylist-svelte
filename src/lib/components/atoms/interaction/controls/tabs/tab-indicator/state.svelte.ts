import type { TabIndicatorProps } from '$stylist/design-system/interaction/controls/tabs/tab-indicator';

export function createTabIndicatorState(props: TabIndicatorProps) {
  const classes = $derived(
    `absolute bottom-0 h-0.5 bg-blue-600 ${
      props.class ?? ''
    }`.trim()
  );

  return {
    get classes() {
      return classes;
    }
  };
}