<script lang="ts">
	import Icon from './index.svelte';

	let props = $props();

	let name:
		| 'search'
		| 'plus'
		| 'minus'
		| 'check'
		| 'x'
		| 'chevron-down'
		| 'chevron-up'
		| 'box'
		| string = $derived(props.name ?? 'search');
	let size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = $derived(props.size ?? 'md');
	let strokeWidth: number = $derived(props.strokeWidth ?? 1.5);

	export const controls = [
		{
			name: 'name',
			type: 'select',
			options: ['search', 'plus', 'minus', 'check', 'x', 'chevron-down', 'chevron-up', 'box'],
			defaultValue: 'search',
			group: 'Content'
		},
		{
			name: 'size',
			type: 'select',
			options: ['xs', 'sm', 'md', 'lg', 'xl'],
			defaultValue: 'md',
			group: 'Layout'
		},
		{
			name: 'strokeWidth',
			type: 'number',
			defaultValue: 1.5,
			group: 'Style',
			min: 0.5,
			max: 5,
			step: 0.1
		}
	];
</script>

<div class="p-4">
	<h1 class="mb-4 text-lg font-semibold">Icon Component</h1>

	<div class="mb-6 rounded border p-4">
		<h2 class="text-md mb-2 font-semibold">Interactive Icon</h2>
		<div class="flex flex-col gap-4">
			<div class="inline-block">
				<Icon {name} {size} {strokeWidth} />
			</div>
		</div>

		<div class="mt-4 flex flex-wrap gap-2">
			<div>
				<label for="icon-name" class="mb-1 block text-sm">Name:</label>
				<select id="icon-name" bind:value={name} class="rounded border p-1">
					<option value="search">Search</option>
					<option value="plus">Plus</option>
					<option value="minus">Minus</option>
					<option value="check">Check</option>
					<option value="x">X (Close)</option>
					<option value="chevron-down">Chevron Down</option>
					<option value="chevron-up">Chevron Up</option>
					<option value="box">Box</option>
				</select>
			</div>

			<div>
				<label for="icon-size" class="mb-1 block text-sm">Size:</label>
				<select id="icon-size" bind:value={size} class="rounded border p-1">
					<option value="xs">Extra Small</option>
					<option value="sm">Small</option>
					<option value="md">Medium</option>
					<option value="lg">Large</option>
					<option value="xl">Extra Large</option>
				</select>
			</div>

			<div>
				<label for="icon-strokeWidth" class="mb-1 block text-sm">Stroke Width:</label>
				<input
					id="icon-strokeWidth"
					type="number"
					bind:value={strokeWidth}
					class="w-16 rounded border p-1"
					min="0.5"
					max="5"
					step="0.1"
				/>
			</div>
		</div>
	</div>

	<div class="mb-6 rounded border p-4">
		<h2 class="text-md mb-2 font-semibold">All Sizes</h2>
		<div class="flex items-center gap-4">
			<div class="flex flex-col items-center">
				<Icon name="search" size="xs" />
				<span class="mt-1 text-xs">XS</span>
			</div>
			<div class="flex flex-col items-center">
				<Icon name="search" size="sm" />
				<span class="mt-1 text-xs">SM</span>
			</div>
			<div class="flex flex-col items-center">
				<Icon name="search" size="md" />
				<span class="mt-1 text-xs">MD</span>
			</div>
			<div class="flex flex-col items-center">
				<Icon name="search" size="lg" />
				<span class="mt-1 text-xs">LG</span>
			</div>
			<div class="flex flex-col items-center">
				<Icon name="search" size="xl" />
				<span class="mt-1 text-xs">XL</span>
			</div>
		</div>
	</div>

	<div class="rounded border p-4">
		<h2 class="text-md mb-2 font-semibold">All Icons</h2>
		<div class="grid grid-cols-2 gap-4 md:grid-cols-4">
			<div class="flex flex-col items-center">
				<Icon name="search" />
				<span class="mt-1 text-xs">Search</span>
			</div>
			<div class="flex flex-col items-center">
				<Icon name="plus" />
				<span class="mt-1 text-xs">Plus</span>
			</div>
			<div class="flex flex-col items-center">
				<Icon name="minus" />
				<span class="mt-1 text-xs">Minus</span>
			</div>
			<div class="flex flex-col items-center">
				<Icon name="check" />
				<span class="mt-1 text-xs">Check</span>
			</div>
			<div class="flex flex-col items-center">
				<Icon name="x" />
				<span class="mt-1 text-xs">X</span>
			</div>
			<div class="flex flex-col items-center">
				<Icon name="chevron-down" />
				<span class="mt-1 text-xs">Chevron Down</span>
			</div>
			<div class="flex flex-col items-center">
				<Icon name="chevron-up" />
				<span class="mt-1 text-xs">Chevron Up</span>
			</div>
			<div class="flex flex-col items-center">
				<Icon name="box" />
				<span class="mt-1 text-xs">Box</span>
			</div>
		</div>
	</div>
</div>
