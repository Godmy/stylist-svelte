<script lang="ts">
	import { cn } from '$stylist/utils/classes';
	import type { IconChevronProps } from '$stylist/design-system/attributes';

	// Определение состояния для IconChevron
	export function createIconChevronState(props: IconChevronProps) {
		const classes = $derived(
			cn(
				'icon-chevron',
				`size-${props.size ?? 'md'}`,
				`direction-${props.direction ?? 'down'}`,
				props.disabled ? 'disabled' : '',
				props.class
			)
		);

		return {
			get classes() {
				return classes;
			},
			get isOpen() {
				return props.isOpen ?? false;
			},
			get size() {
				return props.size ?? 'md';
			},
			get direction() {
				return props.direction ?? 'down';
			},
			get variant() {
				return props.variant ?? 'default';
			},
			get disabled() {
				return props.disabled ?? false;
			}
		};
	}
</script>
