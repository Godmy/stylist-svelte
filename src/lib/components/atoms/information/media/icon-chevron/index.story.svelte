<script lang="ts">
	import IconChevron from './index.svelte';

	let isOpen = false;
	let size: 'sm' | 'md' | 'lg' = 'md';
</script>

<div class="p-4">
	<h1 class="mb-4 text-lg font-semibold">IconChevron</h1>

	<div class="mb-6 flex flex-wrap items-center gap-4">
		<label class="flex items-center gap-2">
			<span class="text-sm">Open</span>
			<input type="checkbox" bind:checked={isOpen} />
		</label>

		<label class="flex items-center gap-2">
			<span class="text-sm">Size</span>
			<select bind:value={size} class="rounded border p-1">
				<option value="sm">Small</option>
				<option value="md">Medium</option>
				<option value="lg">Large</option>
			</select>
		</label>
	</div>

	<div class="inline-flex items-center rounded border p-4">
		<IconChevron {isOpen} {size} />
	</div>
</div>
