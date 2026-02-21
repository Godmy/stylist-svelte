export class ProductRecommendationStyleManager {
  static getContainerClass(customClass: string = ''): string {
    return `c-product-recommendation bg-white rounded-lg shadow p-4 ${customClass}`.trim();
  }
}