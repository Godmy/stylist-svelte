<script lang="ts">
	import SectionHeading from '$stylist/landing/component/molecule/section-heading/index.svelte';
	import Heading from '$stylist/typography/component/atom/heading/index.svelte';
	import Paragraph from '$stylist/typography/component/molecule/paragraph/index.svelte';
	import ComparisonTable from '$stylist/table/component/molecule/comparison-table/index.svelte';
	import type { ComparisonTableFeature } from '$stylist/table/type/struct/comparison-table-feature';
	import type { ComparisonTableProduct } from '$stylist/table/type/struct/comparison-table-product';

	let {
		id,
		ariaLabel,
		eyebrow,
		title,
		paragraphs,
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
		paragraphs: string[];
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

<section {id} class="definition-section {className}" aria-label={ariaLabel}>
	<SectionHeading {eyebrow} {title} class="definition-section__heading" />
	{#each paragraphs as paragraph}
		<Paragraph text={paragraph} class="definition-section__paragraph" />
	{/each}

	<div class="definition-section__comparison">
		<Heading level={3} text={comparisonTitle} class="definition-section__comparison-title" />
		<ComparisonTable {features} {products} featureColumnLabel="" showHeader />
	</div>
</section>

<style>
	.definition-section {
		padding: 5rem 0;
		border-top: 1px solid var(--definition-section-border, currentColor);
	}

	:global(.definition-section__paragraph) {
		max-width: 54rem;
		margin: 0 0 1rem;
		--typography-color: var(--definition-section-text, currentColor);
	}

	.definition-section__comparison {
		margin-top: 2.5rem;
	}

	:global(.definition-section__comparison-title) {
		max-width: 42rem;
		margin: 0 0 1rem;
		--typography-color: var(--definition-section-heading, currentColor);
	}
</style>
