import type { HTMLAttributes } from 'svelte/elements';

/**
 * Form With Validation Props
 */
// Re-export from interaction-forms to avoid duplicates
export type { FormWithValidationProps } from './interaction-forms';

/**
 * Form Data structure
 */
export interface FormData {
  email?: string;
  password?: string;
  phone?: string;
  [key: string]: any;
}

/**
 * Validation Errors structure
 */
export interface ValidationErrors {
  email?: string;
  password?: string;
  phone?: string;
  [key: string]: string | undefined;
}

/**
 * Screen Reader Props
 */
// Re-export from interaction-forms to avoid duplicates
export type { ScreenReaderProps } from './interaction-forms';

/**
 * Search Form Props
 */
// Re-export from interaction-forms to avoid duplicates
export type { SearchFormProps } from './interaction-forms';

/**
 * Secure Form Props
 */
// Re-export from interaction-forms to avoid duplicates
export type { SecureFormProps } from './interaction-forms';

/**
 * Login Form Props
 */
// Re-export from interaction-forms to avoid duplicates
export type { LoginFormProps } from './interaction-forms';

/**
 * Login Credentials structure
 */
export interface LoginCredentials {
  email: string;
  password: string;
  rememberMe?: boolean;
}

/**
 * Address Form Props
 */
// Re-export from interaction-forms to avoid duplicates
export type { AddressFormProps } from './interaction-forms';

/**
 * Address Data structure
 */
export interface AddressData {
  country?: string;
  state?: string;
  city?: string;
  zipCode?: string;
  street?: string;
  apartment?: string;
  phone?: string;
}
