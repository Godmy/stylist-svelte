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
			classes,
			isOpen: props.isOpen ?? false,
			size: props.size ?? 'md',
			direction: props.direction ?? 'down',
			variant: props.variant ?? 'default',
			disabled: props.disabled ?? false
		};
	}
</script>
