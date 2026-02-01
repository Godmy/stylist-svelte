/**
 * SimpleTooltip types and interfaces following SOLID principles
 */

import type { HTMLAttributes } from 'svelte/elements';

export type TooltipPosition = 'top' | 'right' | 'bottom' | 'left';

export interface ISimpleTooltipProps extends HTMLAttributes<HTMLDivElement> {
  position?: TooltipPosition;
  visible?: boolean;
  content?: string;
  class?: string;
}

/**
 * Style utility class following Single Responsibility Principle
 * Responsible only for managing SimpleTooltip styling logic
 */
export class SimpleTooltipStyleManager {
  static getPositionClasses(position: TooltipPosition): string {
    const alignment: Record<TooltipPosition, string> = {
      top: 'bottom-full left-1/2 -translate-x-1/2 mb-3',
      right: 'top-1/2 left-full -translate-y-1/2 ml-3',
      bottom: 'top-full left-1/2 -translate-x-1/2 mt-3',
      left: 'top-1/2 right-full -translate-y-1/2 mr-3'
    };

    const layout = 'simple-tooltip simple-tooltip--' + position;
    const baseClasses = [
      layout,
      'absolute z-[70] max-w-xs whitespace-normal font-medium',
      'select-none'
    ].join(' ');

    return `${baseClasses} ${alignment[position]}`.trim();
  }

  static getArrowClasses(position: TooltipPosition): string {
    const positions: Record<TooltipPosition, string> = {
      top: 'top-full left-1/2 -translate-x-1/2',
      right: 'top-1/2 left-0 -translate-y-1/2',
      bottom: 'bottom-full left-1/2 -translate-x-1/2',
      left: 'top-1/2 right-0 -translate-y-1/2'
    };

    const base = `simple-tooltip__arrow simple-tooltip__arrow--${position} absolute`;
    return `${base} ${positions[position]}`.trim();
  }

  static getBaseClasses(className: string): string {
    return `${className}`.trim();
  }
}

