<script lang="ts">
	import Favicon from './index.svelte';

	let url = 'https://example.com';
	let size = 24;
</script>

<div class="p-4">
	<h1 class="mb-4 text-lg font-semibold">Favicon</h1>

	<div class="mb-6 flex flex-wrap gap-4">
		<label class="flex items-center gap-2">
			<span class="text-sm">URL</span>
			<input type="text" bind:value={url} class="w-64 rounded border p-1" />
		</label>

		<label class="flex items-center gap-2">
			<span class="text-sm">Size</span>
			<input type="number" bind:value={size} class="w-20 rounded border p-1" />
		</label>
	</div>

	<div class="inline-flex items-center rounded border p-4">
		<Favicon {url} {size} />
	</div>
</div>
