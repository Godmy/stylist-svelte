<script lang="ts">
	import { cn } from '$stylist/utils/classes';
	import type { SliderTickProps } from '$stylist/design-system/props';

	// Определение состояния для Slider Tick
	export function createSliderTickState(props: SliderTickProps) {
		const value = props.value ?? 0;
		const position = props.position ?? 0;
		const active = props.active ?? false;
		const label = props.label;

		const containerClasses = $derived(
			cn(
				'slider-tick',
				'absolute bottom-0 transform -translate-x-1/2',
				active ? 'text-[var(--color-primary-500)]' : 'text-[var(--color-text-secondary)]',
				props.class
			)
		);

		return {
			get value() {
				return value;
			},
			get position() {
				return position;
			},
			get active() {
				return active;
			},
			get label() {
				return label;
			},
			get containerClasses() {
				return containerClasses;
			}
		};
	}
</script>