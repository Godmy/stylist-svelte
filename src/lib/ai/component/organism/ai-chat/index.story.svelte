<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import RecipeAiChat from './index.svelte';

	const controls: SlotStory[] = [];
</script>

<Story
	component={RecipeAiChat}
	title="AI Chat"
	description="Compact AI conversation surface with assistant and user messages."
	{controls}
>
	{#snippet children()}
		<RecipeAiChat />
	{/snippet}
</Story>
