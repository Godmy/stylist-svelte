<script lang="ts">
	import Story from '$stylist/design-system/playground/Story.svelte';
	import type { ControlConfig } from '$stylist/design-system/tokens/controls';
	import ActionSegmentedControl from './index.svelte';

	let selectedIndex: number = 0;
	let customClass: string = '';

	const items = ['Option 1', 'Option 2', 'Option 3'];

	const controls: ControlConfig[] = [
		{
			name: 'selectedIndex',
			type: 'number',
			defaultValue: 0,
			min: 0,
			max: 2,
			description: 'Index of the selected option'
		}
	];

	function handleValueChange(index: number) {
		selectedIndex = index;
		console.log('Selected index changed to:', index);
	}
</script>

<div class="p-4">
	<h1 class="mb-4 text-lg font-semibold">Action Segmented Control Component</h1>

	<div class="mb-6 rounded border p-4">
		<h2 class="text-md mb-2 font-semibold">Interactive Action Segmented Control</h2>
		<div class="mb-4">
			<ActionSegmentedControl
				{items}
				{selectedIndex}
				{customClass}
				onValueChange={handleValueChange}
			/>
		</div>

		<div class="mt-4 flex flex-wrap gap-2">
			<div>
				<label for="segmented-control-index" class="mb-1 block text-sm">Selected Index:</label>
				<input
					id="segmented-control-index"
					type="number"
					bind:value={selectedIndex}
					class="rounded border p-1 w-20"
					min="0"
					max="2"
				/>
			</div>

			<div>
				<label for="segmented-control-class" class="mb-1 block text-sm">Custom Class:</label>
				<input
					id="segmented-control-class"
					type="text"
					bind:value={customClass}
					class="rounded border p-1"
					placeholder="Add custom CSS class"
				/>
			</div>
		</div>
	</div>

	<div class="mb-6 rounded border p-4">
		<h2 class="text-md mb-2 font-semibold">Different Item Sets</h2>
		<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
			<div class="rounded border p-3">
				<h3 class="mb-2 font-medium">Three Options</h3>
				<ActionSegmentedControl
					items={['Home', 'Profile', 'Settings']}
					selectedIndex={0}
				/>
			</div>
			<div class="rounded border p-3">
				<h3 class="mb-2 font-medium">Two Options</h3>
				<ActionSegmentedControl
					items={['Day', 'Week']}
					selectedIndex={0}
				/>
			</div>
		</div>
	</div>

	<div class="rounded border p-4">
		<h2 class="text-md mb-2 font-semibold">Various Selected Indices</h2>
		<div class="grid grid-cols-1 gap-4 md:grid-cols-3">
			<div class="rounded border p-3">
				<h3 class="mb-2 font-medium">First Selected</h3>
				<ActionSegmentedControl
					items={['Option 1', 'Option 2', 'Option 3']}
					selectedIndex={0}
				/>
			</div>
			<div class="rounded border p-3">
				<h3 class="mb-2 font-medium">Second Selected</h3>
				<ActionSegmentedControl
					items={['Option 1', 'Option 2', 'Option 3']}
					selectedIndex={1}
				/>
			</div>
			<div class="rounded border p-3">
				<h3 class="mb-2 font-medium">Third Selected</h3>
				<ActionSegmentedControl
					items={['Option 1', 'Option 2', 'Option 3']}
					selectedIndex={2}
				/>
			</div>
		</div>
	</div>
</div>



