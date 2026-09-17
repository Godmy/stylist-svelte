<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import StorePage from './index.svelte';
</script>

<Story title="StorePage" description="Filterable editorial grid of excursions.">
	{#snippet children()}
		<StorePage />
	{/snippet}
</Story>
