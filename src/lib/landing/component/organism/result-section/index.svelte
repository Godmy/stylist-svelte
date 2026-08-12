<script lang="ts">
	import SectionHeading from '$stylist/landing/component/molecule/section-heading/index.svelte';
	import Paragraph from '$stylist/typography/component/molecule/paragraph/index.svelte';
	import Link from '$stylist/typography/component/atom/link/index.svelte';
	import Image from '$stylist/image/component/atom/image/index.svelte';
	import Divider from '$stylist/layout/component/atom/divider/index.svelte';

	let {
		ariaLabel,
		eyebrow,
		title,
		body,
		cta,
		ctaHref,
		imageSrc,
		imageAlt,
		class: className = ''
	}: {
		ariaLabel: string;
		eyebrow: string;
		title: string;
		body: string;
		cta: string;
		ctaHref: string;
		imageSrc: string;
		imageAlt: string;
		class?: string;
	} = $props();
</script>

<section class="result-section {className}" aria-label={ariaLabel}>
	<Divider class="result-section__divider" />
	<div class="result-section__grid">
		<figure class="result-section__media">
			<Image imageSrc={imageSrc} imageAlt={imageAlt} size="xl" class="result-section__image" />
		</figure>
		<div class="result-section__copy">
			<SectionHeading {eyebrow} {title} />
			<Paragraph text={body} class="result-section__body" />
			<Link href={ctaHref} class="result-section__cta">{cta}</Link>
		</div>
	</div>
</section>

<style>
	.result-section {
		padding: 0 0 6rem;
	}

	:global(.result-section__divider) {
		margin-bottom: 5rem;
		--color-border-secondary: var(--result-section-border, currentColor);
	}

	.result-section__grid {
		display: grid;
		grid-template-columns: minmax(0, 0.9fr) minmax(24rem, 1.1fr);
		gap: 2rem;
		align-items: center;
	}

	.result-section__media {
		margin: 0;
		overflow: hidden;
		border: 1px solid var(--result-section-border, currentColor);
		border-radius: 0.5rem;
		background: var(--result-section-media-bg, transparent);
		box-shadow: var(--result-section-media-shadow, none);
		aspect-ratio: 16 / 9;
	}

	:global(.result-section__image) {
		display: block;
		width: 100%;
		height: 100%;
		--image-width: 100%;
		--image-height: 100%;
		--image-radius: 0;
		--image-background: transparent;
	}

	.result-section__copy {
		max-width: 34rem;
	}

	:global(.result-section__body) {
		--typography-color: var(--result-section-text, currentColor);
	}

	:global(.result-section__cta) {
		margin-top: 1rem;
		min-height: 2.875rem;
		padding: 0 1rem;
		border-radius: 0.375rem;
		font-size: 0.925rem;
		font-weight: 750;
		background: var(--result-section-cta-bg, currentColor);
		--typography-link-color: var(--result-section-cta-text, currentColor);
		--typography-link-hover-color: var(--result-section-cta-text, currentColor);
	}

	@container (max-width: 920px) {
		.result-section__grid {
			grid-template-columns: 1fr;
		}
	}
</style>
