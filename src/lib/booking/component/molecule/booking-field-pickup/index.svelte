<script lang="ts">
	import BookingDropdown from '$stylist/booking/component/atom/booking-dropdown/index.svelte';
	import BookingPickupList from '$stylist/booking/component/molecule/booking-pickup-list/index.svelte';
	import BaseIcon from '$stylist/svg/component/atom/icon/index.svelte';

	const MapPin = 'map-pin';
	const ChevronDown = 'chevron-down';

	type Props = {
		value?: string;
		options?: string[];
		/** Per-place note shown in the list (see BookingPickupList). */
		hints?: Record<string, string>;
		/** A tour's pickup tariff (surcharge per car, 0 = free) — the list opens mega-menu style (see BookingPickupList). */
		tariff?: { place: string; amountCents: number }[];
		/** Which edge the dropdown panel lines up with (`right` for a field near the right side of the page). */
		align?: 'left' | 'right';
		onChange?: (value: string) => void;
	};

	let {
		value = 'Галле',
		options = ['Галле', 'Мирисса', 'Унаватуна', 'Тангалле', 'Коломбо'],
		hints,
		tariff,
		align = 'left',
		onChange
	}: Props = $props();
</script>

<BookingDropdown {align} panelWidth={tariff ? 'min(640px, calc(100vw - 32px))' : '240px'}>
	{#snippet trigger({ open, toggle })}
		<button
			type="button"
			class="tc-booking-field"
			data-open={open || undefined}
			aria-haspopup="listbox"
			aria-expanded={open}
			onclick={toggle}
		>
			<BaseIcon name={MapPin} size={18} style="color: rgba(23, 35, 31, 0.5); flex-shrink: 0" />
			<span class="tc-booking-field__text">
				<span class="tc-booking-field__label">Откуда вас забрать?</span>
				<span class="tc-booking-field__value">{value}</span>
			</span>
			<BaseIcon
				name={ChevronDown}
				size={14}
				style={`color: rgba(23, 35, 31, 0.45); flex-shrink: 0; margin-left: auto; transition: transform 0.15s ease; transform: ${open ? 'rotate(180deg)' : 'none'}`}
			/>
		</button>
	{/snippet}

	{#snippet content({ close })}
		<div class="tc-booking-pickup-panel">
			<BookingPickupList
				{value}
				{options}
				{hints}
				{tariff}
				onChange={(option) => {
					onChange?.(option);
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
		min-width: 170px;
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

	.tc-booking-pickup-panel {
		padding: 8px;
		width: 100%;
		box-sizing: border-box;
	}
</style>
