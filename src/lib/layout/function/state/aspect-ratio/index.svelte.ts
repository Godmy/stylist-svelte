import { LayoutStyleManager } from '$stylist/layout/class/style-manager/layout';
import type { AspectRatioProps } from '$stylist/layout/type/struct/aspect-ratio/aspect-ratio-props';

export function createAspectRatioState(props: AspectRatioProps) {
	const ratio = $derived(props.ratio ?? 1);
	const classes = $derived(LayoutStyleManager.getAspectRatioClasses(props.class ?? ''));
	const restProps = $derived.by(() => {
		const { class: _class, ratio: _ratio, children: _children, ...rest } = props;
		return rest;
	});

	return {
		get ratio() {
			return ratio;
		},
		get classes() {
			return classes;
		},
		get restProps() {
			return restProps;
		}
	};
}

export default createAspectRatioState;


