<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';

	import RecipeSubscriptionManager from './index.svelte';

	let {
		id = '',
		title = '',
		description = '',
		controls = [
			{ name: 'showActions', type: 'boolean', defaultValue: true },
			{ name: 'showPaymentMethod', type: 'boolean', defaultValue: true }
		]
	} = $props<{
		id?: string;
		title?: string;
		description?: string;
		controls?: SlotStory[];
	}>();

	// Sample subscription data
	const subscription = {
		id: 'sub-12345',
		plan: {
			id: 'premium',
			name: 'Premium Plan',
			description: 'Access to all premium features',
			price: 29.99,
			period: 'month',
			currency: 'USD',
			features: [
				'Unlimited projects',
				'Advanced analytics',
				'Priority support',
				'Custom domains',
				'Team collaboration'
			]
		},
		startDate: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000), // 30 days ago
		endDate: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000), // 1 year from now
		nextBillingDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days from now
		status: 'active' as const,
		paymentMethod: 'Visa ending in 4242',
		autoRenew: true
	};
</script>

<Story
	{id}
	{title}
	{description}
	component={RecipeSubscriptionManager}
	category="Organisms"
	{controls}
>
	{#snippet children(values: any)}
		<section class="sb-organisms-subscription-manager _c1">
			<div class="_c2">
				<p class="_c3">Primary SlotSubscription Manager Example</p>
				<p class="_c4">SlotSubscription manager with plan and billing details.</p>

				<div class="_c5">
					<RecipeSubscriptionManager
						{subscription}
						showActions={values.showActions}
						showPaymentMethod={values.showPaymentMethod}
						showBillingInfo={true}
						onUpgrade={() => console.log('Upgrading plan')}
						onDowngrade={() => console.log('Downgrading plan')}
						onCancel={() => console.log('Cancelling subscription')}
						onPause={() => console.log('Pausing subscription')}
						onResume={() => console.log('Resuming subscription')}
						onBillingChange={() => console.log('Changing billing details')}
						onPaymentMethodChange={() => console.log('Changing payment method')}
					/>
				</div>
			</div>

			<div class="_c6">
				<h3 class="_c7">SlotSubscription Variations</h3>
				<p class="_c8">Different subscription configurations with various options.</p>

				<div class="_c9">
					<article class="_c10">
						<p class="_c11">Paused SlotSubscription</p>
						<div>
							<RecipeSubscriptionManager
								subscription={{
									...subscription,
									status: 'paused' as const,
									nextBillingDate: undefined
								}}
								showActions={true}
								showPaymentMethod={true}
								showBillingInfo={false}
								onResume={() => console.log('Resuming paused subscription')}
								onCancel={() => console.log('Cancelling paused subscription')}
							/>
						</div>
					</article>

					<article class="_c10">
						<p class="_c11">Trial SlotSubscription</p>
						<div>
							<RecipeSubscriptionManager
								subscription={{
									...subscription,
									status: 'trialing' as const,
									plan: {
										...subscription.plan,
										name: 'Pro Trial',
										description: '7-day trial of Pro features',
										price: 0
									}
								}}
								showActions={true}
								showPaymentMethod={false}
								showBillingInfo={true}
								onUpgrade={() => console.log('Upgrading from trial')}
								onCancel={() => console.log('Cancelling trial')}
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
