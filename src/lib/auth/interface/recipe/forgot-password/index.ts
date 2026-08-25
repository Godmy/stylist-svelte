import type { PasswordResetRequest } from '$stylist/auth/type/object/password-reset-request';
export interface RecipeForgotPassword {
	class?: string;
	formState?: {
		isLoading: boolean;
		error?: string;
		success?: boolean;
	};
	onSubmit: (data: PasswordResetRequest) => void | Promise<void>;
	loginHref?: string;
}
