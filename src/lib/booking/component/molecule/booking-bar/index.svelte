<script lang="ts">
	import BookingFieldPickup from '$stylist/booking/component/molecule/booking-field-pickup/index.svelte';
	import BookingFieldDate from '$stylist/booking/component/molecule/booking-field-date/index.svelte';
	import BookingFieldGuests from '$stylist/booking/component/molecule/booking-field-guests/index.svelte';
	import type { BookingDraft } from '$stylist/booking/type/object/booking-draft';

	type Props = {
		value?: BookingDraft;
		compact?: boolean;
		onSearch?: (value: BookingDraft) => void;
	};

	let {
		value = {
			pickup: 'Галле',
			date: '',
			adults: 2,
			seniors: 0,
			childrenTeen: 0,
			children: 0,
			childrenUnder2: 0,
			adventures: []
		},
		compact = false,
		onSearch
	}: Props = $props();
</script>

<div class="tc-booking-bar" data-compact={compact || undefined}>
	<BookingFieldPickup value={value.pickup} onChange={(pickup) => (value = { ...value, pickup })} />
	<BookingFieldDate value={value.date} onChange={(date) => (value = { ...value, date })} />
	<BookingFieldGuests
		adults={value.adults}
		seniors={value.seniors ?? 0}
		childrenTeen={value.childrenTeen ?? 0}
		children={value.children}
		childrenUnder2={value.childrenUnder2 ?? 0}
		onAdultsChange={(adults) => (value = { ...value, adults })}
		onSeniorsChange={(seniors) => (value = { ...value, seniors })}
		onChildrenTeenChange={(childrenTeen) => (value = { ...value, childrenTeen })}
		onChildrenChange={(children) => (value = { ...value, children })}
		onChildrenUnder2Change={(childrenUnder2) => (value = { ...value, childrenUnder2 })}
	/>
	<button type="button" class="tc-booking-bar__action" onclick={() => onSearch?.(value)}>
		Забронировать
	</button>
</div>

<style>
	.tc-booking-bar {
		display: flex;
		align-items: center;
		gap: 12px;
		width: fit-content;
		max-width: calc(100% - 32px);
		margin: 0 auto;
		padding: 14px 16px;
		border: 1px solid rgba(255, 255, 255, 0.38);
		border-radius: 18px;
		background: rgba(255, 255, 255, 0.72);
		backdrop-filter: blur(18px);
		box-shadow: 0 24px 70px rgba(20, 36, 31, 0.18);
	}

	.tc-booking-bar[data-compact] {
		padding: 10px 12px;
		border-radius: 12px;
		background: rgba(255, 255, 255, 0.94);
		backdrop-filter: blur(8px);
		box-shadow: 0 8px 28px rgba(20, 36, 31, 0.12);
	}

	.tc-booking-bar__action {
		border: 0;
		border-radius: 999px;
		padding: 12px 24px;
		background: #17231f;
		color: white;
		font-weight: 700;
		cursor: pointer;
		white-space: nowrap;
		flex-shrink: 0;
	}

	@media (max-width: 860px) {
		.tc-booking-bar {
			display: grid;
			grid-template-columns: 1fr 1fr;
		}

		.tc-booking-bar__action {
			width: 100%;
			margin-left: 0;
			grid-column: 1 / -1;
		}
	}

	@media (max-width: 560px) {
		.tc-booking-bar {
			grid-template-columns: 1fr;
		}
	}
</style>
