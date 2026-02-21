/**
 * Style manager for SwitchWithLabel component
 * Following SOLID principles by separating styling logic from component logic
 * Uses the Stylist-Svelte theming system with CSS variables
 */

import type { LabelPosition, ISwitchWithLabelProps } from '$stylist/design-system/props/interaction/switch-with-label';

export class SwitchWithLabelStyleManager {
  /**
   * Gets the CSS classes for the container based on label position
   */
  static getContainerClasses(labelPosition: LabelPosition, baseClass: string = ''): string {
    const positionClass = labelPosition === 'start' ? 'flex-row-reverse' : 'flex-row';
    
    return [
      'flex',
      'items-center',
      positionClass,
      baseClass
    ].filter(Boolean).join(' ');
  }

  /**
   * Gets the CSS classes for the label element
   */
  static getLabelClasses(disabled: boolean, labelClass: string = ''): string {
    const disabledClass = disabled ? 'opacity-50' : '';
    
    return [
      'text-sm',
      'font-medium',
      'text-[--color-text-primary]',
      disabledClass,
      labelClass
    ].filter(Boolean).join(' ');
  }

  /**
   * Gets the CSS classes for the switch element
   */
  static getSwitchClasses(checked: boolean, disabled: boolean, switchClass: string = ''): string {
    const bgClass = checked ? 'bg-[--color-primary-600]' : 'bg-[--color-border-default]';
    const cursorClass = disabled ? 'cursor-not-allowed' : 'cursor-pointer';
    
    return [
      'relative',
      'inline-flex',
      'items-center',
      'h-6',
      'rounded-full',
      'transition-colors',
      'duration-200',
      bgClass,
      cursorClass,
      'w-11',
      switchClass
    ].filter(Boolean).join(' ');
  }

  /**
   * Gets the CSS classes for the switch handle element
   */
  static getHandleClasses(checked: boolean): string {
    const positionClass = checked ? 'translate-x-6' : 'translate-x-1';
    
    return [
      'inline-block',
      'w-4',
      'h-4',
      'transform',
      'bg-[--color-bg-default]',
      'rounded-full',
      'transition-transform',
      'duration-200',
      'shadow-sm',
      positionClass
    ].filter(Boolean).join(' ');
  }

  /**
   * Gets the CSS classes for the label position (start or end)
   */
  static getLabelPositionClasses(labelPosition: LabelPosition): string {
    return labelPosition === 'end' ? 'mr-3' : 'ml-3';
  }
}