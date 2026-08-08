<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import DomainExplorer from './index.svelte';

	const tree = [
		{
			name: 'layout',
			clusters: [
				{
					name: 'component',
					joints: [
						{
							name: 'atom',
							entities: [
								{
									name: 'clickable',
									path: 'layout/component/atom/clickable',
									files: [
										{
											name: 'index.svelte',
											path: 'layout/component/atom/clickable/index.svelte'
										},
										{ name: 'index.ts', path: 'layout/component/atom/clickable/index.ts' }
									]
								},
								{
									name: 'hoverable',
									path: 'layout/component/atom/hoverable',
									files: [
										{
											name: 'index.svelte',
											path: 'layout/component/atom/hoverable/index.svelte'
										}
									]
								}
							]
						}
					]
				}
			]
		}
	];

	let selection = $state({ domain: '', family: '' });
</script>

<Story
	component={DomainExplorer}
	title="DomainExplorer"
	description="Main catalog screen: sidebar taxonomy, breadcrumbs, search, file tabs, and preview."
>
	{#snippet children()}
		<div class="_c1">
			<DomainExplorer {tree} onSelectionChange={(next) => (selection = next)} />
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		height: 36rem;
		overflow: hidden;
		border-radius: 1rem;
		border-width: 1px;
		border-style: solid;
		border-color: #e2e8f0;
		background-color: #ffffff;
	}
</style>
