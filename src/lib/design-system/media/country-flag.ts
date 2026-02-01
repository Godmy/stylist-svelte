import type { Snippet } from 'svelte';

export type CountryFlagSize = number;

export interface CountryFlagProps {
  countryCode?: string;
  size?: CountryFlagSize;
  class?: string;
  content?: Snippet;
}

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

export const getCountryFlagClasses = (className = '') => {
  return `inline-block text-center align-middle ${className}`.trim();
};

export const getCountryFlagFallbackClasses = () => {
  return 'inline-flex items-center justify-center bg-gray-200 text-gray-700 rounded font-medium uppercase';
};

export const getCountryFlagStyle = (size: number) => {
  return `width: ${size}px; height: ${size}px; font-size: ${size}px; line-height: ${size}px;`;
};
