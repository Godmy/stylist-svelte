<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import RecipeAiAssistant from './index.svelte';

	const controls: SlotStory[] = [
		{
			name: 'providerId',
			type: 'select',
			defaultValue: 'gemini',
			options: ['gemini', 'qwen', 'claude', 'codex']
		}
	];
</script>

<Story
	component={RecipeAiAssistant}
	title="AI Assistant"
	description="Provider-aware assistant panel for AI-powered component and code workflows."
	{controls}
>
	{#snippet children(values: any)}
		<RecipeAiAssistant providerId={values.providerId} />
	{/snippet}
</Story>
