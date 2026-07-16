<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import ProductSearch from './index.svelte';

	let query = $state('');
	let picked = $state('');

	const controls: InterfaceControllerSettings[] = [
		{ name: 'placeholder', type: 'text', defaultValue: 'Search products...' }
	];

	const suggestions = ['Wireless Headphones', 'Bluetooth Speaker', 'Smart Watch', 'Gaming Mouse'];
</script>

<Story
	id="molecules-product-search"
	title="Molecules / Commerce / Products / Product Search"
	component={ProductSearch}
	category="Molecules/Commerce/Products"
	{controls}
>
	{#snippet children(values: any)}
		<div class="_c1">
			<ProductSearch
				placeholder={values.placeholder}
				{suggestions}
				onSearch={(value) => (query = value)}
				onSuggestionSelect={(value) => (picked = value)}
			/>
			<p class="_c2">Search query: {query || 'none'}</p>
			<p class="_c2">
				Suggestion picked: {picked || 'none'}
			</p>
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		padding: 1.5rem;
	}
	._c1 > * + * {
		margin-top: 0.75rem;
	}
	._c2 {
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}
</style>
