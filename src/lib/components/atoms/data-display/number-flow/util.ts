import type { NumberFlowFormatOptions, TimingConfig } from './types';
import {
  DEFAULT_FORMAT,
  DEFAULT_LOCALES,
  ANIMATION_DELAY_PER_DIGIT,
  REDUCED_MOTION_MEDIA_QUERY,
  ANIMATING_CLASS
} from './constant';

/**
 * Formats a number according to the specified locale and format options
 * 
 * @param value The number to format
 * @param locales The locale(s) to use for formatting
 * @param format The format options to apply
 * @returns The formatted number as a string
 */
export function formatNumber(
  value: number,
  locales: string | string[] = DEFAULT_LOCALES,
  format: NumberFlowFormatOptions = DEFAULT_FORMAT
): string {
  const numberFormat = new Intl.NumberFormat(locales, format);
  return numberFormat.format(value);
}

/**
 * Compares two numbers to check if they are equal
 * 
 * @param a First number
 * @param b Second number
 * @returns Boolean indicating if the numbers are equal
 */
export function numbersEqual(a: number, b: number): boolean {
  return a === b;
}

export interface FormattedNumberState {
  currentValue: number;
  previousValue: number;
  formattedCurrent: string;
  formattedPrevious: string;
}

/**
 * Pure helper that prepares the numeric state and its formatted variants.
 * Keeps NumberFlow component focused on rendering logic.
 */
export function computeFormattedValues(
  previousValue: number,
  nextValue: number,
  locales: string | string[] = DEFAULT_LOCALES,
  format: NumberFlowFormatOptions = DEFAULT_FORMAT
): FormattedNumberState {
  return {
    currentValue: nextValue,
    previousValue,
    formattedCurrent: formatNumber(nextValue, locales, format),
    formattedPrevious: formatNumber(previousValue, locales, format)
  };
}

/**
 * Gets formatted digits for animation by comparing current and previous values
 * 
 * @param current The current formatted value
 * @param previous The previous formatted value
 * @returns Array of arrays containing the current and previous digit for each position
 */
export function getFormattedDigits(current: string, previous: string): [string, string][] {
  // Ensure we have strings to work with
  const currentStr = String(current);
  const previousStr = String(previous);

  // Pad the shorter string to match length
  const maxLength = Math.max(currentStr.length, previousStr.length);

  // Pad with leading zeros or spaces if needed
  const paddedCurrent = currentStr.padStart(maxLength, ' ');
  const paddedPrevious = previousStr.padStart(maxLength, ' ');

  return paddedCurrent.split('').map((currentDigit, i) => [
    currentDigit,
    paddedPrevious[i] || ' '
  ]);
}

/**
 * Calculates the total animation duration based on timing and number of digits
 * 
 * @param timing The timing configuration
 * @param digitContainers The number of digit containers
 * @returns The total animation duration in milliseconds
 */
export function calculateTotalAnimationDuration(
  timing: TimingConfig, 
  digitContainers: number
): number {
  const maxTimingDuration = timing.duration;
  const totalDelay = digitContainers * ANIMATION_DELAY_PER_DIGIT;
  return maxTimingDuration + totalDelay;
}

/**
 * Observes reduced motion preference and notifies on changes.
 * 
 * @param respectMotionPreference Whether observation is needed
 * @param onChange Callback fired with the current preference
 * @returns Cleanup function to remove listeners
 */
export function watchReducedMotion(
  respectMotionPreference: boolean,
  onChange: (value: boolean) => void
): () => void {
  if (!respectMotionPreference) {
    onChange(false);
    return () => {};
  }

  if (typeof window === 'undefined') {
    onChange(false);
    return () => {};
  }

  const mediaQuery = window.matchMedia(REDUCED_MOTION_MEDIA_QUERY);
  onChange(mediaQuery.matches);

  const handleChange = (event: MediaQueryListEvent) => {
    onChange(event.matches);
  };

  mediaQuery.addEventListener('change', handleChange);

  return () => {
    mediaQuery.removeEventListener('change', handleChange);
  };
}

export interface DigitAnimationOptions {
  animated: boolean;
  reducedMotion: boolean;
  currentValue: number;
  previousValue: number;
  container: HTMLElement | null;
  digitSelector: string;
  spinTiming: TimingConfig;
  transformTiming: TimingConfig;
  opacityTiming: TimingConfig;
  onStart?: () => void;
  onFinish?: () => void;
}

/**
 * Coordinates DOM updates required to run the digit animations.
 */
export function animateDigits({
  animated,
  reducedMotion,
  currentValue,
  previousValue,
  container,
  digitSelector,
  spinTiming,
  transformTiming,
  opacityTiming,
  onStart,
  onFinish
}: DigitAnimationOptions): void {
  if (!animated || reducedMotion || numbersEqual(currentValue, previousValue) || !container) {
    return;
  }

  onStart?.();

  container.style.setProperty('--spin-duration', `${spinTiming.duration}ms`);
  container.style.setProperty('--easing', spinTiming.easing || 'ease-in-out');
  container.style.setProperty('--transform-duration', `${transformTiming.duration}ms`);
  container.style.setProperty('--opacity-duration', `${opacityTiming.duration}ms`);

  const digitContainers = container.querySelectorAll(`.${digitSelector}`);

  digitContainers.forEach((digit, index) => {
    const element = digit as HTMLElement;
    const delay = index * ANIMATION_DELAY_PER_DIGIT;

    element.style.setProperty('--delay', `${delay}ms`);
    element.classList.add(ANIMATING_CLASS);

    const resetDelay = Math.max(spinTiming.duration, opacityTiming.duration) + delay;
    window.setTimeout(() => {
      element.classList.remove(ANIMATING_CLASS);
    }, resetDelay);
  });

  const totalDuration = calculateTotalAnimationDuration(
    { duration: Math.max(spinTiming.duration, opacityTiming.duration) },
    digitContainers.length
  );

  window.setTimeout(() => {
    onFinish?.();
  }, totalDuration);
}
