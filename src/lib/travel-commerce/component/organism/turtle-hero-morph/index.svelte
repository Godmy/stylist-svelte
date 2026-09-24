<script lang="ts">
	import TurtleHeroPhotoScene from '$stylist/travel-commerce/component/molecule/turtle-hero-photo-scene/index.svelte';
	import TurtlePhotoToMark from '$stylist/travel-commerce/component/molecule/turtle-photo-to-mark/index.svelte';
	import TurtleHeroWordmark from '$stylist/travel-commerce/component/molecule/turtle-hero-wordmark/index.svelte';
	import ScrollPhaseDebug from '$stylist/animation/component/atom/scroll-phase-debug/index.svelte';
	import { createStickyScrollProgress } from '$stylist/travel-commerce/function/script/create-sticky-scroll-progress';
	import { createMotionPreferenceState } from '$stylist/animation/function/state/motion-preference';
	import { mapProgress } from '$stylist/animation/function/script/map-progress';
	import type { TurtleHeroMorphConfig } from '$stylist/travel-commerce/type/object/turtle-hero-morph-config';
	import { TURTLE_HERO_MORPH_CONFIG } from '$stylist/travel-commerce/const/preset/turtle-hero-morph';
	import type { HeroSlider } from '$stylist/travel-commerce/type/object/hero-slider';
	import { HERO_SLIDER } from '$stylist/travel-commerce/const/preset/hero-slider';

	type Props = {
		progress?: number;
		config?: TurtleHeroMorphConfig;
		/**
		 * When false, skips the sticky/320vh scroll-jacking wrapper and just
		 * fills its container instead — for embedding somewhere that already
		 * drives `progress` itself from its own input (e.g. MediaSlider's
		 * wheel/touch-captured hero slide) rather than real page scroll.
		 */
		pinned?: boolean;
		/** Fires once the resting-state background photo has loaded — the turtle sprite only mounts (and shows its own loading state) after this, so the two loading states never overlap. */
		onReady?: () => void;
		/** TEMP debug: reports {phase, effectiveProgress} on every change, so an embedding host (pinned=false) can merge this into its own debug panel instead of getting two separate ones. Remove once done debugging. */
		onDebug?: (info: { phase: string; effectiveProgress: number }) => void;
		/** Background photos + turtle sprite frames — supplied by the host app (see `HeroSlider`); defaults to a generic placeholder set so the sandbox/story keep working standalone. */
		slider?: HeroSlider;
	};

	let {
		progress,
		config = TURTLE_HERO_MORPH_CONFIG,
		pinned = true,
		onReady,
		onDebug,
		slider = HERO_SLIDER
	}: Props = $props();

	let photoLoaded = $state(false);

	$effect(() => {
		if (photoLoaded) onReady?.();
	});

	const scroll = createStickyScrollProgress();
	const motionPreference = createMotionPreferenceState();

	// Explicit `progress` (stories, tests) wins; otherwise driven by real
	// scroll position via createStickyScrollProgress.
	const rawProgress = $derived(progress ?? scroll.progress);

	// Reduced motion: reach the finished logo/booking state over a much
	// shorter effective distance, without depending on any animation (spec §17).
	const effectiveProgress = $derived(
		motionPreference.prefersReducedMotion
			? mapProgress(rawProgress, [
					{ at: 0, value: 0 },
					{ at: 0.25, value: 1 }
				])
			: rawProgress
	);

	// Background scene (TurtleHeroPhotoScene): photos[0] (day, turtle baked
	// in, shown at rest) → photos[1] (dusk) → photos[2] (dramatic sunset),
	// neither of the last two have the turtle anymore — it "detaches" into
	// its own animated sprite (TurtlePhotoToMark, below) the moment
	// scrolling starts. Read positionally from `slider` (see HeroSlider).
	const introPhotoSrc = $derived(slider.photos[0]?.src);
	const introNextPhotoSrc = $derived(slider.photos[1]?.src);
	const introFinalPhotoSrc = $derived(slider.photos[2]?.src);

	const phase = $derived.by(() => {
		const p = config.phases;
		if (effectiveProgress < p.introEnd) return 'intro';
		if (effectiveProgress < p.focusStart) return 'parallax';
		if (effectiveProgress < p.morphStart) return 'focus';
		if (effectiveProgress < p.morphEnd) return 'turtleMorph';
		if (effectiveProgress < p.logoStart) return 'formingMark';
		if (effectiveProgress < p.complete) return 'wordmarkReveal';
		return 'complete';
	});

	$effect(() => {
		onDebug?.({ phase, effectiveProgress });
	});
</script>

{#snippet stage()}
	<TurtleHeroPhotoScene
		progress={effectiveProgress}
		{config}
		photoSrc={introPhotoSrc}
		nextPhotoSrc={introNextPhotoSrc}
		finalPhotoSrc={introFinalPhotoSrc}
		reducedMotion={motionPreference.prefersReducedMotion}
		onPhotoLoad={() => (photoLoaded = true)}
	/>
	{#if photoLoaded}
		<TurtlePhotoToMark
			progress={effectiveProgress}
			{config}
			frames={slider.turtleFrames}
			reducedMotion={motionPreference.prefersReducedMotion}
		/>
	{/if}
	<TurtleHeroWordmark
		progress={effectiveProgress}
		{config}
		reducedMotion={motionPreference.prefersReducedMotion}
	/>

	{#if import.meta.env.DEV && pinned}
		<ScrollPhaseDebug
			progress={effectiveProgress}
			{phase}
			webgl={!motionPreference.prefersReducedMotion}
			reducedMotion={motionPreference.prefersReducedMotion}
		/>
	{/if}
{/snippet}

{#if pinned}
	<section
		class="tc-turtle-hero"
		style:height={`${config.scrollHeightVh}vh`}
		use:scroll.track
		aria-label="ЛанкаТур — экскурсии на Шри-Ланке"
	>
		<div class="tc-turtle-hero__stage">
			{@render stage()}
		</div>
	</section>
{:else}
	<div
		class="tc-turtle-hero__stage tc-turtle-hero__stage--embedded"
		role="group"
		aria-label="ЛанкаТур — экскурсии на Шри-Ланке"
	>
		{@render stage()}
	</div>
{/if}

<style>
	.tc-turtle-hero {
		position: relative;
	}

	.tc-turtle-hero__stage {
		position: sticky;
		top: 0;
		height: 100svh;
		overflow: hidden;
		background: #0b1f1e;
	}

	.tc-turtle-hero__stage--embedded {
		position: absolute;
		inset: 0;
		height: 100%;
	}

</style>
