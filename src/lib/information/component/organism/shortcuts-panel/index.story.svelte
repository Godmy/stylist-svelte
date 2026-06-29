<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import RecipeShortcutsPanel from './index.svelte';

	const controls: InterfaceControllerSettings[] = [];
</script>

<Story
	component={RecipeShortcutsPanel}
	title="Shortcuts Panel"
	description="Keyboard shortcut reference grouped by navigation, view, action, viewport, tab, and utility commands."
	{controls}
>
	{#snippet children()}
		<RecipeShortcutsPanel />
	{/snippet}
</Story>
