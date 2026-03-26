<script lang="ts">
	import { Story } from '$stylist/interaction/playground';
	import type { InterfaceControllerSettings } from '$stylist/interaction/interface/controller-settings';
	import CategoryCard from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'title', type: 'text', defaultValue: 'Interaction' },
		{ name: 'description', type: 'text', defaultValue: 'Controls, overlays, forms, and feedback components.' },
		{ name: 'count', type: 'number', defaultValue: 64, min: 1, max: 300, step: 1 }
	];
</script>

<Story component={CategoryCard} title="CategoryCard" description="Category summary card for component catalogs." {controls}>
	{#snippet children(values: any)}
		<CategoryCard
			title={values.title}
			description={values.description}
			count={values.count}
			link="#"
			icon="folder"
			examples={['Buttons', 'Inputs', 'Tabs']}
		/>
	{/snippet}
</Story>



