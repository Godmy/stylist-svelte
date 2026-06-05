import { FormHeaderStyleManager } from '$stylist/form/class/style-manager/form-header';
import type { SlotFormHeader as FormHeaderProps } from '$stylist/form/interface/slot/form-header';

export function createFormHeaderState(props: FormHeaderProps) {
	const rootClass = $derived(FormHeaderStyleManager.root(props.class ?? ''));
	const backButtonClass = $derived(FormHeaderStyleManager.backButton(props.backButtonClass ?? ''));
	const titleClass = $derived(FormHeaderStyleManager.title(props.titleClass ?? ''));
	const subtitleClass = $derived(FormHeaderStyleManager.subtitle(props.subtitleClass ?? ''));
	const descriptionClass = $derived(
		FormHeaderStyleManager.description(props.descriptionClass ?? '')
	);
	const actionsClass = $derived(FormHeaderStyleManager.actions(props.actionsClass ?? ''));

	return {
		get rootClass() {
			return rootClass;
		},
		get backButtonClass() {
			return backButtonClass;
		},
		get titleClass() {
			return titleClass;
		},
		get subtitleClass() {
			return subtitleClass;
		},
		get descriptionClass() {
			return descriptionClass;
		},
		get actionsClass() {
			return actionsClass;
		}
	};
}

export default createFormHeaderState;
