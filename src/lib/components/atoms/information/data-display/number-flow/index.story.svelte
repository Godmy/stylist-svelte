<script lang="ts">
	import NumberFlow from './index.svelte';

	let value = 12345.67;
	let prefix = '';
	let suffix = '';
	let locales = 'en-US';
</script>

<div class="p-4">
	<h1 class="mb-4 text-lg font-semibold">NumberFlow</h1>

	<div class="mb-6 flex flex-wrap gap-4">
		<label class="flex items-center gap-2">
			<span class="text-sm">Value</span>
			<input type="number" bind:value class="rounded border p-1" />
		</label>

		<label class="flex items-center gap-2">
			<span class="text-sm">Prefix</span>
			<input type="text" bind:value={prefix} class="rounded border p-1" />
		</label>

		<label class="flex items-center gap-2">
			<span class="text-sm">Suffix</span>
			<input type="text" bind:value={suffix} class="rounded border p-1" />
		</label>

		<label class="flex items-center gap-2">
			<span class="text-sm">Locale</span>
			<input type="text" bind:value={locales} class="rounded border p-1" />
		</label>
	</div>

	<div class="rounded border p-4">
		<NumberFlow {value} {prefix} {suffix} {locales} />
	</div>
</div>
