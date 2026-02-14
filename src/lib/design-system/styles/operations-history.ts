export class OperationsHistoryStyleManager {
  static getBaseClasses(additionalClass: string = ''): string {
    return `c-operations-history operations-history border border-[--color-gray-300] rounded-md dark:border-[--color-gray-600] bg-white dark:bg-[--color-gray-800] overflow-hidden ${additionalClass}`.trim();
  }

  static getToolbarClasses(): string {
    return 'toolbar bg-[--color-gray-100] dark:bg-[--color-gray-700] border-b border-[--color-gray-200] dark:border-[--color-gray-600] p-2 flex items-center justify-between';
  }

  static getSearchInputClasses(): string {
    return 'px-2 py-1 text-xs border border-[--color-gray-300] rounded-sm focus:outline-none focus:ring-1 focus:ring-[--color-indigo-500] dark:bg-[--color-gray-600] dark:border-[--color-gray-500] dark:text-white';
  }

  static getOperationItemClasses(isSelected: boolean): string {
    const baseClasses = 'p-3 hover:bg-[--color-gray-50] dark:hover:bg-[--color-gray-750] cursor-pointer transition-colors w-full text-left border border-transparent rounded hover:shadow-sm';
    const selectedClasses = isSelected ? 'bg-[--color-indigo-50] dark:bg-[--color-indigo-900]/30 border-[--color-indigo-200] dark:border-[--color-indigo-700]' : '';
    return `${baseClasses} ${selectedClasses}`.trim();
  }

  static getStatusBadgeVariant(status: 'success' | 'error' | 'pending'): string {
    switch (status) {
      case 'success': return 'success';
      case 'error': return 'danger';
      case 'pending': return 'warning';
      default: return 'default';
    }
  }

  static getResultsContainerClasses(): string {
    return 'overflow-y-auto max-h-64';
  }
}