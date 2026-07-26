import type { RecipeAccountSettingsForm } from '$stylist/user/interface/recipe/account-settings-form';

export function createAccountSettingsFormState(props: RecipeAccountSettingsForm) {
	const name = $derived(props.name ?? 'John Doe');
	const email = $derived(props.email ?? 'john@example.com');
	const locale = $derived(props.locale ?? 'en-US');
	const className = $derived(props.class ?? '');

	const nameId = 'account-settings-name';
	const emailId = 'account-settings-email';
	const localeId = 'account-settings-locale';

	const containerClasses = $derived(
		['c-account-settings-form border rounded-lg p-4 space-y-3', className]
			.filter(Boolean)
			.join(' ')
	);

	const restProps = $derived.by(() => {
		const { class: _class, name: _name, email: _email, locale: _locale, ...rest } = props;
		return rest;
	});

	return {
		get name() {
			return name;
		},
		get email() {
			return email;
		},
		get locale() {
			return locale;
		},
		get nameId() {
			return nameId;
		},
		get emailId() {
			return emailId;
		},
		get localeId() {
			return localeId;
		},
		get containerClasses() {
			return containerClasses;
		},
		get restProps() {
			return restProps;
		}
	};
}

