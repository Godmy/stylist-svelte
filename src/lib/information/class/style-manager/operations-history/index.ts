export class OperationsHistoryStyleManager {
  static getBaseClasses(additionalClass: string = ''): string {
    return `c-operations-history operations-history border border-[--color-border-secondary] rounded-md bg-[--color-background-primary] overflow-hidden ${additionalClass}`.trim();
  }

  static getToolbarClasses(): string {
    return 'toolbar bg-[--color-background-secondary] border-b border-[--color-border-secondary] p-2 flex items-center justify-between';
  }

  static getSearchInputClasses(): string {
    return 'px-2 py-1 text-xs border border-[--color-border-secondary] rounded-sm focus:outline-none focus:ring-1 focus:ring-[--color-primary-500] bg-[--color-background-secondary] text-[--color-text-primary]';
  }

  static getOperationItemClasses(isSelected: boolean): string {
    const baseClasses = 'p-3 hover:bg-[--color-background-hover] cursor-pointer transition-colors w-full text-left border border-transparent rounded hover:shadow-sm';
    const selectedClasses = isSelected ? 'bg-[--color-primary-50] border-[--color-primary-200]' : '';
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