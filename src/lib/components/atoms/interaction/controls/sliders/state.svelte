<script lang="ts">
	import { cn } from '$stylist/utils/classes';
	import type { SliderProps } from '$stylist/design-system/props';

	// Определение состояния для Slider
	export function createSliderState(props: SliderProps) {
		const min = props.min ?? 0;
		const max = props.max ?? 100;
		const value = props.value ?? min;
		
		// Calculate position as percentage
		const position = $derived.by(() => {
			if (max <= min) return 0;
			return ((value - min) / (max - min)) * 100;
		});

		const containerClasses = $derived(
			cn(
				'slider-container',
				props.disabled ? 'disabled' : '',
				props.class
			)
		);

		const trackClasses = $derived(
			cn(
				'slider-track',
				'w-full h-2 bg-[var(--color-border-primary)] rounded-full relative'
			)
		);

		const thumbClasses = $derived(
			cn(
				'slider-thumb',
				'absolute top-1/2 transform -translate-y-1/2 w-5 h-5 bg-[var(--color-primary-500)] rounded-full cursor-pointer',
				props.disabled ? 'cursor-not-allowed opacity-50' : ''
			)
		);

		return {
			get position() {
				return position;
			},
			get containerClasses() {
				return containerClasses;
			},
			get trackClasses() {
				return trackClasses;
			},
			get thumbClasses() {
				return thumbClasses;
			},
			get value() {
				return value;
			},
			get min() {
				return min;
			},
			get max() {
				return max;
			},
			get disabled() {
				return props.disabled ?? false;
			}
		};
	}
</script>
