<script lang="ts">
	import IconToolbar from '$stylist/control/component/molecule/icon-toolbar/index.svelte';
	import { JOINT_TOOLBAR_ITEMS } from '$stylist/domain/const/value/joint-toolbar-items';

	interface JointToolbarProps {
		active?: string;
		availableJoints?: readonly string[];
		orientation?: 'horizontal' | 'vertical';
		showLabel?: boolean;
		onSelect?: (name: string) => void;
		class?: string;
	}

	let {
		active,
		availableJoints,
		orientation = 'horizontal',
		showLabel = true,
		onSelect,
		class: className = ''
	}: JointToolbarProps = $props();
</script>

<IconToolbar
	items={JOINT_TOOLBAR_ITEMS}
	label="joint"
	{active}
	{orientation}
	{showLabel}
	availableItems={availableJoints}
	emptyText="no joints"
	{onSelect}
	class="c-joint-toolbar {className}"
/>
