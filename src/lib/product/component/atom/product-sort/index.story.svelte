<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import ProductSort from './index.svelte';

	type ProductSortStoryProps = {
		selectedOption: string;
	};

	const controls: InterfaceControllerSettings[] = [
		{
			name: 'selectedOption',
			type: 'select',
			defaultValue: 'featured',
			options: ['featured', 'newest', 'price-low', 'price-high', 'rating']
		}
	];
</script>

<Story component={ProductSort} {controls}>
	{#snippet children(values: any)}
		<div class="_c1">
			<h2 class="_c2">ProductSort Story</h2>
			<ProductSort
				selectedOption={values.selectedOption as string}
				options={[
					{ value: 'featured', label: 'Featured' },
					{ value: 'newest', label: 'Newest' },
					{ value: 'price-low', label: 'Price: Low to High' },
					{ value: 'price-high', label: 'Price: High to Low' },
					{ value: 'rating', label: 'Top Rated' }
				]}
				onValueChange={() => {}}
			/>
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		border-radius: 0.5rem;
		background-color: var(--color-background-secondary);
		padding: 2rem;
	}
	._c2 {
		margin-bottom: 1rem;
		font-size: 1.25rem;
		line-height: 1.75rem;
		font-weight: 700;
	}
</style>
