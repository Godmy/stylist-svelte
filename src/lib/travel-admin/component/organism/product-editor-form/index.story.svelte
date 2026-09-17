<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import ProductEditorForm from './index.svelte';
	import { SAMPLE_ADMIN_PRODUCTS } from '$stylist/travel-admin/const/preset/sample-admin-products';

	let saved = $state<string | null>(null);
</script>

<Story
	component={ProductEditorForm}
	title="ProductEditorForm"
	category="TravelAdmin/Organisms/ProductEditor"
	description="Common CRUD form for a product in any of the 7 shop categories."
>
	{#snippet children()}
		<ProductEditorForm
			product={SAMPLE_ADMIN_PRODUCTS[0]}
			onSave={(p) => (saved = JSON.stringify(p, null, 2))}
			onCancel={() => (saved = 'отменено')}
		/>
		{#if saved}
			<pre>{saved}</pre>
		{/if}
	{/snippet}
</Story>
