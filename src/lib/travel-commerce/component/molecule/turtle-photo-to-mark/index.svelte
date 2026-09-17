<script lang="ts">
	import Image from '$stylist/image/component/atom/image/index.svelte';
	import TurtleDissolveScene from '$stylist/webgl/component/molecule/turtle-dissolve-scene/index.svelte';
	import { mapProgress } from '$stylist/animation/function/script/map-progress';
	import type { TurtleHeroMorphConfig } from '$stylist/travel-commerce/type/object/turtle-hero-morph-config';
	import { TURTLE_HERO_MORPH_CONFIG } from '$stylist/travel-commerce/const/preset/turtle-hero-morph';

	type Props = {
		progress?: number;
		config?: TurtleHeroMorphConfig;
		/** Exactly 5 transparent-background turtle frames, photoreal → fully stylised mark (with the wave flourish), in that order. */
		frames: string[];
		reducedMotion?: boolean;
		/** Fires once frame 0 (the resting frame) has finished loading. */
		onFirstFrameLoad?: () => void;
	};

	let {
		progress = 0,
		config = TURTLE_HERO_MORPH_CONFIG,
		frames,
		reducedMotion = false,
		onFirstFrameLoad
	}: Props = $props();

	// Where the turtle sits on screen, at the start and end of its travel,
	// now config-driven (see `TurtleHeroMorphMotion.turtleAnchorFrom/To`) —
	// `turtleAnchorFrom` must line up with the live turtle baked into
	// TurtleHeroMorph's `photoSrc`. For the design system's own default
	// placeholder photo (01.png, 1672×941): bounding box there is roughly
	// x:[620,1120] y:[490,770] px, center (870, 630) → (870/1672, 630/941) ≈
	// (0.52, 0.67), width 500px / photo height 941px ≈ 0.53.
	const TURTLE_ANCHOR = $derived(config.motion.turtleAnchorFrom);
	const FINAL_ANCHOR = $derived(config.motion.turtleAnchorTo);

	// All 5 frames are now delivered at the same 800×400 canvas (2:1) — matching
	// the box exactly means `object-fit: contain` renders every frame at the
	// same scale, so the turtle's apparent size can't jump between frames.
	// If a future frame set has a different (but still uniform) size, update
	// this to match it exactly.
	const BOX_ASPECT_RATIO = 800 / 400;

	// travel: 0 = resting at the live turtle's screen position/size, 1 =
	// resting at the final mark's position/size. Ends a beat later than the
	// frame sequence below (at `complete` instead of `logoStart`) so the mark
	// keeps drifting gently into its final spot after it's already formed.
	const travel = $derived(
		mapProgress(progress, [
			{ at: config.phases.focusStart, value: 0 },
			{ at: config.phases.complete, value: 1 }
		])
	);

	const centerX = $derived(TURTLE_ANCHOR.x + (FINAL_ANCHOR.x - TURTLE_ANCHOR.x) * travel);
	const centerY = $derived(TURTLE_ANCHOR.y + (FINAL_ANCHOR.y - TURTLE_ANCHOR.y) * travel);
	const boxSize = $derived(TURTLE_ANCHOR.size + (FINAL_ANCHOR.size - TURTLE_ANCHOR.size) * travel);

	// The 5 frames crossfade across the same window travel starts in
	// (focusStart) through logoStart — a beat sooner than travel finishes, so
	// the mark has already fully formed by the time it settles.
	const localMorph = $derived(
		mapProgress(progress, [
			{ at: config.phases.focusStart, value: 0 },
			{ at: config.phases.logoStart, value: 1 }
		])
	);

	// Evenly-spaced crossfade: frame 0 holds until the next frame's stop,
	// frame N-1 fades in and then holds forever (it's the resting mark next
	// to the wordmark), everything in between is a triangular fade in/out.
	const frameOpacities = $derived(
		frames.map((_, index) => {
			const stops = frames.map((_, i) => i / (frames.length - 1));
			const at = stops[index];
			if (index === 0) {
				return mapProgress(localMorph, [
					{ at, value: 1 },
					{ at: stops[1], value: 0 }
				]);
			}
			if (index === frames.length - 1) {
				return mapProgress(localMorph, [
					{ at: stops[index - 1], value: 0 },
					{ at, value: 1 }
				]);
			}
			return mapProgress(localMorph, [
				{ at: stops[index - 1], value: 0 },
				{ at, value: 1 },
				{ at: stops[index + 1], value: 0 }
			]);
		})
	);

	// A gentle, purely decorative "settle" pulse through the handoff window,
	// on top of the constant idle bob/sway defined in CSS below.
	const sharedBump = $derived(
		reducedMotion
			? 1
			: 1 + config.motion.turtleSettleBumpAmount * Math.sin(Math.min(Math.max(localMorph, 0), 1) * Math.PI)
	);
