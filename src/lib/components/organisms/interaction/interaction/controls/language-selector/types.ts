/**
 * LanguageSelector types and interfaces following SOLID principles
 */

import type { Snippet } from 'svelte';

export type Language = {
  code: string;
  name: string;
  nativeName?: string;
  flag?: string; // Emoji or flag representation
};

export interface ILanguageSelectorProps {
  languages: Language[];
  currentLanguage?: string;
  onLanguageChange?: (code: string) => void;
  showFlags?: boolean;
  showNativeName?: boolean;
  searchable?: boolean;
  dropdownPlacement?: 'top' | 'bottom';
  variant?: 'default' | 'minimal' | 'compact';
  size?: 'sm' | 'md' | 'lg';
  class?: string;
  buttonClass?: string;
  dropdownClass?: string;
  languageClass?: string;
  children?: Snippet;
}

export interface ILanguageSelectorStyleClasses {
  base: string;
  button: string;
  dropdown: string;
  languageItem: string;
  activeLanguage: string;
  searchInput: string;
  flag: string;
  checkIcon: string;
}