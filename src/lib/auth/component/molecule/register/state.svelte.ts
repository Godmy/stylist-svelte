import type { RecipeRegister } from '$stylist/auth/interface/recipe/register';

export const createRegisterState = (props: RecipeRegister) => {
	let username = $state('');
	let email = $state('');
	let password = $state('');
	let confirmPassword = $state('');
	let firstName = $state('');
	let lastName = $state('');
	let localError = $state<string | undefined>(undefined);

	const isLoading = $derived(props.formState?.isLoading ?? false);
	const serverError = $derived(props.formState?.error);
	const error = $derived(localError ?? serverError);
	const hasError = $derived(!!error);

	const rootClass = $derived(['c-register', props.class ?? ''].filter(Boolean).join(' '));

	async function handleSubmit(e: SubmitEvent) {
		e.preventDefault();
		if (isLoading) return;
		const formData = new FormData(e.currentTarget as HTMLFormElement);
		username = String(formData.get('username') ?? username);
		email = String(formData.get('email') ?? email);
		password = String(formData.get('password') ?? password);
		confirmPassword = String(formData.get('confirmPassword') ?? confirmPassword);
		firstName = String(formData.get('firstName') ?? firstName);
		lastName = String(formData.get('lastName') ?? lastName);
		localError = undefined;
		if (password !== confirmPassword) {
			localError = 'Passwords do not match';
			return;
		}
		await props.onSubmit({
			username,
			email,
			password,
			confirmPassword,
			firstName: firstName || undefined,
			lastName: lastName || undefined
		});
	}

	return {
		get username() {
			return username;
		},
		set username(v: string) {
			username = v;
		},
		get email() {
			return email;
		},
		set email(v: string) {
			email = v;
		},
		get password() {
			return password;
		},
		set password(v: string) {
			password = v;
		},
		get confirmPassword() {
			return confirmPassword;
		},
		set confirmPassword(v: string) {
			confirmPassword = v;
		},
		get firstName() {
			return firstName;
		},
		set firstName(v: string) {
			firstName = v;
		},
		get lastName() {
			return lastName;
		},
		set lastName(v: string) {
			lastName = v;
		},
		get isLoading() {
			return isLoading;
		},
		get error() {
			return error;
		},
		get hasError() {
			return hasError;
		},
		get rootClass() {
			return rootClass;
		},
		handleSubmit
	};
};

export default createRegisterState;

