<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { PictureToolbarRecipe } from '$stylist/media/interface/recipe/picture-toolbar';
	import { createPictureToolbarState } from '$stylist/control/function/state/picture-toolbar';

	type PictureToolbarTool = {
		id: string;
		label: string;
		icon?: string;
	};

	type Props = PictureToolbarRecipe & {
		tools: PictureToolbarTool[];
		activeTool?: string;
		onToolSelect?: (toolId: string) => void;
		children?: Snippet;
	};

	let props: Props = $props();

	const toolbarState = createPictureToolbarState(props);

	let localActiveTool = $state(toolbarState.activeTool);

	$effect(() => {
		localActiveTool = toolbarState.activeTool;
	});
</script>

<div class={toolbarState.classes}>
	{#each toolbarState.tools as tool}
		<button
			class={toolbarState.getButtonClasses(localActiveTool === tool.id)}
			onclick={() => {
				localActiveTool = tool.id;
				props.onToolSelect?.(tool.id);
			}}
			title={tool.label}
		>
			{#if tool.icon}
				<img src={tool.icon} alt={tool.label} class={toolbarState.iconClasses} />
			{:else}
				{tool.label.charAt(0).toUpperCase()}
			{/if}
		</button>
	{/each}
</div>



