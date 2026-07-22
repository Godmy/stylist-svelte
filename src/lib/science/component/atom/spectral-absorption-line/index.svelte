<script lang="ts">
	import type { RecipeSpectralAbsorptionLine } from '$stylist/science/interface/recipe/spectral-absorption-line';

	let props: RecipeSpectralAbsorptionLine = $props();

	const minWavelength = $derived(props.minWavelength ?? 380);
	const maxWavelength = $derived(props.maxWavelength ?? 700);
	const span = $derived(Math.max(maxWavelength - minWavelength, 1));
	const position = $derived(((props.line.wavelength - minWavelength) / span) * 100);
	const width = $derived(Math.max(1, Math.round(props.line.intensity * 5)));
	const opacity = $derived(Math.min(Math.max(0.35 + props.line.intensity * 0.55, 0.35), 0.95));
</script>

<span
	class="c-spectral-absorption-line {props.class ?? ''}"
	style:left={`${position}%`}
	style:width={`${width}px`}
	style:opacity={opacity}
	title={`${props.line.label}: ${props.line.wavelength} nm`}
	aria-label={`${props.line.label}, ${props.line.wavelength} nanometers`}
></span>

<style>
	.c-spectral-absorption-line {
		position: absolute;
		top: 0;
		bottom: 0;
		display: block;
		border-radius: 999px;
		background: #080808;
		box-shadow: 0 0 0 1px rgb(255 255 255 / 0.08);
		transform: translateX(-50%);
	}
</style>
