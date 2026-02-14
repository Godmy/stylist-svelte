<script lang="ts">
	import LoadingSpinner from './index.svelte';

	let size: 'sm' | 'md' | 'lg' = 'md';
	let color: 'blue' | 'gray' | 'green' | 'red' | 'yellow' | string = 'blue';
	let label: string = 'Loading...';
	let showLabel: boolean = true;
</script>

<div class="p-4">
	<h1 class="mb-4 text-lg font-semibold">LoadingSpinner Component</h1>

	<div class="mb-6 rounded border p-4">
		<h2 class="text-md mb-2 font-semibold">Interactive LoadingSpinner</h2>
		<div class="flex min-h-32 items-center justify-center">
			<LoadingSpinner {size} {color} {label} {showLabel} />
		</div>

		<div class="mt-4 flex flex-wrap gap-2">
			<div>
				<label for="spinner-size" class="mb-1 block text-sm">Size:</label>
				<select id="spinner-size" bind:value={size} class="rounded border p-1">
					<option value="sm">Small</option>
					<option value="md">Medium</option>
					<option value="lg">Large</option>
				</select>
			</div>

			<div>
				<label for="spinner-color" class="mb-1 block text-sm">Color:</label>
				<select id="spinner-color" bind:value={color} class="rounded border p-1">
					<option value="blue">Blue</option>
					<option value="gray">Gray</option>
					<option value="green">Green</option>
					<option value="red">Red</option>
					<option value="yellow">Yellow</option>
				</select>
			</div>

			<div>
				<label for="spinner-label" class="mb-1 block text-sm">Label:</label>
				<input id="spinner-label" type="text" bind:value={label} class="w-32 rounded border p-1" />
			</div>

			<div class="flex items-end">
				<label for="show-label" class="flex items-center gap-1">
					<input id="show-label" type="checkbox" bind:checked={showLabel} />
					Show Label
				</label>
			</div>
		</div>
	</div>

	<div class="rounded border p-4">
		<h2 class="text-md mb-2 font-semibold">LoadingSpinner Variations</h2>
		<div class="grid grid-cols-2 gap-4 md:grid-cols-3">
			<div class="flex flex-col items-center">
				<h3 class="mb-2 text-sm font-medium">Small</h3>
				<LoadingSpinner size="sm" color="blue" label="Small Spinner" />
			</div>
			<div class="flex flex-col items-center">
				<h3 class="mb-2 text-sm font-medium">Medium</h3>
				<LoadingSpinner size="md" color="green" label="Medium Spinner" />
			</div>
			<div class="flex flex-col items-center">
				<h3 class="mb-2 text-sm font-medium">Large</h3>
				<LoadingSpinner size="lg" color="red" label="Large Spinner" />
			</div>
			<div class="flex flex-col items-center">
				<h3 class="mb-2 text-sm font-medium">No Label</h3>
				<LoadingSpinner size="md" color="blue" showLabel={false} />
			</div>
			<div class="flex flex-col items-center">
				<h3 class="mb-2 text-sm font-medium">Gray</h3>
				<LoadingSpinner size="md" color="gray" label="Gray Spinner" />
			</div>
			<div class="flex flex-col items-center">
				<h3 class="mb-2 text-sm font-medium">Yellow</h3>
				<LoadingSpinner size="md" color="yellow" label="Yellow Spinner" />
			</div>
		</div>
	</div>
</div>



