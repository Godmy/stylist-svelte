import type { SlotTabIndicator as TabIndicatorProps } from '$stylist/navigation/interface/slot/tab-indicator';

export const createTabIndicatorState = (props: TabIndicatorProps) => {
	const color = $derived(props.color ?? 'primary');
	const disabled = $derived(props.disabled ?? false);
	const width = $derived(`${props.width ?? 0}px`);
	const left = $derived(`${props.left ?? 0}px`);
	const style = $derived(`width: ${width}; left: ${left};`);

	return {
		get color() {
			return color;
		},
		get disabled() {
			return disabled;
		},
		get style() {
			return style;
		}
	};
};

export default createTabIndicatorState;
