<script lang="ts">
	import Story from '$stylist/development/svelte/playground/Story.svelte';
	import RecipeStylist from './index.svelte';

	const controls = [
		{ name: 'initialCategory', type: 'select', options: ['architecture', 'theme', 'control', 'development', 'social'], defaultValue: 'architecture' }
	];

	function handleSelectionChange(selection: any) {
		console.log('Selection changed:', selection);
	}
</script>

<Story {controls} component={RecipeStylist} title="RecipeStylist" category="Organisms/Development/RecipeStylist" description="Main RecipeStylist component library browser">
	{#snippet children(values: any)}
		<RecipeStylist initialCategory={values.initialCategory as string} onSelectionChange={handleSelectionChange} />
	{/snippet}
</Story>
