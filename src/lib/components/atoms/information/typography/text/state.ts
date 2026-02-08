import type { TextProps } from '$stylist/design-system/attributes';
import { BASE_CLASSES, STATE_CLASSES } from '$stylist/design-system/tokens/classes';
import { TEXT_SIZES } from '$stylist/design-system/tokens/sizes';
import { VARIANT_TO_PALETTE } from '$stylist/design-system/tokens/variants';
import { cn } from '$stylist/utils/classes';

const getVariantClass = (variant: TextProps['variant']) => {
	if (!variant || variant === 'default' || variant === 'neutral') {
		return '';
	}

	const palette = VARIANT_TO_PALETTE[variant as keyof typeof VARIANT_TO_PALETTE];

	return palette ? `text-[var(--color-${palette}-700)]` : '';
};

export function createTypographyState(props: TextProps) {
	const variant = $derived(props.variant ?? 'default');
	const size = $derived(props.size ?? 'md');
	const disabled = $derived(props.disabled ?? false);
	const block = $derived(props.block ?? false);
	const variantClass = $derived(getVariantClass(variant));
	const classes = $derived(
		cn(
			BASE_CLASSES.text,
			TEXT_SIZES[size],
			variantClass,
			disabled ? STATE_CLASSES.disabled : '',
			block ? STATE_CLASSES.block : '',
			props.class
		)
	);

	return {
		get variant() {
			return variant;
		},
		get size() {
			return size;
		},
		get disabled() {
			return disabled;
		},
		get block() {
			return block;
		},
		get classes() {
			return classes;
		}
	};
}
