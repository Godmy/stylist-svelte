<script lang="ts">
	import type { RecipePeriodicElementDetailCard } from '$stylist/science/interface/recipe/periodic-element-detail-card';
	import { PERIODIC_ELEMENTS } from '$stylist/science/const/array/periodic-elements';
	import { PERIODIC_ELEMENT_DETAIL } from '$stylist/science/const/record/periodic-element-detail';
	import { PERIODIC_ELEMENT_CATEGORY_ACCENT } from '$stylist/science/const/record/periodic-element-category-accent';
	import { PERIODIC_ELEMENT_LIGHT_INTERACTION } from '$stylist/science/const/record/periodic-element-light-interaction';
	import PeriodicElementSummary from '$stylist/science/component/molecule/periodic-element-summary/index.svelte';
	import PeriodicElementPropertyGrid from '$stylist/science/component/molecule/periodic-element-property-grid/index.svelte';
	import PeriodicElementLightInteraction from '$stylist/science/component/molecule/periodic-element-light-interaction/index.svelte';

	let props: RecipePeriodicElementDetailCard = $props();

	const element = $derived(props.element ?? PERIODIC_ELEMENTS[0]);
	const detail = $derived(
		PERIODIC_ELEMENT_DETAIL[element.symbol] ?? {
			description: `${element.name} is a ${element.category.toLowerCase()} in period ${element.period} and group ${element.group}.`,
			electronConfiguration: 'Not specified',
			discovery: 'Not specified',
			uses: ['Reference data', 'Chemical classification']
		}
	);
	const accent = $derived(PERIODIC_ELEMENT_CATEGORY_ACCENT[element.category] ?? '#777');
	const lightInteraction = $derived(
		PERIODIC_ELEMENT_LIGHT_INTERACTION[element.symbol] ?? {
			spectralSignature: `${element.name} has element-specific electronic transitions that can appear as absorption or emission lines under suitable conditions.`,
			absorptionBehavior: 'Absorption occurs when photon energy matches an available electronic transition.',
			activationBehavior: 'Activation can be produced by heat, electrical discharge, plasma, laser excitation, or chemical environment.',
			photoresponse: 'The observed response depends on atomic state, ionization, pressure, temperature, and surrounding compounds.',
			diagnosticLines: ['No curated lines'],
			applications: ['Spectroscopy', 'Material identification', 'Reference classification']
		}
	);
	const properties = $derived([
		{ label: 'Atomic number', value: element.atomicNumber },
		{ label: 'Atomic mass', value: element.atomicMass },
		{ label: 'Category', value: element.category },
		{ label: 'State', value: element.state },
		{ label: 'Group', value: element.group },
		{ label: 'Period', value: element.period },
		{ label: 'Electron configuration', value: detail.electronConfiguration },
		{ label: 'Electronegativity', value: detail.electronegativity },
		{ label: 'Density', value: detail.density },
		{ label: 'Melting point', value: detail.meltingPoint },
		{ label: 'Boiling point', value: detail.boilingPoint },
		{ label: 'Discovery', value: detail.discovery }
	]);
</script>

<section
	class="c-periodic-element-detail-card {props.class ?? ''}"
	style:--periodic-element-detail-accent={accent}
>
	<header class="c-periodic-element-detail-card__header">
		<div class="c-periodic-element-detail-card__identity">
			<span class="c-periodic-element-detail-card__number">{element.atomicNumber}</span>
			<strong>{element.symbol}</strong>
			<div>
				<p>chemical element</p>
				<h2>{element.name}</h2>
			</div>
		</div>

		<PeriodicElementSummary {element} />
	</header>

	<p class="c-periodic-element-detail-card__description">{detail.description}</p>

	<PeriodicElementPropertyGrid {properties} />

	<div class="c-periodic-element-detail-card__uses">
		<h3>Common uses</h3>
		<div>
			{#each detail.uses as use}
				<span>{use}</span>
			{/each}
		</div>
	</div>

	<PeriodicElementLightInteraction interaction={lightInteraction} />
</section>

<style>
	.c-periodic-element-detail-card {
		display: grid;
		gap: 1rem;
		padding: 1rem;
		border: 1px solid color-mix(in srgb, var(--color-border-primary) 70%, var(--periodic-element-detail-accent));
		border-radius: 0.5rem;
		background:
			linear-gradient(135deg, color-mix(in srgb, var(--color-background-primary) 84%, var(--periodic-element-detail-accent)), transparent 38%),
			var(--color-background-primary);
		color: var(--color-text-primary);
	}

	.c-periodic-element-detail-card__header {
		display: flex;
		align-items: start;
		justify-content: space-between;
		gap: 1rem;
	}

	.c-periodic-element-detail-card__identity {
		display: grid;
		grid-template-columns: auto auto minmax(0, 1fr);
		align-items: center;
		gap: 0.65rem;
		min-width: 0;
	}

	.c-periodic-element-detail-card__identity strong {
		font-size: 3rem;
		line-height: 1;
	}

	.c-periodic-element-detail-card__identity p,
	.c-periodic-element-detail-card__identity h2,
	.c-periodic-element-detail-card__uses h3 {
		margin: 0;
	}

	.c-periodic-element-detail-card__identity p {
		color: var(--color-text-secondary);
		font-family: var(--font-mono, monospace);
		font-size: 0.72rem;
		text-transform: uppercase;
	}

	.c-periodic-element-detail-card__identity h2 {
		font-size: 1.45rem;
		font-weight: 700;
	}

	.c-periodic-element-detail-card__number {
		align-self: start;
		color: var(--color-text-secondary);
		font-family: var(--font-mono, monospace);
		font-size: 0.82rem;
	}

	.c-periodic-element-detail-card__description {
		max-width: 64rem;
		margin: 0;
		color: var(--color-text-secondary);
		font-size: 0.95rem;
		line-height: 1.55;
	}

	.c-periodic-element-detail-card__uses {
		display: grid;
		gap: 0.5rem;
	}

	.c-periodic-element-detail-card__uses h3 {
		font-size: 0.9rem;
		font-weight: 650;
	}

	.c-periodic-element-detail-card__uses div {
		display: flex;
		flex-wrap: wrap;
		gap: 0.4rem;
	}

	.c-periodic-element-detail-card__uses span {
		padding: 0.24rem 0.5rem;
		border: 1px solid color-mix(in srgb, var(--color-border-primary) 70%, var(--periodic-element-detail-accent));
		border-radius: 999px;
		background: color-mix(in srgb, var(--color-background-primary) 88%, var(--periodic-element-detail-accent));
		color: var(--color-text-secondary);
		font-size: 0.74rem;
	}

	@media (max-width: 760px) {
		.c-periodic-element-detail-card__header {
			flex-direction: column;
		}

		.c-periodic-element-detail-card__identity {
			grid-template-columns: auto minmax(0, 1fr);
		}

		.c-periodic-element-detail-card__identity strong {
			font-size: 2.35rem;
		}

		.c-periodic-element-detail-card__identity div {
			grid-column: 1 / -1;
		}
	}
</style>
