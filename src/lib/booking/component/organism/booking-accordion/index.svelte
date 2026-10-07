<script lang="ts">
	import Accordion from '$stylist/dialog/component/molecule/accordion/index.svelte';
	import AccordionLayout from '$stylist/dialog/component/atom/accordion-layout/index.svelte';
	import BookingPickupList from '$stylist/booking/component/molecule/booking-pickup-list/index.svelte';
	import BookingCalendar from '$stylist/booking/component/molecule/booking-calendar/index.svelte';
	import BookingGuest from '$stylist/booking/component/molecule/booking-guest/index.svelte';
	import BookingDurationPicker from '$stylist/booking/component/molecule/booking-duration-picker/index.svelte';
	import BookingAdventureList from '$stylist/booking/component/molecule/booking-adventure-list/index.svelte';
	import AdventureGrid from '$stylist/travel-commerce/component/molecule/adventure-grid/index.svelte';
	import { formatGuestSummary } from '$stylist/booking/function/script/format-guest-summary';
	import { formatDurationLabel } from '$stylist/booking/function/script/format-duration-label';
	import type { BookingDraft } from '$stylist/booking/type/object/booking-draft';
	import type { Excursion } from '$stylist/travel-commerce/type/object/excursion';

	type Props = {
		value?: BookingDraft;
		excursions?: Excursion[];
		showAdventures?: boolean;
		/** Показывать ли секцию «Количество дней». По умолчанию true — на странице тура (travel-product) длительность уже известна из самого тура, здесь скрывается. */
		showDuration?: boolean;
		/** Fills the width of whatever contains it instead of the default ~560px cap — for hosts (e.g. BookingBridge on mobile) that already constrain width via their own page-content gutter. */
		fullWidth?: boolean;
		/** Which `AccordionLayout` section (`pickup`/`date`/`guests`/`adventures`) starts open. Only read once, at mount — hosts that need to force a specific section open later (e.g. re-expanding straight to "Приключения") should remount this component (e.g. via `{#key}`) rather than expect this to react live. */
		initialOpenSection?: string;
		/** «Откуда забрать» places; BookingPickupList's own default when absent. */
		pickupOptions?: string[];
		/** Per-place note, e.g. «+$50» (see BookingPickupList). */
		pickupHints?: Record<string, string>;
		/** A tour's pickup tariff — places grouped Бесплатно / С доплатой / По запросу. */
		pickupTariff?: { place: string; amountCents: number }[];
		/** Only these ISO dates can be picked (a tour's schedule). */
		availableDates?: string[];
		onSearch?: (value: BookingDraft) => void;
	};

	let {
		value = $bindable({
			pickup: 'Галле',
			date: '',
			adults: 2,
			seniors: 0,
			childrenTeen: 0,
			children: 0,
			childrenUnder3: 0,
			adventures: [],
			durationDays: []
		}),
		excursions,
		showAdventures = true,
		showDuration = true,
		fullWidth = false,
		initialOpenSection,
		pickupOptions,
		pickupHints,
		pickupTariff,
		availableDates,
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
			childrenUnder3: value.childrenUnder3
		})
	);

	const durationLabel = $derived(formatDurationLabel(value.durationDays));
</script>

<div class="tc-booking-accordion" class:tc-booking-accordion--full={fullWidth}>
	<Accordion defaultValue={initialOpenSection}>
		{#snippet children()}
			<AccordionLayout value="pickup" title={`Откуда забрать: ${value.pickup}`}>
				{#snippet children()}
					<BookingPickupList
						value={value.pickup}
						options={pickupOptions}
						hints={pickupHints}
						tariff={pickupTariff}
						onChange={(pickup) => (value = { ...value, pickup })}
					/>
				{/snippet}
			</AccordionLayout>

			<AccordionLayout value="guests" title={`Кто поедет: ${guestsLabel}`}>
				{#snippet children()}
					<BookingGuest
						adults={value.adults}
						seniors={value.seniors ?? 0}
						childrenTeen={value.childrenTeen ?? 0}
						children={value.children}
						childrenUnder3={value.childrenUnder3 ?? 0}
						onAdultsChange={(adults) => (value = { ...value, adults })}
						onSeniorsChange={(seniors) => (value = { ...value, seniors })}
						onChildrenTeenChange={(childrenTeen) => (value = { ...value, childrenTeen })}
						onChildrenChange={(children) => (value = { ...value, children })}
						onChildrenUnder3Change={(childrenUnder3) => (value = { ...value, childrenUnder3 })}
					/>
				{/snippet}
			</AccordionLayout>

			<AccordionLayout value="date" title={`Когда: ${dateLabel}`}>
				{#snippet children()}
					<BookingCalendar
						value={value.date}
						{availableDates}
						onChange={(date) => (value = { ...value, date })}
					/>
				{/snippet}
			</AccordionLayout>

			{#if showDuration}
				<AccordionLayout value="duration" title={`Количество дней: ${durationLabel}`}>
					{#snippet children()}
						<BookingDurationPicker
							selected={value.durationDays ?? []}
							onChange={(durationDays) => (value = { ...value, durationDays })}
						/>
					{/snippet}
				</AccordionLayout>
			{/if}

			{#if showAdventures}
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
			{/if}
		{/snippet}
	</Accordion>

	<button type="button" class="tc-booking-accordion__action" onclick={() => onSearch?.(value)}>
		{showAdventures ? 'Показать приключения' : 'Забронировать'}
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

	.tc-booking-accordion.tc-booking-accordion--full {
		width: 100%;
	}

	.tc-booking-accordion__action {
		border: 0;
		border-radius: 999px;
		padding: 14px 18px;
		background: linear-gradient(135deg, #f28a00, #669c2f);
		color: white;
		font-weight: 700;
		cursor: pointer;
		box-shadow: 0 10px 24px rgba(102, 156, 47, 0.32);
		transition:
			transform 160ms ease,
			box-shadow 160ms ease;
	}

	.tc-booking-accordion__action:active {
		transform: scale(0.98);
		box-shadow: 0 6px 16px rgba(102, 156, 47, 0.28);
	}

	@media (prefers-reduced-motion: reduce) {
		.tc-booking-accordion__action {
			transition: none;
		}
	}
</style>
