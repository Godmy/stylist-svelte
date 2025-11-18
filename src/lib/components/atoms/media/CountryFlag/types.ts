/**
 * CountryFlag types and interfaces following SOLID principles
 */

import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';

export type CountryFlagSize = number;

export interface ICountryFlagProps {
  countryCode?: string;
  size?: CountryFlagSize;
  class?: string;
  content?: Snippet;
}

export interface ICountryFlagStyleClasses {
  base: string;
  fallback: string;
}

export type CountryFlagProps = ICountryFlagProps & HTMLAttributes<HTMLSpanElement>;