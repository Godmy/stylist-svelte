import type { RecipeTabIndicator } from '$stylist/navigation/interface/recipe/tab-indicator';

export const createTabIndicatorState = (props: RecipeTabIndicator) => {
	const color = $derived(props.color ?? 'primary');
	const disabled = $derived(props.disabled ?? false);
	const width = $derived(`${props.width ?? 0}px`);
	const left = $derived(props.left ?? '0px');
	const style = $derived(`width: ${width}; left: ${left};`);

	return {
		get color() {
			return color;
		},
		get disabled() {
			return disabled;
		},
		get style() {
			return style;
		}
	};
};

export default createTabIndicatorState;
