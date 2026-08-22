<script lang="ts">
	import Heading from '$stylist/typography/component/atom/heading/index.svelte';
	import Text from '$stylist/typography/component/atom/text/index.svelte';
	import Paragraph from '$stylist/typography/component/molecule/paragraph/index.svelte';
	import Image from '$stylist/image/component/atom/image/index.svelte';

	interface HeroMediaSectionProps {
		eyebrow?: string;
		title: string;
		lead?: string;
		level?: 1 | 2 | 3;
		imageSrc: string;
		imageAlt: string;
		imageLoading?: 'eager' | 'lazy';
		class?: string;
	}

	let {
		eyebrow,
		title,
		lead,
		level = 1,
		imageSrc,
		imageAlt,
		imageLoading = 'lazy',
		class: className = ''
	}: HeroMediaSectionProps = $props();
</script>

<section class="hero-media-section {className}">
	<div class="hero-media-section__top">
		<div class="hero-media-section__copy">
			{#if eyebrow}
				<Text
					text={eyebrow}
					class="hero-media-section__eyebrow"
					fontSize="3"
					fontWeight="extrabold"
					textTransform="uppercase"
					block
				/>
			{/if}
			<Heading {level} text={title} class="hero-media-section__title" />
		</div>
		<figure class="hero-media-section__media">
			<Image {imageSrc} {imageAlt} size="xl" {imageLoading} class="hero-media-section__image" />
		</figure>
	</div>
	{#if lead}
		<div class="hero-media-section__message">
			<Paragraph text={lead} class="hero-media-section__lead" />
		</div>
	{/if}
</section>

<style>
	.hero-media-section {
		display: grid;
		gap: var(--hero-media-section-gap, 2.25rem);
	}

	.hero-media-section__top {
		display: grid;
		grid-template-columns: minmax(0, 0.86fr) minmax(22rem, 1.14fr);
		gap: var(--hero-media-section-gap, 2.25rem);
		align-items: center;
	}

	.hero-media-section__copy {
		max-width: var(--hero-media-section-copy-max-width, 38rem);
	}

	.hero-media-section__message {
		max-width: var(--hero-media-section-message-max-width, 64rem);
	}

	:global(.hero-media-section__eyebrow) {
		margin: 0 0 0.75rem;
		--typography-color: var(--hero-media-section-eyebrow, currentColor);
	}

	:global(.hero-media-section__title) {
		margin: 0 0 1.25rem;
		--typography-color: var(--hero-media-section-heading, currentColor);
		--typography-font-size: var(--hero-media-section-title-size, clamp(2.25rem, 4.8cqw, 4.35rem));
		--typography-line-height: 1.02;
	}

	:global(.hero-media-section__lead) {
		margin: 0;
		--typography-color: var(--hero-media-section-lead, currentColor);
		--typography-font-size: var(--hero-media-section-lead-size, clamp(1.1rem, 1.75cqw, 1.45rem));
		--typography-font-weight: 650;
		--typography-line-height: 1.42;
	}

	.hero-media-section__media {
		aspect-ratio: 16 / 9;
		margin: 0;
		overflow: hidden;
		border: 1px solid var(--hero-media-section-border, currentColor);
		border-radius: 0.5rem;
		background: var(--hero-media-section-media, transparent);
		box-shadow: var(--hero-media-section-shadow, none);
	}

	:global(.hero-media-section__image) {
		display: block;
		width: 100%;
		height: 100%;
		--image-width: 100%;
		--image-height: 100%;
		--image-radius: 0;
		--image-background: transparent;
	}

	@container (max-width: 920px) {
		.hero-media-section__top {
			grid-template-columns: 1fr;
			gap: var(--hero-media-section-mobile-gap, 1.5rem);
		}
	}

	@container (max-width: 680px) {
		:global(.hero-media-section__title) {
			--typography-font-size: var(--hero-media-section-mobile-title-size, 2.35rem);
		}
	}
</style>
