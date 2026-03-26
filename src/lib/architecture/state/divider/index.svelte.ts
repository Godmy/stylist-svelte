import type { DividerProps } from '$stylist';
import { LayoutStyleManager } from '$stylist/architecture/class/style-manager/layout';
import type { TokenAlignment } from '$stylist/architecture/type/token/alignment';
import type { TokenOrientation } from '$stylist/architecture/type/token/orientation';

export function createDividerState(props: DividerProps) {
	const orientation = $derived((props.orientation ?? 'horizontal') as TokenOrientation);
	const align = $derived((props.align ?? 'center') as TokenAlignment);
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





