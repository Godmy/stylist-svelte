export class ProductDemoStyleManager {
  static getContainerClass(customClass: string = ''): string {
    return `c-product-demo bg-gradient-to-r from-[--color-info-50] to-[--color-primary-50] rounded-xl p-6 border border-[--color-info-100] ${customClass}`.trim();
  }
}