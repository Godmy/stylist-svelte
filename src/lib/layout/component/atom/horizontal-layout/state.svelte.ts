import type { RecipeHorizontalLayout } from '$stylist/layout/interface/recipe/horizontal-layout';
import type { TokenAlignment } from '$stylist/layout/type/alias/alignment';
import type { TokenJustification } from '$stylist/layout/type/alias/justification';

const GAP_VALUES: Record<string, string> = {
	none: '0',
	xs: '0.25rem',
	sm: '0.5rem',
	md: '1rem',
	lg: '1.5rem',
	xl: '2rem',
	'2xl': '3rem'
};

export function createHorizontalLayoutState(props: RecipeHorizontalLayout) {
	const gap = $derived(props.gap ?? 16);
	const gapValue = $derived.by(() => {
		if (typeof gap === 'number') return `${gap}px`;
		return GAP_VALUES[gap] ?? gap;
	});
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
		get gapValue() {
			return gapValue;
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
