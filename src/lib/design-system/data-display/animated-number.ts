export type AnimatedNumberEasing = 'linear' | 'ease-in' | 'ease-out' | 'ease-in-out';

export interface AnimatedNumberProps {
  value: number;
  duration?: number;
  delay?: number;
  easing?: AnimatedNumberEasing;
  format?: (n: number) => string;
  prefix?: string;
  suffix?: string;
  separator?: string;
  decimals?: number;
  class?: string;
}

type EasingFunction = (t: number) => number;

const BASE_EASING: Record<AnimatedNumberEasing, EasingFunction> = {
  linear: (t) => t,
  'ease-in': (t) => t * t,
  'ease-out': (t) => t * (2 - t),
  'ease-in-out': (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t)
};

export interface AnimatedNumberFormatOptions {
  format?: (n: number) => string;
  separator?: string;
  decimals?: number;
}

export const formatAnimatedValue = (value: number, options: AnimatedNumberFormatOptions): string => {
  if (options.format) return options.format(value);

  const decimals = options.decimals ?? 0;
  const separator = options.separator ?? ',';
  const fixed = value.toFixed(decimals);
  const [integer, fraction] = fixed.split('.');

  const withSeparator = integer.replace(/\B(?=(\d{3})+(?!\d))/g, separator);
  return fraction ? `${withSeparator}.${fraction}` : withSeparator;
};

export interface AnimateNumberOptions {
  from: number;
  to: number;
  duration: number;
  delay: number;
  easing: AnimatedNumberEasing;
  onUpdate: (value: number) => void;
  onFinish?: () => void;
}

export const getEasingFunction = (easing: AnimatedNumberEasing): EasingFunction => {
  return BASE_EASING[easing] ?? BASE_EASING['ease-out'];
};

export const animateNumberValue = ({
  from,
  to,
  duration,
  delay,
  easing,
  onUpdate,
  onFinish
}: AnimateNumberOptions): (() => void) => {
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
