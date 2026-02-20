import type { DividerProps } from '$stylist/design-system/props';
import { LayoutStyleManager } from '$stylist/design-system/styles/layout';

type DividerOrientation = 'horizontal' | 'vertical';
type DividerAlign = 'start' | 'center' | 'end';

export function createDividerState(props: DividerProps) {
	const orientation = $derived((props.orientation ?? 'horizontal') as DividerOrientation);
	const align = $derived((props.align ?? 'center') as DividerAlign);
	const dashed = $derived(props.dashed ?? false);
	const baseLineClass = $derived(LayoutStyleManager.getDividerLineClass(dashed));
	const leftLineFlex = $derived(LayoutStyleManager.getDividerLineFlexClass(align, 'left'));
	const rightLineFlex = $derived(LayoutStyleManager.getDividerLineFlexClass(align, 'right'));
	const isHorizontal = $derived(orientation === 'horizontal');

	return {
		orientation,
		align,
		dashed,
		baseLineClass,
		leftLineFlex,
		rightLineFlex,
		isHorizontal
	};
}

export default createDividerState;