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
			get classes() {
				return classes;
			},
			get size() {
				return props.size ?? 'md';
			},
			get variant() {
				return props.variant ?? 'default';
			},
			get shape() {
				return props.shape ?? 'circle';
			},
			get color() {
				return props.color;
			},
			get disabled() {
				return props.disabled ?? false;
			}
		};
	}
</script>
