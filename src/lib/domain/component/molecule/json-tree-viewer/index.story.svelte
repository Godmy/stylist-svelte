<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import JsonTreeViewer from './index.svelte';

	const controls: InterfaceControllerSettings[] = [{ name: 'contentState', type: 'select', defaultValue: 'valid', options: ['valid', 'invalid'] }];

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
		<div class="h-96 overflow-auto rounded-2xl border border-slate-200 bg-white">
			<JsonTreeViewer content={values.contentState === 'invalid' ? invalidJson : validJson} />
		</div>
	{/snippet}
</Story>
