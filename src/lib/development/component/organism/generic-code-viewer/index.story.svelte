<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import RecipeGenericCodeViewer from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{
			name: 'language',
			type: 'select',
			defaultValue: 'svelte',
			options: ['svelte', 'ts', 'js', 'css', 'html']
		}
	];

	const sampleCode =
		`<scr` +
		`ipt lang="ts">
  let value = $state('');
</scr` +
		`ipt>

<input bind:value placeholder="Type here..." />`;
</script>

<Story
	component={RecipeGenericCodeViewer}
	title="Generic Code Viewer"
	description="Development-domain syntax-highlighted code viewer for arbitrary source snippets."
	{controls}
>
	{#snippet children(values: any)}
		<RecipeGenericCodeViewer code={sampleCode} language={values.language} />
	{/snippet}
</Story>
