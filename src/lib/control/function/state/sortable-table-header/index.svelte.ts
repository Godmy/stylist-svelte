import { derived, writable } from 'svelte/store';
import type { SortableTableHeaderProps } from '$stylist/control/interface/component/sortable-table-header/other';
import { joinClassNames } from '$stylist/layout/function/script/join-class-names';

export function createSortableTableHeaderState(props: SortableTableHeaderProps) {
  // Initialize props with defaults
  const title = props.title;
  const sortKey = props.sortKey;
  const currentSortKey = props.currentSortKey;
  const currentSortDirection = props.currentSortDirection ?? null;

  // Determine if this header is currently being sorted
  const isCurrentSort = derived(
    [writable(currentSortKey), writable(sortKey)],
    ([$currentSortKey, $sortKey]) => $currentSortKey === $sortKey
  );

  const styles = {
    container: 'cursor-pointer select-none px-4 py-3 text-left align-middle text-sm font-medium text-[--color-text-primary]',
    content: 'flex items-center gap-2',
    icon: 'h-4 w-4 text-[--color-text-secondary]'
  };

  // Merge classes with custom classes
  const containerClasses = derived(
    [writable(props.class), writable(styles.container)],
    ([$class, $container]) => joinClassNames($container, $class)
  );

  return {
    title,
    sortKey,
    currentSortKey,
    currentSortDirection,
    isCurrentSort,
    containerClasses,
    contentClasses: styles.content,
    iconClasses: styles.icon,
    handleClick() {
      if (sortKey) {
        props.onValueInput?.(sortKey);
        props.onValueChange?.(sortKey);
      }
    }
  };
}

export default createSortableTableHeaderState;




