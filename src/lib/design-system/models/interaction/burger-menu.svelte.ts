import { derived, writable } from 'svelte/store';
import { createBurgerMenuStyles } from '../../styles/interaction/burger-menu';
import type { BurgerMenuProps } from '../../props/interaction/burger-menu';
import { mergeClasses } from '$stylist/utils/classes';

export function createBurgerMenuState(props: BurgerMenuProps) {
  // Initialize props with defaults
  const open = props.open ?? false;
  const size = props.size ?? 'md';
  const color = props.color ?? 'currentColor';
  const activeColor = props.activeColor ?? 'currentColor';

  // Generate styles
  const styles = createBurgerMenuStyles({ 
    size, 
    open 
  });

  // Calculate aria label
  const ariaLabel = derived([writable(open)], ([$open]) => 
    $open ? 'Close menu' : 'Open menu'
  );

  // Merge classes with custom classes
  const containerClasses = derived(
    [writable(props.class), writable(styles.container)],
    ([$class, $container]) => mergeClasses($container, $class)
  );

  return {
    open,
    size,
    color,
    activeColor,
    ariaLabel,
    containerClasses,
    iconClasses: styles.icon,
    lineClasses: styles.line
  };
}

export default createBurgerMenuState;