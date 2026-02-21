import type { DotProps } from '$stylist/design-system/props';
import { IndicatorsStyleManager } from '$stylist/design-system/styles/information/indicators';

/**
 * Dot state creator
 * Provides reactive state management for dot indicator components using Svelte 5 runes
 *
 * @param props - Dot component props
 * @returns Reactive state object with classes and computed values
 */
export function createDotState(props: DotProps) {
	const color = $derived(props.color ?? 'primary');
	const size = $derived(props.size ?? 'md');
	const classes = $derived(
		IndicatorsStyleManager.getDotClasses(
			color as Parameters<typeof IndicatorsStyleManager.getDotClasses>[0],
			size as Parameters<typeof IndicatorsStyleManager.getDotClasses>[1],
			props.class ?? ''
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
