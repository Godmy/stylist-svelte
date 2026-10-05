<script lang="ts">
	import Accordion from '$stylist/dialog/component/molecule/accordion/index.svelte';
	import AccordionLayout from '$stylist/dialog/component/atom/accordion-layout/index.svelte';
	import ExperienceFilterGroup from '$stylist/travel-commerce/component/molecule/experience-filter-group/index.svelte';
	import BookingTourTypeFilter from '$stylist/booking/component/molecule/booking-tour-type-filter/index.svelte';
	import BookingPhysicalLoadFilter from '$stylist/booking/component/molecule/booking-physical-load-filter/index.svelte';
	import Checkbox from '$stylist/control/component/atom/checkbox/index.svelte';
	import type { TourFilters } from '$stylist/booking/type/object/tour-filters';

	type Section = 'tour-type' | 'experiences' | 'extras' | 'physical-load';

	type Props = {
		value?: TourFilters;
		/** Which sections to show, in this order; the first one starts open. The landing (2026-10-05) drops «Тип экскурсии» and leads with «Что хотите посмотреть?». */
		sections?: Section[];
		onChange?: (value: TourFilters) => void;
	};

	const DEFAULT_VALUE: TourFilters = {
		categories: [],
		recommendedForKids: false,
		noEarlyDeparture: false
	};

	let {
		value = DEFAULT_VALUE,
		sections = ['tour-type', 'experiences', 'extras', 'physical-load'],
		onChange
	}: Props = $props();

	const extrasCount = $derived(
		Number(value.recommendedForKids) + Number(value.noEarlyDeparture)
	);

	function update(patch: Partial<TourFilters>) {
		onChange?.({ ...value, ...patch });
	}
</script>

{#snippet counter(count: number)}
	{#if count > 0}
		<span class="tc-booking-filter-panel__count">{count}</span>
	{/if}
{/snippet}

<aside class="tc-booking-filter-panel" aria-label="Фильтры туров">
	<!-- Sections collapse into an accordion (one open at a time) so the panel fits the viewport; a counter in each header keeps collapsed selections visible -->
	<Accordion class="tc-booking-filter-panel__accordion" defaultValue={sections[0]}>
		{#snippet children()}
			{#each sections as section (section)}
				{#if section === 'tour-type'}
					<AccordionLayout value="tour-type" title="Тип экскурсии">
						{#snippet headerEnd()}{@render counter(value.tourType ? 1 : 0)}{/snippet}
						{#snippet children()}
							<BookingTourTypeFilter
								selected={value.tourType}
								onChange={(tourType) => update({ tourType })}
							/>
						{/snippet}
					</AccordionLayout>
				{:else if section === 'experiences'}
					<AccordionLayout value="experiences" title="Что хотите посмотреть?">
						{#snippet headerEnd()}{@render counter(value.categories.length)}{/snippet}
						{#snippet children()}
							<div class="tc-booking-filter-panel__experiences">
								<ExperienceFilterGroup
									selected={value.categories}
									onChange={(categories) => update({ categories })}
								/>
							</div>
						{/snippet}
					</AccordionLayout>
				{:else if section === 'extras'}
					<AccordionLayout value="extras" title="Дополнительно">
						{#snippet headerEnd()}{@render counter(extrasCount)}{/snippet}
						{#snippet children()}
							<div class="tc-booking-filter-panel__extras">
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
						{/snippet}
					</AccordionLayout>
				{:else if section === 'physical-load'}
					<AccordionLayout value="physical-load" title="Физическая нагрузка">
						{#snippet headerEnd()}{@render counter(value.physicalLoad ? 1 : 0)}{/snippet}
						{#snippet children()}
							<BookingPhysicalLoadFilter
								selected={value.physicalLoad}
								onChange={(physicalLoad) => update({ physicalLoad })}
							/>
						{/snippet}
					</AccordionLayout>
				{/if}
			{/each}
		{/snippet}
	</Accordion>
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
		width: 100%;
		max-width: 320px;
		box-sizing: border-box;
		border-radius: 18px;
		border: 1px solid rgba(23, 35, 31, 0.1);
		background: rgba(255, 255, 255, 0.85);
		overflow: hidden;
	}

	/* The panel itself is the frame — drop the accordion's own border/radius */
	.tc-booking-filter-panel :global(.tc-booking-filter-panel__accordion) {
		border: none;
		border-radius: 0;
	}

	.tc-booking-filter-panel :global(.c-accordion-layout__header) {
		padding: 16px 20px;
		font-size: 0.95rem;
		font-weight: 700;
	}

	.tc-booking-filter-panel :global(.c-accordion-layout__content) {
		padding: 16px 20px 20px;
	}

	.tc-booking-filter-panel__extras {
		display: grid;
		gap: 10px;
	}

	.tc-booking-filter-panel__count {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		min-width: 20px;
		height: 20px;
		padding: 0 6px;
		box-sizing: border-box;
		border-radius: 999px;
		background: #17231f;
		color: white;
		font-size: 0.75rem;
		font-weight: 700;
	}

	/* Desktop: chip labels match the 0.875rem Radio/Checkbox labels in the sections below; mobile keeps the larger size (breakpoint mirrors store-page's 980px) */
	@media (min-width: 981px) {
		.tc-booking-filter-panel__experiences :global(.tc-filter-chip) {
			font-size: 0.875rem;
		}
	}
</style>
