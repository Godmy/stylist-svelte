import type { AuthFormState } from '$stylist/auth/type/object/auth-form-state';
import type { RegistrationData } from '$stylist/auth/type/object/registration-data';

export interface RecipeRegister {
	class?: string;
	formState?: AuthFormState;
	onSubmit: (data: RegistrationData) => void | Promise<void>;
	loginHref?: string;
}

