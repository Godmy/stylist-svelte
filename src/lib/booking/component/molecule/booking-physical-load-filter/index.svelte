<script lang="ts">
	import { PHYSICAL_LOAD_OPTIONS } from '$stylist/booking/const/preset/physical-load-options';

	type PhysicalLoad = (typeof PHYSICAL_LOAD_OPTIONS)[number]['value'];

	type Props = {
		selected?: PhysicalLoad;
		onChange?: (value: PhysicalLoad) => void;
	};

	let { selected, onChange }: Props = $props();
</script>

<div class="tc-booking-physical-load-filter" role="radiogroup" aria-label="Физическая нагрузка">
	{#each PHYSICAL_LOAD_OPTIONS as option (option.value)}
		<label class="tc-booking-physical-load-filter__option">
			<input
				type="radio"
				name="booking-physical-load"
				value={option.value}
				checked={selected === option.value}
				onchange={() => onChange?.(option.value)}
			/>
			<span class="tc-booking-physical-load-filter__text">
				<span class="tc-booking-physical-load-filter__label">{option.label}</span>
				<span class="tc-booking-physical-load-filter__description">{option.description}</span>
			</span>
		</label>
	{/each}
</div>

<style>
	.tc-booking-physical-load-filter {
		display: grid;
		gap: 12px;
	}

	.tc-booking-physical-load-filter__option {
		display: flex;
		align-items: flex-start;
		gap: 10px;
		cursor: pointer;
	}

	.tc-booking-physical-load-filter__option input {
		margin-top: 3px;
		width: 1rem;
		height: 1rem;
		accent-color: #17231f;
		cursor: pointer;
		flex-shrink: 0;
	}

	.tc-booking-physical-load-filter__text {
		display: grid;
		gap: 2px;
	}

	.tc-booking-physical-load-filter__label {
		font-weight: 650;
		color: #17231f;
	}

	.tc-booking-physical-load-filter__description {
		font-size: 0.82rem;
		color: rgba(23, 35, 31, 0.62);
	}
</style>
