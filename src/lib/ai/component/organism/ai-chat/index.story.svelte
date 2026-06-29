<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import RecipeAiChat from './index.svelte';

	const controls: InterfaceControllerSettings[] = [];
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
