import type { HTMLAttributes } from 'svelte/elements';

import type { LocaleSwitcherLocale, LocaleSwitcherTimezoneOption } from '../../types/interaction/locale-switcher';
export interface LocaleSwitcherProps extends HTMLAttributes<HTMLDivElement> {
  locales: LocaleSwitcherLocale[];
  currentLocale: string;
  onLocaleChange?: (localeCode: string) => void;
  timezoneOptions?: LocaleSwitcherTimezoneOption[];
  currentTimezone?: string;
  onTimezoneChange?: (timezone: string) => void;
  showRegional?: boolean;
  showDatePreview?: boolean;
  showTimePreview?: boolean;
  class?: string;
  headerClass?: string;
  contentClass?: string;
  localeClass?: string;
  footerClass?: string;
}


