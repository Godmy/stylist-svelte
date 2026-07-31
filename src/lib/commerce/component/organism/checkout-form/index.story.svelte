<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';

	import CheckoutForm from './index.svelte';

	type Props = {
		showProgress: boolean;
		currency: string;
		locale: string;
	};

	const controls: SlotStory[] = [
		{ name: 'showProgress', type: 'boolean', defaultValue: true },
		{ name: 'currency', type: 'text', defaultValue: 'USD' },
		{ name: 'locale', type: 'text', defaultValue: 'en-US' }
	];

	let cartItems = [
		{
			id: '1',
			name: 'Wireless Headphones',
			price: 129.99,
			quantity: 1,
			thumbnail: 'https://placehold.co/100x100'
		},
		{
			id: '2',
			name: 'Smart Watch',
			price: 199.99,
			quantity: 2,
			thumbnail: 'https://placehold.co/100x100'
		}
	];

	let subtotal: number = 529.97;
	let tax: number = 42.4;
	let shipping: number = 9.99;
	let total: number = 582.36;

	const handleComplete = () => {
		console.log('Checkout completed!');
	};

	const handleError = (error: string) => {
		console.log('Checkout error:', error);
	};
</script>

<Story
	id="organisms-checkout-form"
	title="Organisms / Interaction / Commerce / CheckoutForm"
	component={CheckoutForm}
	category="Organisms/Interaction/Commerce"
	description="A multi-step checkout form for processing customer orders."
	{controls}
>
	{#snippet children(args)}
		<section class="sb-organisms-checkout-form">
			<div class="_c1 max-w-6xl">
				<CheckoutForm
					{cartItems}
					{subtotal}
					{tax}
					{shipping}
					{total}
					showProgress={args.showProgress as boolean}
					currency={args.currency as string}
					locale={args.locale as string}
					onComplete={handleComplete}
					onError={handleError}
				/>
			</div>
		</section>
	{/snippet}
</Story>

<style>
	._c1 {
		margin-left: auto;
		margin-right: auto;
		border-radius: 2.5rem;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		background-color: var(--color-background-primary);
		padding: 1.5rem;
		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
	}
</style>
