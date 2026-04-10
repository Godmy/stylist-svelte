import { STYLIST_TAB_DEFAULT_ITEMS } from '$stylist/control/const/struct/stylist-tab-default-items';
import type { StylistTabItem } from '$stylist/control/type/struct/stylist-tab-item';
import type { StylistTabProps } from '$stylist/control/type/struct/stylist-tab-props';

export function createStylistTabState(props: StylistTabProps) {
  let activeId = $state(props.selectedId ?? 'architecture');

  $effect(() => {
    activeId = props.selectedId ?? 'architecture';
  });

  const className = $derived(props.class ?? '');
  const items = $derived(props.items ?? STYLIST_TAB_DEFAULT_ITEMS);

  return {
    get activeId() {
      return activeId;
    },
    get className() {
      return className;
    },
    get items() {
      return items;
    },
    handleSelect(item: StylistTabItem) {
      activeId = item.id;
      props.onSelect?.(item);
    }
  };
}

export default createStylistTabState;
