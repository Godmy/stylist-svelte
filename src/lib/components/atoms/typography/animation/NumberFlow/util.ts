import type { NumberFlowFormatOptions, TimingConfig } from './type';
import { 
  DEFAULT_FORMAT, 
  DEFAULT_LOCALES, 
  ANIMATION_DELAY_PER_DIGIT 
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
 * Checks if the user has reduced motion preference
 * 
 * @returns Boolean indicating if reduced motion is preferred
 */
export function checkReducedMotionPreference(): boolean {
  if (typeof window !== 'undefined') {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    return mediaQuery.matches;
  }
  return false;
}