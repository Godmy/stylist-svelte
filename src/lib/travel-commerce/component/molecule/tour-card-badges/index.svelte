<script lang="ts">
	import Badge from '$stylist/typography/component/atom/badge/index.svelte';
	import { TOUR_TYPE_OPTIONS } from '$stylist/booking/const/preset/tour-type-options';
	import type { Excursion } from '$stylist/travel-commerce/type/object/excursion';

	type Props = {
		tourType?: Excursion['tourType'];
		/** Day-count label, e.g. «2 дня». */
		duration?: string;
		/** Promo marks such as «ТОП» / «Популярный» — drawn in the accent color. */
		highlights?: string[];
		/** Over a dark photo (feature card) instead of a white card body. */
		onDark?: boolean;
	};

	let { tourType, duration, highlights = [], onDark = false }: Props = $props();

	const tourTypeLabel = $derived(TOUR_TYPE_OPTIONS.find((option) => option.value === tourType)?.label);
</script>

<!-- Row of typography/Badge atoms; colors come in through Badge's own CSS variables. -->
{#if highlights.length > 0 || tourTypeLabel || duration}
	<div class={['tc-tour-card-badges', onDark && 'tc-tour-card-badges--on-dark']}>
		{#each highlights as highlight (highlight)}
			<Badge variant="warning" size="sm" class="tc-tour-card-badges__highlight" label={highlight} />
		{/each}
		{#if tourTypeLabel}
			<Badge variant="primary" size="sm" class="tc-tour-card-badges__type" label={tourTypeLabel} />
		{/if}
		{#if duration}
			<Badge variant="default" size="sm" class="tc-tour-card-badges__duration" label={duration} />
		{/if}
	</div>
{/if}

<style>
	.tc-tour-card-badges {
		display: flex;
		flex-wrap: wrap;
		gap: 6px;
	}
	.tc-tour-card-badges :global(.badge) {
		padding: 5px 10px;
		font-weight: 700;
	}
	.tc-tour-card-badges :global(.tc-tour-card-badges__highlight) {
		--color-warning-100: #c74302;
		--color-warning-800: #fff;
		text-transform: uppercase;
		letter-spacing: 0.04em;
	}
	.tc-tour-card-badges :global(.tc-tour-card-badges__type) {
		--color-primary-100: #147270;
		--color-primary-800: #fff;
	}
	.tc-tour-card-badges :global(.tc-tour-card-badges__duration) {
		--color-background-secondary: transparent;
		--color-text-primary: #17231f;
		border-color: rgba(23, 35, 31, 0.22);
	}
	.tc-tour-card-badges--on-dark :global(.tc-tour-card-badges__duration) {
		--color-background-secondary: rgba(0, 0, 0, 0.25);
		--color-text-primary: #fff;
		border-color: rgba(255, 255, 255, 0.55);
	}
</style>
