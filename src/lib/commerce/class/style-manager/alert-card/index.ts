import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';
import { StyleManagerBase } from '$stylist/architecture/class/style-manager/base/index';
import { InteractionStyleManager } from '$stylist/interaction/class/style-manager/interaction';




export class AlertCardStyleManager {
  static getClasses(
    variant: keyof ReturnType<typeof InteractionStyleManager.getVariantClassMap> | 'info' | 'success' | 'warning' | 'error' = 'default',
    size: 'sm' | 'md' | 'lg' = 'md',
    className = ''
  ): string {
    return mergeClassNames(
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
    return mergeClassNames('flex items-center justify-center', className);
  }

  static getIconContainerClasses(className = ''): string {
    return mergeClassNames('flex items-center mb-[--spacing-md]', className);
  }

  static getIconClasses(className = ''): string {
    return mergeClassNames('w-10 h-10 mr-[--spacing-sm]', className);
  }

  static getTextContainerClasses(className = ''): string {
    return mergeClassNames(className);
  }

  static getTitleClasses(className = ''): string {
    return mergeClassNames('text-lg font-semibold', className);
  }

  static getSubtitleClasses(className = ''): string {
    return mergeClassNames('text-[--color-text-secondary]', className);
  }

  static getActionsContainerClasses(className = ''): string {
    return mergeClassNames('mt-[--spacing-md]', className);
  }

  static getActionButtonClasses(className = ''): string {
    return mergeClassNames(
      'mr-[--spacing-sm] mb-[--spacing-sm] px-4 py-2 bg-[--color-primary-500] text-[--color-text-inverse] rounded hover:bg-[--color-primary-600]',
      className
    );
  }
}






