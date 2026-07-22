<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import PeriodicElementTable from './index.svelte';
</script>

<Story
	id="organisms-science-periodic-element-table"
	title="Organisms / Science / Periodic Element Table"
	component={PeriodicElementTable}
	category="Organisms/Science"
	description="An interactive periodic table organism for chemical element exploration."
	tags={['science', 'chemistry', 'periodic-table']}
>
	{#snippet children()}
		<PeriodicElementTable />
	{/snippet}
</Story>
