import type { AuthFormState } from '$stylist/user/type/object/auth-form-state';
import type { LoginCredentials } from '$stylist/user/type/object/login-credentials';

export interface RecipeLogin {
	class?: string;
	formState?: AuthFormState;
	onSubmit: (credentials: LoginCredentials) => void | Promise<void>;
	forgotPasswordHref?: string;
	registerHref?: string;
}
