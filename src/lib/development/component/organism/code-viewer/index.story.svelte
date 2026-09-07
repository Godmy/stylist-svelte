<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import RecipeCodeViewer from './index.svelte';

	const controls: SlotStory[] = [
		{ name: 'componentName', type: 'text', defaultValue: 'Button' },
		{ name: 'language', type: 'select', defaultValue: 'svelte', options: ['svelte', 'ts', 'js'] }
	];

	const sampleCode =
		`<scr` +
		`ipt lang="ts">
  let count = $state(0);
</scr` +
		`ipt>

<button onclick={() => count++}>
  Count: {count}
</button>`;
</script>

<Story
	component={RecipeCodeViewer}
	title="Code Viewer"
	description="Development-domain code viewer with syntax highlighting, copy, and download actions."
	{controls}
>
	{#snippet children(values: any)}
		<RecipeCodeViewer
			code={sampleCode}
			componentName={values.componentName}
			language={values.language}
		/>
	{/snippet}
</Story>
