<script lang="ts">
	import Story from '$stylist/development/svelte/playground/Story.svelte';
	import Stylist from './index.svelte';

	const controls = [
		{ name: 'initialCategory', type: 'select', options: ['architecture', 'theme', 'control', 'development', 'social'], defaultValue: 'architecture' }
	];

	function handleSelectionChange(selection: any) {
		console.log('Selection changed:', selection);
	}
</script>

<Story {controls} component={Stylist} title="Stylist" category="Organisms/Development/Stylist" description="Main Stylist component library browser">
	{#snippet children(values: any)}
		<Stylist initialCategory={values.initialCategory as string} onSelectionChange={handleSelectionChange} />
	{/snippet}
</Story>
