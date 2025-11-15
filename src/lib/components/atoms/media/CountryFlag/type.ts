import type { HTMLAttributes } from 'svelte/elements';

export type CountryFlagProps = {
  countryCode?: string;
  size?: number;
  className?: string;
  content?: any; // Snippet type
} & HTMLAttributes<HTMLSpanElement>;

export interface CountryCodeValidation {
  isValid: boolean;
  flagEmoji: string;
}