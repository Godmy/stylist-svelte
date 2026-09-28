<script lang="ts">
	import { mapProgress } from '$stylist/animation/function/script/map-progress';
	import type { TurtleHeroMorphConfig } from '$stylist/travel-commerce/type/object/turtle-hero-morph-config';
	import { TURTLE_HERO_MORPH_CONFIG } from '$stylist/travel-commerce/const/preset/turtle-hero-morph';
	import type { HeroSlider } from '$stylist/travel-commerce/type/object/hero-slider';

	type Props = {
		progress?: number;
		config?: TurtleHeroMorphConfig;
		reducedMotion?: boolean;
		/** Image wordmark shown instead of the default text one (see HeroSlider.logo). */
		logo?: HeroSlider['logo'];
		/** Where to draw `logo` on the stage, px — computed by TurtleHeroMorph together with the turtle's final anchor, so the two line up. */
		logoBox?: { left: number; top: number; width: number; height: number } | null;
	};

	let {
		progress = 0,
		config = TURTLE_HERO_MORPH_CONFIG,
		reducedMotion = false,
		logo,
		logoBox
	}: Props = $props();

	// A short window right after logoStart, not the full logoStart→complete
	// stretch — the turtle mark itself is already fully formed by logoStart,
	// so a quick scroll flick that gets that far reliably carries a little
	// further too. The old wider window meant a fast, short flick could land
	// past logoStart (mark fully visible) without enough leftover momentum
	// to also finish revealing the wordmark.
	const reveal = $derived(
		mapProgress(progress, [
			{ at: config.phases.logoStart, value: 0 },
			{ at: config.phases.logoStart + config.motion.wordmarkRevealDurationFraction, value: 1 }
		])
	);
</script>

{#if logo}
	{#if logoBox}
		<h1
			class="tc-turtle-wordmark-image"
			style:left={`${logoBox.left}px`}
			style:top={`${logoBox.top}px`}
			style:width={`${logoBox.width}px`}
			style:height={`${logoBox.height}px`}
			style:--tc-wordmark-opacity={reveal}
			style:--tc-wordmark-shift={reducedMotion ? '0px' : `${(1 - reveal) * 18}px`}
		>
			<img src={logo.src} alt={logo.alt} />
		</h1>
	{/if}
{:else}
	<div
		class="tc-turtle-wordmark"
		style:--tc-wordmark-opacity={reveal}
		style:--tc-wordmark-shift={reducedMotion ? '0px' : `${(1 - reveal) * 18}px`}
	>
		<h1>
			<span class="tc-turtle-wordmark__lanka">Ланка</span><span class="tc-turtle-wordmark__tur"
				>Тур</span
			>
		</h1>
		<p class="tc-turtle-wordmark__caption">ЭКСКУРСИИ НА ШРИ-ЛАНКЕ</p>
	</div>
{/if}

<style>
	.tc-turtle-wordmark {
		--turtle-hero-color-lanka: #f28a00;
		--turtle-hero-color-tur: #669c2f;
		--turtle-hero-color-caption: #35666c;

		position: absolute;
		left: 50%;
		top: 68%;
		z-index: 4;
		width: min(90%, 640px);
		text-align: center;
		transform: translate(-50%, calc(-50% + var(--tc-wordmark-shift)));
		opacity: var(--tc-wordmark-opacity, 0);
		pointer-events: none;
	}

	.tc-turtle-wordmark h1 {
		margin: 0;
		font-size: clamp(2.4rem, 7vw, 4.5rem);
		line-height: 1;
		font-weight: 800;
		letter-spacing: -0.01em;
	}

	.tc-turtle-wordmark__lanka {
		color: var(--turtle-hero-color-lanka);
	}

	.tc-turtle-wordmark__tur {
		color: var(--turtle-hero-color-tur);
	}

	.tc-turtle-wordmark__caption {
		margin: 12px 0 0;
		font-size: clamp(0.78rem, 1.6vw, 1rem);
		font-weight: 600;
		letter-spacing: 0.16em;
		color: var(--turtle-hero-color-caption);
	}

	.tc-turtle-wordmark-image {
		position: absolute;
		z-index: 4;
		margin: 0;
		transform: translateY(var(--tc-wordmark-shift));
		opacity: var(--tc-wordmark-opacity, 0);
		pointer-events: none;
	}

	.tc-turtle-wordmark-image img {
		display: block;
		width: 100%;
		height: 100%;
	}

	@media (prefers-reduced-motion: reduce) {
		.tc-turtle-wordmark {
			transition: none;
		}
	}
</style>
