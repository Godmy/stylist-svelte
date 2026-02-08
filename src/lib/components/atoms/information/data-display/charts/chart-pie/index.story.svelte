<script lang="ts">
	import PieChart from './index.svelte';

	const data = [
		{ label: 'A', value: 40, color: '#0ea5e9' },
		{ label: 'B', value: 25, color: '#22c55e' },
		{ label: 'C', value: 20, color: '#f97316' },
		{ label: 'D', value: 15, color: '#a855f7' }
	];
</script>

<div class="p-4">
	<h1 class="mb-4 text-lg font-semibold">PieChart</h1>
	<div class="inline-flex items-center rounded border p-4">
		<PieChart {data} />
	</div>
</div>
