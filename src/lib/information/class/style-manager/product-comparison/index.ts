export class ProductComparisonStyleManager {
  static getContainerClass(customClass: string = ''): string {
    return `c-product-comparison overflow-x-auto ${customClass}`.trim();
  }
}