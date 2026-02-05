/**
 * Easing functions for animations
 * Generic utility functions that can be used across the application
 */

export type EasingFunction = (t: number) => number;
export type EasingType = 'linear' | 'ease-in' | 'ease-out' | 'ease-in-out';

const BASE_EASING: Record<EasingType, EasingFunction> = {
  linear: (t) => t,
  'ease-in': (t) => t * t,
  'ease-out': (t) => t * (2 - t),
  'ease-in-out': (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t)
};

/**
 * Get an easing function by type
 * @param easing The easing type to retrieve
 * @returns The corresponding easing function
 */
export const getEasingFunction = (easing: EasingType): EasingFunction => {
  return BASE_EASING[easing] ?? BASE_EASING['ease-out'];
};

/**
 * Options for the animateValue function
 */
export interface AnimateValueOptions {
  from: number;
  to: number;
  duration: number;
  delay: number;
  easing: EasingType;
  onUpdate: (value: number) => void;
  onFinish?: () => void;
}

/**
 * Animate a numeric value from one value to another
 * @param options Animation options including start/end values, duration, etc.
 * @returns A cleanup function to cancel the animation
 */
export const animateValue = ({
  from,
  to,
  duration,
  delay,
  easing,
  onUpdate,
  onFinish
}: AnimateValueOptions): (() => void) => {
  if (duration <= 0 || typeof window === 'undefined') {
    onUpdate(to);
    onFinish?.();
    return () => {};
  }

  const easingFn = getEasingFunction(easing);
  const startDelay = Math.max(delay, 0);
  const targetDuration = Math.max(duration, 0);
  const startTime = (window.performance?.now() ?? Date.now()) + startDelay;
  const endTime = startTime + targetDuration;
  let frameId: number;

  const step = (timestamp: number) => {
    if (timestamp < startTime) {
      frameId = window.requestAnimationFrame(step);
      return;
    }

    if (timestamp >= endTime) {
      onUpdate(to);
      onFinish?.();
      return;
    }

    const progress = (timestamp - startTime) / targetDuration;
    const eased = easingFn(Math.min(Math.max(progress, 0), 1));
    const nextValue = from + (to - from) * eased;
    onUpdate(nextValue);

    frameId = window.requestAnimationFrame(step);
  };

  frameId = window.requestAnimationFrame(step);

  return () => {
    if (frameId) {
      window.cancelAnimationFrame(frameId);
    }
  };
};

/**
 * Format a number with options for decimal places, separators, etc.
 * @param value The number to format
 * @param options Formatting options
 * @returns The formatted number as a string
 */
export interface NumberFormatOptions {
  format?: (n: number) => string;
  separator?: string;
  decimals?: number;
}

export const formatNumber = (value: number, options: NumberFormatOptions): string => {
  if (options.format) return options.format(value);

  const decimals = options.decimals ?? 0;
  const separator = options.separator ?? ',';
  const fixed = value.toFixed(decimals);
  const [integer, fraction] = fixed.split('.');

  const withSeparator = integer.replace(/\B(?=(\d{3})+(?!\d))/g, separator);
  return fraction ? `${withSeparator}.${fraction}` : withSeparator;
};