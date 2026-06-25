import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';
import type { RecipeRegister } from '$stylist/user/interface/recipe/register';

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

	const rootClass = $derived(mergeClassNames('c-register', props.class ?? ''));

	async function handleSubmit(e: SubmitEvent) {
		e.preventDefault();
		if (isLoading) return;
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
