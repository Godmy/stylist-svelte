export interface SortableTableHeaderStyles {
  container: string;
  content: string;
  icon: string;
  [key: string]: string;
}

export interface SortableTableHeaderStyleManagerInterface {
  getContainerClass: () => string;
  getContentClass: () => string;
  getIconClass: () => string;
}

export const createSortableTableHeaderStyles = <TOptions extends { isCurrentSort: boolean; sortDirection: string }>(
  { isCurrentSort, sortDirection }: TOptions,
  baseClasses?: Partial<SortableTableHeaderStyles>
): SortableTableHeaderStyles => {
  return {
    container: [
      'px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100',
      baseClasses?.container || ''
    ].join(' '),

    content: [
      'flex items-center',
      baseClasses?.content || ''
    ].join(' '),

    icon: [
      'ml-1 h-4 w-4',
      baseClasses?.icon || ''
    ].join(' ')
  };
};