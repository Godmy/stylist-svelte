<script lang="ts">
	import type { Excursion } from '$stylist/travel-commerce/type/object/excursion';
	import type { TourAddon } from '$stylist/travel-commerce/type/object/tour-addon';
	import type { TourGalleryImage } from '$stylist/travel-commerce/type/object/tour-gallery-image';
	import type { TourRouteStop } from '$stylist/travel-commerce/type/object/tour-route-stop';
	import TourHeroGallery from '$stylist/travel-commerce/component/organism/tour-hero-gallery/index.svelte';
	import TourRouteStops from '$stylist/travel-commerce/component/organism/tour-route-stops/index.svelte';
	import TourAddonPicker from '$stylist/travel-commerce/component/organism/tour-addon-picker/index.svelte';
	import TourBookingPanel from '$stylist/travel-commerce/component/organism/tour-booking-panel/index.svelte';
	import ExcursionCardCompact from '$stylist/travel-commerce/component/molecule/excursion-card-compact/index.svelte';

	type Props = {
		excursion: Excursion;
		gallery: TourGalleryImage[];
		stops: TourRouteStop[];
		addons: TourAddon[];
		related?: Excursion[];
	};

	let { excursion, gallery, stops, addons, related = [] }: Props = $props();
</script>

<main class="tc-tour-detail-page">
	<TourHeroGallery title={excursion.title} images={gallery} />
	<div class="tc-tour-detail-page__content">
		<article>
			<p>{excursion.summary}</p>
			<TourRouteStops {stops} />
			<TourAddonPicker {addons} />
			{#if related.length}
				<section class="tc-tour-detail-page__related">
					<h2>Related tours</h2>
					<div>
						{#each related as item (item.id)}
							<ExcursionCardCompact excursion={item} />
						{/each}
					</div>
				</section>
			{/if}
		</article>
		<TourBookingPanel price={excursion.priceFrom} />
	</div>
</main>

<style>
	.tc-tour-detail-page {
		display: grid;
		gap: 2rem;
		background: #f7f3ec;
		color: #17231f;
	}
	.tc-tour-detail-page__content {
		display: grid;
		grid-template-columns: minmax(0, 1fr) minmax(18rem, 24rem);
		gap: 2rem;
		align-items: start;
	}
	.tc-tour-detail-page article {
		display: grid;
		gap: 2rem;
	}
	.tc-tour-detail-page article > p {
		max-width: 62rem;
		margin: 0;
		font-size: 1.15rem;
		line-height: 1.55;
		color: rgba(23, 35, 31, 0.76);
	}
	.tc-tour-detail-page__content > :global(.tc-tour-booking-panel) {
		position: sticky;
		top: 1rem;
	}
	.tc-tour-detail-page__related {
		display: grid;
		gap: 1rem;
	}
	.tc-tour-detail-page__related h2 {
		margin: 0;
		font-size: 1.6rem;
	}
	.tc-tour-detail-page__related > div {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 0.75rem;
	}
	/*
	 * Duplicated as `@media` (real device viewport) and `@container` (the
	 * Story sandbox simulates device width via `container-type: inline-size`
	 * on an ancestor, which plain `@media` can't see). Keep both in sync.
	 */
	@media (max-width: 900px) {
		.tc-tour-detail-page__content {
			grid-template-columns: 1fr;
		}
		.tc-tour-detail-page__content > :global(.tc-tour-booking-panel) {
			position: static;
		}
	}
	@container (max-width: 900px) {
		.tc-tour-detail-page__content {
			grid-template-columns: 1fr;
		}
		.tc-tour-detail-page__content > :global(.tc-tour-booking-panel) {
			position: static;
		}
	}
	@media (max-width: 620px) {
		.tc-tour-detail-page__related > div {
			grid-template-columns: 1fr;
		}
	}
	@container (max-width: 620px) {
		.tc-tour-detail-page__related > div {
			grid-template-columns: 1fr;
		}
	}
</style>
