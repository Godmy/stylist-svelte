import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';
import { resolveAriaLabel } from '$stylist/information/function/script/resolve-aria-label';
import { resolveTypographyInlineStyle } from '$stylist/typography/function/script/typography-inline-style';
import type { TextRecipe } from '$stylist/typography/interface/recipe/text';

export function createTextPresenterState(
	props: TextRecipe,
	baseClassName: string,
	excludedPropNames: string[] = []
) {
	const disabled = $derived(props.disabled ?? false);
	const block = $derived(props.block ?? false);
	const children = $derived(props.children);
	const text = $derived(props.text);
	const ariaLabel = $derived(
		resolveAriaLabel(props.ariaLabel, props as Record<string, unknown>, '')
	);
	const classes = $derived(
		mergeClassNames(
			baseClassName,
			disabled && `${baseClassName}--disabled`,
			block && `${baseClassName}--block`,
			typeof props.class === 'string' ? props.class : undefined
		)
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
		for (const propName of excludedPropNames) {
			delete rest[propName as keyof typeof rest];
		}
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

export default createTextPresenterState;
