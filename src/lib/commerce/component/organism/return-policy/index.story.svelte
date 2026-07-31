<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';

	import RecipeReturnPolicy from './index.svelte';

	let {
		id = '',
		title = '',
		description = '',
		controls = [
			{ name: 'showConditions', type: 'boolean', defaultValue: true },
			{ name: 'showSteps', type: 'boolean', defaultValue: true }
		]
	} = $props<{
		id?: string;
		title?: string;
		description?: string;
		controls?: SlotStory[];
	}>();

	// Sample return policy data
	const policyData = {
		policyPeriod: 30,
		policyDescription:
			'Our return policy allows you to return most new, unopened items within {days} days of delivery for a full refund.',
		policyEffectiveDate: new Date(),
		conditions: [
			{
				id: 'condition-1',
				title: 'Time Limit',
				description: 'Returns must be initiated within 30 days of delivery',
				appliesTo: ['all']
			},
			{
				id: 'condition-2',
				title: 'Original Condition',
				description: 'Item must be in original condition, unused and in original packaging',
				appliesTo: ['all']
			},
			{
				id: 'condition-3',
				title: 'Proof of Purchase',
				description: 'Receipt or proof of purchase is required',
				appliesTo: ['all']
			}
		],
		eligibleProducts: ['Clothing', 'Electronics', 'Home & Garden', 'Books'],
		ineligibleProducts: ['Food & Grocery', 'Personal Care', 'Gift Cards'],
		shippingCosts: 'buyer' as const,
		restockingFee: 5,
		faqs: [
			{
				question: 'How long does the return process take?',
				answer:
					'The return process typically takes 5-7 business days from the time we receive your return.'
			},
			{
				question: 'Can I exchange an item instead of returning it?',
				answer:
					'Yes, we offer exchanges for items of equal or greater value. Just select the exchange option when initiating your return.'
			},
			{
				question: 'Will I be charged a restocking fee?',
				answer:
					'We charge a 5% restocking fee for certain items. This will be deducted from your refund.'
			}
		]
	};
</script>

<Story {id} {title} {description} component={RecipeReturnPolicy} category="Organisms" {controls}>
	{#snippet children(values: any)}
		<section class="sb-organisms-return-policy _c1">
			<div class="_c2">
				<p class="_c3">Primary Return Policy Example</p>
				<p class="_c4">Return policy with conditions and process steps.</p>

				<div class="_c5">
					<RecipeReturnPolicy
						{...policyData}
						showConditions={values.showConditions}
						showSteps={values.showSteps}
						showEligibility={true}
						showShippingInfo={true}
						showFAQ={true}
						onReturnInitiate={() => console.log('Initiating return')}
					/>
				</div>
			</div>

			<div class="_c6">
				<h3 class="_c7">Policy Variations</h3>
				<p class="_c8">Different return policy configurations with various options.</p>

				<div class="_c9">
					<article class="_c10">
						<p class="_c11">Free Return Shipping</p>
						<div>
							<RecipeReturnPolicy
								{...policyData}
								shippingCosts="seller"
								restockingFee={0}
								showConditions={true}
								showSteps={false}
								showEligibility={true}
								showShippingInfo={true}
								showFAQ={false}
								onReturnInitiate={() => console.log('Initiating return with free shipping')}
							/>
						</div>
					</article>

					<article class="_c10">
						<p class="_c11">Strict Policy</p>
						<div>
							<RecipeReturnPolicy
								{...policyData}
								policyPeriod={14}
								conditions={[
									{
										id: 'condition-1',
										title: 'Time Limit',
										description: 'Returns must be initiated within 14 days of delivery',
										appliesTo: ['all']
									},
									{
										id: 'condition-2',
										title: 'Original Condition',
										description:
											'Item must be in original condition, unused and in original packaging',
										appliesTo: ['all']
									},
									{
										id: 'condition-3',
										title: 'No Exceptions',
										description: 'No returns accepted after 14 days under any circumstances',
										appliesTo: ['all']
									}
								]}
								showConditions={true}
								showSteps={true}
								showEligibility={false}
								showShippingInfo={true}
								showFAQ={true}
								onReturnInitiate={() => console.log('Initiating return with strict policy')}
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
