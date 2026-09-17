<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import ExperienceFilterGroup from './index.svelte';

	const controls: SlotStory[] = [
		{
			name: 'selected',
			type: 'select',
			options: ['none', 'ocean-fishing', 'wildlife', 'hills-mountains'],
			defaultValue: 'ocean-fishing'
		}
	];
</script>

<Story
	id="travel-commerce-molecules-experience-filter-group"
	title="Travel Commerce / ExperienceFilterGroup"
	component={ExperienceFilterGroup}
	category="Travel Commerce/Molecules"
	description="Experience category chip group with selected state."
	{controls}
>
	{#snippet children(values: any)}
		<div class="_surface">
			<ExperienceFilterGroup selected={values.selected === 'none' ? [] : [values.selected]} />
		</div>
	{/snippet}
</Story>

<style>
	._surface {
		padding: 24px;
		background: #f7f3ec;
	}
</style>
