<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';

	import ChatWorkbench from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'mode', type: 'select', options: ['page', 'panel'], defaultValue: 'panel' }
	];
</script>

<Story
	id="organisms-chat-workbench"
	title="Organisms / Interaction / Communication / Chat / ChatWorkbench"
	component={ChatWorkbench}
	category="Organisms/Interaction/Communication/Chat"
	description="Integrated chat workbench that assembles list, header, thread, composer, preview and presence components."
	{controls}
>
	{#snippet children(values: any)}
		<div class="sb-organisms-chat-workbench">
			<ChatWorkbench mode={values.mode} />
		</div>
	{/snippet}
</Story>

<style>
	.sb-organisms-chat-workbench {
		min-height: 100vh;
		background: var(--color-background-secondary);
	}
</style>
