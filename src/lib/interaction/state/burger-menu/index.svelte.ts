import { derived, writable } from 'svelte/store';
import type { BurgerMenuProps } from '$stylist/interaction/interface/burger-menu';
import { mergeClasses } from '$stylist/information/function/classes';

export function createBurgerMenuState(props: BurgerMenuProps) {
  // Initialize props with defaults
  const open = props.open ?? false;
  const size = props.size ?? 'md';
  const color = props.color ?? 'currentColor';
  const activeColor = props.activeColor ?? 'currentColor';

  const sizeClasses: Record<string, string> = {
    sm: 'h-8 w-8',
    md: 'h-10 w-10',
    lg: 'h-12 w-12'
  };

  const iconSizes: Record<string, string> = {
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-6 w-6'
  };

  const styles = {
    container: mergeClasses(
      'inline-flex items-center justify-center rounded-md border border-[--color-border-secondary] bg-[--color-background-primary] transition-colors hover:bg-[--color-background-secondary]',
      sizeClasses[size] ?? sizeClasses.md
    ),
    icon: mergeClasses('relative', iconSizes[size] ?? iconSizes.md),
    line: 'absolute left-0 h-0.5 w-full rounded-full transition-all duration-[var(--duration-200)]'
  };

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




