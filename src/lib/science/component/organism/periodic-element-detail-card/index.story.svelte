<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import { PERIODIC_ELEMENTS } from '$stylist/science/const/array/periodic-elements';
	import PeriodicElementDetailCard from './index.svelte';

	const element = PERIODIC_ELEMENTS.find((item) => item.symbol === 'Fe');
</script>

<Story
	id="organisms-science-periodic-element-detail-card"
	title="Organisms / Science / Periodic Element Detail Card"
	component={PeriodicElementDetailCard}
	category="Organisms/Science"
	description="A large detail card for the selected chemical element."
	tags={['science', 'chemistry', 'details', 'periodic-table']}
>
	{#snippet children()}
		<PeriodicElementDetailCard {element} />
	{/snippet}
</Story>
