<script lang="ts">
	// Themed photo tiles on the landing page (2026-10-03, заказчик): the
	// catalogue moved to its own page, and the landing now leads into it —
	// and into the info pages — through these tiles. The first
	// `featuredCount` tiles (the product kinds) get a bigger row of their own.
	import type { LandingTopic } from '$stylist/travel-commerce/type/object/landing-topic';

	type Props = {
		topics: LandingTopic[];
		/** How many leading tiles go into the large top row. */
		featuredCount?: number;
	};

	let { topics, featuredCount = 3 }: Props = $props();
</script>

<ul class="tc-landing-topic-grid">
	{#each topics as topic, index (topic.id)}
		<li class="tc-landing-topic-grid__item" data-featured={index < featuredCount || undefined}>
			<a class="tc-landing-topic-grid__tile" href={topic.href}>
				<img
					class="tc-landing-topic-grid__image"
					src={topic.image}
					alt=""
					loading="lazy"
					decoding="async"
				/>
				<span class="tc-landing-topic-grid__text">
					<span class="tc-landing-topic-grid__title">{topic.title}</span>
					{#if topic.caption}
						<span class="tc-landing-topic-grid__caption">{topic.caption}</span>
					{/if}
				</span>
				<span class="tc-landing-topic-grid__arrow" aria-hidden="true">→</span>
			</a>
		</li>
	{/each}
</ul>

<style>
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
		aspect-ratio: 4 / 3;
	}

	.tc-landing-topic-grid__item[data-featured] {
		grid-column: span 4;
		aspect-ratio: 4 / 5;
	}

	.tc-landing-topic-grid__tile {
		position: relative;
		display: flex;
		align-items: flex-end;
		height: 100%;
		overflow: hidden;
		border-radius: 22px;
		color: #fff;
		text-decoration: none;
		background: #17231f;
		box-shadow: 0 14px 34px rgba(23, 35, 31, 0.14);
		isolation: isolate;
	}

	.tc-landing-topic-grid__tile::after {
		content: '';
		position: absolute;
		inset: 0;
		z-index: -1;
		background: linear-gradient(180deg, rgba(10, 18, 15, 0) 40%, rgba(10, 18, 15, 0.78) 100%);
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

	.tc-landing-topic-grid__tile:focus-visible {
		outline: 3px solid #f28a00;
		outline-offset: 3px;
	}

	.tc-landing-topic-grid__text {
		display: grid;
		gap: 4px;
		padding: 20px 56px 20px 20px;
	}

	.tc-landing-topic-grid__title {
		font-size: 1.15rem;
		font-weight: 700;
		line-height: 1.2;
	}

	[data-featured] .tc-landing-topic-grid__title {
		font-family: 'Playfair Display Variable', Georgia, serif;
		font-size: 1.6rem;
	}

	.tc-landing-topic-grid__caption {
		font-size: 0.9rem;
		opacity: 0.88;
	}

	.tc-landing-topic-grid__arrow {
		position: absolute;
		right: 18px;
		bottom: 20px;
		display: grid;
		place-items: center;
		width: 32px;
		height: 32px;
		border-radius: 999px;
		background: rgba(255, 255, 255, 0.92);
		color: #17231f;
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

		.tc-landing-topic-grid__title {
			font-size: 1rem;
		}

		.tc-landing-topic-grid__text {
			padding: 14px 46px 14px 14px;
		}

		.tc-landing-topic-grid__arrow {
			right: 12px;
			bottom: 14px;
			width: 28px;
			height: 28px;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.tc-landing-topic-grid__image,
		.tc-landing-topic-grid__arrow {
			transition: none;
		}
	}
</style>
