<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import { EXPERIENCE_CATEGORIES } from '$stylist/booking/const/array/experience-category';
	import { EXPERIENCE_FILTER_MOTIFS } from '$stylist/travel-commerce/const/preset/experience-filter-motif';
	import ExperienceFilterChip from './index.svelte';

	const controls: SlotStory[] = [
		{
			name: 'category',
			type: 'select',
			options: EXPERIENCE_CATEGORIES.map((item) => item.id),
			defaultValue: 'nature'
		},
		{ name: 'active', type: 'boolean', defaultValue: true }
	];
</script>

<Story
	id="travel-commerce-atoms-experience-filter-chip"
	title="Travel Commerce / ExperienceFilterChip"
	category="Travel Commerce/Atoms"
	component={ExperienceFilterChip}
	description="Selectable experience category chip with optional vector motif."
	{controls}
>
	{#snippet children(values: any)}
		{@const category = EXPERIENCE_CATEGORIES.find((item) => item.id === values.category) ?? EXPERIENCE_CATEGORIES[2]}
		<div class="_surface">
			<ExperienceFilterChip
				label={category.label}
				tone={category.tone}
				motif={EXPERIENCE_FILTER_MOTIFS[category.id]}
				active={Boolean(values.active)}
			/>
		</div>
	{/snippet}
</Story>

<style>
	._surface {
		display: flex;
		flex-wrap: wrap;
		gap: 12px;
		padding: 24px;
		background: #f7f3ec;
	}
</style>
