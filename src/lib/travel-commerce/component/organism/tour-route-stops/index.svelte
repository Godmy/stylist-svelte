<script lang="ts">
	import type { TourRouteStop } from '$stylist/travel-commerce/type/object/tour-route-stop';

	type Props = {
		stops: TourRouteStop[];
		title?: string;
	};

	let { stops, title = 'Route' }: Props = $props();
</script>

<section class="tc-tour-route-stops">
	<h2>{title}</h2>
	<div class="tc-tour-route-stops__list">
		{#each stops as stop, index (stop.id)}
			<article class="tc-tour-route-stops__item">
				<div class="tc-tour-route-stops__number">{index + 1}</div>
				<div class="tc-tour-route-stops__content">
					<div>
						<h3>{stop.title}</h3>
						{#if stop.duration}<span>{stop.duration}</span>{/if}
					</div>
					<p>{stop.description}</p>
					{#if stop.photoSpot}<em>Photo stop</em>{/if}
				</div>
				{#if stop.imageSrc}
					<img src={stop.imageSrc} alt={stop.imageAlt ?? stop.title} loading="lazy" />
				{/if}
			</article>
		{/each}
	</div>
</section>

<style>
	.tc-tour-route-stops {
		display: grid;
		gap: 1rem;
	}
	.tc-tour-route-stops h2 {
		margin: 0;
		color: #17231f;
		font-size: 2rem;
		line-height: 1.05;
	}
	.tc-tour-route-stops__list {
		display: grid;
		gap: 0.75rem;
	}
	.tc-tour-route-stops__item {
		display: grid;
		grid-template-columns: 2.25rem 1fr minmax(8rem, 13rem);
		gap: 1rem;
		align-items: start;
		padding: 1rem;
		border: 1px solid rgba(23, 35, 31, 0.1);
		border-radius: 8px;
		background: #fff;
	}
	.tc-tour-route-stops__number {
		display: grid;
		place-items: center;
		width: 2.25rem;
		height: 2.25rem;
		border-radius: 999px;
		background: #17231f;
		color: #fff;
		font-weight: 700;
	}
	.tc-tour-route-stops__content {
		display: grid;
		gap: 0.55rem;
	}
	.tc-tour-route-stops__content > div {
		display: flex;
		align-items: baseline;
		justify-content: space-between;
		gap: 1rem;
	}
	.tc-tour-route-stops h3,
	.tc-tour-route-stops p {
		margin: 0;
	}
	.tc-tour-route-stops h3 {
		color: #17231f;
		font-size: 1.1rem;
	}
	.tc-tour-route-stops p,
	.tc-tour-route-stops span {
		color: rgba(23, 35, 31, 0.68);
		line-height: 1.45;
	}
	.tc-tour-route-stops em {
		width: max-content;
		padding: 0.18rem 0.5rem;
		border-radius: 999px;
		background: rgba(43, 124, 93, 0.1);
		color: #245b45;
		font-style: normal;
		font-size: 0.8rem;
	}
	.tc-tour-route-stops img {
		width: 100%;
		aspect-ratio: 4 / 3;
		object-fit: cover;
		border-radius: 6px;
	}
	@media (max-width: 760px) {
		.tc-tour-route-stops__item {
			grid-template-columns: 2.25rem 1fr;
		}
		.tc-tour-route-stops img {
			grid-column: 2;
		}
	}
	@container (max-width: 760px) {
		.tc-tour-route-stops__item {
			grid-template-columns: 2.25rem 1fr;
		}
		.tc-tour-route-stops img {
			grid-column: 2;
		}
	}
</style>
