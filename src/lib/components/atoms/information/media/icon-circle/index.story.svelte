<script lang="ts">
	import IconCircle from './index.svelte';
	import type { Snippet } from 'svelte';

	let icon: Snippet = () => '★';
	let variant: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' = 'primary';
	let size: 'sm' | 'md' | 'lg' = 'md'; // Changed xl to lg since the component only supports sm/md/lg
	let gradient = false;
</script>

<div class="p-4">
	<h1 class="mb-4 text-lg font-semibold">IconCircle</h1>

	<div class="mb-6 flex flex-wrap gap-4">
		<label class="flex items-center gap-2">
			<span class="text-sm">Variant</span>
			<select bind:value={variant} class="rounded border p-1">
				<option value="primary">Primary</option>
				<option value="secondary">Secondary</option>
				<option value="success">Success</option>
				<option value="warning">Warning</option>
				<option value="danger">Danger</option>
				<option value="info">Info</option>
			</select>
		</label>

		<label class="flex items-center gap-2">
			<span class="text-sm">Size</span>
			<select bind:value={size} class="rounded border p-1">
				<option value="sm">Small</option>
				<option value="md">Medium</option>
				<option value="lg">Large</option>
			</select>
		</label>

		<label class="flex items-center gap-2">
			<span class="text-sm">Gradient</span>
			<input type="checkbox" bind:checked={gradient} />
		</label>
	</div>

	<div class="inline-flex items-center rounded border p-4">
		<IconCircle {icon} {variant} {size} {gradient} />
	</div>
</div>
