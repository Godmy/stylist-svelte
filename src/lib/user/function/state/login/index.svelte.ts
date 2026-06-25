import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';
import type { RecipeLogin } from '$stylist/user/interface/recipe/login';

export const createLoginState = (props: RecipeLogin) => {
	let email = $state('');
	let password = $state('');
	let rememberMe = $state(false);

	const isLoading = $derived(props.formState?.isLoading ?? false);
	const error = $derived(props.formState?.error);
	const hasError = $derived(!!error);

	const rootClass = $derived(mergeClassNames('c-login', props.class ?? ''));

	async function handleSubmit(e: SubmitEvent) {
		e.preventDefault();
		if (isLoading) return;
		await props.onSubmit({ email, password, rememberMe });
	}

	return {
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
		get rememberMe() {
			return rememberMe;
		},
		set rememberMe(v: boolean) {
			rememberMe = v;
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

export default createLoginState;
