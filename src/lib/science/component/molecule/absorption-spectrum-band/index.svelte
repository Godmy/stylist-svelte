<script lang="ts">
	import type { RecipeAbsorptionSpectrumBand } from '$stylist/science/interface/recipe/absorption-spectrum-band';
	import SpectralAbsorptionLine from '$stylist/science/component/atom/spectral-absorption-line/index.svelte';

	let props: RecipeAbsorptionSpectrumBand = $props();

	const minWavelength = $derived(props.minWavelength ?? 380);
	const maxWavelength = $derived(props.maxWavelength ?? 700);
</script>

<div class="c-absorption-spectrum-band {props.class ?? ''}">
	<div class="c-absorption-spectrum-band__track" role="img" aria-label="Visible absorption spectrum">
		{#each props.lines as line}
			<SpectralAbsorptionLine {line} {minWavelength} {maxWavelength} />
		{/each}
	</div>

	<div class="c-absorption-spectrum-band__axis" aria-hidden="true">
		<span>{minWavelength} nm</span>
		<span>{Math.round((minWavelength + maxWavelength) / 2)} nm</span>
		<span>{maxWavelength} nm</span>
	</div>
</div>

<style>
	.c-absorption-spectrum-band {
		display: grid;
		gap: 0.45rem;
	}

	.c-absorption-spectrum-band__track {
		position: relative;
		height: 4.5rem;
		overflow: hidden;
		border: 1px solid var(--color-border-primary);
		border-radius: 0.375rem;
		background: linear-gradient(
			90deg,
			#3f1d8a 0%,
			#2657c8 18%,
			#138c95 34%,
			#3d9b46 48%,
			#d8c742 64%,
			#d0792f 80%,
			#9f2f2f 100%
		);
	}

	.c-absorption-spectrum-band__track::after {
		position: absolute;
		inset: 0;
		content: '';
		background: linear-gradient(180deg, rgb(255 255 255 / 0.18), rgb(0 0 0 / 0.18));
		pointer-events: none;
	}

	.c-absorption-spectrum-band__axis {
		display: flex;
		justify-content: space-between;
		color: var(--color-text-secondary);
		font-family: var(--font-mono, monospace);
		font-size: 0.68rem;
	}
</style>