</script>

<div class="tc-turtle-sprite" aria-hidden="true">
	<div
		class="tc-turtle-sprite__box"
		style:left={`${centerX * 100}%`}
		style:top={`${centerY * 100}%`}
		style:--tc-sprite-vh={boxSize * 100}
		style:aspect-ratio={BOX_ASPECT_RATIO}
		style:--tc-sprite-scale={sharedBump}
		style:--tc-bob-duration={`${config.motion.turtleBob.durationMs}ms`}
		style:--tc-bob-translate={`${config.motion.turtleBob.translateYPercent}%`}
		style:--tc-bob-rotate={`${config.motion.turtleBob.rotateDeg}deg`}
	>
		{#each frames as frame, index (frame)}
			<div class="tc-turtle-sprite__frame" style:opacity={frameOpacities[index]}>
				<Image
					imageSrc={frame}
					imageAlt=""
					size="xl"
					class="tc-turtle-sprite__img"
					onLoad={index === 0 ? onFirstFrameLoad : undefined}
				/>
			</div>
		{/each}
	</div>

	{#if !reducedMotion}
		<TurtleDissolveScene {progress} />
	{/if}
</div>

<style>
	.tc-turtle-sprite {
		position: absolute;
		inset: 0;
		overflow: hidden;
		/* Above MediaSlider's rising wave (z-index: 3) on purpose — see the
		   note on .c-media-slider__slide--active for why that's reachable
		   from here at all. This div covers the full stage even though the
		   turtle graphic itself is small, so it must not swallow clicks meant
		   for MediaSlider's nav arrows/indicators sitting underneath it. */
		z-index: 4;
		pointer-events: none;
	}

	.tc-turtle-sprite__box {
		position: absolute;
		width: calc(var(--tc-sprite-vh) * 1vh);
		width: calc(var(--tc-sprite-vh) * 1svh);
		transform: translate(-50%, -50%) scale(var(--tc-sprite-scale, 1));
		filter: drop-shadow(0 16px 32px rgba(11, 31, 30, 0.35));
		animation: tc-turtle-sprite-bob var(--tc-bob-duration, 4.5s) ease-in-out infinite;
	}

	.tc-turtle-sprite__frame {
		position: absolute;
		inset: 0;
	}

	.tc-turtle-sprite :global(.tc-turtle-sprite__img) {
		width: 100%;
		height: 100%;
		max-width: none;
		--image-radius: 0;
		--image-background: transparent;
		--image-object-fit: contain;
	}

	.tc-turtle-sprite :global(.tc-turtle-sprite__img img) {
		width: 100%;
		height: 100%;
	}

	/* The turtle sprite has no loading state of its own — while a frame's
	   image hasn't loaded yet it should just stay invisible (see
	   .c-image__img's own opacity:0 until loaded), not show the generic
	   Image atom's shimmer skeleton on top of the scene behind it. */
	.tc-turtle-sprite :global(.c-image__skeleton) {
		display: none;
	}

	@keyframes tc-turtle-sprite-bob {
		0%,
		100% {
			translate: 0 0;
			rotate: calc(var(--tc-bob-rotate, 1.5deg) * -1);
		}
		50% {
			translate: 0 var(--tc-bob-translate, -1.2%);
			rotate: var(--tc-bob-rotate, 1.5deg);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.tc-turtle-sprite__box {
			animation: none;
		}
	}
</style>
