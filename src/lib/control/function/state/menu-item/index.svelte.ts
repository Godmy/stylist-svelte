import { derived, writable } from 'svelte/store';
import type { MenuItemProps } from '$stylist/control/interface/component/menu-item/other';
import { joinClassNames } from '$stylist/layout/function/script/join-class-names';

export function createMenuItemState(props: MenuItemProps) {
  // Initialize props with defaults
  const active = props.active ?? false;
  const variant = props.variant ?? 'default';
  const href = props.href;
  const icon = props.icon;
  const disabled = props.disabled ?? false;
  const external = props.external ?? false;
  const children = props.children;

  const variantClasses: Record<string, string> = {
    default: active
      ? 'bg-[--color-background-secondary] text-[--color-text-primary]'
      : 'text-[--color-text-primary] hover:bg-[--color-background-secondary]',
    primary: active
      ? 'bg-[--color-primary-100] text-[--color-primary-700]'
      : 'text-[--color-primary-700] hover:bg-[--color-primary-50]',
    success: active
      ? 'bg-[--color-success-50] text-[--color-success-700]'
      : 'text-[--color-success-700] hover:bg-[--color-success-50]',
    danger: active
      ? 'bg-[--color-danger-50] text-[--color-danger-700]'
      : 'text-[--color-danger-700] hover:bg-[--color-danger-50]'
  };

  const styles = {
    container: joinClassNames(
      'inline-flex w-full items-center rounded-md px-3 py-2 text-sm font-medium transition-colors',
      variantClasses[variant] ?? variantClasses.default,
      disabled ? 'pointer-events-none opacity-[var(--opacity-50)]' : ''
    )
  };

  // Merge classes with custom classes
  const containerClasses = derived(
    [writable(props.class), writable(styles.container)],
    ([$class, $container]) => joinClassNames($container, $class)
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





