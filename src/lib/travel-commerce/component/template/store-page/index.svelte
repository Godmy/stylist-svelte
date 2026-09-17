<script lang="ts">
	import ExperienceFilterBar from '$stylist/travel-commerce/component/organism/experience-filter-bar/index.svelte';
	import StoreEditorialGrid from '$stylist/travel-commerce/component/organism/store-editorial-grid/index.svelte';
	import { SAMPLE_EXCURSIONS } from '$stylist/travel-commerce/const/preset/sample-excursions';
	import { filterExcursions } from '$stylist/travel-commerce/function/script/filter-excursions';
	import type { Excursion } from '$stylist/travel-commerce/type/object/excursion';

	type Props = {
		excursions?: Excursion[];
	};

	let { excursions = SAMPLE_EXCURSIONS }: Props = $props();
	let selected = $state<string[]>([]);
	const filtered = $derived(filterExcursions(excursions, selected));
</script>

<main class="tc-store-page">
	<ExperienceFilterBar count={filtered.length} {selected} onChange={(next) => (selected = next)} />
	<StoreEditorialGrid excursions={filtered} />
</main>

<style>
	.tc-store-page {
		background: #f7f3ec;
		min-height: 100vh;
	}
</style>
