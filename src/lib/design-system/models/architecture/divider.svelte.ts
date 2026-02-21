import type { DividerProps } from '$stylist/design-system/props';
import { LayoutStyleManager } from '$stylist/design-system/styles/architecture/layout';

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
		get orientation() {
			return orientation;
		},
		get align() {
			return align;
		},
		get dashed() {
			return dashed;
		},
		get baseLineClass() {
			return baseLineClass;
		},
		get leftLineFlex() {
			return leftLineFlex;
		},
		get rightLineFlex() {
			return rightLineFlex;
		},
		get isHorizontal() {
			return isHorizontal;
		}
	};
}

export default createDividerState;
