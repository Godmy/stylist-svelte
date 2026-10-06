<script lang="ts">
	// Themed photo tiles on the landing page (2026-10-03, заказчик): the
	// catalogue moved to its own page, and the landing now leads into it —
	// and into the info pages — through these tiles. The first
	// `featuredCount` tiles (the product kinds) get a bigger row of their own.
	// 2026-10-06 (заказчик): only the product tiles show an illustration; the
	// info tiles are plain translucent cards — title on top, caption below.
	import type { LandingTopic } from '$stylist/travel-commerce/type/object/landing-topic';
	import type { Snippet } from 'svelte';

	type Props = {
		topics: LandingTopic[];
		/** How many leading tiles go into the large top row. */
		featuredCount?: number;
		/** Optional host CTA between the product tiles and the information tiles. */
		betweenRows?: Snippet;
	};

	let { topics, featuredCount = 3, betweenRows }: Props = $props();
</script>

<ul class="tc-landing-topic-grid">
	{#each topics as topic, index (topic.id)}
		<li class="tc-landing-topic-grid__item" data-featured={index < featuredCount || undefined}>
			<a class="tc-landing-topic-grid__tile" href={topic.href}>
				<span class="tc-landing-topic-grid__title">{topic.title}</span>
				{#if index < featuredCount}
					<span class="tc-landing-topic-grid__media">
						<img
							class="tc-landing-topic-grid__image"
							src={topic.image}
							alt=""
							loading="lazy"
							decoding="async"
						/>
					</span>
				{/if}
				<span class="tc-landing-topic-grid__text">
					<span class="tc-landing-topic-grid__copy">
						{#if topic.caption}
							<span class="tc-landing-topic-grid__caption">{topic.caption}</span>
						{/if}
					</span>
					<span class="tc-landing-topic-grid__arrow" aria-hidden="true">→</span>
				</span>
			</a>
		</li>
		{#if index === featuredCount - 1 && betweenRows}
			<li class="tc-landing-topic-grid__cta">{@render betweenRows()}</li>
		{/if}
	{/each}
</ul>

<style>
	.tc-landing-topic-grid__cta {
		grid-column: 1 / -1;
		min-width: 0;
		/* Keep the hover lift, focus ring and glow inside the scroll viewport:
		   16px covers the host CTA's 4% hover scale-up (2026-10-06). */
		padding: 20px 16px;
	}

	.tc-landing-topic-grid {
		display: grid;
		grid-template-columns: repeat(12, minmax(0, 1fr));
		gap: 16px;
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.tc-landing-topic-grid__item {
		grid-column: span 3;
		min-width: 0;
		width: 100%;
		/* A bit lower than 4/3, to give the CTA above more height (2026-10-06). */
		aspect-ratio: 16 / 11;
	}

	/* Info tiles: titles scale with the tile's own width (cqi). */
	.tc-landing-topic-grid__item:not([data-featured]) {
		container-type: inline-size;
	}

	/* The product tiles share title / illustration / caption rows through
	   subgrid, so a longer title or caption on one tile no longer shrinks
	   its illustration: every row is as tall as the tallest of the three,
	   and the illustration row has the same fixed proportion everywhere. */
	.tc-landing-topic-grid__item[data-featured] {
		grid-column: span 4;
		grid-row: span 3;
		display: grid;
		grid-template-rows: subgrid;
		row-gap: 0;
	}

	.tc-landing-topic-grid__tile {
		position: relative;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		gap: 8px;
		height: 100%;
		overflow: hidden;
		padding: 14px 12px 10px 16px;
		border-radius: 22px;
		color: #173f35;
		text-decoration: none;
		/* Same translucent white as the product cards (2026-10-06, заказчик). */
		background: rgba(255, 255, 255, var(--tc-landing-topic-card-opacity, 0.82));
		box-shadow: 0 14px 34px rgba(23, 35, 31, 0.14);
		isolation: isolate;
	}

	.tc-landing-topic-grid__tile::after {
		content: '';
		position: absolute;
		inset: 0;
		z-index: -1;
		background: none;
	}

	/* Info tiles: one warm light sweep on hover/focus, no zoom (2026-10-06,
	   заказчик) — the same shine as the landing CTA. */
	.tc-landing-topic-grid__item:not([data-featured]) .tc-landing-topic-grid__tile::before {
		content: '';
		position: absolute;
		inset: 0;
		z-index: -1;
		background: linear-gradient(
			110deg,
			transparent 25%,
			var(--tc-landing-topic-shine-color, rgb(245 166 64 / 0.4)) 50%,
			transparent 75%
		);
		transform: translateX(-120%);
		pointer-events: none;
	}

	.tc-landing-topic-grid__item:not([data-featured]) .tc-landing-topic-grid__tile:focus-visible::before {
		animation: tc-landing-topic-shine 900ms ease-out;
	}

	@media (hover: hover) {
		.tc-landing-topic-grid__item:not([data-featured]) .tc-landing-topic-grid__tile:hover::before {
			animation: tc-landing-topic-shine 900ms ease-out;
		}
	}

	@keyframes tc-landing-topic-shine {
		to {
			transform: translateX(120%);
		}
	}

	.tc-landing-topic-grid__image {
		position: absolute;
		inset: 0;
		z-index: -2;
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform 600ms ease;
	}

	.tc-landing-topic-grid__tile:hover .tc-landing-topic-grid__image,
	.tc-landing-topic-grid__tile:focus-visible .tc-landing-topic-grid__image {
		transform: scale(1.05);
	}

	.tc-landing-topic-grid__media {
		display: contents;
	}

	/* Keep the illustration's zoom inside its own row, clear of the text. */
	[data-featured] .tc-landing-topic-grid__tile {
		box-sizing: border-box;
		display: grid;
		grid-row: 1 / -1;
		grid-template-rows: subgrid;
		row-gap: 0;
		align-items: stretch;
		padding: 8px 20px 4px;
		/* Translucent so the slider behind barely shows through (2026-10-06,
		   заказчик); the illustrations are transparent PNGs to match. */
		background: rgba(255, 255, 255, var(--tc-landing-topic-card-opacity, 0.82));
		color: #173f35;
		box-shadow:
			0 14px 28px rgba(23, 35, 31, 0.24),
			0 4px 10px rgba(23, 35, 31, 0.12);
	}

	[data-featured] .tc-landing-topic-grid__tile::after {
		background: linear-gradient(180deg, transparent 78%, rgba(23, 63, 53, 0.1) 100%);
	}

	[data-featured] .tc-landing-topic-grid__text {
		--tc-topic-arrow-size: 32px;
		gap: 12px;
		box-sizing: border-box;
		width: 100%;
		padding: 0;
		background: transparent;
	}

	[data-featured] .tc-landing-topic-grid__media {
		display: block;
		min-width: 0;
		min-height: 0;
		aspect-ratio: 10 / 9;
		overflow: hidden;
	}

	[data-featured] .tc-landing-topic-grid__image {
		position: static;
		z-index: auto;
		box-sizing: border-box;
		width: 100%;
		height: 100%;
		min-height: 0;
		padding: 10px;
		object-fit: contain;
		transform: scale(1.2);
	}

	[data-featured] .tc-landing-topic-grid__tile > .tc-landing-topic-grid__title {
		padding-bottom: 4px;
	}

	[data-featured] .tc-landing-topic-grid__tile:hover .tc-landing-topic-grid__image,
	[data-featured] .tc-landing-topic-grid__tile:focus-visible .tc-landing-topic-grid__image {
		transform: scale(1.8);
	}

	.tc-landing-topic-grid__tile:focus-visible {
		outline: 3px solid #f28a00;
		outline-offset: 3px;
	}

	.tc-landing-topic-grid__text {
		--tc-topic-arrow-size: 28px;
		box-sizing: border-box;
		width: 100%;
		display: grid;
		grid-template-columns: minmax(0, 1fr) var(--tc-topic-arrow-size);
		align-items: center;
		gap: 8px;
	}

	.tc-landing-topic-grid__copy {
		display: grid;
		gap: 4px;
	}

	.tc-landing-topic-grid__title {
		font-family: 'Playfair Display Variable', Georgia, serif;
		font-size: clamp(1.1rem, 11cqi, 1.5rem);
		font-weight: 700;
		line-height: 1.2;
	}

	[data-featured] .tc-landing-topic-grid__title {
		font-size: 1.6rem;
	}

	.tc-landing-topic-grid__caption {
		color: #3f5148;
		font-size: 0.8rem;
		line-height: 1.3;
	}

	[data-featured] .tc-landing-topic-grid__caption {
		font-size: 0.9rem;
		line-height: inherit;
	}

	.tc-landing-topic-grid__arrow {
		display: grid;
		place-items: center;
		width: var(--tc-topic-arrow-size);
		height: var(--tc-topic-arrow-size);
		box-sizing: border-box;
		border: 1px solid #d5be93;
		border-radius: 999px;
		background: #f2dfbb;
		color: #173f35;
		font-weight: 700;
		transition: transform 200ms ease;
	}

	.tc-landing-topic-grid__tile:hover .tc-landing-topic-grid__arrow {
		transform: translateX(4px);
	}

	@media (max-width: 900px) {
		.tc-landing-topic-grid {
			grid-template-columns: repeat(2, minmax(0, 1fr));
			gap: 12px;
		}

		.tc-landing-topic-grid__item,
		.tc-landing-topic-grid__item[data-featured] {
			grid-column: span 1;
			aspect-ratio: 1 / 1;
		}

		/* 7 tiles: the first one spans the full row so the rest pair up */
		.tc-landing-topic-grid__item:first-child {
			grid-column: span 2;
			aspect-ratio: 16 / 9;
		}

		[data-featured] .tc-landing-topic-grid__title {
			font-size: 1.25rem;
		}

		.tc-landing-topic-grid__tile {
			padding: 12px 10px 10px 14px;
		}

		/* Product tiles size from their subgrid rows, not a fixed ratio. */
		.tc-landing-topic-grid__item[data-featured] {
			aspect-ratio: auto;
		}

		.tc-landing-topic-grid__item[data-featured]:first-child .tc-landing-topic-grid__media {
			aspect-ratio: 16 / 9;
		}

		[data-featured] .tc-landing-topic-grid__text {
			--tc-topic-arrow-size: 28px;
			padding: 0;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.tc-landing-topic-grid__image,
		.tc-landing-topic-grid__arrow {
			transition: none;
		}

		.tc-landing-topic-grid__tile::before {
			animation: none !important;
		}
	}
</style>
