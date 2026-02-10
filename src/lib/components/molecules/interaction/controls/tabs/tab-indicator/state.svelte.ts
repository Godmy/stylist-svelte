import type { TabIndicatorProps } from '$stylist/design-system/attributes';
import { mergeClasses } from '$stylist/utils/classes';

export const createTabIndicatorState = (props: TabIndicatorProps) => {
	const color = $derived(props.color ?? 'primary');
	const disabled = $derived(props.disabled ?? false);
	const width = $derived(`${props.width ?? 0}px`);
	const left = $derived(`${props.left ?? 0}px`);
	const classes = $derived(
		mergeClasses(
			'absolute bottom-0 h-0.5 transition-all',
			color === 'secondary'
				? 'bg-[--color-secondary-500]'
				: color === 'success'
					? 'bg-[--color-success-500]'
					: color === 'warning'
						? 'bg-[--color-warning-500]'
						: color === 'danger'
							? 'bg-[--color-danger-500]'
							: 'bg-[--color-primary-500]',
			disabled ? 'opacity-50' : '',
			props.class
		)
	);
	const style = $derived(`width: ${width}; left: ${left};`);

	return {
		get color() {
			return color;
		},
		get disabled() {
			return disabled;
		},
		get classes() {
			return classes;
		},
		get style() {
			return style;
		}
	};
};
