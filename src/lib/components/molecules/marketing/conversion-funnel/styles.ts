export class ConversionFunnelStyleManager {
  static getContainerClass(className: string = ''): string {
    return `bg-white rounded-lg shadow border border-gray-200 overflow-hidden ${className}`;
  }

  static getHeaderClass(headerClass: string = ''): string {
    return `p-4 border-b ${headerClass}`;
  }

  static getFunnelStepVisualizationClass(): string {
    return `h-12 flex items-center transition-all duration-500`;
  }

  static getFunnelStepVisualizationStyle(value: number, maxValue: number, color?: string): string {
    return `width: ${(value / maxValue) * 100}%; background-color: ${color || '#3B82F6'}; border-radius: 6px;`;
  }

  static getPercentageLabelClass(): string {
    return `absolute top-0 h-12 flex items-center pl-3 text-xs font-medium text-white`;
  }
}
