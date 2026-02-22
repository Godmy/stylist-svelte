import type { HTMLAttributes } from 'svelte/elements';

export type LocaleSwitcherLocale = {
  code: string;
  name: string;
  region?: string;
  flag?: string;
};

export type LocaleSwitcherTimezoneOption = {
  value: string;
  label: string;
};

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

