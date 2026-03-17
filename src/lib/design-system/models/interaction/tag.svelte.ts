import type { TagProps } from '$stylist/design-system/contracts';
import type { ComponentSize } from '$stylist/design-system/tokens';
import { TagStyleManager } from '$stylist/design-system/styles/interaction/tag';


export const createTagState = (props: TagProps) => {
	const variant = $derived((props.variant ?? 'default') as string);
	const size = $derived((props.size ?? 'md') as ComponentSize);
	const classes = $derived(
		TagStyleManager.getTagClasses(variant, size, props.disabled ?? false, props.class)
	);

	const text = $derived(props.text);
	const disabled = $derived(props.disabled ?? false);
	const closable = $derived(props.closable ?? false);
	const closeButtonClasses = $derived(TagStyleManager.getCloseButtonClasses(props.disabled ?? false));
	const closeButtonIconClasses = $derived(TagStyleManager.getCloseButtonIconClasses());

	return {
		get classes() {
			return classes;
		},
		get variant() {
			return variant;
		},
		get size() {
			return size;
		},
		get text() {
			return text;
		},
		get disabled() {
			return disabled;
		},
		get closable() {
			return closable;
		},
		get closeButtonClasses() {
			return closeButtonClasses;
		},
		get closeButtonIconClasses() {
			return closeButtonIconClasses;
		}
	};
};

export default createTagState;





