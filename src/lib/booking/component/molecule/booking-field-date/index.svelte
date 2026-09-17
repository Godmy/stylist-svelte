<script lang="ts">
	import BookingDropdown from '$stylist/booking/component/atom/booking-dropdown/index.svelte';
	import BookingCalendar from '$stylist/booking/component/molecule/booking-calendar/index.svelte';
	import BaseIcon from '$stylist/svg/component/atom/icon/index.svelte';

	const Calendar = 'calendar';
	const ChevronDown = 'chevron-down';

	type Props = {
		value?: string;
		onChange?: (value: string) => void;
	};

	let { value = '', onChange }: Props = $props();

	const displayValue = $derived.by(() => {
		if (!value) return '';
		const parsed = new Date(`${value}T00:00:00`);
		if (Number.isNaN(parsed.getTime())) return '';
		return parsed.toLocaleDateString('ru-RU', { day: 'numeric', month: 'short' });
	});
</script>

<BookingDropdown panelWidth="280px">
	{#snippet trigger({ open, toggle })}
		<button
			type="button"
			class="tc-booking-field"
			data-open={open || undefined}
			aria-haspopup="dialog"
			aria-expanded={open}
			onclick={toggle}
		>
			<BaseIcon name={Calendar} size={18} style="color: rgba(23, 35, 31, 0.5); flex-shrink: 0" />
			<span class="tc-booking-field__text">
				<span class="tc-booking-field__label">Когда</span>
				<span class="tc-booking-field__value">{displayValue || 'Выберите дату'}</span>
			</span>
			<BaseIcon
				name={ChevronDown}
				size={14}
				style={`color: rgba(23, 35, 31, 0.45); flex-shrink: 0; margin-left: auto; transition: transform 0.15s ease; transform: ${open ? 'rotate(180deg)' : 'none'}`}
			/>
		</button>
	{/snippet}

	{#snippet content({ close })}
		<div class="tc-booking-date-panel">
			<BookingCalendar
				{value}
				onChange={(next) => {
					onChange?.(next);
					close();
				}}
			/>
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
		color: #17231f;
		font-weight: 650;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.tc-booking-date-panel {
		padding: 14px;
		width: 100%;
		box-sizing: border-box;
	}
</style>
