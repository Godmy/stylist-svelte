<script lang="ts">
	import BookingDropdown from '$stylist/booking/component/atom/booking-dropdown/index.svelte';
	import BookingGuest from '$stylist/booking/component/molecule/booking-guest/index.svelte';
	import { formatGuestCountLabel } from '$stylist/booking/function/script/format-guest-count-label';
	import BaseIcon from '$stylist/svg/component/atom/icon/index.svelte';

	const User = 'user';
	const ChevronDown = 'chevron-down';

	type Props = {
		adults?: number;
		seniors?: number;
		childrenTeen?: number;
		children?: number;
		childrenUnder3?: number;
		onAdultsChange?: (value: number) => void;
		onSeniorsChange?: (value: number) => void;
		onChildrenTeenChange?: (value: number) => void;
		onChildrenChange?: (value: number) => void;
		onChildrenUnder3Change?: (value: number) => void;
	};

	let {
		adults = 2,
		seniors = 0,
		childrenTeen = 0,
		children = 0,
		childrenUnder3 = 0,
		onAdultsChange,
		onSeniorsChange,
		onChildrenTeenChange,
		onChildrenChange,
		onChildrenUnder3Change
	}: Props = $props();

	// Короткая сводка в самом баре ("2 человека"), без деталей по категориям —
	// иначе при каждом изменении степпера меняется ширина триггера и
	// всплывающая панель (bk-dropdown__panel, align="right") визуально "прыгает".
	const totalGuests = $derived(adults + seniors + childrenTeen + children + childrenUnder3);
	const summary = $derived(formatGuestCountLabel(totalGuests));
</script>

<BookingDropdown align="right" panelWidth="360px">
	{#snippet trigger({ open, toggle })}
		<button
			type="button"
			class="tc-booking-field"
			data-open={open || undefined}
			aria-haspopup="dialog"
			aria-expanded={open}
			onclick={toggle}
		>
			<BaseIcon name={User} size={18} style="color: rgba(23, 35, 31, 0.5); flex-shrink: 0" />
			<span class="tc-booking-field__text">
				<span class="tc-booking-field__label">Гости</span>
				<span class="tc-booking-field__value">{summary}</span>
			</span>
			<BaseIcon
				name={ChevronDown}
				size={14}
				style={`color: rgba(23, 35, 31, 0.45); flex-shrink: 0; margin-left: auto; transition: transform 0.15s ease; transform: ${open ? 'rotate(180deg)' : 'none'}`}
			/>
		</button>
	{/snippet}

	{#snippet content()}
		<div class="tc-booking-guests-panel">
			<BookingGuest
				{adults}
				{seniors}
				{childrenTeen}
				{children}
				{childrenUnder3}
				onAdultsChange={(value) => onAdultsChange?.(value)}
				onSeniorsChange={(value) => onSeniorsChange?.(value)}
				onChildrenTeenChange={(value) => onChildrenTeenChange?.(value)}
				onChildrenChange={(value) => onChildrenChange?.(value)}
				onChildrenUnder3Change={(value) => onChildrenUnder3Change?.(value)}
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

	.tc-booking-guests-panel {
		padding: 16px;
		width: 100%;
		box-sizing: border-box;
	}
</style>
