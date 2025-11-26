import type { CounterVariant, CounterSize } from './types';
import {
  BASE_COUNTER_CLASSES,
  COUNTER_VARIANT_CLASSES,
  COUNTER_SIZE_CLASSES
} from './constant';

export class CounterStyleManager {
  static getCounterClasses(
    variant: CounterVariant,
    size: CounterSize,
    className: string | undefined
  ): string {
    const classes = [
      BASE_COUNTER_CLASSES,
      COUNTER_VARIANT_CLASSES[variant],
      COUNTER_SIZE_CLASSES[size],
      className
    ];
    return classes.filter(Boolean).join(' ');
  }
}
