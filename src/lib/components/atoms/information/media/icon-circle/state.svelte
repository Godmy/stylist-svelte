<script lang="ts">
	import { cn } from '$stylist/utils/classes';
	import type { IconCircleProps } from '$stylist/design-system/attributes';

	// Определение состояния для IconCircle
	export function createIconCircleState(props: IconCircleProps) {
		const classes = $derived(
			cn(
				'icon-circle',
				`variant-${props.variant ?? 'default'}`,
				`size-${props.size ?? 'md'}`,
				props.filled ? 'filled' : '',
				props.disabled ? 'disabled' : '',
				props.class
			)
		);

		return {
			get classes() {
				return classes;
			},
			get variant() {
				return props.variant ?? 'default';
			},
			get size() {
				return props.size ?? 'md';
			},
			get filled() {
				return props.filled ?? false;
			},
			get disabled() {
				return props.disabled ?? false;
			}
		};
	}
</script>
