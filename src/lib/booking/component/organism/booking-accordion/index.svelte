<script lang="ts">
	import Accordion from '$stylist/dialog/component/molecule/accordion/index.svelte';
	import AccordionLayout from '$stylist/dialog/component/atom/accordion-layout/index.svelte';
	import BookingPickupList from '$stylist/booking/component/molecule/booking-pickup-list/index.svelte';
	import BookingCalendar from '$stylist/booking/component/molecule/booking-calendar/index.svelte';
	import BookingGuest from '$stylist/booking/component/molecule/booking-guest/index.svelte';
	import BookingAdventureList from '$stylist/booking/component/molecule/booking-adventure-list/index.svelte';
	import AdventureGrid from '$stylist/travel-commerce/component/molecule/adventure-grid/index.svelte';
	import { formatGuestSummary } from '$stylist/booking/function/script/format-guest-summary';
	import type { BookingDraft } from '$stylist/booking/type/object/booking-draft';
	import type { Excursion } from '$stylist/travel-commerce/type/object/excursion';

	type Props = {
		value?: BookingDraft;
		excursions?: Excursion[];
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
		excursions,
		onSearch
	}: Props = $props();

	const dateLabel = $derived.by(() => {
		if (!value.date) return 'Выберите дату';
		const parsed = new Date(`${value.date}T00:00:00`);
		if (Number.isNaN(parsed.getTime())) return 'Выберите дату';
		return parsed.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' });
	});

	const guestsLabel = $derived(
		formatGuestSummary({
			adults: value.adults,
			seniors: value.seniors,
			childrenTeen: value.childrenTeen,
			children: value.children,
			childrenUnder2: value.childrenUnder2
		})
	);
</script>

<div class="tc-booking-accordion">
	<Accordion>
		{#snippet children()}
			<AccordionLayout value="pickup" title={`Откуда забрать: ${value.pickup}`}>
				{#snippet children()}
					<BookingPickupList value={value.pickup} onChange={(pickup) => (value = { ...value, pickup })} />
				{/snippet}
			</AccordionLayout>

			<AccordionLayout value="date" title={`Когда: ${dateLabel}`}>
				{#snippet children()}
					<BookingCalendar value={value.date} onChange={(date) => (value = { ...value, date })} />
				{/snippet}
			</AccordionLayout>

			<AccordionLayout value="guests" title={`Кто поедет: ${guestsLabel}`}>
				{#snippet children()}
					<BookingGuest
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
				{/snippet}
			</AccordionLayout>

			<AccordionLayout value="adventures" title="Приключения">
				{#snippet headerEnd()}
					<BookingAdventureList selected={value.adventures ?? []} {excursions} />
				{/snippet}
				{#snippet children()}
					<AdventureGrid
						{excursions}
						selected={value.adventures ?? []}
						onChange={(adventures) => (value = { ...value, adventures })}
					/>
				{/snippet}
			</AccordionLayout>
		{/snippet}
	</Accordion>

	<button type="button" class="tc-booking-accordion__action" onclick={() => onSearch?.(value)}>
		Показать приключения
	</button>
</div>

<style>
	.tc-booking-accordion {
		--color-border-primary: rgba(23, 35, 31, 0.12);
		--color-background-primary: rgba(255, 255, 255, 0.98);
		--color-background-secondary: rgba(23, 35, 31, 0.04);
		--color-primary-50: rgba(23, 35, 31, 0.06);
		--color-primary-500: #17231f;
		--color-primary-700: #17231f;
		--color-text-primary: #17231f;
		display: grid;
		gap: 14px;
		width: min(560px, calc(100% - 24px));
		margin: 0 auto;
	}

	.tc-booking-accordion__action {
		border: 0;
		border-radius: 999px;
		padding: 14px 18px;
		background: #17231f;
		color: white;
		font-weight: 700;
		cursor: pointer;
	}
</style>
