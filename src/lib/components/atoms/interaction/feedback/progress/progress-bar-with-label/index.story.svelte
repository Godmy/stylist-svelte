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
	{#snippet children(props)}
		<div class="rounded-lg bg-gray-50 p-8">
			<h2 class="mb-4 text-xl font-bold">ProgressBarWithLabel Story</h2>
			<ProgressBarWithLabel
				value={props?.value ?? 75}
				max={props?.max ?? 100}
				label={props?.label ?? 'Upload Progress'}
				showPercentage={props?.showPercentage ?? true}
				color={props?.color ?? 'blue'}
				height={props?.height ?? 'h-2'}
			/>
		</div>
	{/snippet}
</Story>
