<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import DomainSearch from './index.svelte';

	const entries = [
		{
			id: 'commerce/component/molecule/price-tag',
			domain: 'commerce',
			cluster: 'component',
			joint: 'molecule',
			family: 'price-tag',
			entityPath: 'commerce/component/molecule/price-tag',
			searchText: 'commerce component molecule price-tag'
		},
		{
			id: 'layout/component/atom/clickable',
			domain: 'layout',
			cluster: 'component',
			joint: 'atom',
			family: 'clickable',
			entityPath: 'layout/component/atom/clickable',
			searchText: 'layout component atom clickable'
		}
	];

	let selected = $state('');
</script>

<Story
	component={DomainSearch}
	title="DomainSearch"
	description="Quick-search overlay for domain entities with a copy-path shortcut for the currently selected entity."
>
	{#snippet children()}
		<div class="_c1">
			<DomainSearch
				{entries}
				currentPath="commerce\component\molecule\price-tag\index.svelte"
				onSelect={(id) => (selected = id)}
			/>
			<p class="_c2">Selected: {selected || 'none'}</p>
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		position: relative;
		display: grid;
		justify-items: end;
		gap: 0.75rem;
		min-height: 20rem;
		border-radius: 1rem;
		border-width: 1px;
		border-style: solid;
		border-color: #e2e8f0;
		background-color: #f8fafc;
		padding: 1.5rem;
	}
	._c2 {
		font-size: 0.875rem;
		color: #64748b;
	}
</style>
