export class IconPickerStyleManager {
  static readonly searchIconName = 'search';

  static getHostClasses(hostClass: string = ''): string {
    return `icon-picker ${hostClass}`.trim();
  }

  static getHeaderClasses(headerClass: string = ''): string {
    return `mb-4 ${headerClass}`.trim();
  }

  static getTitleClasses(): string {
    return 'text-lg font-medium text-[--color-text-primary] mb-2';
  }

  static getSearchContainerClasses(): string {
    return 'relative';
  }

  static getSearchIconClasses(): string {
    return 'h-5 w-5 text-[--color-text-secondary] absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none';
  }

  static getSearchInputClasses(): string {
    return 'block w-full pl-10 pr-3 py-2 border border-[--color-border-primary] rounded-md leading-5 bg-[--color-background-default] placeholder-[--color-text-placeholder] focus:outline-none focus:placeholder-[--color-text-secondary] focus:ring-1 focus:ring-[--color-primary-500] focus:border-[--color-primary-500] sm:text-sm';
  }

  static getGridClasses(columns: number, itemClass: string = ''): string {
    const columnClass = {
      2: 'grid-cols-2',
      3: 'grid-cols-3',
      4: 'grid-cols-4',
      5: 'grid-cols-5',
      6: 'grid-cols-6',
      7: 'grid-cols-7',
      8: 'grid-cols-8'
    }[columns] || 'grid-cols-6';

    return `grid ${columnClass} gap-4 max-h-[400px] overflow-y-auto p-1 ${itemClass}`.trim();
  }

  static getItemClasses(itemClass: string = '', isSelected: boolean): string {
    const baseClasses = 'flex flex-col items-center p-3 cursor-pointer rounded-lg transition-colors hover:bg-[--color-background-hover]';
    const selectedClass = isSelected ? 'ring-2 ring-[--color-primary-500] ring-offset-2' : '';
    
    return `${baseClasses} ${itemClass} ${selectedClass}`.trim();
  }

  static getIconContainerClasses(): string {
    return 'w-8 h-8 flex items-center justify-center text-[--color-text-primary]';
  }

  static getIconNameClasses(): string {
    return 'mt-1 text-xs text-[--color-text-primary] truncate w-full text-center';
  }
}



