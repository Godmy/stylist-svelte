<script lang="ts">
	import SectionHeading from '$stylist/landing/component/molecule/section-heading/index.svelte';
	import StepList from '$stylist/landing/component/molecule/step-list/index.svelte';

	let {
		id,
		ariaLabel,
		eyebrow,
		title,
		steps,
		imageSrc,
		imageAlt,
		class: className = ''
	}: {
		id?: string;
		ariaLabel: string;
		eyebrow: string;
		title: string;
		steps: string[];
		imageSrc: string;
		imageAlt: string;
		class?: string;
	} = $props();
</script>

<section {id} class="workflow-section {className}" aria-label={ariaLabel}>
	<div class="workflow-section__copy">
		<SectionHeading {eyebrow} {title} />
	</div>
	<figure class="workflow-section__media">
		<img src={imageSrc} alt={imageAlt} loading="lazy" />
	</figure>
	<StepList {steps} class="workflow-section__steps" />
</section>

<style>
	.workflow-section {
		display: grid;
		grid-template-columns: minmax(0, 0.9fr) minmax(24rem, 1.1fr);
		gap: 2rem;
		align-items: start;
		padding: 5rem 0;
		border-top: 1px solid var(--workflow-section-border, currentColor);
	}

	.workflow-section__copy {
		grid-column: 1;
	}

	.workflow-section__media {
		grid-column: 2;
		grid-row: 1 / span 2;
		margin: 0;
		overflow: hidden;
		border: 1px solid var(--workflow-section-border, currentColor);
		border-radius: 0.5rem;
		background: var(--workflow-section-media-bg, transparent);
		box-shadow: var(--workflow-section-media-shadow, none);
		aspect-ratio: 16 / 9;
	}

	.workflow-section__media img {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	:global(.workflow-section__steps) {
		grid-column: 1;
		--step-list-text: var(--workflow-section-text, currentColor);
		--step-list-marker-border: var(--workflow-section-marker-border, currentColor);
		--step-list-marker-color: var(--workflow-section-marker-color, currentColor);
	}

	@container (max-width: 920px) {
		.workflow-section {
			grid-template-columns: 1fr;
		}

		.workflow-section__copy,
		.workflow-section__media,
		:global(.workflow-section__steps) {
			grid-column: auto;
			grid-row: auto;
		}
	}
</style>
