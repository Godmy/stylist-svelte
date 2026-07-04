import { resolveAriaLabel } from '$stylist/theme/function/resolve/aria-label';
import { resolveTypographyInlineStyle } from '$stylist/typography/function/script/inline-style';
import type { RecipeHeading } from '$stylist/typography/interface/recipe/heading';

export function createHeadingState(props: RecipeHeading) {
	const disabled = $derived(props.disabled ?? false);
	const block = $derived(props.block ?? false);
	const children = $derived(props.children);
	const text = $derived(props.text);
	const ariaLabel = $derived(
		resolveAriaLabel(props.ariaLabel, props as Record<string, unknown>, '')
	);
	const classes = $derived(
		[
			'c-typography-heading',
			disabled && 'c-typography-heading--disabled',
			block && 'c-typography-heading--block',
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
			level: _level,
			...rest
		} = props;
		return rest;
	});
	const level = $derived(props.level ?? 2);
	const tag = $derived(`h${level}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6');
	return {
		get children() {
			return children;
		},
		get text() {
			return text;
		},
		get tag() {
			return tag;
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

export default createHeadingState;
