<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import FilterPanel from './index.svelte';

	const controls = [
		{
			name: 'showObjects',
			type: 'boolean' as const,
			defaultValue: true,
			description: 'Show object nodes'
		},
		{
			name: 'showInterfaces',
			type: 'boolean' as const,
			defaultValue: true,
			description: 'Show interface nodes'
		},
		{
			name: 'showEnums',
			type: 'boolean' as const,
			defaultValue: true,
			description: 'Show enum nodes'
		}
	];

	function handleFilterChange(payload: unknown) {
		console.log('Filter panel changed:', payload);
	}

	function handleReset() {
		console.log('Filter panel reset');
	}
</script>

<Story
	{controls}
	title="Filter Panel"
	description="Filter controls for graph node visibility and layout selection."
>
	{#snippet children(values: any)}
		<FilterPanel
			showObjects={values.showObjects}
			showInterfaces={values.showInterfaces}
			showEnums={values.showEnums}
			onFilterChange={handleFilterChange}
			onReset={handleReset}
		/>
	{/snippet}
</Story>
