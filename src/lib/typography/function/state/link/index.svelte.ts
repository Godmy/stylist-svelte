import type { ThemeLinkRecipe } from '$stylist/typography/interface/recipe/link';
import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';
import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';

export function createLinkState(props: ThemeLinkRecipe) {
	const variant = $derived(props.variant ?? 'default');
	const size = $derived(props.size ?? 'md');
	const disabled = $derived(props.disabled ?? false);
	const underline = $derived(props.underline ?? true);
	const href = $derived(disabled ? undefined : props.href);
	const target = $derived(props.target);
	const text = $derived(props.text);
	const classes = $derived(
		mergeClassNames('c-typography-link', typeof props.class === 'string' ? props.class : undefined)
	);

	return {
		get classes() {
			return classes;
		},
		get variant() {
			return variant as TokenAppearance;
		},
		get size() {
			return size as TokenSize;
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
