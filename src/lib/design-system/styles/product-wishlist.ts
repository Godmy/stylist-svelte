export class ProductWishlistStyleManager {
  static getContainerClass(customClass: string = ''): string {
    return `c-product-wishlist bg-white rounded-lg shadow ${customClass}`.trim();
  }
}