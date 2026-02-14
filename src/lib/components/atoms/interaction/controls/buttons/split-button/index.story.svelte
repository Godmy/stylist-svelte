<script context="module">
	export const title = 'SplitButton';
	export const category = 'Atoms/Controls/Buttons';
</script>

<script lang="ts">
	import SplitButton from './index.svelte';

	let variant: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'ghost' | 'link' =
		'primary';
	let size: 'sm' | 'md' | 'lg' = 'md';
	let disabled = false;
	let primaryLabel = 'Action';

	// Example items for the dropdown
	const exampleItems = [
		{
			label: 'Option 1',
			onClick: () => alert('Option 1 clicked!')
		},
		{
			label: 'Option 2',
			onClick: () => alert('Option 2 clicked!')
		},
		{
			label: 'Option 3',
			onClick: () => alert('Option 3 clicked!'),
			disabled: true
		}
	];

	const primaryAction = () => alert('Primary action clicked!');
</script>

<div class="p-4">
	<h1 class="mb-4 text-lg font-semibold">Split Button</h1>

	<div class="mb-6 rounded border p-4">
		<h2 class="text-md mb-2 font-semibold">Interactive Split Button</h2>
		<div class="flex flex-col gap-4">
			<SplitButton
				{variant}
				{size}
				{disabled}
				items={exampleItems}
				{primaryAction}
				{primaryLabel}
			/>
			<p class="text-sm text-gray-500">
				Primary action with a dropdown for related secondary actions.
			</p>
		</div>

		<div class="mt-4 flex flex-wrap gap-2">
			<div>
				<label for="split-variant" class="mb-1 block text-sm">Variant:</label>
				<select id="split-variant" bind:value={variant} class="rounded border p-1">
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
				<label for="split-size" class="mb-1 block text-sm">Size:</label>
				<select id="split-size" bind:value={size} class="rounded border p-1">
					<option value="sm">Small</option>
					<option value="md">Medium</option>
					<option value="lg">Large</option>
				</select>
			</div>

			<div>
				<label for="split-primary-label" class="mb-1 block text-sm">Primary label:</label>
				<input
					id="split-primary-label"
					bind:value={primaryLabel}
					class="w-full rounded border p-1 md:w-48"
				/>
			</div>

			<div class="flex items-end">
				<label for="split-disabled" class="flex items-center gap-1">
					<input id="split-disabled" type="checkbox" bind:checked={disabled} />
					Disabled
				</label>
			</div>
		</div>
	</div>

	<div class="mb-6 rounded border p-4">
		<h2 class="text-md mb-2 font-semibold">All Variants</h2>
		<div class="grid grid-cols-2 gap-4 md:grid-cols-4">
			<div class="flex flex-col items-center">
				<SplitButton
					variant="primary"
					items={exampleItems}
					{primaryAction}
					primaryLabel="Primary"
				/>
				<span class="mt-1 text-xs">Primary</span>
			</div>
			<div class="flex flex-col items-center">
				<SplitButton
					variant="secondary"
					items={exampleItems}
					{primaryAction}
					primaryLabel="Secondary"
				/>
				<span class="mt-1 text-xs">Secondary</span>
			</div>
			<div class="flex flex-col items-center">
				<SplitButton
					variant="success"
					items={exampleItems}
					{primaryAction}
					primaryLabel="Success"
				/>
				<span class="mt-1 text-xs">Success</span>
			</div>
			<div class="flex flex-col items-center">
				<SplitButton
					variant="warning"
					items={exampleItems}
					{primaryAction}
					primaryLabel="Warning"
				/>
				<span class="mt-1 text-xs">Warning</span>
			</div>
			<div class="flex flex-col items-center">
				<SplitButton variant="danger" items={exampleItems} {primaryAction} primaryLabel="Danger" />
				<span class="mt-1 text-xs">Danger</span>
			</div>
			<div class="flex flex-col items-center">
				<SplitButton variant="ghost" items={exampleItems} {primaryAction} primaryLabel="Ghost" />
				<span class="mt-1 text-xs">Ghost</span>
			</div>
			<div class="flex flex-col items-center">
				<SplitButton variant="link" items={exampleItems} {primaryAction} primaryLabel="Link" />
				<span class="mt-1 text-xs">Link</span>
			</div>
		</div>
	</div>

	<div class="mb-6 rounded border p-4">
		<h2 class="text-md mb-2 font-semibold">All Sizes</h2>
		<div class="flex items-center gap-4">
			<SplitButton size="sm" items={exampleItems} {primaryAction} primaryLabel="Small" />
			<SplitButton size="md" items={exampleItems} {primaryAction} primaryLabel="Medium" />
			<SplitButton size="lg" items={exampleItems} {primaryAction} primaryLabel="Large" />
		</div>
	</div>

	<div class="rounded border p-4">
		<h2 class="text-md mb-2 font-semibold">Disabled State</h2>
		<SplitButton disabled items={exampleItems} {primaryAction} primaryLabel="Disabled Button" />
	</div>
</div>



