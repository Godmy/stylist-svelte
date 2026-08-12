<script lang="ts">
	import SectionHeading from '$stylist/landing/component/molecule/section-heading/index.svelte';
	import StepList from '$stylist/landing/component/molecule/step-list/index.svelte';
	import Heading from '$stylist/typography/component/atom/heading/index.svelte';
	import ComparisonTable from '$stylist/table/component/molecule/comparison-table/index.svelte';
	import Image from '$stylist/image/component/atom/image/index.svelte';
	import Divider from '$stylist/layout/component/atom/divider/index.svelte';
	import type { ComparisonTableFeature } from '$stylist/table/type/object/comparison-table-feature';
	import type { ComparisonTableProduct } from '$stylist/table/type/object/comparison-table-product';

	let {
		id,
		ariaLabel,
		eyebrow,
		title,
		steps,
		imageSrc,
		imageAlt,
		comparisonTitle,
		comparisonColumns,
		comparisonCriteria,
		comparisonRows,
		class: className = ''
	}: {
		id?: string;
		ariaLabel: string;
		eyebrow: string;
		title: string;
		steps: string[];
		imageSrc: string;
		imageAlt: string;
		comparisonTitle: string;
		comparisonColumns: [string, string, string];
		comparisonCriteria: string[];
		comparisonRows: [string, string, string][];
		class?: string;
	} = $props();

	const features = $derived<ComparisonTableFeature[]>(
		comparisonCriteria.map((name, index) => ({ id: `criterion-${index}`, name }))
	);
	const products = $derived<ComparisonTableProduct[]>(
		comparisonColumns.map((name, columnIndex) => ({
			id: `column-${columnIndex}`,
			name,
			primary: columnIndex === comparisonColumns.length - 1,
			features: Object.fromEntries(
				comparisonCriteria.map((_, rowIndex) => [
					`criterion-${rowIndex}`,
					comparisonRows[rowIndex][columnIndex]
				])
			)
		}))
	);
</script>

<section {id} class="workflow-section {className}" aria-label={ariaLabel}>
	<Divider class="workflow-section__divider" />
	<SectionHeading {eyebrow} {title} class="workflow-section__heading" />

	<div class="workflow-section__pair">
		<StepList {steps} class="workflow-section__steps" />
		<figure class="workflow-section__media">
			<Image imageSrc={imageSrc} imageAlt={imageAlt} size="xl" class="workflow-section__image" />
		</figure>
	</div>

	<div class="workflow-section__comparison">
		<Heading level={3} text={comparisonTitle} class="workflow-section__comparison-title" />
		<ComparisonTable {features} {products} featureColumnLabel="" showHeader />
	</div>
</section>

<style>
	.workflow-section {
		padding: 0 0 5rem;
	}

	:global(.workflow-section__divider) {
		margin-bottom: 5rem;
		--color-border-secondary: var(--workflow-section-border, currentColor);
	}

	.workflow-section__pair {
		display: grid;
		grid-template-columns: minmax(0, 0.9fr) minmax(24rem, 1.1fr);
		gap: 2rem;
		align-items: start;
		margin-top: 2.5rem;
	}

	.workflow-section__media {
		margin: 0;
		overflow: hidden;
		border: 1px solid var(--workflow-section-border, currentColor);
		border-radius: 0.5rem;
		background: var(--workflow-section-media-bg, transparent);
		box-shadow: var(--workflow-section-media-shadow, none);
		aspect-ratio: 16 / 9;
	}

	:global(.workflow-section__image) {
		display: block;
		width: 100%;
		height: 100%;
		--image-width: 100%;
		--image-height: 100%;
		--image-radius: 0;
		--image-background: transparent;
	}

	:global(.workflow-section__steps) {
		--step-list-text: var(--workflow-section-text, currentColor);
		--step-list-marker-border: var(--workflow-section-marker-border, currentColor);
		--step-list-marker-color: var(--workflow-section-marker-color, currentColor);
	}

	.workflow-section__comparison {
		margin-top: 2.5rem;
	}

	:global(.workflow-section__comparison-title) {
		max-width: 42rem;
		margin: 0 0 1rem;
		--typography-color: var(--workflow-section-heading, currentColor);
	}

	@container (max-width: 920px) {
		.workflow-section__pair {
			grid-template-columns: 1fr;
		}
	}
</style>
