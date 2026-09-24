<script lang="ts">
	import { DURATION_OPTIONS } from '$stylist/booking/const/preset/duration-options';

	type Props = {
		/** Выбранные значения длительности (в днях, 3 = «3+»). Мультивыбор — фильтр по каталогу, не единственный параметр брони. */
		selected?: number[];
		onChange?: (selected: number[]) => void;
	};

	let { selected = [], onChange }: Props = $props();

	function toggle(value: number) {
		const next = selected.includes(value)
			? selected.filter((item) => item !== value)
			: [...selected, value];
		onChange?.(next);
	}
</script>

<div class="tc-booking-duration-picker" role="group" aria-label="Количество дней">
	{#each DURATION_OPTIONS as option (option.value)}
		<button
			type="button"
			class="tc-booking-duration-picker__chip"
			aria-pressed={selected.includes(option.value)}
			onclick={() => toggle(option.value)}
		>
			{option.label}
		</button>
	{/each}
</div>

<style>
	.tc-booking-duration-picker {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
	}

	.tc-booking-duration-picker__chip {
		border: 1px solid rgba(23, 35, 31, 0.16);
		border-radius: 999px;
		padding: 8px 16px;
		background: transparent;
		font: inherit;
		font-weight: 600;
		color: #17231f;
		cursor: pointer;
		transition:
			background 160ms ease,
			border-color 160ms ease,
			color 160ms ease;
	}

	.tc-booking-duration-picker__chip:hover {
		background: rgba(23, 35, 31, 0.06);
	}

	.tc-booking-duration-picker__chip[aria-pressed='true'] {
		border-color: transparent;
		background: rgba(15, 81, 50, 0.08);
		color: #0f5132;
	}

	@media (prefers-reduced-motion: reduce) {
		.tc-booking-duration-picker__chip {
			transition: none;
		}
	}
</style>
