<script lang="ts">
	import { cn } from '$stylist/utils/classes';
	import type { ChipProps } from '$stylist/design-system/attributes';

	// Определение состояния для Chip
	export function createChipState(props: ChipProps) {
		const classes = $derived(
			cn(
				'chip',
				`variant-${props.variant}`,
				`size-${props.size}`,
				props.disabled ? 'disabled' : '',
				props.closable ? 'closable' : '',
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
			get closable() {
				return props.closable ?? false;
			},
			get disabled() {
				return props.disabled ?? false;
			},
			get label() {
				return props.label;
			},
			get text() {
				return props.text;
			},
			get icon() {
				return props.icon;
			},
			get content() {
				return props.content;
			}
		};
	}
</script>
