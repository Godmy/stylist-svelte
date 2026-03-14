export class ProductDemoStyleManager {
  static getContainerClass(customClass: string = ''): string {
    return `c-product-demo [background-image:var(--gradient-info)] rounded-xl p-6 border border-[--color-info-100] ${customClass}`.trim();
  }
}
