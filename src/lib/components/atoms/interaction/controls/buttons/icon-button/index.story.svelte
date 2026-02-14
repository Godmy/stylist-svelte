<script lang="ts">
	import IconButton from './index.svelte';

	let variant: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'ghost' | 'link' =
		'ghost';
	let size: 'sm' | 'md' | 'lg' = 'md';
	let disabled = false;
	let loading = false;
</script>

<div class="p-4">
	<h1 class="mb-4 text-lg font-semibold">Icon Button</h1>

	<div class="mb-6 rounded border p-4">
		<h2 class="text-md mb-2 font-semibold">Interactive Icon Button</h2>
		<div class="flex flex-col items-center gap-4">
			<IconButton {variant} {size} {disabled} {loading} ariaLabel="Icon button" />
			<p class="text-sm text-gray-500">
				Use icon-only buttons for compact toolbars and quick actions.
			</p>
		</div>

		<div class="mt-4 flex flex-wrap gap-2">
			<div>
				<label for="icon-variant" class="mb-1 block text-sm">Variant:</label>
				<select id="icon-variant" bind:value={variant} class="rounded border p-1">
					<option value="primary">Primary</option>
					<option value="secondary">Secondary</option>
					<option value="success">Success</option>
					<option value="warning">Warning</option>
					<option value="danger">Danger</option>
					<option value="ghost">Ghost</option>
					<option value="link">Link</option>
				</select>
			</div>

			<div>
				<label for="icon-size" class="mb-1 block text-sm">Size:</label>
				<select id="icon-size" bind:value={size} class="rounded border p-1">
					<option value="sm">Small</option>
					<option value="md">Medium</option>
					<option value="lg">Large</option>
				</select>
			</div>

			<div class="flex items-end gap-4">
				<label for="icon-disabled" class="flex items-center gap-1">
					<input id="icon-disabled" type="checkbox" bind:checked={disabled} />
					Disabled
				</label>
				<label for="icon-loading" class="flex items-center gap-1">
					<input id="icon-loading" type="checkbox" bind:checked={loading} />
					Loading
				</label>
			</div>
		</div>
	</div>

	<div class="mb-6 rounded border p-4">
		<h2 class="text-md mb-2 font-semibold">All Variants</h2>
		<div class="grid grid-cols-2 gap-4 md:grid-cols-4">
			<div class="flex flex-col items-center">
				<IconButton variant="primary" ariaLabel="Home" />
				<span class="mt-1 text-xs">Primary</span>
			</div>
			<div class="flex flex-col items-center">
				<IconButton variant="secondary" ariaLabel="Settings" />
				<span class="mt-1 text-xs">Secondary</span>
			</div>
			<div class="flex flex-col items-center">
				<IconButton variant="success" ariaLabel="Success" />
				<span class="mt-1 text-xs">Success</span>
			</div>
			<div class="flex flex-col items-center">
				<IconButton variant="warning" ariaLabel="Warning" />
				<span class="mt-1 text-xs">Warning</span>
			</div>
			<div class="flex flex-col items-center">
				<IconButton variant="danger" ariaLabel="Danger" />
				<span class="mt-1 text-xs">Danger</span>
			</div>
			<div class="flex flex-col items-center">
				<IconButton variant="ghost" ariaLabel="Ghost" />
				<span class="mt-1 text-xs">Ghost</span>
			</div>
			<div class="flex flex-col items-center">
				<IconButton variant="link" ariaLabel="Link" />
				<span class="mt-1 text-xs">Link</span>
			</div>
		</div>
	</div>

	<div class="rounded border p-4">
		<h2 class="text-md mb-2 font-semibold">All Sizes</h2>
		<div class="flex items-center gap-4">
			<IconButton size="sm" variant="ghost" ariaLabel="Small icon" />
			<IconButton size="md" variant="ghost" ariaLabel="Medium icon" />
			<IconButton size="lg" variant="ghost" ariaLabel="Large icon" />
		</div>
	</div>
</div>



