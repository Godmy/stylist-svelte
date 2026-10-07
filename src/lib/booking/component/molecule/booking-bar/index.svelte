<script lang="ts">
	import BookingFieldPickup from '$stylist/booking/component/molecule/booking-field-pickup/index.svelte';
	import BookingFieldDate from '$stylist/booking/component/molecule/booking-field-date/index.svelte';
	import BookingFieldGuests from '$stylist/booking/component/molecule/booking-field-guests/index.svelte';
	import BookingFieldDuration from '$stylist/booking/component/molecule/booking-field-duration/index.svelte';
	import AnimatedDigit from '$stylist/animation/component/atom/animated-digit/index.svelte';
	import type { BookingDraft } from '$stylist/booking/type/object/booking-draft';

	type Props = {
		value?: BookingDraft;
		compact?: boolean;
		/** Показывать ли поле «Количество дней». По умолчанию true — на странице тура (travel-product) длительность уже известна из самого тура, здесь скрывается. */
		showDuration?: boolean;
		/** «Откуда вас забрать» places; the field's own default list when absent. */
		pickupOptions?: string[];
		/** Per-place note in the pickup list, e.g. «бесплатно» / «+$50». */
		pickupHints?: Record<string, string>;
		/** A tour's pickup tariff — «Откуда вас забрать?» opens as a mega-menu (Бесплатно / С доплатой / По запросу). */
		pickupTariff?: { place: string; amountCents: number }[];
		/** Only these ISO dates can be picked in «Когда» (a tour's schedule). */
		availableDates?: string[];
		/** A tour's total in whole USD for the current choice. When set, a «Цена» field (rolling digits) takes the place of «Количество дней». */
		priceUsd?: number;
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
		compact = false,
		showDuration = true,
		pickupOptions,
		pickupHints,
		pickupTariff,
		availableDates,
		priceUsd,
		onSearch
	}: Props = $props();

	function formatUsd(amount: number): string {
		return `${Math.round(amount).toLocaleString('ru-RU')} $`;
	}
</script>

<div class="tc-booking-bar" data-compact={compact || undefined}>
	<BookingFieldPickup
		value={value.pickup}
		options={pickupOptions}
		hints={pickupHints}
		tariff={pickupTariff}
		onChange={(pickup) => (value = { ...value, pickup })}
	/>
	<BookingFieldGuests
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
	<BookingFieldDate
		value={value.date}
		{availableDates}
		onChange={(date) => (value = { ...value, date })}
	/>
	{#if priceUsd !== undefined}
		<div class="tc-booking-bar__price" aria-live="polite">
			<span class="tc-booking-bar__price-icon" aria-hidden="true">$</span>
			<span class="tc-booking-bar__price-text">
				<span class="tc-booking-bar__price-label">Цена</span>
				<span class="tc-booking-bar__price-value">
					<AnimatedDigit from={priceUsd} to={priceUsd} duration="500ms" format={formatUsd} />
				</span>
			</span>
		</div>
	{:else if showDuration}
		<BookingFieldDuration
			selected={value.durationDays ?? []}
			onChange={(durationDays) => (value = { ...value, durationDays })}
		/>
	{/if}
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

	/* Same box as the other fields (label over value), not a button. */
	/* Never squeezed: the other fields ellipsise first, the price stays whole. */
	.tc-booking-bar__price {
		display: flex;
		align-items: center;
		gap: 8px;
		flex-shrink: 0;
	}

	.tc-booking-bar__price-icon {
		display: grid;
		place-items: center;
		width: 18px;
		height: 18px;
		flex-shrink: 0;
		border: 1.5px solid rgba(23, 35, 31, 0.5);
		border-radius: 50%;
		font-size: 0.7rem;
		font-weight: 800;
		color: rgba(23, 35, 31, 0.6);
		box-sizing: border-box;
	}

	.tc-booking-bar__price-text {
		display: grid;
		gap: 2px;
		min-width: 0;
	}

	.tc-booking-bar__price-label {
		font-size: 0.76rem;
		color: rgba(23, 35, 31, 0.62);
	}

	.tc-booking-bar__price-value {
		display: block;
		color: #17231f;
		font-weight: 800;
		white-space: nowrap;
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
