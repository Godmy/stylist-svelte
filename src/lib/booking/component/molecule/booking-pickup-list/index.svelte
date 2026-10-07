<script lang="ts">
	import BaseIcon from '$stylist/svg/component/atom/icon/index.svelte';

	const Check = 'check';

	type Props = {
		value?: string;
		options?: string[];
		/** Short note right of a place, e.g. «бесплатно» / «+$50» — by place name. */
		hints?: Record<string, string>;
		/**
		 * A tour's pickup tariff (surcharge for the whole car, 0 = free). When
		 * set, the places are laid out mega-menu style: «Бесплатно», «С
		 * доплатой» (each with its price) and «По запросу» (options outside
		 * the tariff), with a note that the surcharge is per car.
		 */
		tariff?: { place: string; amountCents: number }[];
		onChange?: (value: string) => void;
	};

	let {
		value = 'Галле',
		options = ['Галле', 'Мирисса', 'Унаватуна', 'Тангалле', 'Коломбо'],
		hints,
		tariff,
		onChange
	}: Props = $props();

	const groups = $derived.by(() => {
		if (!tariff) return null;
		const priced = new Map(tariff.map((entry) => [entry.place, entry.amountCents]));
		const ordered = [...options, ...tariff.map((entry) => entry.place).filter((place) => !options.includes(place))];
		return {
			free: ordered.filter((place) => priced.get(place) === 0),
			paid: ordered
				.filter((place) => (priced.get(place) ?? 0) > 0)
				.map((place) => ({ place, amountCents: priced.get(place)! })),
			onRequest: ordered.filter((place) => !priced.has(place))
		};
	});

	function formatUsd(cents: number): string {
		return `+$${Math.round(cents / 100)}`;
	}
</script>

{#snippet option(place: string, note?: string)}
	<li>
		<button
			type="button"
			class="tc-booking-pickup-list__option"
			role="option"
			aria-selected={place === value}
			onclick={() => onChange?.(place)}
		>
			<span>{place}</span>
			<span class="tc-booking-pickup-list__end">
				{#if note}
					<span class="tc-booking-pickup-list__hint">{note}</span>
				{/if}
				{#if place === value}
					<BaseIcon name={Check} size={14} />
				{/if}
			</span>
		</button>
	</li>
{/snippet}

{#if groups}
	<div class="tc-booking-pickup-mega">
		<div class="tc-booking-pickup-mega__columns">
			{#if groups.free.length > 0}
				<section class="tc-booking-pickup-mega__group">
					<h4 class="tc-booking-pickup-mega__title">Бесплатно</h4>
					<ul class="tc-booking-pickup-list" role="listbox" aria-label="Бесплатный выезд">
						{#each groups.free as place (place)}
							{@render option(place)}
						{/each}
					</ul>
				</section>
			{/if}
			{#if groups.paid.length > 0}
				<section class="tc-booking-pickup-mega__group">
					<h4 class="tc-booking-pickup-mega__title">С доплатой</h4>
					<p class="tc-booking-pickup-mega__note">Доплата — за всю машину, не за человека</p>
					<ul class="tc-booking-pickup-list" role="listbox" aria-label="Выезд с доплатой">
						{#each groups.paid as entry (entry.place)}
							{@render option(entry.place, formatUsd(entry.amountCents))}
						{/each}
					</ul>
				</section>
			{/if}
			{#if groups.onRequest.length > 0}
				<section class="tc-booking-pickup-mega__group">
					<h4 class="tc-booking-pickup-mega__title">По запросу</h4>
					<p class="tc-booking-pickup-mega__note">Доплату уточнит менеджер</p>
					<ul class="tc-booking-pickup-list" role="listbox" aria-label="Выезд по запросу">
						{#each groups.onRequest as place (place)}
							{@render option(place)}
						{/each}
					</ul>
				</section>
			{/if}
		</div>
		<p class="tc-booking-pickup-mega__footer">Из других мест — по запросу.</p>
	</div>
{:else}
	<ul class="tc-booking-pickup-list tc-booking-pickup-list--scroll" role="listbox" aria-label="Место высадки">
		{#each options as place (place)}
			{@render option(place, hints?.[place])}
		{/each}
	</ul>
{/if}

<style>
	.tc-booking-pickup-list {
		display: grid;
		gap: 2px;
		margin: 0;
		padding: 0;
		list-style: none;
		width: 100%;
		box-sizing: border-box;
	}

	.tc-booking-pickup-list--scroll {
		max-height: min(60vh, 420px);
		overflow-y: auto;
	}

	.tc-booking-pickup-list__end {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		flex-shrink: 0;
	}

	.tc-booking-pickup-list__hint {
		font-size: 0.82em;
		font-weight: 700;
		color: #c26d00;
	}

	.tc-booking-pickup-list__option {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 10px;
		width: 100%;
		border: 0;
		border-radius: 10px;
		padding: 8px 12px;
		background: transparent;
		font: inherit;
		font-weight: 600;
		color: #17231f;
		cursor: pointer;
		text-align: left;
		box-sizing: border-box;
	}

	.tc-booking-pickup-list__option:hover {
		background: rgba(23, 35, 31, 0.06);
	}

	.tc-booking-pickup-list__option[aria-selected='true'] {
		color: #0f5132;
		background: rgba(15, 81, 50, 0.08);
	}

	/* Mega-menu layout: one column per group, side by side when there is room. */
	.tc-booking-pickup-mega {
		display: grid;
		gap: 12px;
		width: 100%;
		max-height: min(75vh, 560px);
		overflow-y: auto;
		box-sizing: border-box;
	}

	.tc-booking-pickup-mega__columns {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
		gap: 16px;
		align-items: start;
	}

	.tc-booking-pickup-mega__group {
		display: grid;
		gap: 4px;
		min-width: 0;
	}

	.tc-booking-pickup-mega__title {
		margin: 0;
		font-family: inherit;
		padding: 0 12px;
		font-size: 0.78rem;
		font-weight: 800;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		color: rgba(23, 35, 31, 0.55);
	}

	.tc-booking-pickup-mega__note {
		margin: 0 0 4px;
		padding: 0 12px;
		font-size: 0.8rem;
		line-height: 1.35;
		color: rgba(23, 35, 31, 0.6);
	}

	.tc-booking-pickup-mega__footer {
		margin: 0;
		padding: 10px 12px 2px;
		border-top: 1px solid rgba(23, 35, 31, 0.1);
		font-size: 0.85rem;
		color: rgba(23, 35, 31, 0.65);
	}
</style>
