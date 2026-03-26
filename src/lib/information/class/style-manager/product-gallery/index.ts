export class ProductGalleryStyleManager {
  static getContainerClass(customClass: string = ''): string {
    return `c-product-gallery flex flex-col md:flex-row ${customClass}`.trim();
  }
}