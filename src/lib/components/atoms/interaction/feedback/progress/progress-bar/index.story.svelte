<script lang="ts">
	import ProgressBar from './progress-bar/index.svelte';

	let value = $state(50);
	let max = $state(100);
	let label = $state('');
	let showPercentage = $state(true);
	let size: 'sm' | 'md' | 'lg' = $state('md');
	let variant: 'primary' | 'success' | 'warning' | 'danger' = $state('primary');
	let className = $state('');
</script>

<div class="p-4">
	<h1 class="mb-4 text-lg font-semibold">ProgressBar Component</h1>

	<div class="mb-6 rounded border p-4">
		<h2 class="text-md mb-2 font-semibold">Interactive Progress Bar</h2>
		<div class="flex flex-col gap-4">
			<ProgressBar {value} {max} {label} {showPercentage} {size} {variant} class={className} />
		</div>

		<div class="mt-4 flex flex-wrap gap-2">
			<div>
				<label for="value-input" class="mb-1 block text-sm">Value (0-100):</label>
				<input
					id="value-input"
					type="range"
					min="0"
					max="100"
					bind:value
					class="rounded border p-1"
				/>
				<span class="ml-2">{value}%</span>
			</div>

			<div>
				<label for="max-input" class="mb-1 block text-sm">Max:</label>
				<input
					id="max-input"
					type="number"
					min="1"
					bind:value={max}
					class="w-20 rounded border p-1"
				/>
			</div>

			<div>
				<label for="label-input" class="mb-1 block text-sm">Label:</label>
				<input id="label-input" type="text" bind:value={label} class="rounded border p-1" />
			</div>

			<div class="flex items-end">
				<label for="showPercentage-checkbox" class="flex items-center gap-1">
					<input id="showPercentage-checkbox" type="checkbox" bind:checked={showPercentage} />
					Show %
				</label>
			</div>

			<div>
				<label for="size-select" class="mb-1 block text-sm">Size:</label>
				<select id="size-select" bind:value={size} class="rounded border p-1">
					<option value="sm">Small</option>
					<option value="md">Medium</option>
					<option value="lg">Large</option>
				</select>
			</div>

			<div>
				<label for="variant-select" class="mb-1 block text-sm">Variant:</label>
				<select id="variant-select" bind:value={variant} class="rounded border p-1">
					<option value="primary">Primary</option>
					<option value="success">Success</option>
					<option value="warning">Warning</option>
					<option value="danger">Danger</option>
				</select>
			</div>

			<div>
				<label for="className-input" class="mb-1 block text-sm">CSS Classes:</label>
				<input id="className-input" type="text" bind:value={className} class="rounded border p-1" />
			</div>
		</div>
	</div>

	<div class="rounded border p-4">
		<h2 class="text-md mb-2 font-semibold">Progress Bar Variants</h2>
		<div class="space-y-4">
			<div>
				<h3 class="mb-2 text-sm font-medium">Primary</h3>
				<ProgressBar value={30} variant="primary" />
			</div>
			<div>
				<h3 class="mb-2 text-sm font-medium">Success</h3>
				<ProgressBar value={60} variant="success" />
			</div>
			<div>
				<h3 class="mb-2 text-sm font-medium">Warning</h3>
				<ProgressBar value={80} variant="warning" />
			</div>
			<div>
				<h3 class="mb-2 text-sm font-medium">Danger</h3>
				<ProgressBar value={90} variant="danger" />
			</div>
		</div>
	</div>
</div>
