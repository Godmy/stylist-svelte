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
        ? 'text-gray-400 cursor-not-allowed'
        : active
          ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-100'
          : 'text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700',
      baseClasses?.container || ''
    ].join(' ')
  };
};