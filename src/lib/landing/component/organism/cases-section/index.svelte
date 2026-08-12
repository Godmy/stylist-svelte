<script lang="ts">
	import SectionHeading from '$stylist/landing/component/molecule/section-heading/index.svelte';
	import Card from '$stylist/layout/component/molecule/card/index.svelte';
	import Heading from '$stylist/typography/component/atom/heading/index.svelte';
	import Text from '$stylist/typography/component/atom/text/index.svelte';
	import Paragraph from '$stylist/typography/component/molecule/paragraph/index.svelte';
	import Image from '$stylist/image/component/atom/image/index.svelte';

	interface CaseItem {
		kicker: string;
		title: string;
		body: string;
		result: string;
		image: string;
		alt: string;
	}

	let {
		id,
		ariaLabel,
		eyebrow,
		title,
		items,
		class: className = ''
	}: {
		id?: string;
		ariaLabel: string;
		eyebrow: string;
		title: string;
		items: CaseItem[];
		class?: string;
	} = $props();
</script>

<section {id} class="cases-section {className}" aria-label={ariaLabel}>
	<SectionHeading {eyebrow} {title} />

	<div class="cases-section__grid">
		{#each items as item, index}
			<Card
				class="cases-section__card {index < 2 ? 'cases-section__card--wide' : ''}"
				shape="rounded"
				size="lg"
			>
				{#snippet media()}
					<Image imageSrc={item.image} imageAlt={item.alt} size="xl" class="cases-section__image" />
				{/snippet}
				<Text
					text={item.kicker}
					class="cases-section__kicker"
					fontSize="3"
					fontWeight="extrabold"
					textTransform="uppercase"
					block
				/>
				<Heading level={3} text={item.title} class="cases-section__title" />
				<Paragraph text={item.body} class="cases-section__body" />
				<Text text={item.result} class="cases-section__result" block />
			</Card>
		{/each}
	</div>
</section>

<style>
	.cases-section {
		padding: 4rem 0 5rem;
	}

	.cases-section__grid {
		display: grid;
		grid-template-columns: repeat(6, minmax(0, 1fr));
		gap: 1rem;
		margin-top: 2rem;
	}

	:global(.cases-section__card) {
		grid-column: span 2;
		border-color: var(--cases-section-border, currentColor);
		background: var(--cases-section-panel-bg, transparent);
	}

	:global(.cases-section__card--wide) {
		grid-column: span 3;
	}

	:global(.cases-section__image) {
		display: block;
		width: 100%;
		aspect-ratio: 16 / 9;
		--image-width: 100%;
		--image-height: 100%;
		--image-radius: 0;
		--image-background: transparent;
		border-bottom: 1px solid var(--cases-section-border, currentColor);
	}

	:global(.cases-section__kicker) {
		--typography-color: var(--cases-section-accent, currentColor);
	}

	:global(.cases-section__title) {
		margin: 0;
		--typography-color: var(--cases-section-heading, currentColor);
	}

	:global(.cases-section__body) {
		--typography-color: var(--cases-section-text, currentColor);
	}

	:global(.cases-section__result) {
		display: block;
		margin-top: 0.25rem;
		--typography-color: var(--cases-section-result, currentColor);
		--typography-font-weight: 700;
		font-size: 0.93rem;
		line-height: 1.5;
	}

	@container (max-width: 920px) {
		:global(.cases-section__card),
		:global(.cases-section__card--wide) {
			grid-column: span 3;
		}
	}

	@container (max-width: 680px) {
		.cases-section__grid {
			grid-template-columns: 1fr;
		}

		:global(.cases-section__card),
		:global(.cases-section__card--wide) {
			grid-column: auto;
		}
	}
</style>
