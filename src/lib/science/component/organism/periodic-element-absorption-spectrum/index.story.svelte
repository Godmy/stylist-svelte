<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import { PERIODIC_ELEMENTS } from '$stylist/science/const/array/periodic-elements';
	import PeriodicElementAbsorptionSpectrum from './index.svelte';

	const element = PERIODIC_ELEMENTS.find((item) => item.symbol === 'Na');
</script>

<Story
	id="organisms-science-periodic-element-absorption-spectrum"
	title="Organisms / Science / Periodic Element Absorption Spectrum"
	component={PeriodicElementAbsorptionSpectrum}
	category="Organisms/Science"
	description="Visible absorption spectral lines for a selected chemical element."
	tags={['science', 'chemistry', 'spectrum', 'absorption']}
>
	{#snippet children()}
		<PeriodicElementAbsorptionSpectrum {element} />
	{/snippet}
</Story>
