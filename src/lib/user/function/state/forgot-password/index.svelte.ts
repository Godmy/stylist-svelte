import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';
import type { RecipeForgotPassword } from '$stylist/user/interface/recipe/forgot-password';

export const createForgotPasswordState = (props: RecipeForgotPassword) => {
	let email = $state('');
	let submitted = $state(false);

	const isLoading = $derived(props.formState?.isLoading ?? false);
	const error = $derived(props.formState?.error);
	const hasError = $derived(!!error);
	const isSuccess = $derived(props.formState?.success ?? submitted);

	const rootClass = $derived(mergeClassNames('c-forgot-password', props.class ?? ''));

	async function handleSubmit(e: SubmitEvent) {
		e.preventDefault();
		if (isLoading) return;
		await props.onSubmit({ email });
		if (!props.formState?.error) {
			submitted = true;
		}
	}

	function handleTryAgain() {
		submitted = false;
		email = '';
	}

	return {
		get email() {
			return email;
		},
		set email(v: string) {
			email = v;
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
		get isSuccess() {
			return isSuccess;
		},
		get submittedEmail() {
			return email;
		},
		get rootClass() {
			return rootClass;
		},
		handleSubmit,
		handleTryAgain
	};
};

export default createForgotPasswordState;
