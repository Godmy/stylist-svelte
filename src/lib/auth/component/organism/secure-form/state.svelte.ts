import type { RecipeSecureForm } from '$stylist/auth/interface/recipe/secure-form';

export function createSecureFormState(props: RecipeSecureForm) {
	const token = $derived(props.token ?? 'SECURE_TOKEN');
	const className = $derived(props.class ?? '');

	const containerClasses = $derived(
		['c-secure-form border rounded-lg p-4 space-y-2', className].filter(Boolean).join(' ')
	);

	const restProps = $derived.by(() => {
		const { class: _class, token: _token, ...rest } = props;
		return rest;
	});

	return {
		get token() {
			return token;
		},
		get containerClasses() {
			return containerClasses;
		},
		get restProps() {
			return restProps;
		}
	};
}

