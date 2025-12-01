export type Language = {
  code: string;
  name: string;
  nativeName?: string;
  flag?: string;
};

export type LanguageSelectorVariant = 'default';
export type LanguageSelectorSize = 'sm' | 'md' | 'lg';

export interface ILanguageSelectorProps {
  languages: Language[];
  currentLanguage?: string;
  onLanguageChange?: (languageCode: string) => void;
  showFlags?: boolean;
  showNativeName?: boolean;
  searchable?: boolean;
  dropdownPlacement?: 'top' | 'bottom';
  variant?: LanguageSelectorVariant;
  size?: LanguageSelectorSize;
  class?: string;
  buttonClass?: string;
  dropdownClass?: string;
  languageClass?: string;
}