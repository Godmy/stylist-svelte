<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import type { SlotShippingOptionInfo } from '$stylist/commerce/interface/slot/shipping-option-info';
	import type { RecipeShippingRegion } from '$stylist/commerce/interface/recipe/shipping-region';

	import RecipeShippingInfo from './index.svelte';

	let {
		id = '',
		title = '',
		description = '',
		controls = [
			{ name: 'showOptions', type: 'boolean', defaultValue: true },
			{ name: 'showFreeShipping', type: 'boolean', defaultValue: true }
		]
	} = $props<{
		id?: string;
		title?: string;
		description?: string;
		controls?: SlotStory[];
	}>();

	// Sample shipping options
	const shippingOptions: SlotShippingOptionInfo[] = [
		{
			id: 'standard',
			name: 'Standard Shipping',
			description: 'Ground shipping via major carriers',
			price: 7.99,
			estimatedDays: 5,
			carrier: 'USPS',
			trackingAvailable: true,
			signatureRequired: false,
			insurance: false,
			carbonNeutral: false
		},
		{
			id: 'express',
			name: 'Express Shipping',
			description: '2-day expedited shipping',
			price: 14.99,
			estimatedDays: 2,
			carrier: 'FedEx',
			trackingAvailable: true,
			signatureRequired: true,
			insurance: true,
			carbonNeutral: true
		},
		{
			id: 'overnight',
			name: 'Overnight Shipping',
			description: 'Next-day delivery',
			price: 24.99,
			estimatedDays: 1,
			carrier: 'FedEx',
			trackingAvailable: true,
			signatureRequired: true,
			insurance: true,
			carbonNeutral: false
		}
	];

	// Sample regions
	const regions: RecipeShippingRegion[] = [
		{
			id: 'na',
			name: 'North America',
			countries: ['US', 'CA', 'MX'],
			additionalFee: 0
		},
		{
			id: 'eu',
			name: 'Europe',
			countries: ['GB', 'DE', 'FR', 'IT', 'ES'],
			additionalFee: 5.99
		},
		{
			id: 'asia',
			name: 'Asia-Pacific',
			countries: ['JP', 'CN', 'AU', 'SG', 'KR'],
			additionalFee: 8.99
		}
	];
</script>

<Story {id} {title} {description} component={RecipeShippingInfo} category="Organisms" {controls}>
	{#snippet children(values: any)}
		<section class="sb-organisms-shipping-info _c1">
			<div class="_c2">
				<p class="_c3">Primary Shipping Info Example</p>
				<p class="_c4">Shipping information with options and regions.</p>

				<div class="_c5">
					<RecipeShippingInfo
						{shippingOptions}
						{regions}
						showOptions={values.showOptions}
						showRegions={true}
						showDeliveryEstimate={true}
						showFreeShippingInfo={values.showFreeShipping}
						showRestrictions={true}
						showEstimates={true}
						deliveryEstimate={new Date(Date.now() + 5 * 24 * 60 * 60 * 1000)}
						freeShippingThreshold={50}
						showFreeShipping={true}
					/>
				</div>
			</div>

			<div class="_c6">
				<h3 class="_c7">Shipping Info Variations</h3>
				<p class="_c8">Different shipping information configurations with various options.</p>

				<div class="_c9">
					<article class="_c10">
						<p class="_c11">Without Options</p>
						<div>
							<RecipeShippingInfo
								shippingOptions={[]}
								regions={regions.slice(0, 2)}
								showOptions={false}
								showRegions={true}
								showDeliveryEstimate={false}
								showFreeShippingInfo={true}
								showRestrictions={false}
								showEstimates={false}
								freeShippingThreshold={75}
								showFreeShipping={true}
							/>
						</div>
					</article>

					<article class="_c10">
						<p class="_c11">With Carbon Neutral Options</p>
						<div>
							<RecipeShippingInfo
								shippingOptions={[
									{
										id: 'eco-standard',
										name: 'Eco Standard Shipping',
										description: 'Carbon neutral ground shipping',
										price: 9.99,
										estimatedDays: 7,
										carrier: 'USPS',
										trackingAvailable: true,
										signatureRequired: false,
										insurance: false,
										carbonNeutral: true
									},
									{
										id: 'eco-express',
										name: 'Eco Express Shipping',
										description: 'Carbon neutral expedited shipping',
										price: 16.99,
										estimatedDays: 3,
										carrier: 'FedEx',
										trackingAvailable: true,
										signatureRequired: true,
										insurance: true,
										carbonNeutral: true
									}
								]}
								regions={[]}
								showOptions={true}
								showRegions={false}
								showDeliveryEstimate={true}
								showFreeShippingInfo={false}
								showRestrictions={true}
								showEstimates={true}
								deliveryEstimate={new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)}
								showFreeShipping={false}
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
