import { derived, writable } from 'svelte/store';
import { createColorPaletteStyles } from '../../styles/information/color-palette';
import type { ColorPaletteProps } from '../../props/interaction/color-palette';
import { mergeClasses } from '$stylist/utils/classes';

export function createColorPaletteState(props: ColorPaletteProps) {
  // Initialize props with defaults
  const colors = props.colors;
  const title = props.title ?? 'Color Palette';
  const showLabels = props.showLabels ?? true;
  const showValues = props.showValues ?? false;
  const columns = props.columns ?? 5;

  // Generate styles
  const styles = createColorPaletteStyles({ 
    columns 
  });

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
    gridClasses: styles.grid,
    itemClasses,
    colorSwatchClasses: styles.colorSwatch,
    labelClasses: styles.label,
    valueClasses: styles.value
  };
}

export default createColorPaletteState;