import type { DotRecipe } from '$stylist/information/interface/recipe/dot';
import { IndicatorsStyleManager } from '$stylist/information/class/style-manager/indicators';

/**
 * Dot state creator
 * Provides reactive state management for dot indicator components using Svelte 5 runes
 *
 * @param props - Dot component props
 * @returns Reactive state object with classes and computed values
 */
export function createDotState(props: DotRecipe) {
	const color = $derived(props.color ?? 'primary');
	const size = $derived(props.size ?? 'md');
	const className = $derived(typeof props.class === 'string' ? props.class : undefined);
	const classes = $derived(
		IndicatorsStyleManager.getDotClasses(
			color as Parameters<typeof IndicatorsStyleManager.getDotClasses>[0],
			size as Parameters<typeof IndicatorsStyleManager.getDotClasses>[1],
			className
		)
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

export default createDotState;





