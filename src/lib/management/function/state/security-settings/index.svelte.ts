import { InteractionFormsStyleManager } from '$stylist/form/class/style-manager/interaction-forms';
import type { SecuritySettingsProps } from '$stylist/form/interface/component/interaction-forms/other';

export interface SecuritySettingsStateProps extends SecuritySettingsProps {}

export function createSecuritySettingsState(props: SecuritySettingsStateProps) {
	const twoFactor = $derived(props.twoFactor ?? true);
	const loginAlerts = $derived(props.loginAlerts ?? true);
	const className = $derived(props.class ?? '');

	const containerClasses = $derived(
		InteractionFormsStyleManager.root('c-security-settings border rounded-lg p-4 space-y-2', className)
	);

	const restProps = $derived.by(() => {
		const { class: _class, twoFactor: _twoFactor, loginAlerts: _loginAlerts, ...rest } = props;
		return rest;
	});

	return {
		get twoFactor() { return twoFactor; },
		get loginAlerts() { return loginAlerts; },
		get containerClasses() { return containerClasses; },
		get restProps() { return restProps; }
	};
}

export default createSecuritySettingsState;
