<script lang="ts">
	import { Story } from '$stylist/design-system/playground';
	import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
	import ProductSort from './index.svelte';

	type ProductSortStoryProps = {
		selectedOption: string;
	};

	const controls: ControlConfig[] = [
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
		<div class="rounded-lg bg-gray-50 p-8">
			<h2 class="mb-4 text-xl font-bold">ProductSort Story</h2>
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



