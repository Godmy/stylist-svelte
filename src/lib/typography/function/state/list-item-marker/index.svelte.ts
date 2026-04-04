import { createListItemMarkerState as createBaseListItemMarkerState } from '$stylist/information/function/state/list-item-marker';
import { StyleManagerListItemMarker } from '$stylist/typography/class/style-manager/list-item-marker';
import type { ThemeListItemMarkerRecipe } from '$stylist/typography/interface/recipe/list-item-marker';

type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | number;

export function createListItemMarkerState(props: ThemeListItemMarkerRecipe) {
	const baseState = createBaseListItemMarkerState(props);
	const classes = $derived(StyleManagerListItemMarker.root(baseState.classes));
	const bulletClasses = $derived(
		StyleManagerListItemMarker.bullet(baseState.bulletClasses)
	);
	const iconSize = $derived<IconSize>(
		({
			xs: 'xs',
			sm: 'sm',
			md: 'md',
			lg: 'lg',
			xl: 'xl',
			'2xl': '2xl',
			'1/4': 'xs',
			'1/3': 'sm',
			'2/5': 'sm',
			'1/2': 'md',
			'3/5': 'md',
			'2/3': 'lg',
			'3/4': 'xl',
			full: 'xl'
		} as const)[baseState.size]
	);
	const restProps = $derived.by(() => {
		const {
			class: _class,
			type: _type,
			value: _value,
			color: _color,
			size: _size,
			...rest
		} = props;
		return rest;
	});
	return {
		get classes() {
			return classes;
		},
		get bulletClasses() {
			return bulletClasses;
		},
		get type() {
			return baseState.type;
		},
		get value() {
			return baseState.value;
		},
		get size() {
			return baseState.size;
		},
		get iconSize() {
			return iconSize;
		},
		get restProps() {
			return restProps;
		}
	};
}

export default createListItemMarkerState;
