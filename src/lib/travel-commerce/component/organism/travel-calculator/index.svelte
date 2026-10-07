<script lang="ts">
	import InputStepper from '$stylist/input/component/atom/input-stepper/index.svelte';
	import AnimatedDigit from '$stylist/animation/component/atom/animated-digit/index.svelte';
	import Accordion from '$stylist/dialog/component/molecule/accordion/index.svelte';
	import AccordionLayout from '$stylist/dialog/component/atom/accordion-layout/index.svelte';
	import BookingPickupTariff from '$stylist/booking/component/molecule/booking-pickup-tariff/index.svelte';
	import DatePairPicker from '$stylist/calendar/component/organism/date-pair-picker/index.svelte';
	import type { BookingDraft } from '$stylist/booking/type/object/booking-draft';
	import type { PricingModel } from '$stylist/travel-commerce/type/object/pricing-model';
	import type { AddonQuantity } from '$stylist/travel-commerce/type/object/addon-quantity';
	import type { TourAddon } from '$stylist/travel-commerce/type/object/tour-addon';
	import type { TripInfo } from '$stylist/travel-commerce/type/object/trip-info';
	import { calculateBookingQuote } from '$stylist/travel-commerce/function/script/calculate-booking-quote';

	/**
	 * «Калькулятор стоимости» (2026-10-07, заказчик): a receipt-like matrix —
	 * services × guests in three categories × sum. The tour row sets the party;
	 * each priced addon row says how many of each category take it (zipline
	 * for 2 of 3 adults) or how many units (single rooms); the pickup row
	 * shows the per-car surcharge. «Что входит / Не входит» close the receipt
	 * as plain lines. Same rule as the header price and the checkout
	 * (`calculateBookingQuote`).
	 */
	type Props = {
		pricing: PricingModel;
		/** The first row's label, e.g. the tour title. */
		serviceLabel: string;
		/** The booking draft (guests, pickup, date) — bind to the host store. */
		bookingValue?: BookingDraft;
		/** Addon counts by addon id — bind to share them with the header price and checkout link. */
		addons?: Record<string, AddonQuantity>;
		/** «Что входит» — one line under the receipt. */
		included?: string[];
		/** «Не входит» — one line under the receipt. */
		excluded?: string[];
		/** «Откуда вас забрать?» places (pickup row and field); the field's default list when absent. */
		pickupOptions?: string[];
		/** Bookable start dates (ISO) for scheduled tours; absent — any day. */
		availableDates?: string[];
		/** «Выезд»/«Заезд» + «Возвращение» rows: times from the tour, dates from the chosen start + length. */
		trip?: TripInfo;
		/** Tour length — the prepayment counts per day. */
		durationDays?: number;
		/** Online prepayment per paying traveller per tour day, US cents; 0/absent hides the line. */
		prepaymentPerPersonDayCents?: number;
		title?: string;
		onBook?: (value: BookingDraft) => void;
	};

	let {
		pricing,
		serviceLabel,
		bookingValue = $bindable({ pickup: 'Галле', date: '', adults: 2, children: 0, childrenUnder3: 0 }),
		addons = $bindable({}),
		included = [],
		excluded = [],
		pickupOptions,
		availableDates,
		trip,
		durationDays = 1,
		prepaymentPerPersonDayCents,
		title = 'Калькулятор стоимости',
		onBook
	}: Props = $props();

	const CATEGORIES = [
		{ key: 'adults', label: 'Взрослые' },
		{ key: 'children', label: 'Дети 5–12' },
		{ key: 'childrenUnder5', label: 'Дети до 5' }
	] as const;
	type CategoryKey = (typeof CATEGORIES)[number]['key'];

	const party = $derived<Record<CategoryKey, number>>({
		adults: bookingValue.adults + (bookingValue.seniors ?? 0) + (bookingValue.childrenTeen ?? 0),
		children: bookingValue.children,
		childrenUnder5: bookingValue.childrenUnder3 ?? 0
	});

	const quote = $derived(calculateBookingQuote(pricing, bookingValue, addons));
	const totalUsd = $derived(Math.round(quote.totalCents / 100));
	const lineCents = (id: string) => quote.addons.find((line) => line.id === id)?.amountCents ?? 0;

	const prepaymentCents = $derived(
		prepaymentPerPersonDayCents
			? Math.min(
					quote.totalCents,
					prepaymentPerPersonDayCents *
						(party.adults + party.children) *
						Math.max(1, Math.ceil(durationDays))
				)
			: 0
	);

	function usd(cents: number): string {
		return `${Math.round(cents / 100).toLocaleString('ru-RU')} $`;
	}

	function formatUsd(amount: number): string {
		return `${Math.round(amount).toLocaleString('ru-RU')} $`;
	}

	function setParty(key: CategoryKey, value: number) {
		const patch =
			key === 'adults'
				? { adults: value, seniors: 0, childrenTeen: 0 }
				: key === 'children'
					? { children: value }
					: { childrenUnder3: value };
		bookingValue = { ...bookingValue, ...patch };
	}

	function setAddon(id: string, patch: AddonQuantity) {
		addons = { ...addons, [id]: { ...addons[id], ...patch } };
	}

	function categoryPrice(addon: TourAddon, key: CategoryKey): number {
		if (addon.amount?.unit !== 'per_person') return 0;
		return key === 'adults'
			? addon.amount.adultCents
			: key === 'children'
				? addon.amount.childCents
				: addon.amount.childUnder5Cents;
	}

	const pickupCents = $derived(quote.pickup?.amountCents);
	const hasPaidPickup = $derived((pricing.pickupSurcharges ?? []).some((entry) => entry.amountCents > 0));

	function addDays(iso: string, days: number): string {
		const date = new Date(`${iso}T00:00:00Z`);
		date.setUTCDate(date.getUTCDate() + days);
		return date.toISOString().slice(0, 10);
	}


	// The end of the trip: start date + (length − 1) days.
	const lastDay = $derived(trip ? Math.max(1, trip.durationDays) - 1 : 0);
	const endDate = $derived(bookingValue.date ? addDays(bookingValue.date, lastDay) : '');

	// Closed «Место встречи»: the chosen place and what it adds.
	const pickupSumText = $derived(
		pickupCents === null || pickupCents === undefined
			? 'по запросу'
			: pickupCents === 0
				? 'бесплатно'
				: `+${usd(pickupCents)}`
	);
