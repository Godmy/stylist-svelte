<script lang="ts">
	import ExperienceFilterChip from '$stylist/travel-commerce/component/atom/experience-filter-chip/index.svelte';
	import { EXPERIENCE_CATEGORIES } from '$stylist/booking/const/array/experience-category';
	import { EXCURSION_MOTIFS } from '$stylist/travel-commerce/const/preset/excursion-motif';
	import { SAMPLE_EXCURSIONS } from '$stylist/travel-commerce/const/preset/sample-excursions';
	import type { Excursion } from '$stylist/travel-commerce/type/object/excursion';

	type Props = {
		excursions?: Excursion[];
		selected?: string[];
		onChange?: (ids: string[]) => void;
	};

	let { excursions = SAMPLE_EXCURSIONS, selected = [], onChange }: Props = $props();

	function toneFor(excursion: Excursion): string | undefined {
		const category = EXPERIENCE_CATEGORIES.find((item) => item.id === excursion.categories[0]);
		return category?.tone;
	}

	function toggle(id: string): void {
		const next = selected.includes(id) ? selected.filter((item) => item !== id) : [...selected, id];
		onChange?.(next);
	}
</script>

<div class="tc-adventure-grid" role="group" aria-label="Приключения">
	{#each excursions as excursion (excursion.id)}
		<ExperienceFilterChip
			label={excursion.title}
			tone={toneFor(excursion)}
			motif={EXCURSION_MOTIFS[excursion.id]}
			active={selected.includes(excursion.id)}
			onToggle={() => toggle(excursion.id)}
		/>
	{/each}
</div>

<style>
	.tc-adventure-grid {
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
		width: 100%;
	}

	/* Тот же размер шрифта, что у "Откуда забрать" (booking-pickup-list__option) —
	   ExperienceFilterChip сам по себе шрифт не задаёт, наследует от контекста
	   использования, поэтому фиксируем явно только здесь, не трогая сам атом
	   (он используется и в других местах travel-commerce, например experience-filter-bar). */
	.tc-adventure-grid :global(.tc-filter-chip) {
		font-size: 1rem;
	}
</style>
