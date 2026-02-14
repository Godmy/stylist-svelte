<script lang="ts">
	import Button from './index.svelte';

	let label: string = 'Click me';
	let variant:
		| 'primary'
		| 'secondary'
		| 'success'
		| 'warning'
		| 'danger'
		| 'ghost'
		| 'link'
		| 'outline' = 'primary';
	let size: 'sm' | 'md' | 'lg' = 'md';
	let disabled: boolean = false;
	let loading: boolean = false;
	let block: boolean = false;
</script>

<div class="p-4">
	<h1 class="mb-4 text-lg font-semibold">Button Component</h1>

	<div class="mb-6 rounded border p-4">
		<h2 class="text-md mb-2 font-semibold">Interactive Button</h2>
		<div class="flex flex-col gap-4">
			<Button {variant} {size} {disabled} {loading} {block}>
				{label}
			</Button>
			{#if block}
				<p class="text-sm text-gray-500">Block mode stretches the button to full width.</p>
			{/if}
		</div>

		<div class="mt-4 flex flex-wrap gap-2">
			<div>
				<label for="button-label" class="mb-1 block text-sm">Label:</label>
				<input id="button-label" type="text" bind:value={label} class="rounded border p-1" />
			</div>

			<div>
				<label for="button-variant" class="mb-1 block text-sm">Variant:</label>
				<select id="button-variant" bind:value={variant} class="rounded border p-1">
					<option value="primary">Primary</option>
					<option value="secondary">Secondary</option>
					<option value="success">Success</option>
					<option value="warning">Warning</option>
					<option value="danger">Danger</option>
					<option value="outline">Outline</option>
					<option value="ghost">Ghost</option>
					<option value="link">Link</option>
				</select>
			</div>

			<div>
				<label for="button-size" class="mb-1 block text-sm">Size:</label>
				<select id="button-size" bind:value={size} class="rounded border p-1">
					<option value="sm">Small</option>
					<option value="md">Medium</option>
					<option value="lg">Large</option>
				</select>
			</div>

			<div class="flex items-end">
				<label for="button-disabled" class="flex items-center gap-1">
					<input id="button-disabled" type="checkbox" bind:checked={disabled} />
					Disabled
				</label>
			</div>

			<div class="flex items-end">
				<label for="button-loading" class="flex items-center gap-1">
					<input id="button-loading" type="checkbox" bind:checked={loading} />
					Loading
				</label>
			</div>

			<div class="flex items-end">
				<label for="button-block" class="flex items-center gap-1">
					<input id="button-block" type="checkbox" bind:checked={block} />
					Block
				</label>
			</div>
		</div>
	</div>

	<div class="mb-6 rounded border p-4">
		<h2 class="text-md mb-2 font-semibold">All Variants</h2>
		<div class="grid grid-cols-2 gap-4 md:grid-cols-4">
			<div class="flex flex-col items-center">
				<Button variant="primary">Primary</Button>
				<span class="mt-1 text-xs">Primary</span>
			</div>
			<div class="flex flex-col items-center">
				<Button variant="secondary">Secondary</Button>
				<span class="mt-1 text-xs">Secondary</span>
			</div>
			<div class="flex flex-col items-center">
				<Button variant="success">Success</Button>
				<span class="mt-1 text-xs">Success</span>
			</div>
			<div class="flex flex-col items-center">
				<Button variant="warning">Warning</Button>
				<span class="mt-1 text-xs">Warning</span>
			</div>
			<div class="flex flex-col items-center">
				<Button variant="danger">Danger</Button>
				<span class="mt-1 text-xs">Danger</span>
			</div>
			<div class="flex flex-col items-center">
				<Button variant="outline">Outline</Button>
				<span class="mt-1 text-xs">Outline</span>
			</div>
			<div class="flex flex-col items-center">
				<Button variant="ghost">Ghost</Button>
				<span class="mt-1 text-xs">Ghost</span>
			</div>
			<div class="flex flex-col items-center">
				<Button variant="link">Link</Button>
				<span class="mt-1 text-xs">Link</span>
			</div>
		</div>
	</div>

	<div class="rounded border p-4">
		<h2 class="text-md mb-2 font-semibold">All Sizes</h2>
		<div class="flex items-center gap-4">
			<Button size="sm">Small</Button>
			<Button size="md">Medium</Button>
			<Button size="lg">Large</Button>
		</div>
	</div>
</div>



