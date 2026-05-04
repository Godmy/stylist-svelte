<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import DomainList from './index.svelte';

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
	component={DomainList}
	title="DomainList"
	description="Scrollable entity list with active item highlighting and file counts."
>
	{#snippet children()}
		<div class="h-80 overflow-hidden rounded-2xl border border-slate-200 bg-white">
			<DomainList
				{entities}
				{activePath}
				onSelect={(path) => {
					activePath = path;
				}}
			/>
		</div>
	{/snippet}
</Story>
