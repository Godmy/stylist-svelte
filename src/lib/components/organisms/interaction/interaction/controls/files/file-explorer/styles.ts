/**
 * Style utility class following Single Responsibility Principle
 * Responsible only for managing FileExplorer styling logic
 * Uses CSS variables from the theme system
 */
export class FileExplorerStyleManager {
  static getBaseClasses(hostClass: string): string {
    const baseClasses = 'c-file-explorer border rounded-lg overflow-hidden';

    return `${baseClasses} ${hostClass}`;
  }

  static getHeaderClasses(headerClass: string): string {
    return `p-3 border-b ${headerClass}`;
  }

  static getToolbarClasses(toolbarClass: string): string {
    return `flex items-center justify-between ${toolbarClass}`;
  }

  static getSearchClasses(searchClass: string): string {
    return `block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${searchClass}`;
  }

  static getPathClasses(pathClass: string): string {
    return `flex items-center text-sm text-gray-600 mb-2 ${pathClass}`;
  }

  static getItemClasses(isSelected: boolean, type: string, itemClass: string): string {
    const baseClasses = 'cursor-pointer';
    const selectedClass = isSelected ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:bg-gray-50';
    const typeClass = type === 'folder' ? 'text-blue-500' : 'text-gray-500';

    return `${baseClasses} ${selectedClass} ${typeClass} ${itemClass}`;
  }

  static getGridClasses(): string {
    return 'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4';
  }

  static getListClasses(): string {
    return 'border rounded-lg overflow-hidden';
  }

  static getSelectedItemClass(): string {
    return 'bg-blue-50';
  }

  static getHoveredItemClass(): string {
    return 'hover:bg-gray-50';
  }

  static getAllClasses(hostClass: string, headerClass: string, toolbarClass: string): string {
    const baseClasses = this.getBaseClasses(hostClass);
    const headerClasses = this.getHeaderClasses(headerClass);
    const toolbarClasses = this.getToolbarClasses(toolbarClass);

    return `${baseClasses} ${headerClasses} ${toolbarClasses}`;
  }
}
