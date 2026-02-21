export class ProductCarouselStyleManager {
  static getContainerClass(customClass: string = ''): string {
    return `c-product-carousel relative overflow-hidden ${customClass}`.trim();
  }
}