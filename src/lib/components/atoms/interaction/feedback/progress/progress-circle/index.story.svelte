<script lang="ts">
	import { Story } from '$stylist/design-system/playground';
	import type { ControlConfig } from '$stylist/design-system/tokens/controls';
	import ProgressCircle from './index.svelte';

	const sizeOptions = ['sm', 'md', 'lg'] as const;
	const colorOptions = [
		'primary',
		'secondary',
		'success',
		'warning',
		'danger',
		'info',
		'gray'
	] as const;

	type Props = {
		progress: number;
		size: (typeof sizeOptions)[number];
		strokeWidth: number;
		color: (typeof colorOptions)[number];
	};

	const controls: ControlConfig[] = [
		{ name: 'progress', type: 'number', defaultValue: 60, min: 0, max: 100, step: 1 },
		{ name: 'size', type: 'select', defaultValue: 'md', options: [...sizeOptions] },
		{ name: 'strokeWidth', type: 'number', defaultValue: 4, min: 1, max: 10, step: 1 },
		{ name: 'color', type: 'select', defaultValue: 'primary', options: [...colorOptions] }
	];
</script>

<Story
	id="atoms-feedback-progress-circle"
	title="ProgressCircle"
	component={ProgressCircle}
	category="Atoms"
	description="A circular progress indicator to show completion percentage."
	{controls}
>
	{#snippet children(props: Record<string, unknown>)}
		{@const storyProps = props as Partial<Props>}
		<div class="flex items-center space-x-4">
			<ProgressCircle
				value={storyProps.progress ?? 60}
				progress={storyProps.progress ?? 60}
				strokeWidth={storyProps.strokeWidth ?? 4}
				color={storyProps.color ?? 'primary'}
			/>
			<span class="text-gray-700">Task Progress</span>
		</div>

		<h3 class="mt-8 mb-4 text-lg font-bold">Different Progress Values and Sizes</h3>
		<div class="flex flex-wrap items-center gap-4">
			<ProgressCircle value={25} progress={25} color="danger" />
			<ProgressCircle value={50} progress={50} color="warning" />
			<ProgressCircle value={75} progress={75} color="success" />
			<ProgressCircle value={100} progress={100} color="primary">Done!</ProgressCircle>
		</div>
	{/snippet}
</Story>
