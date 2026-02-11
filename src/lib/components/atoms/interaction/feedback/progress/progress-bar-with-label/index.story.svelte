<script lang="ts">
	import { Story } from '$stylist/design-system/playground';
	import type { ControlConfig } from '$stylist/design-system/tokens/controls';
	import ProgressBarWithLabel from './index.svelte';

	const colorOptions = ['blue', 'green', 'red', 'yellow', 'purple'] as const;

	type ProgressBarWithLabelStoryProps = {
		value: number;
		max: number;
		label: string;
		showPercentage: boolean;
		color: (typeof colorOptions)[number];
		height: string;
	};

	const controls: ControlConfig[] = [
		{
			name: 'value',
			type: 'number',
			defaultValue: 75,
			min: 0,
			max: 100
		},
		{
			name: 'max',
			type: 'number',
			defaultValue: 100,
			min: 1
		},
		{
			name: 'label',
			type: 'text',
			defaultValue: 'Upload Progress'
		},
		{
			name: 'showPercentage',
			type: 'boolean',
			defaultValue: true
		},
		{
			name: 'color',
			type: 'select',
			defaultValue: 'blue',
			options: [...colorOptions]
		},
		{
			name: 'height',
			type: 'text',
			defaultValue: 'h-2'
		}
	];
</script>

<Story
	id="molecules-progress-bar-with-label"
	title="ProgressBarWithLabel"
	component={ProgressBarWithLabel}
	category="Molecules"
	description="A progress bar component with label."
	tags={['progress', 'bar', 'indicator']}
	{controls}
>
	{#snippet children(props: Record<string, unknown>)}
		{@const value = typeof props.value === 'number' ? props.value : 75}
		{@const max = typeof props.max === 'number' ? props.max : 100}
		{@const label = typeof props.label === 'string' ? props.label : 'Upload Progress'}
		{@const showPercentage =
			typeof props.showPercentage === 'boolean' ? props.showPercentage : true}
		{@const color =
			typeof props.color === 'string' ? (props.color as ProgressBarWithLabelStoryProps['color']) : 'blue'}
		{@const height = typeof props.height === 'string' ? props.height : 'h-2'}
		<div class="rounded-lg bg-gray-50 p-8">
			<h2 class="mb-4 text-xl font-bold">ProgressBarWithLabel Story</h2>
			<ProgressBarWithLabel
				{value}
				{max}
				{label}
				{showPercentage}
				{color}
				{height}
			/>
		</div>
	{/snippet}
</Story>
