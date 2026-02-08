<script lang="ts">
	import CountryFlag from './index.svelte';

	let countryCode = 'US';
	let size = 24;
</script>

<div class="p-4">
	<h1 class="mb-4 text-lg font-semibold">CountryFlag</h1>

	<div class="mb-6 flex flex-wrap gap-4">
		<label class="flex items-center gap-2">
			<span class="text-sm">Country code</span>
			<input type="text" bind:value={countryCode} class="w-16 rounded border p-1" />
		</label>

		<label class="flex items-center gap-2">
			<span class="text-sm">Size</span>
			<input type="number" bind:value={size} class="w-20 rounded border p-1" />
		</label>
	</div>

	<div class="inline-flex items-center rounded border p-4">
		<CountryFlag {countryCode} {size} />
	</div>
</div>
