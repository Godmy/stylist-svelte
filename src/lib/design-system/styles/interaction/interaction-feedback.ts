export class InteractionFeedbackStyleManager {
  static root(base: string, className: string): string {
    return `${base} ${className}`.trim();
  }
}
