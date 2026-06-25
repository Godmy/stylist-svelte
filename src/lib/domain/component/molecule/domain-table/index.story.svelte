<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import DomainTable from './index.svelte';

	const entities = [
		{
			name: 'clickable',
			path: '/src/lib/interaction/component/atom/clickable',
			files: [{ path: 'index.svelte' }, { path: 'index.story.svelte' }, { path: 'index.ts' }]
		},
		{
			name: 'hoverable',
			path: '/src/lib/interaction/component/atom/hoverable',
			files: [{ path: 'index.svelte' }, { path: 'index.ts' }]
		},
		{
			name: 'focusable',
			path: '/src/lib/interaction/component/atom/focusable',
			files: [{ path: 'index.svelte' }, { path: 'index.story.svelte' }, { path: 'index.ts' }]
		}
	];

	let activePath = $state(entities[0].path);
</script>

<Story
	component={DomainTable}
	title="DomainTable"
	description="Tabular entity list with active row highlighting and file counts."
>
	{#snippet children()}
		<div class="_c1">
			<DomainTable
				{entities}
				{activePath}
				onSelect={(path) => {
					activePath = path;
				}}
			/>
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		height: 20rem;
		overflow: hidden;
		border-radius: 1rem;
		border-width: 1px;
		border-style: solid;
		border-color: #e2e8f0;
		background-color: #ffffff;
	}
</style>
