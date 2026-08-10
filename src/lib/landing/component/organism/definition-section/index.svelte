<script lang="ts">
	import HeroMediaSection from '$stylist/landing/component/molecule/hero-media-section/index.svelte';
	import Paragraph from '$stylist/typography/component/molecule/paragraph/index.svelte';

	let {
		id,
		ariaLabel,
		eyebrow,
		title,
		body,
		statement,
		imageSrc,
		imageAlt,
		class: className = ''
	}: {
		id?: string;
		ariaLabel: string;
		eyebrow: string;
		title: string;
		body: string;
		statement: string;
		imageSrc: string;
		imageAlt: string;
		class?: string;
	} = $props();
</script>

<section {id} class="definition-section {className}" aria-label={ariaLabel}>
	<HeroMediaSection
		class="definition-section__media"
		level={2}
		{eyebrow}
		{title}
		{imageSrc}
		{imageAlt}
	/>
	<Paragraph text={body} class="definition-section__body" />
	<Paragraph text={statement} class="definition-section__statement" />
</section>

<style>
	.definition-section {
		padding: 5rem 0;
		border-top: 1px solid var(--definition-section-border, currentColor);
	}

	:global(.definition-section__media) {
		--hero-media-section-eyebrow: var(--definition-section-accent, currentColor);
		--hero-media-section-heading: var(--definition-section-heading, currentColor);
		--hero-media-section-border: var(--definition-section-border, currentColor);
		--hero-media-section-media: var(--definition-section-media-bg, transparent);
		--hero-media-section-shadow: var(--definition-section-media-shadow, none);
		--hero-media-section-title-size: clamp(2rem, 4cqw, 3.5rem);
		--hero-media-section-mobile-title-size: 2rem;
	}

	:global(.definition-section__body) {
		margin-top: 2rem;
		max-width: 54rem;
		--typography-color: var(--definition-section-text, currentColor);
	}

	:global(.definition-section__statement) {
		margin-top: 1rem;
		max-width: 54rem;
		--typography-color: var(--definition-section-heading, currentColor);
		--typography-font-weight: 700;
	}
</style>
