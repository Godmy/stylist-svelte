<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import type { PaymentSummaryItem } from '$stylist/commerce/type/object/payment-summary-item';
	import type { PaymentSummaryDiscount } from '$stylist/commerce/type/object/payment-summary-discount';
	import type { PaymentSummaryTax } from '$stylist/commerce/type/object/payment-summary-tax';
	import PaymentSummary from './index.svelte';

	type Props = {
		showItems: boolean;
		showDiscounts: boolean;
		showTaxes: boolean;
		showPaymentMethod: boolean;
		showTransactionId: boolean;
		total: number;
	};

	const controls: SlotStory[] = [
		{ name: 'showItems', type: 'boolean', defaultValue: true },
		{ name: 'showDiscounts', type: 'boolean', defaultValue: true },
		{ name: 'showTaxes', type: 'boolean', defaultValue: true },
		{ name: 'showPaymentMethod', type: 'boolean', defaultValue: true },
		{ name: 'showTransactionId', type: 'boolean', defaultValue: true },
		{ name: 'total', type: 'number', defaultValue: 114 }
	];

	const items: PaymentSummaryItem[] = [
		{ id: '1', name: 'Item A', quantity: 2, price: 30, total: 60 },
		{ id: '2', name: 'Item B', quantity: 1, price: 45, total: 45 }
	];

	const discounts: PaymentSummaryDiscount[] = [
		{ id: 'd1', name: 'Promo', amount: 10, type: 'fixed' }
	];

	const taxes: PaymentSummaryTax[] = [{ id: 't1', name: 'VAT', rate: 20, amount: 19 }];
</script>

<Story
	id="organisms-payment-summary"
	title="Organisms / Interaction / Controls / Payment / Payment Summary"
	component={PaymentSummary}
	category="Organisms/Interaction/Controls/Payment"
	description="A payment summary component displaying order items, discounts, taxes, and total."
	tags={['payment', 'summary', 'order', 'checkout']}
	{controls}
>
	{#snippet children(values: any)}
		<div class="sb-organisms-payment-summary _c1">
			<h1 class="_c2">PaymentSummary Component</h1>

			<div class="_c3">
				<h2 class="_c4">Interactive PaymentSummary</h2>
				<div class="_c5">
					<PaymentSummary
						items={values.showItems ? items : []}
						discounts={values.showDiscounts ? discounts : []}
						taxes={values.showTaxes ? taxes : []}
						total={values.total}
						paymentMethod={values.showPaymentMethod ? 'Visa **** 1111' : undefined}
						transactionId={values.showTransactionId ? 'TX-1001' : undefined}
					/>
				</div>
			</div>
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		padding: 1rem;
	}
	._c2 {
		margin-bottom: 1rem;
		font-size: 1.125rem;
		line-height: 1.75rem;
		font-weight: 600;
	}
	._c3 {
		margin-bottom: 1.5rem;
		border-radius: 0.25rem;
		border-width: 1px;
		border-style: solid;
		padding: 1rem;
	}
	._c4 {
		font-size: 1rem;
		line-height: 1.5rem;
		margin-bottom: 0.5rem;
		font-weight: 600;
	}
	._c5 {
		max-width: 28rem;
	}
</style>
