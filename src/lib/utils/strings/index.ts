/**
 * String utilities for various operations
 * Generic utility functions that can be used across the application
 */

/**
 * Convert a country code to its flag emoji representation
 * @param countryCode The 2-letter country code (e.g. 'US', 'RU')
 * @returns The corresponding flag emoji or empty string if invalid
 */
export const getCountryFlagEmoji = (countryCode?: string) => {
  if (!countryCode || countryCode.length !== 2) return '';
  return countryCode
    .toUpperCase()
    .split('')
    .map((char) =>
      char.match(/[A-Z]/)
        ? String.fromCodePoint(127397 + char.charCodeAt(0) - 65)
        : char
    )
    .join('');
};