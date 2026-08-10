import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';
import type { RecipeNotificationPreferences } from '$stylist/management/interface/recipe/notification-preferences';

export function createNotificationPreferencesState(props: RecipeNotificationPreferences) {
	const email = $derived(props.email ?? true);
	const push = $derived(props.push ?? true);
	const sms = $derived(props.sms ?? false);
	const className = $derived(props.class ?? '');

	const containerClasses = $derived(
		mergeClassNames('c-notification-preferences border rounded-lg p-4', className)
	);

	const restProps = $derived.by(() => {
		const {
			class: _class,
			email: _email,
			push: _push,
			sms: _sms,
			preferences: _preferences,
			...rest
		} = props;
		return rest;
	});

	return {
		get email() {
			return email;
		},
		get push() {
			return push;
		},
		get sms() {
			return sms;
		},
		get containerClasses() {
			return containerClasses;
		},
		get restProps() {
			return restProps;
		}
	};
}
