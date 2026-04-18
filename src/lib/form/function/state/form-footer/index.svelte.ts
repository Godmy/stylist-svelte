import { FormFooterStyleManager } from '$stylist/form/class/style-manager/form-footer';
import type { SlotFormFooter as FormFooterProps } from '$stylist/form/interface/slot/form-footer';

export function createFormFooterState(props: FormFooterProps) {
	let rootClass = $derived(FormFooterStyleManager.root(props.class ?? ''));
	let secondaryButtonClass = $derived(
		FormFooterStyleManager.secondaryButton(
			props.secondaryButtonDisabled ?? false,
			props.secondaryButtonClass ?? ''
		)
	);
	let primaryButtonClass = $derived(
		FormFooterStyleManager.primaryButton(
			props.primaryButtonDisabled ?? false,
			props.primaryButtonClass ?? ''
		)
	);

	return {
		get rootClass() { return rootClass; },
		get secondaryButtonClass() { return secondaryButtonClass; },
		get primaryButtonClass() { return primaryButtonClass; }
	};
}

export default createFormFooterState;
