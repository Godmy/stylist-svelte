<script lang="ts">
	import type { RecipeSideBySideLayout } from '$stylist/navigation/interface/recipe/side-by-side-layout';
	import createSideBySideLayoutState from './state.svelte';

	let props: RecipeSideBySideLayout = $props();
	const state = createSideBySideLayoutState(props);
</script>

<div class={state.layoutClass} {...state.restProps}>
	{#each props.sections as section}
		<div
			class={`flex-1 ${state.getSectionWidthClass(section.size ?? '1/2')} ${section.className ?? ''}`}
		>
			{@render section.content()}
		</div>
	{/each}
</div>

<style>
</style>
