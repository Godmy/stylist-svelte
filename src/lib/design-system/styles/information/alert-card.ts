import { cn } from '$stylist/design-system/utils/cn/index';
import { BASE_CLASSES } from '$stylist/design-system/runtime/foundation/index';
import { InteractionStyleManager } from '$stylist/design-system/styles/interaction/interaction';




export class AlertCardStyleManager {
  static getClasses(
    variant: keyof ReturnType<typeof InteractionStyleManager.getVariantClassMap> | 'info' | 'success' | 'warning' | 'error' = 'default',
    size: 'sm' | 'md' | 'lg' = 'md',
    className = ''
  ): string {
    return cn(
      `${BASE_CLASSES.card} bg-[--color-background-primary] overflow-hidden`,
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
}


