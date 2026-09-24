<script lang="ts">
	import ExperienceFilterGroup from '$stylist/travel-commerce/component/molecule/experience-filter-group/index.svelte';
	import BookingTourTypeFilter from '$stylist/booking/component/molecule/booking-tour-type-filter/index.svelte';
	import BookingPhysicalLoadFilter from '$stylist/booking/component/molecule/booking-physical-load-filter/index.svelte';
	import Checkbox from '$stylist/control/component/atom/checkbox/index.svelte';
	import type { TourFilters } from '$stylist/booking/type/object/tour-filters';

	type Props = {
		value?: TourFilters;
		onChange?: (value: TourFilters) => void;
	};

	const DEFAULT_VALUE: TourFilters = {
		categories: [],
		recommendedForKids: false,
		noEarlyDeparture: false
	};

	let { value = DEFAULT_VALUE, onChange }: Props = $props();

	function update(patch: Partial<TourFilters>) {
		onChange?.({ ...value, ...patch });
	}
</script>

<aside class="tc-booking-filter-panel" aria-label="Фильтры туров">
	<div class="tc-booking-filter-panel__section">
		<h3 class="tc-booking-filter-panel__title">Что хотите посмотреть?</h3>
		<ExperienceFilterGroup
			selected={value.categories}
			onChange={(categories) => update({ categories })}
		/>
	</div>

	<div class="tc-booking-filter-panel__section">
		<h3 class="tc-booking-filter-panel__title">Тип экскурсии</h3>
		<BookingTourTypeFilter
			selected={value.tourType}
			onChange={(tourType) => update({ tourType })}
		/>
	</div>

	<div class="tc-booking-filter-panel__section">
		<Checkbox
			id="booking-filter-recommended-for-kids"
			label="Рекомендуем с детьми"
			checked={value.recommendedForKids}
			onchange={(e: Event) =>
				update({ recommendedForKids: (e.currentTarget as HTMLInputElement).checked })}
		/>
		<Checkbox
			id="booking-filter-no-early-departure"
			label="Без раннего выезда"
			checked={value.noEarlyDeparture}
			onchange={(e: Event) =>
				update({ noEarlyDeparture: (e.currentTarget as HTMLInputElement).checked })}
		/>
	</div>

	<div class="tc-booking-filter-panel__section">
		<h3 class="tc-booking-filter-panel__title">Физическая нагрузка</h3>
		<BookingPhysicalLoadFilter
			selected={value.physicalLoad}
			onChange={(physicalLoad) => update({ physicalLoad })}
		/>
	</div>
</aside>

<style>
	.tc-booking-filter-panel {
		--color-border-primary: rgba(23, 35, 31, 0.12);
		--color-background-primary: rgba(255, 255, 255, 0.98);
		--color-background-secondary: rgba(23, 35, 31, 0.04);
		--color-primary-50: rgba(23, 35, 31, 0.06);
		--color-primary-500: #17231f;
		--color-primary-700: #17231f;
		--color-text-primary: #17231f;
		display: grid;
		gap: 22px;
		width: 100%;
		max-width: 320px;
		padding: 20px;
		box-sizing: border-box;
		border-radius: 18px;
		border: 1px solid rgba(23, 35, 31, 0.1);
		background: rgba(255, 255, 255, 0.85);
	}

	.tc-booking-filter-panel__section {
		display: grid;
		gap: 10px;
	}

	.tc-booking-filter-panel__title {
		margin: 0;
		font-size: 0.95rem;
		font-weight: 700;
		color: #17231f;
	}
</style>
