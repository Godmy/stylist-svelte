export class ProductWishlistStyleManager {
  static getContainerClass(customClass: string = ''): string {
    return `c-product-wishlist bg-[var(--color-background-primary)] rounded-lg shadow ${customClass}`.trim();
  }
}
