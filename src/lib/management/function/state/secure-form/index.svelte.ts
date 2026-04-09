import { InteractionFormsStyleManager } from '$stylist/form/class/style-manager/interaction-forms';
import type { SecureFormProps } from '$stylist/form/interface/component/interaction-forms/other';

export interface SecureFormStateProps extends SecureFormProps {}

export function createSecureFormState(props: SecureFormStateProps) {
	const token = $derived(props.token ?? 'SECURE_TOKEN');
	const className = $derived(props.class ?? '');

	const containerClasses = $derived(
		InteractionFormsStyleManager.root('c-secure-form border rounded-lg p-4 space-y-2', className)
	);

	const restProps = $derived.by(() => {
		const { class: _class, token: _token, ...rest } = props;
		return rest;
	});

	return {
		get token() { return token; },
		get containerClasses() { return containerClasses; },
		get restProps() { return restProps; }
	};
}

export default createSecureFormState;
