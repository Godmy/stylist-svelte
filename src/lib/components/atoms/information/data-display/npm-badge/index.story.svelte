<script lang="ts">
	import NPMBadge from './index.svelte';

	let type: 'version' | 'downloads' | 'license' | 'size' | 'custom' = 'version';
	let value = '1.0.0';
	let label = '';
	let link = '';
</script>

<div class="p-4">
	<h1 class="mb-4 text-lg font-semibold">NPMBadge</h1>

	<div class="mb-6 flex flex-wrap gap-4">
		<label class="flex items-center gap-2">
			<span class="text-sm">Type</span>
			<select bind:value={type} class="rounded border p-1">
				<option value="version">Version</option>
				<option value="downloads">Downloads</option>
				<option value="license">License</option>
				<option value="size">Size</option>
				<option value="custom">Custom</option>
			</select>
		</label>

		<label class="flex items-center gap-2">
			<span class="text-sm">Value</span>
			<input type="text" bind:value class="rounded border p-1" />
		</label>

		<label class="flex items-center gap-2">
			<span class="text-sm">Label</span>
			<input type="text" bind:value={label} class="rounded border p-1" />
		</label>

		<label class="flex items-center gap-2">
			<span class="text-sm">Link</span>
			<input type="text" bind:value={link} class="rounded border p-1" />
		</label>
	</div>

	<div class="rounded border p-4">
		<NPMBadge {type} {value} {label} {link} />
	</div>
</div>
