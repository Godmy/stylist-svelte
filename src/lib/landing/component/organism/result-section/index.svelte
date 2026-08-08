<script lang="ts">
	import SectionHeading from '$stylist/landing/component/molecule/section-heading/index.svelte';
	import Paragraph from '$stylist/typography/component/molecule/paragraph/index.svelte';
	import Link from '$stylist/typography/component/atom/link/index.svelte';

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
	<figure class="result-section__media">
		<img src={imageSrc} alt={imageAlt} loading="lazy" />
	</figure>
	<div class="result-section__copy">
		<SectionHeading {eyebrow} {title} />
		<Paragraph text={body} class="result-section__body" />
		<Link href={ctaHref} class="result-section__cta">{cta}</Link>
	</div>
</section>

<style>
	.result-section {
		display: grid;
		grid-template-columns: minmax(0, 0.9fr) minmax(24rem, 1.1fr);
		gap: 2rem;
		align-items: center;
		padding: 5rem 0 6rem;
		border-top: 1px solid var(--result-section-border, currentColor);
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

	.result-section__media img {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
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
		.result-section {
			grid-template-columns: 1fr;
		}
	}
</style>
