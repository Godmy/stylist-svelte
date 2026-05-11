<script lang="ts">
	import DomainLandingFeatureGrid from '$stylist/domain/component/molecule/domain-landing-feature-grid/index.svelte';
	import DomainLandingHero from '$stylist/domain/component/molecule/domain-landing-hero/index.svelte';
	import type { TypeDomainLandingProps } from '$stylist/domain/type/struct/domain-landing-props';

	let {
		rootDomainCount = 0,
		storyModuleCount = 0,
		class: className = ''
	}: TypeDomainLandingProps = $props();
</script>

<section class="c-domain-landing {className}" aria-label="Domain landing">
	<div class="landing-surface">
		<DomainLandingHero {rootDomainCount} {storyModuleCount} />
		<DomainLandingFeatureGrid />
	</div>
</section>

<style>
	.c-domain-landing {
		min-height: 100vh;
		display: grid;
		place-items: center;
		padding: clamp(1.5rem, 3vw, 3rem);
		background:
			radial-gradient(
				circle at top left,
				color-mix(in srgb, var(--color-primary-500) 18%, transparent),
				transparent 34%
			),
			radial-gradient(circle at 78% 16%, rgba(249, 115, 22, 0.16), transparent 20%),
			radial-gradient(
				circle at bottom right,
				color-mix(in srgb, var(--color-primary-400) 12%, transparent),
				transparent 30%
			),
			linear-gradient(
				160deg,
				color-mix(in srgb, var(--color-background-primary) 97%, white 3%),
				color-mix(
					in srgb,
					var(--color-background-primary) 84%,
					var(--color-background-secondary) 16%
				)
			);
	}

	.landing-surface {
		width: min(64rem, 100%);
		display: grid;
		gap: 1.75rem;
		padding: clamp(1.5rem, 2.3vw, 2.6rem);
		border: 1px solid color-mix(in srgb, var(--color-border-primary) 82%, transparent);
		border-radius: 32px;
		background: linear-gradient(
			180deg,
			color-mix(in srgb, var(--color-background-primary) 95%, white 5%),
			color-mix(in srgb, var(--color-background-primary) 88%, var(--color-background-secondary) 12%)
		);
		box-shadow:
			0 28px 80px rgba(15, 23, 42, 0.12),
			inset 0 1px 0 rgba(255, 255, 255, 0.5);
	}

	@media (max-width: 840px) {
		.c-domain-landing {
			min-height: auto;
			padding-top: 1rem;
		}
	}
</style>
