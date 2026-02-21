<script lang="ts">
	import { Story } from '$stylist/design-system/playground';
	import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
	import PricingTable from './index.svelte';

	const controls: ControlConfig[] = [
		{ name: 'highlightedPlan', type: 'select', defaultValue: 'Pro', options: ['Starter', 'Pro', 'Enterprise'] }
	];
</script>

<Story component={PricingTable} title="PricingTable" description="Plan comparison table with highlighted offer." {controls}>
	{#snippet children(values: any)}
		<PricingTable
			plans={[
				{ name: 'Starter', price: '$9', period: 'mo', features: ['1 project', 'Email support'], cta: 'Choose Starter', highlighted: values.highlightedPlan === 'Starter' },
				{ name: 'Pro', price: '$29', period: 'mo', features: ['Unlimited projects', 'Priority support', 'Analytics'], cta: 'Choose Pro', highlighted: values.highlightedPlan === 'Pro' },
				{ name: 'Enterprise', price: '$99', period: 'mo', features: ['SSO', 'SLA', 'Dedicated manager'], cta: 'Contact Sales', highlighted: values.highlightedPlan === 'Enterprise' }
			]}
		/>
	{/snippet}
</Story>
