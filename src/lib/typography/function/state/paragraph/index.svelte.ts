import { resolveAriaLabel } from '$stylist/theme/function/resolve/aria-label';
import { resolveTypographyInlineStyle } from '$stylist/typography/function/script/inline-style';
import type { RecipeText } from '$stylist/typography/interface/recipe/text';

export function createParagraphState(props: RecipeText) {
	const disabled = $derived(props.disabled ?? false);
	const block = $derived(props.block ?? false);
	const children = $derived(props.children);
	const text = $derived(props.text);
	const ariaLabel = $derived(
		resolveAriaLabel(props.ariaLabel, props as Record<string, unknown>, '')
	);
	const classes = $derived(
		[
			'c-typography-paragraph',
			disabled && 'c-typography-paragraph--disabled',
			block && 'c-typography-paragraph--block',
			typeof props.class === 'string' ? props.class : undefined
		]
			.filter(Boolean)
			.join(' ')
	);
	const style = $derived(resolveTypographyInlineStyle(props.style, props));
	const attrs = $derived({ 'aria-label': ariaLabel || undefined });
	const restProps = $derived.by(() => {
		const {
			class: _class,
			style: _style,
			tone: _tone,
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
		get text() {
			return text;
		},
		get classes() {
			return classes;
		},
		get attrs() {
			return attrs;
		},
		get style() {
			return style;
		},
		get restProps() {
			return restProps;
		}
	};
}

export default createParagraphState;
