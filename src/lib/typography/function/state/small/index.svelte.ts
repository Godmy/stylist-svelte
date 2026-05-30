import { StyleManagerSmall } from '$stylist/typography/class/style-manager/small';
import type { ThemeSmallRecipe } from '$stylist/typography/interface/recipe/small';

export function createSmallState(props: ThemeSmallRecipe) {
	const disabled = $derived(props.disabled ?? false);
	const block = $derived(props.block ?? false);
	const children = $derived(props.children);
	const classes = $derived(
		StyleManagerSmall.root(
			disabled,
			block,
			typeof props.class === 'string' ? props.class : undefined
		)
	);
	const restProps = $derived.by(() => {
		const {
			class: _class,
			variant: _variant,
			size: _size,
			disabled: _disabled,
			block: _block,
			text: _text,
			ariaLabel: _ariaLabel,
			fontSize: _fontSize,
			fontWeight: _fontWeight,
			fontFamily: _fontFamily,
			lineHeight: _lineHeight,
			letterSpacing: _letterSpacing,
			textTransform: _textTransform,
			textAlign: _textAlign,
			lineClamp: _lineClamp,
			children: _children,
			...rest
		} = props;
		return rest;
	});
	return {
		get children() {
			return children;
		},
		get classes() {
			return classes;
		},
		get restProps() {
			return restProps;
		}
	};
}

export default createSmallState;
