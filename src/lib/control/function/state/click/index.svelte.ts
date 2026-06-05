import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';
import type { SlotClick as ClickProps } from '$stylist/control/interface/slot/click';

export function createClickState(props: ClickProps) {
	const disabled = $derived(props.disabled ?? false);
	const variant = $derived(props.variant ?? 'default');
	const pressEffect = $derived(props.pressEffect ?? true);
	const hoverEffect = $derived(props.hoverEffect ?? true);

	const classes = $derived(
		mergeClassNames(
			'c-click',
			!disabled && hoverEffect && 'c-click--hover',
			!disabled && pressEffect && 'c-click--press',
			disabled && 'c-click--disabled',
			variant !== 'default' && `c-click--${variant}`,
			props.class
		)
	);

	return {
		get disabled() {
			return disabled;
		},
		get classes() {
			return classes;
		}
	};
}

export default createClickState;
