<script lang="ts">
	import DomainLandingHeroPanel from '$stylist/domain/component/molecule/domain-landing-hero-panel/index.svelte';
	import DomainLandingHeroPoint from '$stylist/domain/component/atom/domain-landing-hero-point/index.svelte';
	import DomainLandingMetrics from '$stylist/domain/component/molecule/domain-landing-metrics/index.svelte';

	let {
		rootDomainCount = 0,
		storyModuleCount = 0
	}: {
		rootDomainCount?: number;
		storyModuleCount?: number;
	} = $props();
</script>

<div class="hero-grid">
	<div class="hero-copy">
		<div class="eyebrow-row">
			<span class="eyebrow">Domain workspace</span>
			<span class="eyebrow eyebrow--muted">Explorer hidden</span>
		</div>

		<h1>Keep the whole design system readable, navigable and reviewable.</h1>
		<p class="lead">
			Move through the library as a structured product map instead of a raw filesystem.
			Domains, previews, diagnostics and implementation context stay connected in one workspace.
		</p>

		<div class="hero-points">
			<DomainLandingHeroPoint
				title="Structure before chaos"
				description="Browse the system through domains, clusters, joints and families."
			/>
			<DomainLandingHeroPoint
				title="Faster engineering review"
				description="Inspect code, stories, markdown and JSON without switching tools."
			/>
		</div>
	</div>

	<aside class="hero-aside">
		<DomainLandingHeroPanel />
		<DomainLandingMetrics {rootDomainCount} {storyModuleCount} />
	</aside>
</div>

<style>
	.hero-grid {
		display: grid;
		grid-template-columns: minmax(0, 1.35fr) minmax(18rem, 0.85fr);
		gap: 1.25rem;
		align-items: start;
	}

	.hero-copy {
		display: grid;
		gap: 1rem;
	}

	.eyebrow-row {
		display: flex;
		flex-wrap: wrap;
		gap: 0.6rem;
	}

	.eyebrow {
		display: inline-flex;
		align-items: center;
		padding: 0.38rem 0.7rem;
		border-radius: 999px;
		background: color-mix(in srgb, var(--color-background-secondary) 84%, transparent);
		font-size: 0.72rem;
		font-weight: 700;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: var(--color-text-secondary);
	}

	.eyebrow--muted {
		background: color-mix(in srgb, var(--color-background-secondary) 56%, transparent);
	}

	h1 {
		margin: 0;
		max-width: 12ch;
		font-size: clamp(2.8rem, 5vw, 5rem);
		line-height: 0.9;
		letter-spacing: -0.04em;
	}

	.lead {
		max-width: 42rem;
		margin: 0;
		font-size: 1.05rem;
		line-height: 1.7;
		color: var(--color-text-secondary);
	}

	.hero-points {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 0.85rem;
	}

	.hero-aside {
		display: grid;
		gap: 0.9rem;
	}

	@media (max-width: 900px) {
		.hero-grid,
		.hero-points {
			grid-template-columns: 1fr;
		}
	}
</style>
