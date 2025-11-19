/**
 * Converts a country code to a flag emoji
 *
 * @param countryCode - Two-letter country code (ISO 3166-1 alpha-2)
 * @returns The flag emoji as a string, or empty string if the code is invalid
 */
export function countryCodeToFlagEmoji(countryCode: string): string {
  if (!countryCode || countryCode.length !== 2) return '';

  // Convert the country code to a flag emoji
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map((char: string) => 127397 + char.charCodeAt(0));

  return String.fromCodePoint(...codePoints);
}

/**
 * Validates if a country code is valid
 *
 * @param countryCode - Two-letter country code (ISO 3166-1 alpha-2)
 * @returns Boolean indicating if the country code is valid
 */
export function isValidCountryCode(countryCode?: string): boolean {
  return countryCodeToFlagEmoji(countryCode || '') !== '';
}

/**
 * Generates the CSS style string for the flag element
 *
 * @param size - Size of the flag in pixels
 * @param isFallback - Whether to generate styles for fallback element
 * @returns CSS style string
 */
export function generateFlagStyle(size: number, isFallback: boolean = false): string {
  if (isFallback) {
    return `width: ${size}px; height: ${size}px; line-height: ${size}px; font-size: ${size * 0.6}px;`;
  }
  return `font-size: ${size}px; width: ${size}px; height: ${size}px; line-height: ${size}px;`;
}