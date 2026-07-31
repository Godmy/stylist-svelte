<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import RecipeAiPanel from './index.svelte';

	const controls: SlotStory[] = [
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
