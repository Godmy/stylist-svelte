import type { RecipeAspectRatio } from '$stylist/layout/interface/recipe/aspect-ratio';

export function createAspectRatioState(props: RecipeAspectRatio) {
	const ratio = $derived(props.ratio ?? 1);

	const restProps = $derived.by(() => {
		const { class: _class, ratio: _ratio, children: _children, ...rest } = props;
		return rest;
	});

	return {
		get ratio() {
			return ratio;
		},
		get restProps() {
			return restProps;
		}
	};
}

export default createAspectRatioState;
