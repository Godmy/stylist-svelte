import type { TOKEN_ORIENTATION } from '$stylist/layout/const/array/orientation';
import type { SplitLayoutGap } from '$stylist/layout/type/alias/split-layout-gap';
import type { SplitLayoutProps } from '$stylist/layout/type/struct/layout-extended/split-layout-props';

import type { TOKEN_SIZE } from '$stylist/layout/const/array/size';
export function createSplitLayoutState(props: SplitLayoutProps) {
	const direction = $derived<(typeof TOKEN_ORIENTATION)[number]>(props.direction ?? 'horizontal');
	const gap = $derived<SplitLayoutGap>(props.gap ?? 'md');
	const primarySize = $derived<(typeof TOKEN_SIZE)[number]>(props.primarySize ?? '2/3');
	const secondarySize = $derived<(typeof TOKEN_SIZE)[number]>(props.secondarySize ?? '1/3');
	const responsive = $derived(props.responsive ?? true);

	const restProps = $derived.by(() => {
		const {
			class: _class,
			direction: _direction,
			gap: _gap,
			primarySize: _primarySize,
			secondarySize: _secondarySize,
			responsive: _responsive,
			primary: _primary,
			secondary: _secondary,
			...rest
		} = props;
		return rest;
	});

	return {
		get direction() {
			return direction;
		},
		get gap() {
			return gap;
		},
		get primarySize() {
			return primarySize;
		},
		get secondarySize() {
			return secondarySize;
		},
		get responsive() {
			return responsive;
		},
		get restProps() {
			return restProps;
		}
	};
}

export default createSplitLayoutState;

