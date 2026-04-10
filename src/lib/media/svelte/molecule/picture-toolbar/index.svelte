<script lang="ts">
	import {
		createPictureToolbarState,
		type PictureToolbarProps
	} from '$stylist/media/function/state/picture-toolbar';

	let props: PictureToolbarProps = $props();
	const state = createPictureToolbarState(props);
</script>

<div class={state.rootClass}>
	{#each state.tools as tool}
		<button
			class={state.getButtonClasses(state.activeTool === tool.id)}
			onclick={() => state.selectTool(tool.id)}
			title={tool.label}
		>
			{#if tool.icon}
				<img src={tool.icon} alt={tool.label} class={state.iconClasses} />
			{:else}
				{tool.label.charAt(0).toUpperCase()}
			{/if}
		</button>
	{/each}
</div>
