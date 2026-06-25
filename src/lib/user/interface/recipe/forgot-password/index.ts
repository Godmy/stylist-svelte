import type { AuthFormState } from '$stylist/user/type/object/auth-form-state';
import type { PasswordResetRequest } from '$stylist/user/type/object/password-reset-request';

export interface RecipeForgotPassword {
	class?: string;
	formState?: AuthFormState;
	onSubmit: (data: PasswordResetRequest) => void | Promise<void>;
	loginHref?: string;
}
