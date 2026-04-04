import type { ListItemMarkerRecipe } from '$stylist/information/interface/recipe/list-item-marker';
import { IndicatorsStyleManager } from '$stylist/information/class/style-manager/indicators';

/**
 * ListItemMarker state creator
 * Provides reactive state management for list item marker components using Svelte 5 runes
 *
 * @param props - ListItemMarker component props
 * @returns Reactive state object with classes and computed values
 */
export function createListItemMarkerState(props: ListItemMarkerRecipe) {
	const type = $derived(props.type ?? 'bullet');
	const value = $derived(props.value ?? '');
	const color = $derived(props.color ?? 'gray');
	const size = $derived(props.size ?? 'md');
	const className = $derived(typeof props.class === 'string' ? props.class : undefined);
	const classes = $derived(
		IndicatorsStyleManager.getMarkerClasses(
			color as Parameters<typeof IndicatorsStyleManager.getMarkerClasses>[0],
			size as Parameters<typeof IndicatorsStyleManager.getMarkerClasses>[1],
			className
		)
	);
	const bulletClasses = $derived(
		IndicatorsStyleManager.getBulletClasses(
			size as Parameters<typeof IndicatorsStyleManager.getBulletClasses>[0]
		)
	);

	return {
		get type() {
			return type;
		},
		get value() {
			return value;
		},
		get color() {
			return color;
		},
		get size() {
			return size;
		},
		get classes() {
			return classes;
		},
		get bulletClasses() {
			return bulletClasses;
		}
	};
}

export default createListItemMarkerState;





