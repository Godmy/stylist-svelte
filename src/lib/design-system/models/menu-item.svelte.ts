import { derived, writable } from 'svelte/store';
import { createMenuItemStyles } from '../styles/menu-item';
import type { MenuItemProps } from '../props/menu-item';
import { mergeClasses } from '../../utils/classes';

export function createMenuItemState(props: MenuItemProps) {
  // Initialize props with defaults
  const active = props.active ?? false;
  const variant = props.variant ?? 'default';
  const href = props.href;
  const icon = props.icon;
  const disabled = props.disabled ?? false;
  const external = props.external ?? false;
  const children = props.children;

  // Generate styles
  const styles = createMenuItemStyles({ 
    active, 
    disabled, 
    variant 
  });

  // Merge classes with custom classes
  const containerClasses = derived(
    [writable(props.class), writable(styles.container)],
    ([$class, $container]) => mergeClasses($container, $class)
  );

  return {
    active,
    variant,
    href,
    icon,
    disabled,
    external,
    children,
    containerClasses
  };
}

export default createMenuItemState;