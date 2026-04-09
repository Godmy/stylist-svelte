/**
 * Validation Errors structure
 */
export interface ValidationErrors {
	email?: string;
	password?: string;
	phone?: string;
	[key: string]: string | undefined;
}
