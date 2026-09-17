<script lang="ts">
	import ExperienceFilterGroup from '$stylist/travel-commerce/component/molecule/experience-filter-group/index.svelte';
	import ActiveExperienceFilters from '$stylist/travel-commerce/component/molecule/active-experience-filters/index.svelte';
	import ResultsCounter from '$stylist/travel-commerce/component/molecule/results-counter/index.svelte';
	import { EXPERIENCE_CATEGORIES } from '$stylist/travel-commerce/const/array/experience-category';

	type Props = {
		count: number;
		selected?: string[];
		onChange?: (selected: string[]) => void;
	};

	let { count, selected = [], onChange }: Props = $props();
	const selectedItems = $derived(EXPERIENCE_CATEGORIES.filter((category) => selected.includes(category.id)));
	const selectedLabels = $derived(selectedItems.map((item) => item.label));

	function update(next: string[]) {
		selected = next;
		onChange?.(selected);
	}
</script>

<section class="tc-filter-bar" aria-labelledby="tc-filter-title">
	<div class="tc-filter-bar__head">
		<h2 id="tc-filter-title">Что хочется увидеть?</h2>
		<ResultsCounter {count} {selectedLabels} />
	</div>
	<ExperienceFilterGroup {selected} onChange={update} />
	<ActiveExperienceFilters items={selectedItems} onRemove={(id) => update(selected.filter((item) => item !== id))} />
</section>

<style>
	.tc-filter-bar {
		position: sticky;
		/* Sits right under BookingBridge's compact sticky bar (~72px incl.
		   spacing) so the two don't overlap — see docs/lankatour.ru/ux/001 §5.2. */
		top: 84px;
		z-index: 15;
		display: grid;
		gap: 16px;
		width: 100%;
		max-width: none;
		margin: 0;
		padding: 18px max(16px, calc((100% - 1180px) / 2)) 16px;
		background: color-mix(in srgb, #f7f3ec 92%, transparent);
		backdrop-filter: blur(8px);
		border-bottom: 1px solid rgba(23, 35, 31, 0.08);
	}

	.tc-filter-bar__head {
		display: grid;
		gap: 10px;
	}

	.tc-filter-bar h2 {
		margin: 0;
		color: rgba(23, 35, 31, 0.62);
		font-size: 1rem;
		letter-spacing: 0;
	}
</style>
