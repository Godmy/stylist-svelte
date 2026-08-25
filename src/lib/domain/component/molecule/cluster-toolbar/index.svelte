<script lang="ts">
	import IconToolbar from '$stylist/control/component/molecule/icon-toolbar/index.svelte';
	import { createClusterToolbarItems } from '$stylist/domain/function/transform/cluster-toolbar-items';
	import { TOKEN_ORIENTATION } from '$stylist/layout/const/array/orientation';
	import type { RecipeClusterToolbar } from '$stylist/domain/interface/recipe/cluster-toolbar';

	let {
		active,
		orientation = TOKEN_ORIENTATION[0],
		showLabel = true,
		onSelect,
		class: className = ''
	}: RecipeClusterToolbar = $props();

	const items = createClusterToolbarItems();
</script>

<IconToolbar
	{items}
	label="cluster"
	{active}
	{orientation}
	{showLabel}
	{onSelect}
	class="c-cluster-toolbar {className}"
/>

<style>
</style>
