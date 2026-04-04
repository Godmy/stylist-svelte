export class ProductRecommendationStyleManager {
  static getContainerClass(customClass: string = ''): string {
    return `c-product-recommendation bg-[var(--color-background-primary)] rounded-lg shadow p-4 ${customClass}`.trim();
  }
}
