import type { ColorSwatchProps } from '$stylist/design-system/contracts';
import { DataDisplayStyleManager } from '$stylist/design-system/styles/information/data-display';

export function createColorSwatchState(props: ColorSwatchProps) {
	const color = $derived((props.color ?? '#0ea5e9') as string);
	const size = $derived(props.size ?? 32);
	const classes = $derived(
		DataDisplayStyleManager.getColorSwatchClasses(color, size, props.class)
	);

	return {
		get color() {
			return color;
		},
		get size() {
			return size;
		},
		get classes() {
			return classes;
		}
	};
}

export default createColorSwatchState;



