<script lang="ts">
	import HeroMediaSection from '$stylist/landing/component/molecule/hero-media-section/index.svelte';
	import Paragraph from '$stylist/typography/component/molecule/paragraph/index.svelte';
	import Divider from '$stylist/layout/component/atom/divider/index.svelte';

	let {
		ariaLabel,
		eyebrow,
		title,
		body,
		imageSrc,
		imageAlt,
		class: className = ''
	}: {
		ariaLabel: string;
		eyebrow: string;
		title: string;
		body: string;
		imageSrc: string;
		imageAlt: string;
		class?: string;
	} = $props();
</script>

<section class="intro-section {className}" aria-label={ariaLabel}>
	<Divider class="intro-section__divider" />
	<HeroMediaSection
		class="intro-section__media"
		level={2}
		{eyebrow}
		{title}
		{imageSrc}
		{imageAlt}
	/>
	<Paragraph text={body} class="intro-section__body" />
</section>

<style>
	.intro-section {
		padding: 0 0 5rem;
	}

	:global(.intro-section__divider) {
		margin-bottom: 5rem;
		--color-border-secondary: var(--intro-section-border, currentColor);
	}

	:global(.intro-section__media) {
		--hero-media-section-eyebrow: var(--intro-section-accent, currentColor);
		--hero-media-section-heading: var(--intro-section-heading, currentColor);
		--hero-media-section-border: var(--intro-section-border, currentColor);
		--hero-media-section-media: var(--intro-section-media-bg, transparent);
		--hero-media-section-shadow: var(--intro-section-media-shadow, none);
		--hero-media-section-title-size: clamp(2rem, 4cqw, 3.5rem);
		--hero-media-section-mobile-title-size: 2rem;
	}

	:global(.intro-section__body) {
		margin-top: 2rem;
		max-width: 54rem;
		--typography-color: var(--intro-section-text, currentColor);
	}
</style>
