import { derived, writable } from 'svelte/store';
import { createSortableTableHeaderStyles } from '../styles/sortable-table-header';
import type { SortableTableHeaderProps } from '../props/sortable-table-header';
import { mergeClasses } from '../../utils/classes';

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

  // Generate styles
  const styles = createSortableTableHeaderStyles({ 
    isCurrentSort: false, // We'll determine this dynamically
    sortDirection: currentSortDirection || 'none'
  });

  // Merge classes with custom classes
  const containerClasses = derived(
    [writable(props.class), writable(styles.container)],
    ([$class, $container]) => mergeClasses($container, $class)
  );

  return {
    title,
    sortKey,
    currentSortKey,
    currentSortDirection,
    isCurrentSort,
    containerClasses,
    contentClasses: styles.content,
    iconClasses: styles.icon
  };
}

export default createSortableTableHeaderState;