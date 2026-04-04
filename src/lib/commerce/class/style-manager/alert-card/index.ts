import { cn } from '$stylist/layout/function/script/merge-class-names';
import { StyleManagerBase } from '$stylist/architecture/class/style-manager/base/index';
import { InteractionStyleManager } from '$stylist/interaction/class/style-manager/interaction';




export class AlertCardStyleManager {
  static getClasses(
    variant: keyof ReturnType<typeof InteractionStyleManager.getVariantClassMap> | 'info' | 'success' | 'warning' | 'error' = 'default',
    size: 'sm' | 'md' | 'lg' = 'md',
    className = ''
  ): string {
    return cn(
      `${StyleManagerBase.classes.card} bg-[--color-background-primary] overflow-hidden`,
      ({
        ...InteractionStyleManager.getVariantClassMap(),
        info: 'border-l-4 border-[--color-info-500]',
        success: 'border-l-4 border-[--color-success-500]',
        warning: 'border-l-4 border-[--color-warning-500]',
        error: 'border-l-4 border-[--color-danger-500]'
      })[variant],
      { sm: 'p-3', md: 'p-4', lg: 'p-6' }[size],
      className
    );
  }

  static getContainerClasses(className = ''): string {
    return cn('flex items-center justify-center', className);
  }

  static getIconContainerClasses(className = ''): string {
    return cn('flex items-center mb-[--spacing-md]', className);
  }

  static getIconClasses(className = ''): string {
    return cn('w-10 h-10 mr-[--spacing-sm]', className);
  }

  static getTextContainerClasses(className = ''): string {
    return cn(className);
  }

  static getTitleClasses(className = ''): string {
    return cn('text-lg font-semibold', className);
  }

  static getSubtitleClasses(className = ''): string {
    return cn('text-[--color-text-secondary]', className);
  }

  static getActionsContainerClasses(className = ''): string {
    return cn('mt-[--spacing-md]', className);
  }

  static getActionButtonClasses(className = ''): string {
    return cn(
      'mr-[--spacing-sm] mb-[--spacing-sm] px-4 py-2 bg-[--color-primary-500] text-[--color-text-inverse] rounded hover:bg-[--color-primary-600]',
      className
    );
  }
}






