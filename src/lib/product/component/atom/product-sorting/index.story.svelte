<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';

	import ProductSorting from '$stylist/product/component/atom/product-sorting/index.svelte';

	let {
		id = '',
		title = '',
		description = '',
		controls = [
			{
				name: 'sortBy',
				type: 'select',
				options: ['price-asc', 'price-desc', 'rating', 'newest'],
				defaultValue: 'price-asc'
			}
		]
	} = $props<{
		id?: string;
		title?: string;
		description?: string;
		controls?: InterfaceControllerSettings[];
	}>();

	const options = [
		{ value: 'price-asc', label: 'Price: Low to High' },
		{ value: 'price-desc', label: 'Price: High to Low' },
		{ value: 'rating', label: 'Top Rated' },
		{ value: 'newest', label: 'Newest First' }
	];

	function handleChange(value: string) {
		console.log('Sort changed:', value);
	}
</script>

<Story {id} {title} {description} component={ProductSorting} category="Atoms" {controls}>
	{#snippet children(values: any)}
		<section class="sb-organisms-product-sorting _c1">
			<div class="_c2">
				<p class="_c3">Primary Product Sorting Example</p>
				<p class="_c4">Interactive product sorting with customizable options.</p>

				<div class="_c5">
					<ProductSorting {options} value={values.sortBy} />
				</div>
			</div>

			<div class="_c6">
				<h3 class="_c7">Product Sorting Variations</h3>
				<p class="_c8">Different product sorting configurations with various options.</p>

				<div class="_c9">
					<article class="_c10">
						<p class="_c11">Price Descending</p>
						<div>
							<ProductSorting {options} value="price-desc" />
						</div>
					</article>

					<article class="_c10">
						<p class="_c11">Top Rated</p>
						<div>
							<ProductSorting {options} value="rating" />
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
