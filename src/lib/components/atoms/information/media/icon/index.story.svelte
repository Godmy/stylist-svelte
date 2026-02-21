<script lang="ts">
	import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
	import Story from '$stylist/design-system/playground/Story.svelte';
	import Icon from './index.svelte';

	const controls: ControlConfig[] = [
		{
			name: 'name',
			type: 'select',
			defaultValue: 'search',
			options: ['search', 'plus', 'minus', 'check', 'x', 'chevron-down', 'chevron-up', 'box']
		},
		{
			name: 'size',
			type: 'select',
			defaultValue: 'md',
			options: ['xs', 'sm', 'md', 'lg', 'xl']
		},
		{
			name: 'strokeWidth',
			type: 'text',
			defaultValue: '1.5'
		}
	];
</script>

<Story
	{controls}
	component={Icon}
	title="Icon Component"
	description="An icon component with various sizes and stroke widths"
	tags={['information', 'media', 'icon']}
>
	{#snippet children(values: any)}
		<div class="p-4">
			<div class="mb-6 rounded border p-4">
				<h2 class="text-md mb-2 font-semibold">Interactive Icon</h2>
				<Icon
					name={values.name as string}
					size={values.size as 'xs' | 'sm' | 'md' | 'lg' | 'xl'}
					strokeWidth={parseFloat(values.strokeWidth as string) || 1.5}
				/>
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
	{/snippet}
</Story>