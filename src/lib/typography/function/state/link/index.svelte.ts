import type { RecipeThemeLink } from '$stylist/typography/interface/recipe/link';
import type { TokenFontSize } from '$stylist/theme/type/alias/font-size';
import type { TokenTypographyTone } from '$stylist/theme/type/alias/tone';

export function createLinkState(props: RecipeThemeLink) {
	const tone = $derived(props.tone ?? 'primary');
	const fontSize = $derived(props.fontSize ?? '4');
	const disabled = $derived(props.disabled ?? false);
	const underline = $derived(props.underline ?? true);
	const href = $derived(disabled ? undefined : props.href);
	const target = $derived(props.target);
	const text = $derived(props.text);
	const classes = $derived(
		['c-typography-link', typeof props.class === 'string' ? props.class : undefined]
			.filter(Boolean)
			.join(' ')
	);

	return {
		get classes() {
			return classes;
		},
		get tone() {
			return tone as TokenTypographyTone;
		},
		get fontSize() {
			return fontSize as TokenFontSize;
		},
		get underline() {
			return underline;
		},
		get disabled() {
			return disabled;
		},
		get href() {
			return href;
		},
		get target() {
			return target;
		},
		get text() {
			return text;
		}
	};
}

export default createLinkState;
