<script lang="ts">
	import Story from '$stylist/design-system/playground/Story.svelte';
	import type { ControlConfig } from '$stylist/design-system/tokens/controls';
	import PageButton from './index.svelte';

	let page: number = 1;
	let isActive: boolean = false;
	let disabled: boolean = false;
	let variant: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'ghost' | 'link' | 'outline' = 'outline';
	let size: 'sm' | 'md' | 'lg' = 'md';

	const controls: ControlConfig[] = [
		{
			name: 'page',
			type: 'number',
			defaultValue: 1,
			min: 1,
			description: 'Page number to display'
		},
		{
			name: 'isActive',
			type: 'boolean',
			defaultValue: false,
			description: 'Whether the button represents the current page'
		},
		{
			name: 'disabled',
			type: 'boolean',
			defaultValue: false,
			description: 'Whether the button is disabled'
		},
		{
			name: 'variant',
			type: 'select',
			defaultValue: 'outline',
			options: ['primary', 'secondary', 'success', 'warning', 'danger', 'ghost', 'link', 'outline'],
			description: 'Visual style of the button'
		},
		{
			name: 'size',
			type: 'select',
			defaultValue: 'md',
			options: ['sm', 'md', 'lg'],
			description: 'Size of the button'
		}
	];
</script>

<div class="p-4">
	<h1 class="mb-4 text-lg font-semibold">Page Button Component</h1>

	<div class="mb-6 rounded border p-4">
		<h2 class="text-md mb-2 font-semibold">Interactive Page Button</h2>
		<div class="flex flex-col items-center gap-4">
			<PageButton {page} {isActive} {disabled} {variant} {size} />
			<p class="text-sm text-gray-500">
				Toggle active/disabled states to preview pagination styling.
			</p>
		</div>

		<div class="mt-4 flex flex-wrap gap-2">
			<div>
				<label for="page-number" class="mb-1 block text-sm">Page number:</label>
				<input
					id="page-number"
					type="number"
					min="1"
					bind:value={page}
					class="w-20 rounded border p-1"
				/>
			</div>

			<div class="flex items-end gap-4">
				<label for="page-active" class="flex items-center gap-1">
					<input id="page-active" type="checkbox" bind:checked={isActive} />
					Active
				</label>
				<label for="page-disabled" class="flex items-center gap-1">
					<input id="page-disabled" type="checkbox" bind:checked={disabled} />
					Disabled
				</label>
			</div>
			
			<div>
				<label for="page-variant" class="mb-1 block text-sm">Variant:</label>
				<select
					id="page-variant"
					bind:value={variant}
					class="rounded border p-1"
				>
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
				<label for="page-size" class="mb-1 block text-sm">Size:</label>
				<select
					id="page-size"
					bind:value={size}
					class="rounded border p-1"
				>
					<option value="sm">Small</option>
					<option value="md">Medium</option>
					<option value="lg">Large</option>
				</select>
			</div>
		</div>
	</div>

	<div class="rounded border p-4">
		<h2 class="text-md mb-2 font-semibold">Examples</h2>
		<div class="flex flex-wrap items-center gap-4">
			<PageButton page={1} isActive={false} disabled={false} />
			<PageButton page={2} isActive={true} disabled={false} />
			<PageButton page={3} isActive={false} disabled={false} />
			<PageButton page={4} isActive={false} disabled={true} />
		</div>
	</div>
</div>



