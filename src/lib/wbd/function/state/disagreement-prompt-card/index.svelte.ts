import type { RecipeWbdDisagreementPromptCard } from '$stylist/wbd/interface/recipe/disagreement-prompt-card';

export function createWbdDisagreementPromptCardState(props: RecipeWbdDisagreementPromptCard) {
	const className = $derived(props.class ?? '');
	const spread = $derived(
		props.item.minValue === undefined || props.item.maxValue === undefined
			? undefined
			: props.item.maxValue - props.item.minValue
	);

	return {
		get item() {
			return props.item;
		},
		get spread() {
			return spread;
		},
		get className() {
			return className;
		}
	};
}

export default createWbdDisagreementPromptCardState;
