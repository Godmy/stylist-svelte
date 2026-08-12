import type { RegistrationData } from '$stylist/auth/type/object/registration-data';
export interface RecipeRegister {
	class?: string;
	formState?: ({
	isLoading: boolean;
	error?: string;
	success?: boolean;
});
	onSubmit: (data: RegistrationData) => void | Promise<void>;
	loginHref?: string;
}

