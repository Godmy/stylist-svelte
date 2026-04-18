import { AccountFormsStyleManager } from '$stylist/form/class/style-manager/account-forms';
import type { AccountSettingsFormStateProps } from '$stylist/management/interface/recipe/account-settings-form';

export function createAccountSettingsFormState(props: AccountSettingsFormStateProps) {
	const name = $derived(props.name ?? 'John Doe');
	const email = $derived(props.email ?? 'john@example.com');
	const locale = $derived(props.locale ?? 'en-US');
	const className = $derived(props.class ?? '');

	const nameId = 'account-settings-name';
	const emailId = 'account-settings-email';
	const localeId = 'account-settings-locale';

	const containerClasses = $derived(
		AccountFormsStyleManager.root('c-account-settings-form border rounded-lg p-4 space-y-3', className)
	);

	const restProps = $derived.by(() => {
		const { class: _class, name: _name, email: _email, locale: _locale, ...rest } = props;
		return rest;
	});

	return {
		get name() { return name; },
		get email() { return email; },
		get locale() { return locale; },
		get nameId() { return nameId; },
		get emailId() { return emailId; },
		get localeId() { return localeId; },
		get containerClasses() { return containerClasses; },
		get restProps() { return restProps; }
	};
}

export default createAccountSettingsFormState;
