import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';
import { createRichTextSegments } from '$stylist/typography/function/script/rich-text-segments';
import { resolveTypographyInlineStyle } from '$stylist/typography/function/script/typography-inline-style';
import type { RichTextRecipe } from '$stylist/typography/interface/recipe/rich-text';

export function createRichTextState(props: RichTextRecipe) {
	const text = $derived(props.text ?? '');
	const marks = $derived(props.marks ?? []);
	const disabled = $derived(props.disabled ?? false);
	const block = $derived(props.block ?? false);
	const wrapperTag = $derived(block ? 'div' : 'span');
	const segments = $derived(createRichTextSegments(text, marks));
	const classes = $derived(
		mergeClassNames(
			'c-typography-rich-text',
			block && 'c-typography-rich-text--block',
			disabled && 'c-typography-rich-text--disabled',
			typeof props.class === 'string' ? props.class : undefined
		)
	);
	const style = $derived(resolveTypographyInlineStyle(props.style, props));
	const restProps = $derived.by(() => {
		const {
			class: _class,
			style: _style,
			tone: _tone,
			disabled: _disabled,
			block: _block,
			text: _text,
			marks: _marks,
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
		get disabled() {
			return disabled;
		},
		get text() {
			return text;
		},
		get marks() {
			return marks;
		},
		get wrapperTag() {
			return wrapperTag;
		},
		get segments() {
			return segments;
		},
		get classes() {
			return classes;
		},
		get style() {
			return style;
		},
		get restProps() {
			return restProps;
		}
	};
}

export default createRichTextState;
