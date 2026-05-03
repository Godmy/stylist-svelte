<script lang="ts">
	import IconToolbar from '$stylist/control/component/molecule/icon-toolbar/index.svelte';
	import { CLUSTER_TOOLBAR_ITEMS } from '$stylist/cluster/const/value/cluster-toolbar-items';

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
</script>

<IconToolbar
	items={CLUSTER_TOOLBAR_ITEMS}
	label="cluster"
	{active}
	{orientation}
	{showLabel}
	{onSelect}
	class="c-cluster-toolbar {className}"
/>
