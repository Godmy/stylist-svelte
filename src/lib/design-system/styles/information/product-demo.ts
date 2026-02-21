export class ProductDemoStyleManager {
  static getContainerClass(customClass: string = ''): string {
    return `c-product-demo bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100 ${customClass}`.trim();
  }
}