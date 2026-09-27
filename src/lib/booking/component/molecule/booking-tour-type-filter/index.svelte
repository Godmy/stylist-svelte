<script lang="ts">
	import Radio from '$stylist/control/component/atom/radio/index.svelte';
	import { TOUR_TYPE_OPTIONS } from '$stylist/booking/const/preset/tour-type-options';

	type TourType = (typeof TOUR_TYPE_OPTIONS)[number]['value'];

	type Props = {
		selected?: TourType;
		/** `undefined` = «Все варианты» (no tour-type filtering). */
		onChange?: (value: TourType | undefined) => void;
	};

	let { selected, onChange }: Props = $props();
</script>

<div class="tc-booking-tour-type-filter" role="radiogroup" aria-label="Тип экскурсии">
	<Radio
		id="booking-tour-type-all"
		name="booking-tour-type"
		value="all"
		label="Все варианты"
		checked={selected === undefined}
		onchange={() => onChange?.(undefined)}
	/>
	{#each TOUR_TYPE_OPTIONS as option (option.value)}
		<Radio
			id={`booking-tour-type-${option.value}`}
			name="booking-tour-type"
			value={option.value}
			label={option.label}
			checked={selected === option.value}
			onchange={() => onChange?.(option.value)}
		/>
	{/each}
</div>

<style>
	.tc-booking-tour-type-filter {
		display: grid;
		gap: 10px;
	}
</style>
