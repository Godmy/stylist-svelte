import { derived, writable } from 'svelte/store';
import type { ColorPaletteProps } from '$stylist/design-system/contracts/interaction/color-palette';
import { mergeClasses } from '$stylist/design-system/utils/classes';

export function createColorPaletteState(props: ColorPaletteProps) {
  // Initialize props with defaults
  const colors = props.colors;
  const title = props.title ?? 'Color Palette';
  const showLabels = props.showLabels ?? true;
  const showValues = props.showValues ?? false;
  const columns = props.columns ?? 5;

  const styles = {
    container: 'space-y-4',
    header: 'text-sm font-semibold text-[--color-text-primary]',
    grid: `grid gap-3`,
    item: 'flex flex-col items-center rounded-lg border border-[--color-border-secondary] bg-[--color-background-primary] p-3 transition-colors hover:bg-[--color-background-secondary]',
    colorSwatch: 'h-12 w-12 rounded-md border border-[--color-border-secondary]',
    label: 'mt-2 text-xs font-medium text-[--color-text-primary]',
    value: 'mt-1 text-xs text-[--color-text-secondary]'
  };

  // Merge classes with custom classes
  const containerClasses = derived(
    [writable(props.class), writable(styles.container)],
    ([$class, $container]) => mergeClasses($container, $class)
  );

  const headerClasses = derived(
    [writable(props.headerClass), writable(styles.header)],
    ([$class, $header]) => mergeClasses($header, $class)
  );

  const itemClasses = derived(
    [writable(props.itemClass), writable(styles.item)],
    ([$class, $item]) => mergeClasses($item, $class)
  );

  return {
    colors,
    title,
    showLabels,
    showValues,
    columns,
    containerClasses,
    headerClasses,
    gridClasses: `${styles.grid} grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-${Math.min(columns, 6)}`,
    itemClasses,
    colorSwatchClasses: styles.colorSwatch,
    labelClasses: styles.label,
    valueClasses: styles.value
  };
}

export default createColorPaletteState;



