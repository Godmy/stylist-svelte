<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import FeatureToggle from './index.svelte';
	type Props = { checked: boolean; disabled: boolean };
	const controls: SlotStory[] = [
		{ name: 'checked', type: 'boolean', defaultValue: true },
		{ name: 'disabled', type: 'boolean', defaultValue: false }
	];
</script>

<Story
	id="organisms-feature-toggle"
	title="Organisms / Interaction / Controls / Toggles / Feature SlotToggle"
	component={FeatureToggle}
	category="Organisms/Interaction/Controls/Toggles"
	{controls}
>
	{#snippet children(values: any)}
		{@const p = values as Props}
		<div class="sb-organisms-feature-toggle _c1">
			<FeatureToggle checked={p.checked} disabled={p.disabled} />
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		padding: 1rem;
	}
</style>
