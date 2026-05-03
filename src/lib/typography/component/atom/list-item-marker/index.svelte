<script lang="ts">
	import Icon from '$stylist/media/component/atom/icon/index.svelte';
	import type { ThemeListItemMarkerRecipe } from '$stylist/typography/interface/recipe/list-item-marker';
	import { createListItemMarkerState } from '$stylist/typography/function/state/list-item-marker';

	let props: ThemeListItemMarkerRecipe = $props();

	const state = createListItemMarkerState(props);
</script>

<span class={state.classes} {...state.restProps}>
	{#if state.type === 'bullet'}
		<span class={state.bulletClasses}></span>
	{:else if state.type === 'number'}
		{state.value}
	{:else if typeof state.value === 'string'}
		<Icon name={state.value} size={state.iconSize} />
	{/if}
</span>
