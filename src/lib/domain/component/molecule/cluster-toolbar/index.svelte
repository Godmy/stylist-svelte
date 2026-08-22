<script lang="ts">
	import IconToolbar from '$stylist/control/component/molecule/icon-toolbar/index.svelte';
	import { createClusterToolbarItems } from '$stylist/domain/function/transform/cluster-toolbar-items';

	interface ClusterToolbarProps {
		active?: string;
		orientation?: 'horizontal' | 'vertical';
		showLabel?: boolean;
		onSelect?: (name: string) => void;
		class?: string;
	}

	let {
		active,
		orientation = 'horizontal',
		showLabel = true,
		onSelect,
		class: className = ''
	}: ClusterToolbarProps = $props();

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
