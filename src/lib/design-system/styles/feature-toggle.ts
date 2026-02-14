export class FeatureToggleStyleManager {
  static root(className: string): string {
    return `c-feature-toggle border rounded-lg p-4 ${className}`.trim();
  }
}
