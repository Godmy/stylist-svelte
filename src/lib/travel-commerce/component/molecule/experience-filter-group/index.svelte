<script lang="ts">
	import ExperienceFilterChip from '$stylist/travel-commerce/component/atom/experience-filter-chip/index.svelte';
	import { EXPERIENCE_CATEGORIES } from '$stylist/booking/const/array/experience-category';
	import { EXPERIENCE_FILTER_MOTIFS } from '$stylist/travel-commerce/const/preset/experience-filter-motif';

	type Props = {
		selected?: string[];
		onChange?: (selected: string[]) => void;
	};

	let { selected = [], onChange }: Props = $props();

	function toggle(id: string) {
		selected = selected.includes(id) ? selected.filter((item) => item !== id) : [...selected, id];
		onChange?.(selected);
	}
</script>

<div class="tc-filter-group">
	{#each EXPERIENCE_CATEGORIES as category (category.id)}
		<ExperienceFilterChip
			label={category.label}
			tone={category.tone}
			motif={EXPERIENCE_FILTER_MOTIFS[category.id]}
			active={selected.includes(category.id)}
			onToggle={() => toggle(category.id)}
		/>
	{/each}
</div>

<style>
	.tc-filter-group {
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
	}
</style>
