<script lang="ts">
	import Image from '$stylist/image/component/atom/image/index.svelte';
	import { mapProgress } from '$stylist/animation/function/script/map-progress';
	import type { TurtleHeroMorphConfig } from '$stylist/travel-commerce/type/object/turtle-hero-morph-config';
	import { TURTLE_HERO_MORPH_CONFIG } from '$stylist/travel-commerce/const/preset/turtle-hero-morph';

	type Props = {
		progress?: number;
		config?: TurtleHeroMorphConfig;
		reducedMotion?: boolean;
		photoSrc?: string;
		/** Cross-fades in over `photoSrc` across the parallax hold (introEnd → focusStart). */
		nextPhotoSrc?: string;
		/** Cross-fades in over `nextPhotoSrc` across the focus hold (focusStart → morphStart). */
		finalPhotoSrc?: string;
		/** Fires once `photoSrc` (the resting-state layer) has finished loading. */
		onPhotoLoad?: () => void;
	};

	let {
		progress = 0,
		config = TURTLE_HERO_MORPH_CONFIG,
		reducedMotion = false,
		photoSrc = '/travel-commerce/turtle-hero-morph/hero-photo.jpg',
		nextPhotoSrc,
		finalPhotoSrc,
		onPhotoLoad
	}: Props = $props();

	// Three deliberate "the scene refreshes" beats (not seamless blends) —
	// each finishes before the next phase starts, so by focusStart the scene
	// is already on `nextPhotoSrc`, and by morphStart it's already on
	// `finalPhotoSrc`. None of these photos have the turtle baked in except
	// `photoSrc` — TurtleHeroTurtleMorph is what "detaches" it into its own
	// animated sprite once scrolling starts.
	const nextPhotoOpacity = $derived(
		nextPhotoSrc
			? mapProgress(progress, [
					{ at: config.phases.introEnd, value: 0 },
					{ at: config.phases.focusStart, value: 1 }
				])
			: 0
	);
	const finalPhotoOpacity = $derived(
		finalPhotoSrc
			? mapProgress(progress, [
					{ at: config.phases.focusStart, value: 0 },
					{ at: config.phases.morphStart, value: 1 }
				])
			: 0
	);

	// A slow, continuous Ken Burns zoom across the whole sequence — replaces
	// the old far/near clip-path parallax split, which needed the turtle
	// baked into every layer to stay aligned and left a rounding-error seam
	// at the clip boundary. A single unclipped layer per photo has neither
	// problem.
	const zoom = $derived(
		reducedMotion
			? 1
			: 1 + mapProgress(progress, [{ at: 0, value: 0 }, { at: 1, value: 1 }]) * (config.motion.backgroundZoomTo - 1)
	);

	const fogProgress = $derived(
		mapProgress(progress, [
			{ at: config.phases.morphStart, value: 0 },
			{ at: config.phases.complete, value: 1 }
		])
	);

	const fogHeightPercent = $derived(
		config.motion.fogHeightFromPercent +
			fogProgress * (config.motion.fogHeightToPercent - config.motion.fogHeightFromPercent)
	);
</script>

<div
	class="tc-turtle-photo-scene"
	style:--tc-th-zoom={zoom}
	style:--tc-th-fog-height={`${fogHeightPercent}%`}
	style:--tc-th-fog-opacity={fogProgress}
	aria-hidden="true"
>
	<!-- All layers stay mounted for the component's whole lifetime — toggling
	     them in/out of the DOM based on progress would re-trigger each
	     <Image>'s own load/fade-in cycle and flash the stage's dark
	     background through for a beat, exactly the bug this replaced. -->
	<div class="tc-turtle-photo-scene__layer">
		<Image imageSrc={photoSrc} imageAlt="" size="xl" class="tc-turtle-photo-scene__img" onLoad={onPhotoLoad} />
	</div>
	{#if nextPhotoSrc}
		<div class="tc-turtle-photo-scene__layer" style:opacity={nextPhotoOpacity}>
			<Image imageSrc={nextPhotoSrc} imageAlt="" size="xl" class="tc-turtle-photo-scene__img" />
		</div>
	{/if}
	{#if finalPhotoSrc}
		<div class="tc-turtle-photo-scene__layer" style:opacity={finalPhotoOpacity}>
			<Image imageSrc={finalPhotoSrc} imageAlt="" size="xl" class="tc-turtle-photo-scene__img" />
		</div>
	{/if}
	<div class="tc-turtle-photo-scene__fog"></div>
</div>

<style>
	.tc-turtle-photo-scene {
		position: absolute;
		inset: 0;
		overflow: hidden;
	}

	.tc-turtle-photo-scene__layer {
		position: absolute;
		inset: -4% -2% -2% -2%;
		transform: scale(var(--tc-th-zoom, 1));
		will-change: transform;
	}

	.tc-turtle-photo-scene :global(.tc-turtle-photo-scene__img) {
		width: 100%;
		height: 100%;
		max-width: none;
		--image-radius: 0;
	}

	.tc-turtle-photo-scene :global(.tc-turtle-photo-scene__img img) {
		width: 100%;
		height: 100%;
	}

	.tc-turtle-photo-scene__fog {
		position: absolute;
		inset: auto 0 0 0;
		height: var(--tc-th-fog-height, 50%);
		opacity: var(--tc-th-fog-opacity, 0);
		background: linear-gradient(0deg, #ffffff 15%, rgba(255, 255, 255, 0) 100%);
		pointer-events: none;
	}

	@media (prefers-reduced-motion: reduce) {
		.tc-turtle-photo-scene__layer {
			transition: none;
		}
	}
</style>
