import type { TabListProps } from '$stylist/design-system/interaction/controls/tabs/tab-list';

export function createTabListState(props: TabListProps) {
  const classes = $derived(
    `flex border-b ${
      props.class ?? ''
    }`.trim()
  );

  return {
    get classes() {
      return classes;
    }
  };
}