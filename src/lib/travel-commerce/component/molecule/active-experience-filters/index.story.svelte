<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import ActiveExperienceFilters from './index.svelte';

	const controls: SlotStory[] = [
		{ name: 'showOcean', type: 'boolean', defaultValue: true },
		{ name: 'showWildlife', type: 'boolean', defaultValue: true },
		{ name: 'showMountains', type: 'boolean', defaultValue: true }
	];
</script>

<Story
	id="travel-commerce-molecules-active-experience-filters"
	title="Travel Commerce / ActiveExperienceFilters"
	component={ActiveExperienceFilters}
	category="Travel Commerce/Molecules"
	description="Selected experience filter chips with removable state."
	{controls}
>
	{#snippet children(values: any)}
		{@const items = [
			...(values.showOcean ? [{ id: 'ocean', label: 'Ocean' }] : []),
			...(values.showWildlife ? [{ id: 'wildlife', label: 'Wildlife' }] : []),
			...(values.showMountains ? [{ id: 'mountains', label: 'Mountains' }] : [])
		]}
		<div class="_surface">
			<ActiveExperienceFilters {items} />
		</div>
	{/snippet}
</Story>

<style>
	._surface {
		padding: 24px;
		background: #f7f3ec;
	}
</style>
