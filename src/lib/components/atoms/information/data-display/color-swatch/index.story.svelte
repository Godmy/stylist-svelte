<script lang="ts">
	import ColorSwatch from './index.svelte';

	let color = '#0ea5e9';
	let size = 32;
</script>

<div class="p-4">
	<h1 class="mb-4 text-lg font-semibold">ColorSwatch</h1>

	<div class="mb-6 flex flex-wrap gap-4">
		<label class="flex items-center gap-2">
			<span class="text-sm">Color</span>
			<input type="text" bind:value={color} class="w-28 rounded border p-1" />
		</label>

		<label class="flex items-center gap-2">
			<span class="text-sm">Size</span>
			<input type="number" bind:value={size} class="w-20 rounded border p-1" />
		</label>
	</div>

	<div class="inline-flex items-center rounded border p-4">
		<ColorSwatch {color} {size} />
	</div>
</div>
