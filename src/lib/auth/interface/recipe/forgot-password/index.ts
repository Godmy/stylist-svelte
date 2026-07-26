import type { AuthFormState } from '$stylist/auth/type/object/auth-form-state';
import type { PasswordResetRequest } from '$stylist/auth/type/object/password-reset-request';

export interface RecipeForgotPassword {
	class?: string;
	formState?: AuthFormState;
	onSubmit: (data: PasswordResetRequest) => void | Promise<void>;
	loginHref?: string;
}

