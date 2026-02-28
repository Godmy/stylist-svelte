export interface MenuItemStyles {
  container: string;
  [key: string]: string;
}

export interface MenuItemStyleManagerInterface {
  getContainerClass: () => string;
}

export const createMenuItemStyles = <TOptions extends { active: boolean; disabled: boolean; variant: string }>(
  { active, disabled, variant }: TOptions,
  baseClasses?: Partial<MenuItemStyles>
): MenuItemStyles => {
  return {
    container: [
      'flex items-center px-4 py-2 text-sm font-medium rounded transition-colors',
      disabled
        ? 'text-[--color-text-tertiary] cursor-not-allowed'
        : active
          ? 'bg-[--color-primary-100] text-[--color-primary-700] dark:bg-[--color-primary-900] dark:text-[--color-primary-100]'
          : 'text-[--color-text-primary] hover:bg-[--color-background-hover] dark:text-[--color-text-secondary] dark:hover:bg-[--color-surface-hover]',
      baseClasses?.container || ''
    ].join(' ')
  };
};