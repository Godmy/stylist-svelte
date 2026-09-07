<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';

	import RecipeCurrencyConverter from './index.svelte';

	let {
		id = '',
		title = '',
		description = '',
		controls = [
			{ name: 'showInput', type: 'boolean', defaultValue: true },
			{ name: 'showConversionRate', type: 'boolean', defaultValue: true }
		]
	} = $props<{
		id?: string;
		title?: string;
		description?: string;
		controls?: SlotStory[];
	}>();

	// Sample currencies
	const currencies = [
		{ code: 'USD', name: 'US Dollar', symbol: '$' },
		{ code: 'EUR', name: 'Euro', symbol: 'в‚¬' },
		{ code: 'GBP', name: 'British Pound', symbol: 'ВЈ' },
		{ code: 'JPY', name: 'Japanese Yen', symbol: 'ВҐ' },
		{ code: 'CAD', name: 'Canadian Dollar', symbol: 'CA$' },
		{ code: 'AUD', name: 'Australian Dollar', symbol: 'AU$' }
	];

	// Sample exchange rates
	const exchangeRates = {
		USD_EUR: 0.93,
		USD_GBP: 0.79,
		USD_JPY: 154.32,
		USD_CAD: 1.36,
		USD_AUD: 1.54,
		EUR_USD: 1.07,
		EUR_GBP: 0.85,
		EUR_JPY: 165.87,
		EUR_CAD: 1.46,
		EUR_AUD: 1.65,
		GBP_USD: 1.27,
		GBP_EUR: 1.18,
		GBP_JPY: 195.14,
		GBP_CAD: 1.72,
		GBP_AUD: 1.94,
		JPY_USD: 0.0065,
		JPY_EUR: 0.006,
		JPY_GBP: 0.0051,
		JPY_CAD: 0.0088,
		JPY_AUD: 0.01,
		CAD_USD: 0.74,
		CAD_EUR: 0.68,
		CAD_GBP: 0.58,
		CAD_JPY: 113.76,
		CAD_AUD: 1.13,
		AUD_USD: 0.65,
		AUD_EUR: 0.6,
		AUD_GBP: 0.51,
		AUD_JPY: 100.39,
		AUD_CAD: 0.88
	};
</script>

<Story
	{id}
	{title}
	{description}
	component={RecipeCurrencyConverter}
	category="Organisms"
	{controls}
>
	{#snippet children(values: any)}
		<section class="sb-organisms-currency-converter _c1">
			<div class="_c2">
				<p class="_c3">Primary SlotCurrency Converter Example</p>
				<p class="_c4">Interactive currency converter with real-time exchange rates.</p>

				<div class="_c5">
					<RecipeCurrencyConverter
						amount={100}
						fromCurrency="USD"
						toCurrency="EUR"
						{currencies}
						{exchangeRates}
						showInput={values.showInput}
						showLabels={true}
						showConversionRate={values.showConversionRate}
						showFeeEstimate={false}
						feePercentage={0.5}
						onConvert={(result) => console.log('Conversion result:', result)}
						onCurrencyChange={(from, to) => console.log(`SlotCurrency changed: ${from} to ${to}`)}
					/>
				</div>
			</div>

			<div class="_c6">
				<h3 class="_c7">SlotCurrency Variations</h3>
				<p class="_c8">Different currency converter configurations with various options.</p>

				<div class="_c9">
					<article class="_c10">
						<p class="_c11">EUR to GBP</p>
						<div>
							<RecipeCurrencyConverter
								amount={50}
								fromCurrency="EUR"
								toCurrency="GBP"
								{currencies}
								{exchangeRates}
								showInput={true}
								showLabels={true}
								showConversionRate={true}
								showFeeEstimate={true}
								feePercentage={1.2}
								onConvert={(result) => console.log('Conversion result:', result)}
								onCurrencyChange={(from, to) =>
									console.log(`SlotCurrency changed: ${from} to ${to}`)}
							/>
						</div>
					</article>

					<article class="_c10">
						<p class="_c11">JPY to USD</p>
						<div>
							<RecipeCurrencyConverter
								amount={10000}
								fromCurrency="JPY"
								toCurrency="USD"
								{currencies}
								{exchangeRates}
								showInput={true}
								showLabels={true}
								showConversionRate={true}
								showFeeEstimate={false}
								feePercentage={0}
								onConvert={(result) => console.log('Conversion result:', result)}
								onCurrencyChange={(from, to) =>
									console.log(`SlotCurrency changed: ${from} to ${to}`)}
							/>
						</div>
					</article>
				</div>
			</div>
		</section>
	{/snippet}
</Story>

<style>
	._c1 {
		display: grid;
		width: 100%;
		gap: 2rem;
	}
	@media (min-width: 1024px) {
		._c1 {
			grid-template-columns: 1fr 1fr;
		}
	}
	._c10 {
		border-radius: 1rem;
		border-width: 1px;
		border-style: dashed;
		border-color: var(--color-border-primary);
		background-color: var(--color-background-primary);
		padding: 1rem;
	}
	._c11 {
		margin-bottom: 0.5rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 600;
		color: var(--color-text-primary);
	}
	._c2 {
		border-radius: 2rem;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		background-color: var(--color-background-primary);
		padding: 1.5rem;
		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
	}
	._c3 {
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 600;
		letter-spacing: 0.025em;
		color: var(--color-text-secondary);
		text-transform: uppercase;
	}
	._c4 {
		margin-top: 0.25rem;
		color: var(--color-text-primary);
	}
	._c5 {
		margin-top: 1.5rem;
	}
	._c6 {
		border-radius: 2rem;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		background-color: var(--color-background-secondary);
		padding: 1.5rem;
		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
	}
	._c7 {
		font-size: 1rem;
		line-height: 1.5rem;
		font-weight: 600;
		color: var(--color-text-primary);
	}
	._c8 {
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}
	._c9 {
		margin-top: 1.25rem;
	}
	._c9 > * + * {
		margin-top: 1rem;
	}
</style>
