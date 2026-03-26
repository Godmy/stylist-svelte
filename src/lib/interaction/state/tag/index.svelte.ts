import type { TagProps } from '$stylist/information/interface/badge';
import type { TokenSize } from '$stylist/architecture/type/token/size';
import { TagStyleManager } from '$stylist/interaction/class/style-manager/tag';


export const createTagState = (props: TagProps) => {
	const variant = $derived((props.variant ?? 'default') as string);
	const size = $derived((props.size ?? 'md') as TokenSize);
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








