<script lang="ts">
	import TableHeader from './index.svelte';
	import TableRow from '../table-row/index.svelte';
	import TableCell from '../table-cell/index.svelte';
</script>

<div class="p-4">
	<h1 class="mb-4 text-lg font-semibold">TableHeader</h1>
	<table class="min-w-full divide-y divide-gray-200">
		<TableHeader>
			{#snippet content()}
				<TableRow>
					{#snippet content()}
						<TableCell variant="header">Column A</TableCell>
						<TableCell variant="header">Column B</TableCell>
					{/snippet}
				</TableRow>
			{/snippet}
		</TableHeader>
	</table>
</div>
