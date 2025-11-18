/**
 * Style manager for TableSkeleton component
 * Follows the Single Responsibility Principle by managing only styling concerns
 */
export class TableSkeletonStyleManager {
  /**
   * Creates CSS class string for TableSkeleton component
   * @param customClass - Additional CSS classes to be applied to the component
   * @returns Combined CSS class string for the TableSkeleton component
   */
  static generateClass(customClass?: string): string {
    const baseClass = 'overflow-x-auto';
    
    return customClass ? `${baseClass} ${customClass}`.trim() : baseClass;
  }
  
  /**
   * Creates CSS class string for the table element
   * @returns CSS class string for the table element
   */
  static generateTableClass(): string {
    return 'min-w-full divide-y divide-gray-200';
  }
  
  /**
   * Creates CSS class string for the table header
   * @returns CSS class string for the table header
   */
  static generateHeaderClass(): string {
    return 'bg-gray-50';
  }
  
  /**
   * Creates CSS class string for table header cells
   * @returns CSS class string for table header cells
   */
  static generateHeaderCellClass(): string {
    return 'px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider';
  }
  
  /**
   * Creates CSS class string for the table body
   * @returns CSS class string for the table body
   */
  static generateBodyClass(): string {
    return 'bg-white divide-y divide-gray-200';
  }
  
  /**
   * Creates CSS class string for table data cells
   * @returns CSS class string for table data cells
   */
  static generateDataCellClass(): string {
    return 'px-6 py-4 whitespace-nowrap';
  }
}