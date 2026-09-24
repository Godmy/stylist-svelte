<script lang="ts">
	import BookingDropdown from '$stylist/booking/component/atom/booking-dropdown/index.svelte';
	import BookingDurationPicker from '$stylist/booking/component/molecule/booking-duration-picker/index.svelte';
	import { formatDurationLabel } from '$stylist/booking/function/script/format-duration-label';
	import BaseIcon from '$stylist/svg/component/atom/icon/index.svelte';

	const Clock = 'clock';
	const ChevronDown = 'chevron-down';

	type Props = {
		selected?: number[];
		onChange?: (selected: number[]) => void;
	};

	let { selected = [], onChange }: Props = $props();

	const displayValue = $derived(formatDurationLabel(selected));
</script>

<BookingDropdown align="right" panelWidth="280px">
	{#snippet trigger({ open, toggle })}
		<button
			type="button"
			class="tc-booking-field"
			data-open={open || undefined}
			aria-haspopup="dialog"
			aria-expanded={open}
			onclick={toggle}
		>
			<BaseIcon name={Clock} size={18} style="color: rgba(23, 35, 31, 0.5); flex-shrink: 0" />
			<span class="tc-booking-field__text">
				<span class="tc-booking-field__label">Количество дней</span>
				<span class="tc-booking-field__value">{displayValue}</span>
			</span>
			<BaseIcon
				name={ChevronDown}
				size={14}
				style={`color: rgba(23, 35, 31, 0.45); flex-shrink: 0; margin-left: auto; transition: transform 0.15s ease; transform: ${open ? 'rotate(180deg)' : 'none'}`}
			/>
		</button>
	{/snippet}

	{#snippet content()}
		<div class="tc-booking-duration-panel">
			<BookingDurationPicker {selected} onChange={(next) => onChange?.(next)} />
		</div>
	{/snippet}
</BookingDropdown>

<style>
	.tc-booking-field {
		display: flex;
		align-items: center;
		gap: 10px;
		min-width: 150px;
		border: 0;
		background: transparent;
		padding: 0;
		font: inherit;
		color: inherit;
		cursor: pointer;
		text-align: left;
	}

	.tc-booking-field__text {
		display: grid;
		gap: 2px;
		min-width: 0;
	}

	.tc-booking-field__label {
		font-size: 0.76rem;
		color: rgba(23, 35, 31, 0.62);
	}

	.tc-booking-field__value {
		display: block;
		color: #17231f;
		font-weight: 650;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.tc-booking-duration-panel {
		padding: 16px;
		width: 100%;
		box-sizing: border-box;
	}
</style>
