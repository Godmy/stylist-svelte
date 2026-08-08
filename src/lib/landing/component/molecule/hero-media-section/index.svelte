<script lang="ts">
	interface HeroMediaSectionProps {
		title: string;
		lead: string;
		imageSrc: string;
		imageAlt: string;
		class?: string;
	}

	let {
		title,
		lead,
		imageSrc,
		imageAlt,
		class: className = ''
	}: HeroMediaSectionProps = $props();
</script>

<section class="hero-media-section {className}">
	<div class="hero-media-section__copy">
		<h1>{title}</h1>
		<p>{lead}</p>
	</div>
	<figure class="hero-media-section__media">
		<img src={imageSrc} alt={imageAlt} />
	</figure>
</section>

<style>
	.hero-media-section {
		display: grid;
		grid-template-columns: minmax(0, 0.86fr) minmax(22rem, 1.14fr);
		gap: var(--hero-media-section-gap, 2.25rem);
		align-items: center;
	}

	.hero-media-section__copy {
		max-width: var(--hero-media-section-copy-max-width, 38rem);
	}

	.hero-media-section h1,
	.hero-media-section p {
		margin-top: 0;
	}

	.hero-media-section h1 {
		margin-bottom: 1.25rem;
		color: var(--hero-media-section-heading, currentColor);
		font-size: var(--hero-media-section-title-size, clamp(2.25rem, 4.8cqw, 4.35rem));
		line-height: 1.02;
		letter-spacing: 0;
	}

	.hero-media-section p {
		margin-bottom: 0;
		color: var(--hero-media-section-lead, currentColor);
		font-size: var(--hero-media-section-lead-size, clamp(1.1rem, 1.75cqw, 1.45rem));
		font-weight: 650;
		line-height: 1.42;
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

	.hero-media-section__media img {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	@container (max-width: 920px) {
		.hero-media-section {
			grid-template-columns: 1fr;
			gap: var(--hero-media-section-mobile-gap, 1.5rem);
		}
	}

	@container (max-width: 680px) {
		.hero-media-section h1 {
			font-size: var(--hero-media-section-mobile-title-size, 2.35rem);
		}
	}
</style>
