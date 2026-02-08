<script lang="ts">
	import Table from './index.svelte';
	import TableHeader from '../table-header/index.svelte';
	import TableBody from '../table-body/index.svelte';
	import TableRow from '../table-row/index.svelte';
	import TableCell from '../table-cell/index.svelte';
</script>

<div class="p-4">
	<h1 class="mb-4 text-lg font-semibold">Table</h1>
	<Table caption="Example table">
		{#snippet content()}
			<TableHeader>
				{#snippet content()}
					<TableRow>
						{#snippet content()}
							<TableCell variant="header">Name</TableCell>
							<TableCell variant="header">Value</TableCell>
						{/snippet}
					</TableRow>
				{/snippet}
			</TableHeader>
			<TableBody>
				{#snippet content()}
					<TableRow striped>
						{#snippet content()}
							<TableCell>Alpha</TableCell>
							<TableCell>123</TableCell>
						{/snippet}
					</TableRow>
					<TableRow striped>
						{#snippet content()}
							<TableCell>Beta</TableCell>
							<TableCell>456</TableCell>
						{/snippet}
					</TableRow>
				{/snippet}
			</TableBody>
		{/snippet}
	</Table>
</div>
