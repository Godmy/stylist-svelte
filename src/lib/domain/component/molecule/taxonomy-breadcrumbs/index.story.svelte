<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import TaxonomyBreadcrumbs from './index.svelte';

	const controls: SlotStory[] = [
		{ name: 'domain', type: 'text', defaultValue: 'interaction' },
		{ name: 'cluster', type: 'text', defaultValue: 'component' },
		{ name: 'joint', type: 'text', defaultValue: 'atom' },
		{ name: 'family', type: 'text', defaultValue: 'clickable' },
		{ name: 'file', type: 'text', defaultValue: 'index.story.svelte' }
	];
</script>

<Story
	{controls}
	component={TaxonomyBreadcrumbs}
	title="TaxonomyBreadcrumbs"
	description="Compact path breadcrumb for the active taxonomy coordinates and current file."
>
	{#snippet children(values: any)}
		<div class="_c1">
			<TaxonomyBreadcrumbs
				domain={values.domain as string}
				cluster={values.cluster as string}
				joint={values.joint as string}
				family={values.family as string}
				file={values.file as string}
			/>
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		border-radius: 1rem;
		border-width: 1px;
		border-style: solid;
		border-color: #e2e8f0;
		background-color: #ffffff;
	}
</style>
