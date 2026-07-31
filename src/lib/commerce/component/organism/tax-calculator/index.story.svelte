<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';

	import RecipeTaxCalculator from './index.svelte';

	let {
		id = '',
		title = '',
		description = '',
		controls = [
			{ name: 'showLocationSelector', type: 'boolean', defaultValue: true },
			{ name: 'showTaxRateSelector', type: 'boolean', defaultValue: true }
		]
	} = $props<{
		id?: string;
		title?: string;
		description?: string;
		controls?: SlotStory[];
	}>();

	// Sample tax data
	const locations = [
		{
			id: 'ny',
			name: 'New York',
			city: 'New York City',
			countryCode: 'US',
			stateCode: 'NY',
			taxRates: [
				{
					id: 'ny-state',
					name: 'NY SlotState Tax',
					rate: 4.0,
					description: 'SlotState tax for New York',
					compound: false
				},
				{
					id: 'ny-city',
					name: 'NY City Tax',
					rate: 4.5,
					description: 'City tax for New York City',
					compound: false
				}
			]
		},
		{
			id: 'ca',
			name: 'California',
			city: 'Los Angeles',
			countryCode: 'US',
			stateCode: 'CA',
			taxRates: [
				{
					id: 'ca-state',
					name: 'CA SlotState Tax',
					rate: 6.0,
					description: 'SlotState tax for California',
					compound: false
				},
				{
					id: 'ca-local',
					name: 'CA Local Tax',
					rate: 2.5,
					description: 'Local tax for Los Angeles',
					compound: false
				}
			]
		}
	];

	const taxRates = [
		{
			id: 'federal',
			name: 'Federal Tax',
			rate: 0.0,
			description: 'Federal tax rate',
			compound: false
		}
	];
</script>

<Story {id} {title} {description} component={RecipeTaxCalculator} category="Organisms" {controls}>
	{#snippet children(values: any)}
		<section class="sb-organisms-tax-calculator _c1">
			<div class="_c2">
				<p class="_c3">Primary Tax Calculator Example</p>
				<p class="_c4">Tax calculator with location and rate selection.</p>

				<div class="_c5">
					<RecipeTaxCalculator
						{locations}
						{taxRates}
						showLocationSelector={values.showLocationSelector}
						showTaxRateSelector={values.showTaxRateSelector}
						showIncludeTaxToggle={true}
						defaultAmount={100}
						defaultLocation="ny"
						currency="USD"
						locale="en-US"
						onCalculate={(result) => console.log('Tax calculation result:', result)}
					/>
				</div>
			</div>

			<div class="_c6">
				<h3 class="_c7">Tax Calculator Variations</h3>
				<p class="_c8">Different tax calculator configurations with various options.</p>

				<div class="_c9">
					<article class="_c10">
						<p class="_c11">California Rates</p>
						<div>
							<RecipeTaxCalculator
								{locations}
								{taxRates}
								showLocationSelector={true}
								showTaxRateSelector={true}
								showIncludeTaxToggle={false}
								defaultAmount={250}
								defaultLocation="ca"
								currency="USD"
								locale="en-US"
								onCalculate={(result) => console.log('CA tax calculation result:', result)}
							/>
						</div>
					</article>

					<article class="_c10">
						<p class="_c11">Simple Mode</p>
						<div>
							<RecipeTaxCalculator
								locations={[]}
								taxRates={[
									{
										id: 'simple-vat',
										name: 'VAT',
										rate: 20.0,
										description: 'Value Added Tax',
										compound: false
									}
								]}
								showLocationSelector={false}
								showTaxRateSelector={true}
								showIncludeTaxToggle={true}
								defaultAmount={50}
								currency="USD"
								locale="en-US"
								onCalculate={(result) => console.log('Simple tax calculation result:', result)}
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
