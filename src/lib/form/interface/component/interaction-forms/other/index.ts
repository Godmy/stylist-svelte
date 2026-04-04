import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';

export interface AddressFormProps extends InteractionHTMLAttributes<HTMLFormElement> {
  street?: string;
  city?: string;
  region?: string;
  postalCode?: string;
  country?: string;
  class?: string;
}

export interface DocumentPreviewProps extends InteractionHTMLAttributes<HTMLDivElement> {
  title?: string;
  content?: string;
  format?: 'text' | 'json' | 'markdown';
  class?: string;
}

export interface FormWithValidationProps extends InteractionHTMLAttributes<HTMLFormElement> {
  email?: string;
  password?: string;
  class?: string;
}

export interface LoginFormProps extends InteractionHTMLAttributes<HTMLFormElement> {
  email?: string;
  rememberMe?: boolean;
  class?: string;
}

export interface ScreenReaderProps extends InteractionHTMLAttributes<HTMLDivElement> {
  title?: string;
  content?: string;
  class?: string;
}

export interface SearchFormProps extends InteractionHTMLAttributes<HTMLFormElement> {
  query?: string;
  placeholder?: string;
  class?: string;
}

export interface SecureFormProps extends InteractionHTMLAttributes<HTMLFormElement> {
  token?: string;
  class?: string;
}

export interface SessionManagerProps extends InteractionHTMLAttributes<HTMLDivElement> {
  activeSessions?: number;
  expiresAt?: string;
  class?: string;
}

export interface SecuritySettingsProps extends InteractionHTMLAttributes<HTMLFormElement> {
  twoFactor?: boolean;
  loginAlerts?: boolean;
  class?: string;
}

