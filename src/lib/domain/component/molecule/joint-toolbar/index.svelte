<script lang="ts">
	import IconToolbar from '$stylist/control/component/molecule/icon-toolbar/index.svelte';
	import { JOINT_TOOLBAR_ITEMS } from '$stylist/domain/const/value/joint-toolbar-items';
	import { TOKEN_ORIENTATION } from '$stylist/layout/const/array/orientation';
	import type { RecipeJointToolbar } from '$stylist/domain/interface/recipe/joint-toolbar';

	let {
		active,
		availableJoints,
		orientation = TOKEN_ORIENTATION[0],
		showLabel = true,
		onSelect,
		class: className = ''
	}: RecipeJointToolbar = $props();
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

<style>
</style>
