import type { BaseLayoutProps } from '$stylist/layout/type/struct/layout-extended/base-layout-props';
import type { TokenAlignment } from '$stylist/layout/type/enum/alignment';
import type { TokenJustification } from '$stylist/layout/type/enum/justification';
import type { TokenSize } from '$stylist/layout/type/enum/size';

export function createVerticalLayoutState(props: BaseLayoutProps) {
	const gap = $derived<TokenSize>((props.gap as TokenSize | undefined) ?? 'md');
	const alignItems = $derived<TokenAlignment | 'stretch' | 'baseline'>(
		(props.alignItems as TokenAlignment | 'stretch' | 'baseline' | undefined) ?? 'stretch'
	);
	const justifyContent = $derived<TokenJustification>(
		(props.justifyContent as TokenJustification | undefined) ?? 'justify'
	);
	const fillHeight = $derived(props.fillHeight ?? false);

	const restProps = $derived.by(() => {
		const {
			class: _class,
			gap: _gap,
			alignItems: _alignItems,
			justifyContent: _justifyContent,
			fillHeight: _fillHeight,
			children: _children,
			...rest
		} = props;
		return rest;
	});

	return {
		get gap() {
			return gap;
		},
		get alignItems() {
			return alignItems;
		},
		get justifyContent() {
			return justifyContent;
		},
		get fillHeight() {
			return fillHeight;
		},
		get restProps() {
			return restProps;
		}
	};
}

export default createVerticalLayoutState;
