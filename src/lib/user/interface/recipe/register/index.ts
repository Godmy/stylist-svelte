import type { AuthFormState } from '$stylist/user/type/object/auth-form-state';
import type { RegistrationData } from '$stylist/user/type/object/registration-data';

export interface RecipeRegister {
	class?: string;
	formState?: AuthFormState;
	onSubmit: (data: RegistrationData) => void | Promise<void>;
	loginHref?: string;
}
