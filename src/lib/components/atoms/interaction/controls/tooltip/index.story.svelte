<script lang="ts">
	import Story from '$stylist/design-system/playground/Story.svelte';
	import type { ControlConfig } from '$stylist/design-system/tokens/controls';
	import Tooltip from './index.svelte';

	let content: string = 'This is a helpful tooltip';
	let placement: 'top' | 'bottom' | 'left' | 'right' = 'top';
	let trigger: 'hover' | 'click' | 'focus' = 'hover';
	let variant: 'default' | 'with-arrow' | 'simple' = 'with-arrow';
	let disabled: boolean = false;
	let delay: number = 0;

	const controls: ControlConfig[] = [
		{
			name: 'content',
			type: 'text',
			defaultValue: 'This is a helpful tooltip',
			description: 'Content to display in the tooltip'
		},
		{
			name: 'placement',
			type: 'select',
			defaultValue: 'top',
			options: ['top', 'bottom', 'left', 'right'],
			description: 'Placement of the tooltip'
		},
		{
			name: 'trigger',
			type: 'select',
			defaultValue: 'hover',
			options: ['hover', 'click', 'focus'],
			description: 'Trigger mechanism for showing the tooltip'
		},
		{
			name: 'variant',
			type: 'select',
			defaultValue: 'with-arrow',
			options: ['default', 'with-arrow', 'simple'],
			description: 'Visual variant of the tooltip'
		},
		{
			name: 'disabled',
			type: 'boolean',
			defaultValue: false,
			description: 'Whether the tooltip is disabled'
		},
		{
			name: 'delay',
			type: 'number',
			defaultValue: 0,
			min: 0,
			max: 1000,
			description: 'Delay in ms before showing the tooltip'
		}
	];
</script>

<div class="p-4">
	<h1 class="mb-4 text-lg font-semibold">Tooltip Component</h1>

	<div class="mb-6 rounded border p-4">
		<h2 class="text-md mb-2 font-semibold">Interactive Tooltip</h2>
		<div class="flex items-center justify-center p-12">
			<Tooltip
				{content}
				{placement}
				{trigger}
				{variant}
				{disabled}
				{delay}
			>
				{#snippet children()}
					<button class="px-4 py-2 rounded-md bg-indigo-600 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
						Hover or click me
					</button>
				{/snippet}
			</Tooltip>
		</div>

		<div class="mt-4 flex flex-wrap gap-2">
			<div>
				<label for="tooltip-content" class="mb-1 block text-sm">Content:</label>
				<input
					id="tooltip-content"
					type="text"
					bind:value={content}
					class="rounded border p-1"
				/>
			</div>

			<div>
				<label for="tooltip-placement" class="mb-1 block text-sm">Placement:</label>
				<select
					id="tooltip-placement"
					bind:value={placement}
					class="rounded border p-1"
				>
					<option value="top">Top</option>
					<option value="bottom">Bottom</option>
					<option value="left">Left</option>
					<option value="right">Right</option>
				</select>
			</div>

			<div>
				<label for="tooltip-trigger" class="mb-1 block text-sm">Trigger:</label>
				<select
					id="tooltip-trigger"
					bind:value={trigger}
					class="rounded border p-1"
				>
					<option value="hover">Hover</option>
					<option value="click">Click</option>
					<option value="focus">Focus</option>
				</select>
			</div>

			<div>
				<label for="tooltip-variant" class="mb-1 block text-sm">Variant:</label>
				<select
					id="tooltip-variant"
					bind:value={variant}
					class="rounded border p-1"
				>
					<option value="default">Default</option>
					<option value="with-arrow">With Arrow</option>
					<option value="simple">Simple</option>
				</select>
			</div>

			<div>
				<label for="tooltip-delay" class="mb-1 block text-sm">Delay (ms):</label>
				<input
					id="tooltip-delay"
					type="number"
					bind:value={delay}
					class="rounded border p-1 w-20"
					min="0"
					max="1000"
				/>
			</div>

			<div class="flex items-end">
				<label for="tooltip-disabled" class="flex items-center gap-1">
					<input id="tooltip-disabled" type="checkbox" bind:checked={disabled} />
					Disabled
				</label>
			</div>
		</div>
	</div>

	<div class="mb-6 rounded border p-4">
		<h2 class="text-md mb-2 font-semibold">All Placements</h2>
		<div class="grid grid-cols-3 gap-4">
			<div class="flex items-center justify-center p-8 border rounded">
				<Tooltip content="Top tooltip" placement="top" variant="with-arrow">
					{#snippet children()}
						<button class="px-4 py-2 bg-blue-500 text-white rounded">Top</button>
					{/snippet}
				</Tooltip>
			</div>
			<div class="flex items-center justify-center p-8 border rounded">
				<Tooltip content="Bottom tooltip" placement="bottom" variant="with-arrow">
					{#snippet children()}
						<button class="px-4 py-2 bg-blue-500 text-white rounded">Bottom</button>
					{/snippet}
				</Tooltip>
			</div>
			<div class="flex items-center justify-center p-8 border rounded">
				<Tooltip content="Left tooltip" placement="left" variant="with-arrow">
					{#snippet children()}
						<button class="px-4 py-2 bg-blue-500 text-white rounded">Left</button>
					{/snippet}
				</Tooltip>
			</div>
			<div class="flex items-center justify-center p-8 border rounded">
				<Tooltip content="Right tooltip" placement="right" variant="with-arrow">
					{#snippet children()}
						<button class="px-4 py-2 bg-blue-500 text-white rounded">Right</button>
					{/snippet}
				</Tooltip>
			</div>
		</div>
	</div>

	<div class="rounded border p-4">
		<h2 class="text-md mb-2 font-semibold">All Variants</h2>
		<div class="flex flex-wrap gap-8">
			<div class="flex flex-col items-center gap-2">
				<Tooltip content="Default variant" placement="top" variant="default">
					{#snippet children()}
						<button class="px-4 py-2 bg-blue-500 text-white rounded">Default</button>
					{/snippet}
				</Tooltip>
				<span class="text-xs text-gray-500">Default (no arrow)</span>
			</div>
			<div class="flex flex-col items-center gap-2">
				<Tooltip content="With arrow variant" placement="top" variant="with-arrow">
					{#snippet children()}
						<button class="px-4 py-2 bg-blue-500 text-white rounded">With Arrow</button>
					{/snippet}
				</Tooltip>
				<span class="text-xs text-gray-500">With Arrow</span>
			</div>
			<div class="flex flex-col items-center gap-2">
				<Tooltip content="Simple variant" placement="top" variant="simple">
					{#snippet children()}
						<button class="px-4 py-2 bg-blue-500 text-white rounded">Simple</button>
					{/snippet}
				</Tooltip>
				<span class="text-xs text-gray-500">Simple (styled)</span>
			</div>
		</div>
	</div>
</div>
