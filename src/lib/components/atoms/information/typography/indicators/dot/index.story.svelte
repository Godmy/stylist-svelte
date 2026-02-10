<script lang="ts">
	import { Story } from '$stylist/design-system/playground';
	import type { ControlConfig } from '$stylist/design-system/tokens/controls';
	import Dot from './index.svelte';

	const colorOptions = [
		'primary',
		'secondary',
		'success',
		'warning',
		'danger',
		'info',
		'gray'
	] as const;
	const sizeOptions = ['sm', 'md', 'lg'] as const;

	type Props = {
		color: (typeof colorOptions)[number];
		size: (typeof sizeOptions)[number];
	};

	const controls: ControlConfig[] = [
		{ name: 'color', type: 'select', defaultValue: 'primary', options: [...colorOptions] },
		{ name: 'size', type: 'select', defaultValue: 'md', options: [...sizeOptions] }
	];
</script>

<Story
	id="atoms-feedback-dot"
	title="Dot"
	component={Dot}
	category="Atoms"
	description="A small, colored dot indicator for statuses or notifications."
	{controls}
>
	{#snippet children(props: Props)}
		<div class="flex items-center space-x-4">
			<Dot color={props.color} size={props.size} />
			<span class="text-gray-700">Status Indicator</span>
		</div>

		<h3 class="mt-8 mb-4 text-lg font-bold">Different Sizes and Colors</h3>
		<div class="flex flex-wrap items-center gap-4">
			{#each colorOptions as color}
				<div class="flex items-center space-x-2">
					<Dot {color} size="sm" />
					<span class="text-sm text-gray-600">{color} (sm)</span>
				</div>
			{/each}
			{#each colorOptions as color}
				<div class="flex items-center space-x-2">
					<Dot {color} size="md" />
					<span class="text-sm text-gray-600">{color} (md)</span>
				</div>
			{/each}
			{#each colorOptions as color}
				<div class="flex items-center space-x-2">
					<Dot {color} size="lg" />
					<span class="text-sm text-gray-600">{color} (lg)</span>
				</div>
			{/each}
		</div>
	{/snippet}
</Story>
