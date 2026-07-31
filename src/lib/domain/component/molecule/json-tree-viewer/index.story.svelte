<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import JsonTreeViewer from './index.svelte';

	const controls: SlotStory[] = [
		{ name: 'contentState', type: 'select', defaultValue: 'valid', options: ['valid', 'invalid'] }
	];

	const validJson = JSON.stringify(
		{
			domain: 'interaction',
			component: 'clickable',
			story: {
				ready: true,
				coverage: ['click', 'double click', 'context menu'],
				metrics: { events: 3, gaps: 0 }
			}
		},
		null,
		2
	);

	const invalidJson = '{ "domain": "interaction", "story": [1, 2, }';
</script>

<Story
	{controls}
	component={JsonTreeViewer}
	title="JsonTreeViewer"
	description="Interactive JSON explorer with collapse and parse error handling."
>
	{#snippet children(values: any)}
		<div class="_c1">
			<JsonTreeViewer content={values.contentState === 'invalid' ? invalidJson : validJson} />
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		height: 24rem;
		overflow: auto;
		border-radius: 1rem;
		border-width: 1px;
		border-style: solid;
		border-color: #e2e8f0;
		background-color: #ffffff;
	}
</style>
