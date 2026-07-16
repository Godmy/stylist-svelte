<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';

	import ProductReviews from './index.svelte';

	let {
		id = '',
		title = '',
		description = '',
		controls = [
			{ name: 'averageRating', type: 'number', defaultValue: 4.2 },
			{ name: 'totalReviews', type: 'number', defaultValue: 128 },
			{ name: 'showAddReview', type: 'boolean', defaultValue: true }
		]
	} = $props<{
		id?: string;
		title?: string;
		description?: string;
		controls?: InterfaceControllerSettings[];
	}>();

	type SlotReview = {
		id: string;
		author: string;
		rating: number;
		title: string;
		content: string;
		date: string;
		verified?: boolean;
	};

	const reviews: SlotReview[] = [
		{
			id: '1',
			author: 'John D.',
			rating: 5,
			title: 'Great product!',
			content: 'Highly recommend this product.',
			date: new Date().toISOString(),
			verified: true
		},
		{
			id: '2',
			author: 'Jane S.',
			rating: 4,
			title: 'Good value',
			content: 'Good quality for the price.',
			date: new Date().toISOString(),
			verified: false
		}
	];

	function handleAddReview(review: { title: string; content: string; rating: number }) {
		console.log('SlotReview added:', review);
	}

	function handleHelpful(reviewId: string) {
		console.log('Helpful:', reviewId);
	}
</script>

<Story {id} {title} {description} component={ProductReviews} category="Organisms" {controls}>
	{#snippet children(values: any)}
		<section class="sb-organisms-product-reviews _c1">
			<div class="_c2">
				<p class="_c3">Primary Product Reviews Example</p>
				<p class="_c4">Interactive product reviews with customizable options.</p>

				<div class="_c5">
					<ProductReviews
						{reviews}
						averageRating={values.averageRating}
						totalReviews={values.totalReviews}
						showAddReview={values.showAddReview}
						onAddReview={handleAddReview}
					/>
				</div>
			</div>

			<div class="_c6">
				<h3 class="_c7">Product Reviews Variations</h3>
				<p class="_c8">Different product reviews configurations with various options.</p>

				<div class="_c9">
					<article class="_c10">
						<p class="_c11">Without Add SlotReview</p>
						<div>
							<ProductReviews {reviews} showAddReview={false} />
						</div>
					</article>

					<article class="_c10">
						<p class="_c11">Verified Only</p>
						<div>
							<ProductReviews reviews={reviews.filter((r) => r.verified)} />
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
