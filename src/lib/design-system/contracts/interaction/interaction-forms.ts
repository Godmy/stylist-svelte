import type { HTMLAttributes } from 'svelte/elements';

export interface AddressFormProps extends HTMLAttributes<HTMLFormElement> {
  street?: string;
  city?: string;
  region?: string;
  postalCode?: string;
  country?: string;
  class?: string;
}

export interface DocumentPreviewProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  content?: string;
  format?: 'text' | 'json' | 'markdown';
  class?: string;
}

export interface FormWithValidationProps extends HTMLAttributes<HTMLFormElement> {
  email?: string;
  password?: string;
  class?: string;
}

export interface LoginFormProps extends HTMLAttributes<HTMLFormElement> {
  email?: string;
  rememberMe?: boolean;
  class?: string;
}

export interface ScreenReaderProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  content?: string;
  class?: string;
}

export interface SearchFormProps extends HTMLAttributes<HTMLFormElement> {
  query?: string;
  placeholder?: string;
  class?: string;
}

export interface SecureFormProps extends HTMLAttributes<HTMLFormElement> {
  token?: string;
  class?: string;
}

export interface SessionManagerProps extends HTMLAttributes<HTMLDivElement> {
  activeSessions?: number;
  expiresAt?: string;
  class?: string;
}

export interface AppearanceSettingsProps extends HTMLAttributes<HTMLFormElement> {
  theme?: 'light' | 'dark' | 'system';
  fontScale?: number;
  class?: string;
}

export interface SecuritySettingsProps extends HTMLAttributes<HTMLFormElement> {
  twoFactor?: boolean;
  loginAlerts?: boolean;
  class?: string;
}
