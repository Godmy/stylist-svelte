import type { TabsProps } from '$stylist/design-system/interaction/controls/tabs/tabs';

export function createTabsState(props: TabsProps) {
  const classes = $derived(
    `w-full ${
      props.class ?? ''
    }`.trim()
  );

  return {
    get classes() {
      return classes;
    }
  };
}