</script>

<section class="tc-travel-calculator" aria-label={title}>
	<header class="tc-travel-calculator__head">
		<h2 class="tc-travel-calculator__title">{title}</h2>
	</header>


	<div class="tc-travel-calculator__receipt" role="table" aria-label="Расчёт стоимости">
		<div class="tc-travel-calculator__row tc-travel-calculator__row--head" role="row">
			<span role="columnheader">Услуга</span>
			{#each CATEGORIES as category (category.key)}
				<span role="columnheader" class="tc-travel-calculator__num">{category.label}</span>
			{/each}
			<span role="columnheader" class="tc-travel-calculator__sum">Сумма</span>
		</div>

		<!-- The tour: sets the party -->
		<div class="tc-travel-calculator__row tc-travel-calculator__row--base" role="row">
			<span role="cell" class="tc-travel-calculator__service">
				<strong>{serviceLabel}</strong>
				<small>
					{pricing.priceUnit === 'per_tour'
						? 'цена за группу, дети до 5 лет — бесплатно'
						: `${usd(pricing.basePriceCents)} взр.${pricing.childPriceCents !== undefined ? ` / ${usd(pricing.childPriceCents)} реб.` : ''}, до 5 лет — бесплатно`}
				</small>
			</span>
			{#each CATEGORIES as category (category.key)}
				<span role="cell" class="tc-travel-calculator__qty">
					<span class="tc-travel-calculator__cap">{category.label}</span>
					<InputStepper
						size="sm"
						value={party[category.key]}
						min={category.key === 'adults' ? 1 : 0}
						max={16}
						label={category.label}
						onChange={(value) => setParty(category.key, value)}
					/>
				</span>
			{/each}
			<span role="cell" class="tc-travel-calculator__sum">{usd(quote.baseCents)}</span>
		</div>

		{#if pricing.pickupSurcharges}
			<!-- Место встречи: closed — the chosen place and its surcharge; open — every place by tariff and how it adds up. -->
			<div class="tc-travel-calculator__row tc-travel-calculator__row--accordion" role="row">
				<div role="cell" class="tc-travel-calculator__accordion">
					<Accordion>
						{#snippet children()}
							<AccordionLayout
								value="pickup"
								title={`Место встречи: ${bookingValue.pickup || 'не выбрано'}`}
								subtitle="Раскройте, чтобы выбрать, откуда вас забрать"
							>
								{#snippet headerEnd()}
									<span class="tc-travel-calculator__accordion-sum">{pickupSumText}</span>
								{/snippet}
								{#snippet children()}
									<BookingPickupTariff
										value={bookingValue.pickup}
										options={pickupOptions}
										tariff={pricing.pickupSurcharges ?? []}
										travellers={party.adults + party.children + party.childrenUnder5}
										onChange={(pickup) => (bookingValue = { ...bookingValue, pickup })}
									/>
								{/snippet}
							</AccordionLayout>
						{/snippet}
					</Accordion>
				</div>
			</div>
		{/if}

		{#if trip}
			<!-- Выезд/Заезд → Возвращение: one row; the return follows from the tour length. -->
			<div class="tc-travel-calculator__row tc-travel-calculator__row--dates" role="row">
				<span role="cell" class="tc-travel-calculator__service">
					<strong>Даты</strong>
					<small>возвращение считается по длительности</small>
				</span>
				<span role="cell" class="tc-travel-calculator__wide">
					<DatePairPicker
						value={bookingValue.date}
						endValue={endDate}
						startLabel={trip.startLabel}
						endLabel="Возвращение"
						startTime={trip.departTime}
						endTime={trip.returnTime}
						endPlaceholder={lastDay > 0 ? `${lastDay + 1}-й день` : 'в тот же день'}
						{availableDates}
						onChange={(date) => (bookingValue = { ...bookingValue, date })}
					/>
				</span>
			</div>
		{/if}

		{#each pricing.addons ?? [] as addon (addon.id)}
			<div class="tc-travel-calculator__row" role="row" data-active={lineCents(addon.id) > 0 || undefined}>
				<span role="cell" class="tc-travel-calculator__service">
					<strong>{addon.label}</strong>
					<small>{addon.price}{addon.description ? ` · ${addon.description}` : ''}</small>
				</span>
				{#if addon.amount?.unit === 'per_person'}
					{#each CATEGORIES as category (category.key)}
						<span role="cell" class="tc-travel-calculator__qty">
							<span class="tc-travel-calculator__cap">{category.label}</span>
							{#if party[category.key] > 0}
								<InputStepper
									size="sm"
									value={Math.min(addons[addon.id]?.[category.key] ?? 0, party[category.key])}
									min={0}
									max={party[category.key]}
									label={`${addon.label}: ${category.label}`}
									onChange={(value) => setAddon(addon.id, { [category.key]: value })}
								/>
								{#if categoryPrice(addon, category.key) === 0}
									<span class="tc-travel-calculator__free">бесплатно</span>
								{/if}
							{:else}
								<span class="tc-travel-calculator__none">—</span>
							{/if}
						</span>
					{/each}
				{:else if addon.amount?.unit === 'per_booking'}
					<!-- The rooms counter sits in the first guest column, in line with the
					     other counters (the price line «+$40 за номер» says what it counts). -->
					<span role="cell" class="tc-travel-calculator__qty">
						<InputStepper
								size="sm"
								value={addons[addon.id]?.units ?? 0}
								min={0}
								max={10}
								label={`${addon.label}: количество`}
							onChange={(value) => setAddon(addon.id, { units: value })}
						/>
					</span>
					<span role="cell" aria-hidden="true"></span>
					<span role="cell" aria-hidden="true"></span>
				{:else}
					<span role="cell" class="tc-travel-calculator__span">по согласованию — отметьте в комментарии к заказу</span>
				{/if}
				<span role="cell" class="tc-travel-calculator__sum">
					{addon.amount ? (lineCents(addon.id) > 0 ? `+${usd(lineCents(addon.id))}` : '0 $') : '—'}
				</span>
			</div>
		{/each}

		<div class="tc-travel-calculator__row tc-travel-calculator__row--total" role="row">
			<span role="cell" class="tc-travel-calculator__service"><strong>Итого</strong></span>
			<span role="cell" class="tc-travel-calculator__span"></span>
			<span role="cell" class="tc-travel-calculator__sum tc-travel-calculator__total">
				<AnimatedDigit from={totalUsd} to={totalUsd} duration="500ms" format={formatUsd} />
			</span>
		</div>
	</div>

	{#if included.length > 0 || excluded.length > 0}
		<dl class="tc-travel-calculator__terms">
			{#if included.length > 0}
				<div>
					<dt>Включено в стоимость:</dt>
					<dd>{included.join(', ')}.</dd>
				</div>
			{/if}
			{#if excluded.length > 0}
				<div>
					<dt>Не входит:</dt>
					<dd>{excluded.join(', ')}.</dd>
				</div>
			{/if}
		</dl>
	{/if}

	<footer class="tc-travel-calculator__foot">
		{#if prepaymentCents > 0 && prepaymentCents < quote.totalCents}
			<p class="tc-travel-calculator__prepay">
				Онлайн-предоплата — <strong>{usd(prepaymentCents)}</strong>, остаток — до начала поездки. Можно
				оплатить и всю сумму сразу. Оплата в рублях по курсу на странице оплаты.
			</p>
		{/if}
		{#if onBook}
			<button type="button" class="tc-travel-calculator__book" onclick={() => onBook(bookingValue)}>
				Забронировать за {usd(quote.totalCents)}
			</button>
		{/if}
	</footer>
</section>

<style>
	.tc-travel-calculator {
		container-type: inline-size;
		background: rgba(255, 255, 255, 0.7);
		border-radius: 0.75rem;
		padding: clamp(1.25rem, 3vw, 2rem);
		color: #17231f;
	}

	.tc-travel-calculator__title {
		margin: 0 0 1.25rem;
		text-align: center;
		font-size: clamp(1.4rem, 3vw, 1.8rem);
		font-weight: 700;
	}



	/* «Место встречи» accordion: one cell across the whole row, the closed
	   header reads like a receipt line (title left, sum right). */
	.tc-travel-calculator__row--accordion {
		padding: 0.35rem 0;
	}

	.tc-travel-calculator__accordion {
		grid-column: 1 / -1;
		--color-border-primary: rgba(23, 35, 31, 0.12);
		--color-background-primary: transparent;
		--color-background-secondary: rgba(23, 35, 31, 0.04);
		--color-primary-50: rgba(26, 138, 134, 0.06);
		--color-primary-500: #17231f;
		--color-primary-700: #17231f;
		--color-text-primary: #17231f;
	}

	.tc-travel-calculator__accordion :global(.c-accordion-layout__header) {
		padding: 0.5rem 0.25rem;
		border-radius: 0.5rem;
	}

	.tc-travel-calculator__accordion :global(.c-accordion-layout__title) {
		font-weight: 700;
	}

	.tc-travel-calculator__accordion :global(.c-accordion-layout__title-group) {
		flex: 1;
		justify-content: space-between;
		margin-right: 0.5rem;
	}

	.tc-travel-calculator__accordion :global(.c-accordion-layout__content) {
		padding: 0.75rem 0.25rem 0.5rem;
		border-top: 0;
	}

	.tc-travel-calculator__accordion-sum {
		font-weight: 700;
		white-space: nowrap;
	}

	/* The date pair takes everything right of the label — the guest columns
	   alone are too narrow for «вс, 8 ноября 2026 г., 04:00» twice. */
	.tc-travel-calculator__row.tc-travel-calculator__row--dates {
		grid-template-columns: auto minmax(0, 1fr);
		column-gap: 1.5rem;
	}

	.tc-travel-calculator__wide {
		grid-column: 2 / -1;
		justify-self: end;
		min-width: 0;
	}

	.tc-travel-calculator__wide :global(.c-date-pair) {
		justify-content: end;
	}



	/* Receipt: dashed rules between rows, like a printed bill. */
	.tc-travel-calculator__receipt {
		display: grid;
		border-top: 2px solid #17231f;
		border-bottom: 2px solid #17231f;
	}

	.tc-travel-calculator__row {
		display: grid;
		/* Fixed guest / sum columns: every row is its own grid, so «auto» tracks
		   would size per row and the counters would not line up as columns. */
		grid-template-columns: minmax(0, 1fr) repeat(3, 112px) 96px;
		align-items: center;
		gap: 0.75rem;
		padding: 0.7rem 0.25rem;
		border-bottom: 1px dashed rgba(23, 35, 31, 0.22);
	}

	.tc-travel-calculator__row:last-child {
		border-bottom: 0;
	}

	.tc-travel-calculator__row--head {
		font-size: 0.78rem;
		font-weight: 800;
		letter-spacing: 0.05em;
		text-transform: uppercase;
		color: rgba(23, 35, 31, 0.55);
		border-bottom: 1px solid rgba(23, 35, 31, 0.3);
	}

	.tc-travel-calculator__row--base {
		background: rgba(26, 138, 134, 0.06);
	}

	.tc-travel-calculator__row[data-active] {
		background: rgba(242, 138, 0, 0.07);
	}

	.tc-travel-calculator__row--total {
		border-top: 1px solid rgba(23, 35, 31, 0.3);
	}

	.tc-travel-calculator__service {
		display: grid;
		gap: 0.15rem;
		min-width: 0;
	}

	.tc-travel-calculator__service small {
		font-size: 0.85rem;
		line-height: 1.4;
		color: rgba(23, 35, 31, 0.6);
	}

	.tc-travel-calculator__num,
	.tc-travel-calculator__qty {
		text-align: center;
		justify-self: center;
	}

	.tc-travel-calculator__qty {
		position: relative;
		display: grid;
		justify-items: center;
		gap: 0.15rem;
	}

	.tc-travel-calculator__cap {
		display: none;
	}

	/* Hangs under the counter without taking room, so the counter stays
	   vertically centred like the others in its column. */
	.tc-travel-calculator__free {
		position: absolute;
		top: 100%;
		left: 50%;
		transform: translateX(-50%);
		margin-top: 2px;
		font-size: 0.72rem;
		line-height: 1;
		white-space: nowrap;
		color: #146663;
	}

	.tc-travel-calculator__none {
		color: rgba(23, 35, 31, 0.35);
	}

	/* Cells spanning the three guest columns (pickup, rooms, «по согласованию»). */
	.tc-travel-calculator__span {
		grid-column: span 3;
		text-align: center;
		font-size: 0.9rem;
		color: rgba(23, 35, 31, 0.65);
	}


	.tc-travel-calculator__sum {
		justify-self: end;
		text-align: right;
		font-weight: 700;
		white-space: nowrap;
	}

	.tc-travel-calculator__total {
		font-size: 1.5rem;
		font-weight: 800;
	}

	.tc-travel-calculator__terms {
		margin: 1rem 0 0;
		display: grid;
		gap: 0.4rem;
		font-size: 0.92rem;
		line-height: 1.5;
	}

	.tc-travel-calculator__terms div {
		display: flex;
		flex-wrap: wrap;
		gap: 0 0.4rem;
	}

	.tc-travel-calculator__terms dt {
		font-weight: 700;
	}

	.tc-travel-calculator__terms dd {
		margin: 0;
		color: rgba(23, 35, 31, 0.75);
	}

	.tc-travel-calculator__foot {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		margin-top: 1.25rem;
	}

	.tc-travel-calculator__prepay {
		flex: 1 1 320px;
		margin: 0;
		font-size: 0.9rem;
		line-height: 1.5;
		color: rgba(23, 35, 31, 0.7);
	}

	.tc-travel-calculator__book {
		flex: 0 0 auto;
		border: 0;
		border-radius: 999px;
		padding: 14px 28px;
		background: #17231f;
		color: white;
		font: inherit;
		font-weight: 700;
		cursor: pointer;
	}

	.tc-travel-calculator__book:hover {
		background: #2a3a34;
	}

	/* Narrow: every row becomes a small card — label + sum on top, the
	   three counters (with their own captions) below. */
	@container (max-width: 680px) {
		.tc-travel-calculator__row--head {
			display: none;
		}

		.tc-travel-calculator__row {
			grid-template-columns: repeat(3, minmax(0, 1fr));
			gap: 0.5rem 0.4rem;
		}

		.tc-travel-calculator__service {
			grid-column: 1 / 3;
			grid-row: 1;
		}

		.tc-travel-calculator__sum {
			grid-column: 3;
			grid-row: 1;
			align-self: start;
		}

		.tc-travel-calculator__qty {
			grid-row: 2;
		}

		.tc-travel-calculator__span,
		.tc-travel-calculator__wide {
			grid-row: 2;
			grid-column: 1 / -1;
			justify-self: stretch;
			text-align: left;
		}

		.tc-travel-calculator__accordion {
			grid-row: 1;
		}

		.tc-travel-calculator__row--total .tc-travel-calculator__span {
			display: none;
		}

		.tc-travel-calculator__cap {
			display: block;
			font-size: 0.72rem;
			color: rgba(23, 35, 31, 0.55);
		}

		.tc-travel-calculator__book {
			width: 100%;
		}
	}
</style>
