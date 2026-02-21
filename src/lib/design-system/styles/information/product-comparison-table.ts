export class ProductComparisonTableStyleManager {
  static getContainerClass(customClass: string = ''): string {
    return `c-product-comparison-table overflow-x-auto ${customClass}`.trim();
  }
}