import type { DividerProps } from '$stylist/layout/type/struct/divider';
import type { TokenOrientation } from '$stylist/layout/type/alias/orientation';
import type { TokenAlignment } from '$stylist/layout/type/alias/alignment';

export function createDividerState(props: DividerProps) {
	const orientation = $derived<TokenOrientation>(props.orientation ?? 'horizontal');
	const align = $derived<TokenAlignment>((props.align as TokenAlignment | undefined) ?? 'center');
	const dashed = $derived(props.dashed ?? false);
	const isHorizontal = $derived(orientation === 'horizontal');

	const restProps = $derived.by(() => {
		const {
			class: _class,
			orientation: _orientation,
			align: _align,
			dashed: _dashed,
			label: _label,
			...rest
		} = props;
		return rest;
	});

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
		get isHorizontal() {
			return isHorizontal;
		},
		get restProps() {
			return restProps;
		}
	};
}

export default createDividerState;
