<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';

	import RecipeShippingCalculator from './index.svelte';

	let {
		id = '',
		title = '',
		description = '',
		controls = [
			{ name: 'showWeightInput', type: 'boolean', defaultValue: true },
			{ name: 'showDimensionsInput', type: 'boolean', defaultValue: true }
		]
	} = $props<{
		id?: string;
		title?: string;
		description?: string;
		controls?: SlotStory[];
	}>();

	// Sample shipping options
	const shippingOptions = [
		{
			id: 'standard',
			name: 'Standard Shipping',
			description: 'Ground shipping via major carriers',
			price: 7.99,
			estimatedDays: 5,
			carrier: 'USPS',
			trackingAvailable: true
		},
		{
			id: 'express',
			name: 'Express Shipping',
			description: '2-day expedited shipping',
			price: 14.99,
			estimatedDays: 2,
			carrier: 'FedEx',
			trackingAvailable: true
		},
		{
			id: 'overnight',
			name: 'Overnight Shipping',
			description: 'Next-day delivery',
			price: 24.99,
			estimatedDays: 1,
			carrier: 'FedEx',
			trackingAvailable: true
		}
	];

	// Sample countries
	const countries = [
		{ code: 'US', name: 'United States' },
		{ code: 'CA', name: 'Canada' },
		{ code: 'GB', name: 'United Kingdom' },
		{ code: 'DE', name: 'Germany' },
		{ code: 'FR', name: 'France' }
	];

	// Sample states
	const states = [
		{ code: 'NY', name: 'New York', countryCode: 'US' },
		{ code: 'CA', name: 'California', countryCode: 'US' },
		{ code: 'TX', name: 'Texas', countryCode: 'US' },
		{ code: 'ON', name: 'Ontario', countryCode: 'CA' },
		{ code: 'QC', name: 'Quebec', countryCode: 'CA' }
	];
</script>

<Story
	{id}
	{title}
	{description}
	component={RecipeShippingCalculator}
	category="Organisms"
	{controls}
>
	{#snippet children(values: any)}
		<section class="sb-organisms-shipping-calculator _c1">
			<div class="_c2">
				<p class="_c3">Primary Shipping Calculator Example</p>
				<p class="_c4">Shipping calculator with weight and dimension inputs.</p>

				<div class="_c5">
					<RecipeShippingCalculator
						{shippingOptions}
						{countries}
						{states}
						showWeightInput={values.showWeightInput}
						showDimensionsInput={values.showDimensionsInput}
						showCountrySelector={true}
						showStateSelector={true}
						defaultOriginCountry="US"
						defaultDestinationCountry="CA"
						defaultWeight={2.5}
						defaultDimensions={{ length: 12, width: 10, height: 8 }}
						onCalculate={(options) => console.log('Calculated shipping options:', options)}
						onOptionSelect={(option) => console.log('Selected shipping option:', option)}
					/>
				</div>
			</div>

			<div class="_c6">
				<h3 class="_c7">Shipping Calculator Variations</h3>
				<p class="_c8">Different shipping calculator configurations with various options.</p>

				<div class="_c9">
					<article class="_c10">
						<p class="_c11">Without SlotDimensions</p>
						<div>
							<RecipeShippingCalculator
								shippingOptions={shippingOptions.slice(0, 2)}
								countries={countries.slice(0, 3)}
								showWeightInput={true}
								showDimensionsInput={false}
								showCountrySelector={true}
								showStateSelector={false}
								defaultOriginCountry="US"
								defaultDestinationCountry="GB"
								defaultWeight={1.2}
								onCalculate={(options) =>
									console.log('Calculated options without dimensions:', options)}
								onOptionSelect={(option) => console.log('Selected option:', option)}
							/>
						</div>
					</article>

					<article class="_c10">
						<p class="_c11">Without Weight Input</p>
						<div>
							<RecipeShippingCalculator
								shippingOptions={shippingOptions.slice(1, 3)}
								countries={countries.slice(1, 4)}
								showWeightInput={false}
								showDimensionsInput={true}
								showCountrySelector={true}
								showStateSelector={true}
								defaultOriginCountry="DE"
								defaultDestinationCountry="FR"
								defaultDimensions={{ length: 8, width: 6, height: 4 }}
								onCalculate={(options) =>
									console.log('Calculated options without weight:', options)}
								onOptionSelect={(option) => console.log('Selected option:', option)}
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
