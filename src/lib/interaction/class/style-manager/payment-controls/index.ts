export class PaymentInfoStyleManager {
  static root(className: string): string {
    return `c-payment-info ${className}`.trim();
  }
}

export class PaymentMethodSelectorStyleManager {
  static root(className: string): string {
    return `c-payment-method-selector ${className}`.trim();
  }
}

export class PaymentSelectorStyleManager {
  static root(className: string): string {
    return `c-payment-selector ${className}`.trim();
  }
}

export class PaymentSummaryStyleManager {
  static root(className: string): string {
    return `c-payment-summary bg-[--color-background-primary] rounded-lg shadow border border-[--color-border-secondary] overflow-hidden ${className}`.trim();
  }
}

