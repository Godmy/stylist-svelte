<script lang="ts">
	import IconWrapper from './index.svelte';

	let size: 'sm' | 'md' | 'lg' = 'md';
	let variant: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'default' | 'neutral' | 'dark' | 'light' = 'primary';
	let shape: 'circle' | 'square' | 'rounded' = 'circle';
	let color: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' = 'primary';
</script>

<div class="p-4">
	<h1 class="mb-4 text-lg font-semibold">IconWrapper</h1>

	<div class="mb-6 flex flex-wrap items-center gap-4">
		<label class="flex items-center gap-2">
			<span class="text-sm">Size</span>
			<select bind:value={size} class="rounded border p-1">
				<option value="sm">Small</option>
				<option value="md">Medium</option>
				<option value="lg">Large</option>
			</select>
		</label>

		<label class="flex items-center gap-2">
			<span class="text-sm">Variant</span>
			<select bind:value={variant} class="rounded border p-1">
				<option value="primary">Primary</option>
				<option value="secondary">Secondary</option>
				<option value="success">Success</option>
				<option value="warning">Warning</option>
				<option value="danger">Danger</option>
				<option value="info">Info</option>
				<option value="default">Default</option>
				<option value="neutral">Neutral</option>
				<option value="dark">Dark</option>
				<option value="light">Light</option>
			</select>
		</label>

		<label class="flex items-center gap-2">
			<span class="text-sm">Shape</span>
			<select bind:value={shape} class="rounded border p-1">
				<option value="circle">Circle</option>
				<option value="square">Square</option>
				<option value="rounded">Rounded</option>
			</select>
		</label>

		<label class="flex items-center gap-2">
			<span class="text-sm">Color</span>
			<select bind:value={color} class="rounded border p-1">
				<option value="primary">Primary</option>
				<option value="secondary">Secondary</option>
				<option value="success">Success</option>
				<option value="warning">Warning</option>
				<option value="danger">Danger</option>
			</select>
		</label>
	</div>

	<div class="inline-flex items-center rounded border p-4">
		<IconWrapper {size} {variant} {shape} {color} content={() => '★'} />
	</div>
</div>
