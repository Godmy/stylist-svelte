<script lang="ts">
	import TurtleHeroMorph from '$stylist/travel-commerce/component/organism/turtle-hero-morph/index.svelte';
	import { createMotionPreferenceState } from '$stylist/animation/function/state/motion-preference';
	import type { BookingDraft } from '$stylist/booking/type/object/booking-draft';
	import type { HeroSlider } from '$stylist/travel-commerce/type/object/hero-slider';
	import type { TurtleHeroMorphConfig } from '$stylist/travel-commerce/type/object/turtle-hero-morph-config';

	type Props = {
		onSearch?: (value: BookingDraft) => void;
		/** Called whenever the morph is at rest (progress 0) or has finished at least once — lets the host gate its own nav controls while the morph is genuinely mid-way. */
		setAtRest?: (visible: boolean) => void;
		/** Called once the resting-state assets have loaded (forwarded to MediaSlider's markLoaded, which controls this slide's skeleton). */
		onAssetsLoaded?: () => void;
		/** Forwarded straight to TurtleHeroMorph's own `slider` prop — see there. */
		slider?: HeroSlider;
		/** Forwarded straight to TurtleHeroMorph's own `config` prop — see there. The host app's `hero-slider-animation` preset is the real source for this on the live site. */
		config?: TurtleHeroMorphConfig;
		/** How long the intro autoplay takes end to end (progress 0 → 1), ms. The host app's `hero-slider-animation` preset (`HERO_SLIDER_ANIMATION_TOTAL_MS`) is the real timeline this should come from; this default only applies in the sandbox/story. */
		durationMs?: number;
	};

	let { onSearch, onAssetsLoaded, setAtRest, slider, config, durationMs = 6000 }: Props = $props();

	// TEMP: merged from TurtleHeroMorph's own onDebug so there's one panel
	// instead of two.
	let debugPhase = $state('');
	let debugEffectiveProgress = $state(0);

	const motionPreference = createMotionPreferenceState();

	// This slide has no scrollable height of its own (it lives inside a
	// MediaSlider slide). It used to require the visitor to physically
	// scroll/swipe far enough (a fixed pixel distance) to finish the morph —
	// on mobile that meant repeatedly "rubbing" the screen. It now autoplays
	// on a fixed clock instead; any wheel/touch input before it finishes
	// just skips straight to the end, so an impatient visitor can still bail
	// out without needing precise drag distance.
	let progress = $state(0);

	// One-way latch: once the morph has finished (by the clock or by a
	// skip), this slide permanently stops driving `progress`, handing scroll
	// to the real page — which is what drives MediaSlider's own wave reveal
	// (see media-slider/index.svelte).
	let morphUnlocked = $state(false);
	let assetsLoaded = $state(false);

	// Nav controls (MediaSlider's arrows/indicators) should be usable once
	// this slide is either genuinely at rest OR has already been "graduated"
	// past via the wave — only while actively mid-morph (0 < progress < 1,
	// not yet unlocked) should they stay blocked.
	$effect(() => {
		setAtRest?.(progress <= 0 || morphUnlocked);
	});

	// Drives `progress` from 0 to 1 over `durationMs`, starting once the
	// resting-state photo has loaded. Reduced motion gets a much shorter
	// clock — TurtleHeroMorph's own `effectiveProgress` mapping already
	// visually completes by raw progress 0.25, so waiting the full duration
	// here would just hold nav controls locked for no visual benefit.
	$effect(() => {
		if (!assetsLoaded || morphUnlocked) return;
		const effectiveDuration = motionPreference.prefersReducedMotion ? durationMs * 0.25 : durationMs;
		let start: number | null = null;
		let frame = requestAnimationFrame(function tick(timestamp) {
			if (start === null) start = timestamp;
			progress = Math.min(1, (timestamp - start) / effectiveDuration);
			if (progress < 1) {
				frame = requestAnimationFrame(tick);
			} else {
				morphUnlocked = true;
			}
		});
		return () => cancelAnimationFrame(frame);
	});

	function handleAssetsLoaded() {
		assetsLoaded = true;
		onAssetsLoaded?.();
	}

	// Any deliberate wheel/touch input before the autoplay finishes skips it
	// outright, rather than accumulating distance — no preventDefault, so
	// the same gesture also carries straight into a real page scroll.
	function skip() {
		if (morphUnlocked) return;
		progress = 1;
		morphUnlocked = true;
	}
</script>

<div
	class="tc-turtle-hero-morph-slide"
	role="region"
	aria-label="Turtle hero morph"
	onwheel={skip}
	ontouchstart={skip}
>
	<TurtleHeroMorph
		pinned={false}
		{progress}
		{onSearch}
		{slider}
		{config}
		onReady={handleAssetsLoaded}
		onDebug={({ phase, effectiveProgress }) => {
			debugPhase = phase;
			debugEffectiveProgress = effectiveProgress;
		}}
	/>

	{#if import.meta.env.DEV}
		<div class="tc-turtle-hero-morph-slide__debug" aria-hidden="true">
			<div>phase: {debugPhase}</div>
			<div>effectiveProgress: {debugEffectiveProgress.toFixed(3)}</div>
			<div>slide progress: {progress.toFixed(3)}</div>
			<div>morphUnlocked: {String(morphUnlocked)}</div>
		</div>
	{/if}
</div>

<style>
	.tc-turtle-hero-morph-slide {
		position: absolute;
		inset: 0;
	}

	.tc-turtle-hero-morph-slide__debug {
		position: fixed;
		left: 12px;
		top: 12px;
		z-index: 999;
		display: grid;
		gap: 2px;
		padding: 8px 10px;
		border-radius: 8px;
		background: rgba(10, 16, 14, 0.82);
		color: #ffd166;
		font: 11px/1.4 ui-monospace, 'SFMono-Regular', Menlo, monospace;
		pointer-events: none;
		white-space: nowrap;
	}
</style>
