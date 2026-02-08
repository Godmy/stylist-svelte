<script lang="ts">
	import { cn } from '$stylist/utils/classes';
	import type { IconWrapperProps } from '$stylist/design-system/attributes';

	// Определение состояния для IconWrapper
	export function createIconWrapperState(props: IconWrapperProps) {
		const classes = $derived(
			cn(
				'icon-wrapper',
				`size-${props.size ?? 'md'}`,
				`variant-${props.variant ?? 'default'}`,
				`shape-${props.shape ?? 'circle'}`,
				props.disabled ? 'disabled' : '',
				props.class
			)
		);

		return {
			classes,
			size: props.size ?? 'md',
			variant: props.variant ?? 'default',
			shape: props.shape ?? 'circle',
			color: props.color,
			disabled: props.disabled ?? false
		};
	}
</script>
