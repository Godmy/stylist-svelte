import type { Idef0FunctionBoxRecipe as Idef0FunctionBoxProps } from '$stylist/science/interface/recipe/idef0-function-box';
import { Idef0StyleManager } from '$stylist/science/class/style-manager/idef0';

export function createIdef0FunctionBoxState(props: Idef0FunctionBoxProps) {
	const groupClasses = $derived(
		Idef0StyleManager.getFunctionBoxGroupClasses(
			typeof props.class === 'string' ? props.class : undefined
		)
	);
	const rectClasses = $derived(Idef0StyleManager.getFunctionBoxRectClasses());
	const titleClasses = $derived(Idef0StyleManager.getFunctionBoxTitleClasses());
	const subtitleClasses = $derived(Idef0StyleManager.getFunctionBoxSubtitleClasses());

	return {
		get groupClasses() { return groupClasses; },
		get rectClasses() { return rectClasses; },
		get titleClasses() { return titleClasses; },
		get subtitleClasses() { return subtitleClasses; }
	};
}

export default createIdef0FunctionBoxState;
