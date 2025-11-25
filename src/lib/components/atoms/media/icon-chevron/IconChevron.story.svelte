<script lang="ts">
	import IconChevron from './IconChevron.svelte';

	let isOpen: boolean = false;
	let size: 'sm' | 'md' | 'lg' = 'md';
</script>

<div class="p-4">
	<h1 class="text-lg font-semibold mb-4">IconChevron Component</h1>

	<div class="mb-6 p-4 border rounded">
		<h2 class="text-md font-semibold mb-2">Controlled Icon Chevron</h2>
		<div class="flex items-center gap-4">
			<IconChevron isOpen={isOpen} size={size} />
			<span class="text-gray-700">{isOpen ? 'Open' : 'Closed'}</span>

			<button
				class="ml-4 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
				onclick={() => isOpen = !isOpen}>
				Toggle State
			</button>
		</div>

		<div class="mt-4 space-x-2">
			<button
				class={`px-2 py-1 rounded ${size === 'sm' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
				onclick={() => size = 'sm'}>
				Small
			</button>
			<button
				class={`px-2 py-1 rounded ${size === 'md' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
				onclick={() => size = 'md'}>
				Medium
			</button>
			<button
				class={`px-2 py-1 rounded ${size === 'lg' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
				onclick={() => size = 'lg'}>
				Large
			</button>
		</div>
	</div>

	<div class="mb-6 p-4 border rounded">
		<h2 class="text-md font-semibold mb-2">Size Demonstration</h2>
		<div class="flex items-center gap-4">
			<div class="flex flex-col items-center">
				<IconChevron isOpen={false} size="sm" />
				<span class="text-sm text-gray-600">Small</span>
			</div>
			<div class="flex flex-col items-center">
				<IconChevron isOpen={false} size="md" />
				<span class="text-sm text-gray-600">Medium</span>
			</div>
			<div class="flex flex-col items-center">
				<IconChevron isOpen={false} size="lg" />
				<span class="text-sm text-gray-600">Large</span>
			</div>
		</div>
	</div>

	<div class="p-4 border rounded">
		<h2 class="text-md font-semibold mb-2">State Comparison</h2>
		<div class="flex items-center gap-8">
			<div class="flex flex-col items-center">
				<IconChevron isOpen={false} size="lg" />
				<span class="text-sm text-gray-600">Closed (lg)</span>
			</div>
			<div class="flex flex-col items-center">
				<IconChevron isOpen={true} size="lg" />
				<span class="text-sm text-gray-600">Open (lg)</span>
			</div>
		</div>
	</div>
</div>
