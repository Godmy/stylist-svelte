<script lang="ts">
	import AnimatedNumber from './index.svelte';

	let value = 12345;
	let prefix = '';
	let suffix = '';
	let separator = ',';
	let decimals = 0;
</script>

<div class="p-4">
	<h1 class="mb-4 text-lg font-semibold">AnimatedNumber</h1>

	<div class="mb-6 flex flex-wrap gap-4">
		<label class="flex items-center gap-2">
			<span class="text-sm">Value</span>
			<input type="number" bind:value class="w-24 rounded border p-1" />
		</label>

		<label class="flex items-center gap-2">
			<span class="text-sm">Prefix</span>
			<input type="text" bind:value={prefix} class="w-16 rounded border p-1" />
		</label>

		<label class="flex items-center gap-2">
			<span class="text-sm">Suffix</span>
			<input type="text" bind:value={suffix} class="w-16 rounded border p-1" />
		</label>

		<label class="flex items-center gap-2">
			<span class="text-sm">Separator</span>
			<input type="text" bind:value={separator} class="w-12 rounded border p-1" />
		</label>

		<label class="flex items-center gap-2">
			<span class="text-sm">Decimals</span>
			<input type="number" bind:value={decimals} class="w-16 rounded border p-1" />
		</label>
	</div>

	<AnimatedNumber {value} {prefix} {suffix} {separator} {decimals} />
</div>
