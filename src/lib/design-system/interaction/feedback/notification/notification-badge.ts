/**
 * NotificationBadge types and interfaces following SOLID principles
 */

import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';

export type NotificationBadgeVariant = 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'number' | 'dot';
export type NotificationBadgePosition = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';

export interface INotificationBadgeProps extends HTMLAttributes<HTMLDivElement> {
  count?: number;
  maxCount?: number;
  variant?: NotificationBadgeVariant;
  position?: NotificationBadgePosition;
  showZero?: boolean;
  class?: string;
  badgeClass?: string;
  children?: Snippet;
}

/**
 * Style utility class following Single Responsibility Principle
 * Responsible only for managing notification badge styling logic
 * Uses CSS variables from the theme system
 */
export class NotificationBadgeStyleManager {
  static getPositionClasses(position: NotificationBadgePosition): string {
    const positionClasses: Record<NotificationBadgePosition, string> = {
      'top-left': '-top-1 -left-1',
      'top-right': '-top-1 -right-1',
      'bottom-left': '-bottom-1 -left-1',
      'bottom-right': '-bottom-1 -right-1'
    };

    return positionClasses[position];
  }

  static getVariantClasses(variant: NotificationBadgeVariant): string {
    const variantClasses: Record<NotificationBadgeVariant, string> = {
      primary: 'bg-[--color-primary-500] text-[--color-text-inverse]',
      secondary: 'bg-[--color-secondary-500] text-[--color-text-inverse]',
      success: 'bg-[--color-success-500] text-[--color-text-inverse]',
      warning: 'bg-[--color-warning-500] text-[--color-text-primary]',
      error: 'bg-[--color-danger-500] text-[--color-text-inverse]',
      default: 'bg-[--color-secondary-500] text-[--color-text-inverse]',
      number: 'bg-[--color-primary-500] text-[--color-text-inverse]',
      dot: 'bg-[--color-primary-500]'
    };

    return variantClasses[variant];
  }

  static getContainerClasses(className: string): string {
    return `relative inline-block ${className}`;
  }

  static getBadgeClasses(isDot: boolean, variant: NotificationBadgeVariant, position: NotificationBadgePosition, badgeClass: string): string {
    const baseClasses = 'absolute flex items-center justify-center rounded-full text-xs font-bold';
    const positionClasses = this.getPositionClasses(position);
    const variantClasses = this.getVariantClasses(variant);
    const sizeClasses = isDot 
      ? 'h-2 w-2' 
      : 'px-1 min-w-[1.25rem] h-5';
    
    return `${baseClasses} ${positionClasses} ${sizeClasses} ${variantClasses} ${badgeClass}`;
  }
}

