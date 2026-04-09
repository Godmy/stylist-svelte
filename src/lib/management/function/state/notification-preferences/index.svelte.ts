import type { NotificationPreferencesProps } from '$stylist/communication/interface/component/notifications/other';
import { InteractionFeedbackStyleManager } from '$stylist/notification/class/style-manager/interaction-feedback';

export interface NotificationPreferencesStateProps extends NotificationPreferencesProps {
	email?: boolean;
	push?: boolean;
	sms?: boolean;
}

export function createNotificationPreferencesState(props: NotificationPreferencesStateProps) {
	const email = $derived(props.email ?? true);
	const push = $derived(props.push ?? true);
	const sms = $derived(props.sms ?? false);
	const className = $derived(props.class ?? '');

	const containerClasses = $derived(
		InteractionFeedbackStyleManager.root(
			'c-notification-preferences border rounded-lg p-4',
			className != null ? String(className) : ''
		)
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
		get email() { return email; },
		get push() { return push; },
		get sms() { return sms; },
		get containerClasses() { return containerClasses; },
		get restProps() { return restProps; }
	};
}

export default createNotificationPreferencesState;
