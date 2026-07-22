<script lang="ts">
	import type { RecipePeriodicElementAbsorptionSpectrum } from '$stylist/science/interface/recipe/periodic-element-absorption-spectrum';
	import { ELEMENT_ABSORPTION_SPECTRAL_LINES } from '$stylist/science/const/record/element-absorption-spectral-lines';
	import { PERIODIC_ELEMENTS } from '$stylist/science/const/array/periodic-elements';
	import PeriodicElementSummary from '$stylist/science/component/molecule/periodic-element-summary/index.svelte';
	import AbsorptionSpectrumBand from '$stylist/science/component/molecule/absorption-spectrum-band/index.svelte';

	let props: RecipePeriodicElementAbsorptionSpectrum = $props();

	const element = $derived(props.element ?? PERIODIC_ELEMENTS[0]);
	const minWavelength = $derived(props.minWavelength ?? 380);
	const maxWavelength = $derived(props.maxWavelength ?? 700);
	const fallbackLines = $derived([
		{
			wavelength: 390 + ((element.atomicNumber * 37) % 280),
			intensity: 0.48,
			label: `${element.symbol} model`
		},
		{
			wavelength: 410 + ((element.atomicNumber * 53) % 250),
			intensity: 0.68,
			label: `${element.symbol} model`
		},
		{
			wavelength: 430 + ((element.atomicNumber * 71) % 230),
			intensity: 0.86,
			label: `${element.symbol} model`
		}
	]);
	const lines = $derived(
		ELEMENT_ABSORPTION_SPECTRAL_LINES[element.symbol as keyof typeof ELEMENT_ABSORPTION_SPECTRAL_LINES] ?? fallbackLines
	);
</script>

<section class="c-periodic-element-absorption-spectrum {props.class ?? ''}">
	<header class="c-periodic-element-absorption-spectrum__header">
		<div>
			<p class="c-periodic-element-absorption-spectrum__eyebrow">absorption</p>
			<h2 class="c-periodic-element-absorption-spectrum__title">Spectral lines</h2>
		</div>

		<PeriodicElementSummary {element} />
	</header>

	<AbsorptionSpectrumBand {lines} {minWavelength} {maxWavelength} />

	<div class="c-periodic-element-absorption-spectrum__lines">
		{#each lines as line}
			<span>{line.label} - {line.wavelength} nm</span>
		{/each}
	</div>
</section>

<style>
	.c-periodic-element-absorption-spectrum {
		display: grid;
		gap: 0.75rem;
		color: var(--color-text-primary);
	}

	.c-periodic-element-absorption-spectrum__header {
		display: flex;
		align-items: end;
		justify-content: space-between;
		gap: 1rem;
	}

	.c-periodic-element-absorption-spectrum__eyebrow,
	.c-periodic-element-absorption-spectrum__title {
		margin: 0;
	}

	.c-periodic-element-absorption-spectrum__eyebrow {
		color: var(--color-text-secondary);
		font-family: var(--font-mono, monospace);
		font-size: 0.72rem;
		text-transform: uppercase;
	}

	.c-periodic-element-absorption-spectrum__title {
		font-size: 1.1rem;
		font-weight: 650;
	}

	.c-periodic-element-absorption-spectrum__lines {
		display: flex;
		flex-wrap: wrap;
		gap: 0.35rem;
	}

	.c-periodic-element-absorption-spectrum__lines span {
		padding: 0.22rem 0.45rem;
		border: 1px solid var(--color-border-primary);
		border-radius: 999px;
		color: var(--color-text-secondary);
		font-family: var(--font-mono, monospace);
		font-size: 0.68rem;
	}

	@media (max-width: 720px) {
		.c-periodic-element-absorption-spectrum__header {
			align-items: stretch;
			flex-direction: column;
		}
	}
</style>
