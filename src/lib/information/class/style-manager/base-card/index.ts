import { StyleManagerBase } from '$stylist/architecture/class/style-manager/base/index';
import { InteractionStyleManager } from '$stylist/interaction/class/style-manager/interaction';
import { cn } from '$stylist/information/function/cn/index';





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
}



