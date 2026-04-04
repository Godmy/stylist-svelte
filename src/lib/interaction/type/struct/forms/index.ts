import type { HTMLAttributes } from 'svelte/elements';

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
 * Login Credentials structure
 */
export interface LoginCredentials {
  email: string;
  password: string;
  rememberMe?: boolean;
}

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



