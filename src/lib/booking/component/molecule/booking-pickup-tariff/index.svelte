<script lang="ts">
	import BookingPickupList from '$stylist/booking/component/molecule/booking-pickup-list/index.svelte';

	/**
	 * The opened «Место встречи» row of a price calculator: the places by
	 * tariff (Бесплатно / С доплатой / По запросу) and, under them, exactly
	 * how the chosen place changes the sum — one surcharge for the whole car,
	 * what it comes to per traveller, or «по запросу» (not in the sum yet).
	 */
	type Props = {
		value?: string;
		options?: string[];
		/** The tour's pickup tariff: surcharge for the whole car, 0 = free. */
		tariff: { place: string; amountCents: number }[];
		/** Travellers in the car, for the per-person share. */
		travellers?: number;
		onChange?: (value: string) => void;
	};

	let { value = '', options, tariff, travellers = 0, onChange }: Props = $props();

	const chosen = $derived(tariff.find((entry) => entry.place === value));

	function usd(cents: number): string {
		return `$${Math.round(cents / 100)}`;
	}
</script>

<div class="tc-booking-pickup-tariff">
	<p class="tc-booking-pickup-tariff__intro">
		Доплата за выезд — одна на всю машину, сколько бы вас ни было. Выберите место:
	</p>

	<BookingPickupList {value} {options} {tariff} {onChange} />

	{#if value}
		<p class="tc-booking-pickup-tariff__summary" data-kind={!chosen ? 'request' : chosen.amountCents === 0 ? 'free' : 'paid'}>
			<strong>{value}:</strong>
			{#if !chosen}
				по запросу — доплату уточнит менеджер, в сумму она пока не входит.
			{:else if chosen.amountCents === 0}
				выезд бесплатный, к сумме ничего не добавляется.
			{:else}
				+{usd(chosen.amountCents)} за машину — добавляется к сумме один раз{travellers > 1
					? `, это ${usd(chosen.amountCents / travellers)} с человека при ${travellers} гостях`
					: ''}.
			{/if}
		</p>
	{/if}
</div>

<style>
	.tc-booking-pickup-tariff {
		display: grid;
		gap: 12px;
	}

	.tc-booking-pickup-tariff__intro {
		margin: 0;
		font-size: 0.92rem;
		color: rgba(23, 35, 31, 0.7);
	}

	.tc-booking-pickup-tariff__summary {
		margin: 0;
		padding: 10px 12px;
		border-radius: 10px;
		font-size: 0.92rem;
		line-height: 1.45;
		background: rgba(26, 138, 134, 0.08);
		color: #17231f;
	}

	.tc-booking-pickup-tariff__summary[data-kind='paid'] {
		background: rgba(242, 138, 0, 0.1);
	}

	.tc-booking-pickup-tariff__summary[data-kind='request'] {
		background: rgba(23, 35, 31, 0.06);
	}
</style>
