import { StyleManagerBase } from '$stylist/architecture/class/style-manager/base/index';
import { InteractionStyleManager } from '$stylist/interaction/class/style-manager/interaction';
import { cn } from '$stylist/layout/function/script/merge-class-names';





export class BaseCardStyleManager {
  static getClasses(
    variant: keyof ReturnType<typeof InteractionStyleManager.getVariantClassMap> | 'outline' | 'ghost' = 'default',
    size: 'sm' | 'md' | 'lg' = 'md',
    className = ''
  ): string {
    return cn(
      `${StyleManagerBase.classes.card} bg-[--color-background-primary] overflow-hidden`,
      ({
        ...InteractionStyleManager.getVariantClassMap(),
        outline: 'bg-transparent',
        ghost: 'bg-transparent border-none shadow-none'
      })[variant],
      { sm: 'p-3', md: 'p-4', lg: 'p-6' }[size],
      className
    );
  }

  static getContainerClasses(className = ''): string {
    return cn('flex items-center justify-center', className);
  }

  static getHeaderClasses(className = ''): string {
    return cn('border-b p-[--spacing-md]', className);
  }

  static getTitleClasses(className = ''): string {
    return cn('text-lg font-medium text-[--color-text-primary]', className);
  }

  static getDescriptionClasses(className = ''): string {
    return cn('pt-[--spacing-xs] text-sm text-[--color-text-secondary]', className);
  }

  static getBodyClasses(className = ''): string {
    return cn('p-[--spacing-md]', className);
  }
}




