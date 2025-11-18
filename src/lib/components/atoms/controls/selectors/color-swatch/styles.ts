import type { IColorSwatchProps } from './types';

/**
 * Style utility class following Single Responsibility Principle
 * Responsible only for managing ColorSwatch styling logic
 */
export class ColorSwatchStyleManager {
  static getBaseClasses(className: string): string {
    return `rounded-md border border-[--color-border-primary] shadow-sm ${className}`;
  }

  static getInlineStyle(color: string, size: number): string {
    return `background-color: ${color}; width: ${size}px; height: ${size}px;`;
  }
}