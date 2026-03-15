import { BASE_CLASSES } from '../../runtime/foundation';
import { InteractionStyleManager } from '../interaction/interaction';
import { cn } from '../../utils/cn/index';





export class BaseCardStyleManager {
  static getClasses(
    variant: keyof ReturnType<typeof InteractionStyleManager.getVariantClassMap> | 'outline' | 'ghost' = 'default',
    size: 'sm' | 'md' | 'lg' = 'md',
    className = ''
  ): string {
    return cn(
      `${BASE_CLASSES.card} bg-[--color-background-primary] overflow-hidden`,
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
