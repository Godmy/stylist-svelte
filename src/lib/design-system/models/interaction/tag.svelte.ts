import { mergeClasses } from '$stylist/utils/classes';
import type { TagProps } from '$stylist/design-system/contracts';
import type { ComponentSize } from '$stylist/design-system/tokens';
import { VARIANT_CLASSES } from '$stylist/design-system/styles/interaction/interaction';

const TAG_VARIANT_CLASSES: Record<string, string> = {
	default: VARIANT_CLASSES.default,
	neutral: VARIANT_CLASSES.neutral,
	primary: VARIANT_CLASSES.primary,
	secondary: VARIANT_CLASSES.secondary,
	success: VARIANT_CLASSES.success,
	warning: VARIANT_CLASSES.warning,
	danger: VARIANT_CLASSES.danger,
	info: VARIANT_CLASSES.info,
	solid: VARIANT_CLASSES.solid,
	outline: VARIANT_CLASSES.outline,
	ghost: VARIANT_CLASSES.ghost,
	link: VARIANT_CLASSES.link,
	subtle: VARIANT_CLASSES.subtle,
	gray: VARIANT_CLASSES.gray
};

const TAG_SIZE_CLASSES: Record<ComponentSize, string> = {
	xs: 'px-1 py-0.5 text-[10px]',
	sm: 'px-1.5 py-0.5 text-xs',
	md: 'px-2 py-1 text-sm',
	lg: 'px-3 py-1.5 text-base',
	xl: 'px-3.5 py-2 text-lg',
	'2xl': 'px-4 py-2.5 text-xl'
};

export const createTagState = (props: TagProps) => {
	const variant = $derived((props.variant ?? 'default') as string);
	const size = $derived((props.size ?? 'md') as ComponentSize);
	const classes = $derived(
		mergeClasses(
			'inline-flex items-center rounded-md font-medium',
			TAG_VARIANT_CLASSES[variant] ?? TAG_VARIANT_CLASSES.default,
			TAG_SIZE_CLASSES[size],
			props.disabled && 'opacity-50 cursor-not-allowed',
			props.class
		)
	);

	const text = $derived(props.text);
	const disabled = $derived(props.disabled ?? false);
	const closable = $derived(props.closable ?? false);
	const closeButtonClasses = $derived(
		mergeClasses(
			'ml-1 p-0.5 rounded-full hover:bg-gray-200 text-gray-500 hover:text-gray-700',
			props.disabled && 'cursor-not-allowed'
		)
	);
	const closeButtonIconClasses = $derived('w-3 h-3');

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

