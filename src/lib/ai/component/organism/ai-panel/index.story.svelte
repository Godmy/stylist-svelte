<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import RecipeAiPanel from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{
			name: 'selectedProviderId',
			type: 'select',
			defaultValue: 'claude',
			options: ['claude', 'codex', 'gemini', 'qwen']
		}
	];
</script>

<Story
	component={RecipeAiPanel}
	title="AI Panel"
	description="Provider selection panel for launching AI-assisted workflows."
	{controls}
>
	{#snippet children(values: any)}
		<RecipeAiPanel selectedProviderId={values.selectedProviderId} />
	{/snippet}
</Story>
