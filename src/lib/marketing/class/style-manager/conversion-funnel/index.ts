export class ConversionFunnelStyleManager {
  static getContainerClass(className: string = ''): string {
    return `c-conversion-funnel bg-[--color-background-primary] rounded-lg shadow border border-[--color-border-secondary] overflow-hidden ${className}`.trim();
  }

  static getHeaderClass(headerClass: string = ''): string {
    return `p-4 border-b ${headerClass}`.trim();
  }

  static getFunnelStepVisualizationClass(): string {
    return 'h-12 flex items-center transition-all duration-[var(--duration-500)]';
  }

  static getFunnelStepVisualizationStyle(value: number, maxValue: number, color?: string): string {
    return `width: ${(value / maxValue) * 100}%; background-color: ${color || 'var(--color-primary-500)'}; border-radius: 6px;`;
  }

  static getPercentageLabelClass(): string {
    return 'absolute top-0 h-12 flex items-center pl-3 text-xs font-medium text-[--color-text-inverse]';
  }
}

