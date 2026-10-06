<script lang="ts">
	import GlCanvas from '$stylist/webgl/component/atom/gl-canvas/index.svelte';
	import type { HeroScene } from '$stylist/travel-commerce/type/object/hero-scene';
	import { HERO_SCENES } from '$stylist/travel-commerce/const/preset/hero-scene';
	import VideoScene from '$stylist/video/component/molecule/video-scene/index.svelte';

	type Props = {
		scenes?: HeroScene[];
		progress?: number;
		height?: string;
	};

	let { scenes = HERO_SCENES, progress = 0, height = 'min(760px, 100svh)' }: Props = $props();

	const clampedProgress = $derived(Math.min(Math.max(progress, 0), 1));
	const activeIndex = $derived(
		Math.min(scenes.length - 1, Math.floor(clampedProgress * scenes.length))
	);
	const localProgress = $derived(clampedProgress * scenes.length - activeIndex);
	const activeScene = $derived(scenes[activeIndex] ?? scenes[0]);
	const nextScene = $derived(scenes[Math.min(activeIndex + 1, scenes.length - 1)] ?? activeScene);

	function colorToRgb(color: string | undefined) {
		const fallback = [0.12, 0.38, 0.4];
		if (!color || !color.startsWith('#') || color.length < 7) return fallback;
		return [
			parseInt(color.slice(1, 3), 16) / 255,
			parseInt(color.slice(3, 5), 16) / 255,
			parseInt(color.slice(5, 7), 16) / 255
		];
	}

	function frame(gl: WebGL2RenderingContext, timeMs: number) {
		const rgb = colorToRgb(activeScene?.accent);
		const pulse = 0.035 * Math.sin(timeMs / 1800);
		gl.clearColor(rgb[0] * 0.28 + pulse, rgb[1] * 0.34 + pulse, rgb[2] * 0.38 + pulse, 1);
		gl.clear(gl.COLOR_BUFFER_BIT);
	}
</script>

<section class="tc-hero-scene" style:--tc-hero-height={height} style:--tc-scene-progress={localProgress}>
	<div class="tc-hero-scene__gl" aria-hidden="true">
		<GlCanvas {frame} />
	</div>

	<div class="tc-hero-scene__media" aria-hidden="true">
		{#each scenes as scene, index (scene.id)}
			<div
				class="tc-hero-scene__panel"
				data-active={index === activeIndex || index === activeIndex + 1 || undefined}
				style:opacity={index === activeIndex ? 1 - localProgress * 0.45 : index === activeIndex + 1 ? localProgress : 0}
			>
				{#if scene.mediaType === 'video'}
					<VideoScene src={scene.src} poster={scene.poster} label={scene.alt} active={index === activeIndex} />
				{:else}
					<img src={scene.src} alt="" loading={index < 2 ? 'eager' : 'lazy'} />
				{/if}
			</div>
		{/each}
	</div>

	<div class="tc-hero-scene__shade" aria-hidden="true"></div>

	<div class="tc-hero-scene__content">
		<p class="tc-hero-scene__kicker">{activeScene?.kicker}</p>
		<h1>{activeScene?.title}</h1>
		<p>{activeScene?.description}</p>
		<div class="tc-hero-scene__rail" aria-label="Сцены путешествия">
			{#each scenes as scene, index (scene.id)}
				<span data-active={index === activeIndex || undefined}>{scene.title}</span>
			{/each}
		</div>
	</div>

	<div class="tc-hero-scene__next" aria-hidden="true">{nextScene?.title}</div>
</section>

<style>
	.tc-hero-scene {
		position: relative;
		min-height: var(--tc-hero-height);
		overflow: hidden;
		isolation: isolate;
		background: #0e1714;
		color: white;
	}

	.tc-hero-scene__gl,
	.tc-hero-scene__media,
	.tc-hero-scene__shade,
	.tc-hero-scene__panel {
		position: absolute;
		inset: 0;
	}

	.tc-hero-scene__gl {
		z-index: 0;
		opacity: 0.72;
		mix-blend-mode: screen;
	}

	.tc-hero-scene__media {
		z-index: 1;
	}

	.tc-hero-scene__panel {
		transition: opacity 520ms ease;
		will-change: opacity;
	}

	.tc-hero-scene__panel img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
		transform: scale(calc(1.04 + var(--tc-scene-progress) * 0.035));
		transition: transform 600ms ease;
	}

	.tc-hero-scene__shade {
		z-index: 2;
		background:
			linear-gradient(90deg, rgba(0, 0, 0, 0.62), rgba(0, 0, 0, 0.18)),
			linear-gradient(0deg, rgba(0, 0, 0, 0.46), transparent 48%);
	}

	.tc-hero-scene__content {
		position: relative;
		z-index: 3;
		display: grid;
		align-content: center;
		min-height: var(--tc-hero-height);
		width: var(--page-width, min(1180px, calc(100% - 32px)));
		margin: 0 auto;
		padding: 80px 0 118px;
	}

	.tc-hero-scene__kicker {
		margin: 0 0 16px;
		font-size: 0.9rem;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		opacity: 0.82;
	}

	.tc-hero-scene h1 {
		max-width: 780px;
		margin: 0;
		font-size: clamp(3rem, 8vw, 7.5rem);
		line-height: 0.94;
		letter-spacing: 0;
	}

	.tc-hero-scene__content > p:not(.tc-hero-scene__kicker) {
		max-width: 560px;
		margin: 24px 0 0;
		font-size: clamp(1rem, 2vw, 1.35rem);
		line-height: 1.55;
		opacity: 0.86;
	}

	.tc-hero-scene__rail {
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
		margin-top: 38px;
	}

	.tc-hero-scene__rail span {
		border: 1px solid rgba(255, 255, 255, 0.22);
		border-radius: 999px;
		padding: 8px 12px;
		font-size: 0.82rem;
		background: rgba(255, 255, 255, 0.08);
		opacity: 0.68;
	}

	.tc-hero-scene__rail span[data-active] {
		opacity: 1;
		background: rgba(255, 255, 255, 0.2);
	}

	.tc-hero-scene__next {
		position: absolute;
		right: 32px;
		bottom: 28px;
		z-index: 3;
		max-width: 280px;
		text-align: right;
		opacity: 0.7;
	}

	@media (max-width: 720px) {
		.tc-hero-scene__content {
			padding: 72px 0 96px;
		}

		.tc-hero-scene__next {
			display: none;
		}
	}

	@container (max-width: 720px) {
		.tc-hero-scene__content {
			padding: 72px 0 96px;
		}

		.tc-hero-scene__next {
			display: none;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.tc-hero-scene__panel,
		.tc-hero-scene__panel img {
			transition: none;
			transform: none;
		}
	}
</style>
