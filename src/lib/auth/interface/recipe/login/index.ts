import type { LoginCredentials } from '$stylist/auth/type/object/login-credentials';
export interface RecipeLogin {
	class?: string;
	formState?: {
		isLoading: boolean;
		error?: string;
		success?: boolean;
	};
	onSubmit: (credentials: LoginCredentials) => void | Promise<void>;
	forgotPasswordHref?: string;
	registerHref?: string;
}
