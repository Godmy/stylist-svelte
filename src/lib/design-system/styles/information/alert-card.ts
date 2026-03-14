import { cn } from '../../utils/cn/index';
import { BASE_CLASSES } from '../../runtime/foundation';
import { VARIANT_CLASSES } from '../interaction/interaction';

const ALERT_CARD_BASE_CLASSES = `${BASE_CLASSES.card} bg-[--color-background-primary] overflow-hidden`;

const ALERT_CARD_VARIANT_CLASSES = {
	...VARIANT_CLASSES,
	info: 'border-l-4 border-[--color-info-500]',
	success: 'border-l-4 border-[--color-success-500]',
	warning: 'border-l-4 border-[--color-warning-500]',
	error: 'border-l-4 border-[--color-danger-500]'
} as const;

const ALERT_CARD_SIZE_CLASSES = {
	sm: 'p-3',
	md: 'p-4',
	lg: 'p-6'
} as const;




export class AlertCardStyleManager {
  static getClasses(
    variant: keyof typeof ALERT_CARD_VARIANT_CLASSES = 'default',
    size: keyof typeof ALERT_CARD_SIZE_CLASSES = 'md',
    className = ''
  ): string {
    return cn(
      ALERT_CARD_BASE_CLASSES,
      ALERT_CARD_VARIANT_CLASSES[variant],
      ALERT_CARD_SIZE_CLASSES[size],
      className
    );
  }

  static getContainerClasses(className = ''): string {
    return cn('flex items-center justify-center', className);
  }
}


