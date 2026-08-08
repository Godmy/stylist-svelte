<script lang="ts">
	import SectionHeading from '$stylist/landing/component/molecule/section-heading/index.svelte';
	import Paragraph from '$stylist/typography/component/molecule/paragraph/index.svelte';

	let {
		ariaLabel,
		eyebrow,
		title,
		body,
		class: className = ''
	}: {
		ariaLabel: string;
		eyebrow: string;
		title: string;
		body: string;
		class?: string;
	} = $props();
</script>

<section class="intro-section {className}" aria-label={ariaLabel}>
	<SectionHeading {eyebrow} {title} />
	<Paragraph text={body} class="intro-section__body" />
</section>

<style>
	.intro-section {
		display: grid;
		grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
		gap: 2rem;
		padding: 5rem 0;
		border-top: 1px solid var(--intro-section-border, currentColor);
	}

	:global(.intro-section__body) {
		--typography-color: var(--intro-section-text, currentColor);
	}

	@container (max-width: 920px) {
		.intro-section {
			grid-template-columns: 1fr;
		}
	}
</style>
