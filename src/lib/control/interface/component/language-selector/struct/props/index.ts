import type { Snippet } from 'svelte';
import type { Language } from '$stylist/control/type/struct/language';
import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';

/**
 * ILanguageSelectorProps — свойства переключателя языка.
 *
 * LEGO-состав:
 *   ILabelSlot            (information) — languages (labels)
 *   IIconSlot             (information) — flags
 *   ISelectable<string>   (interaction) — currentLanguage, onLanguageChange
 *   ISizable              (architecture) — size
 *   ThemeAttributes       (theme)       — variant
 */
// LanguageSelector props interface
export interface ILanguageSelectorProps {
  languages: Language[];
  currentLanguage?: string;
  onLanguageChange?: (code: string) => void;
  showFlags?: boolean;
  showNativeName?: boolean;
  searchable?: boolean;
  dropdownPlacement?: 'top' | 'bottom';
  /** Вариант отображения */
  variant?: TokenAppearance;
  /** Размер переключателя */
  size?: TokenSize;
  class?: string;
  buttonClass?: string;
  dropdownClass?: string;
  languageClass?: string;
  children?: Snippet;
}
