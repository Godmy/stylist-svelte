export class PaymentSummaryStyleManager {
  static root(className: string): string {
    return `c-payment-summary bg-[--color-background-primary] rounded-lg shadow border border-[--color-border-secondary] overflow-hidden ${className}`.trim();
  }
}
