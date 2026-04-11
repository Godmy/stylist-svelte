/**
 * Validation Errors structure
 */
export type ValidationErrors = {
	email?: string;
	password?: string;
	phone?: string;
	[key: string]: string | undefined;
}
