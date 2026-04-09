/** AREA: STYLIST CODER MODEL -> AUTO-GENERATED */
export type { AddressData } from './address-data';
export type { LoginCredentials } from './login-credentials';
export type { ValidationErrors } from './validation-errors';

/** AREA: STYLIST CODER MODEL -> AUTO-PROTECTED */

/**
 * Form Data structure
 */
export interface FormData {
	email?: string;
	password?: string;
	phone?: string;
	[key: string]: any;
}