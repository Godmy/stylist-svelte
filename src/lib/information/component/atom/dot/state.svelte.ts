import type { RecipeDot } from '$stylist/information/interface/recipe/dot';

export function createDotState(props: RecipeDot) {
	const color = $derived(props.color ?? 'primary');
	const size = $derived(props.size ?? 'md');
	const className = $derived(typeof props.class === 'string' ? props.class : undefined);
	const sizeClass = $derived(`dot--${String(size).replaceAll('/', '-')}`);
	const classes = $derived(
		['dot', `dot--${color}`, sizeClass, className].filter(Boolean).join(' ')
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
