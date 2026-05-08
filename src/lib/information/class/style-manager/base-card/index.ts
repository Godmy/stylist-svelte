import { StyleManagerBase } from '$stylist/architecture/class/style-manager/base/index';
import { InteractionStyleManager } from '$stylist/interaction/class/style-manager/interaction';
import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';





export class BaseCardStyleManager {
  static getClasses(
    variant: keyof ReturnType<typeof InteractionStyleManager.getVariantClassMap> | 'outline' | 'ghost' = 'default',
    size: 'sm' | 'md' | 'lg' = 'md',
    className = ''
  ): string {
    return mergeClassNames(
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
    return mergeClassNames('flex items-center justify-center', className);
  }

  static getHeaderClasses(className = ''): string {
    return mergeClassNames('border-b p-[--spacing-md]', className);
  }

  static getTitleClasses(className = ''): string {
    return mergeClassNames('text-lg font-medium text-[--color-text-primary]', className);
  }

  static getDescriptionClasses(className = ''): string {
    return mergeClassNames('pt-[--spacing-xs] text-sm text-[--color-text-secondary]', className);
  }

  static getBodyClasses(className = ''): string {
    return mergeClassNames('p-[--spacing-md]', className);
  }
}




