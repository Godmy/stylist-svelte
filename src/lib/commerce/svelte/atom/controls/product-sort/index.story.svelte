<script lang="ts">
	import { Story } from '$stylist/development/svelte/playground';
	import type { InterfaceControllerSettings } from '$stylist/development/type/struct/interface-controller-settings/interface-controller-settings';
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
		<div class="rounded-lg bg-[var(--color-background-secondary)] p-8">
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







