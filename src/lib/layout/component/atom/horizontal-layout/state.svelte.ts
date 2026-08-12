import type { RecipeHorizontalLayout } from '$stylist/layout/interface/recipe/horizontal-layout';
import type { TokenAlignment } from '$stylist/layout/type/alias/alignment';
import type { TokenJustification } from '$stylist/layout/type/alias/justification';

export function createHorizontalLayoutState(props: RecipeHorizontalLayout) {
	const gap = $derived(props.gap ?? 16);
	const alignItems = $derived<TokenAlignment>(
		(props.alignItems as TokenAlignment | undefined) ?? 'center'
	);
	const justifyContent = $derived<TokenJustification>(
		(props.justifyContent as TokenJustification | undefined) ?? 'justify'
	);
	const wrap = $derived(props.wrap ?? true);

	const restProps = $derived.by(() => {
		const {
			class: _class,
			gap: _gap,
			alignItems: _alignItems,
			justifyContent: _justifyContent,
			wrap: _wrap,
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
		get wrap() {
			return wrap;
		},
		get restProps() {
			return restProps;
		}
	};
}

export default createHorizontalLayoutState;
