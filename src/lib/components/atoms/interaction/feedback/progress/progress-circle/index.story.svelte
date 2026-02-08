<script lang="ts">
	import { Story } from '$stylist/design-system/playground';
	import type { ControlConfig } from '$stylist/design-system/tokens/controls';
	import ProgressCircle from './progress-circle/index.svelte';

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
	{#snippet children(props: Props)}
		<div class="flex items-center space-x-4">
			<ProgressCircle
				progress={props.progress}
				size={props.size}
				strokeWidth={props.strokeWidth}
				color={props.color}
			/>
			<span class="text-gray-700">Task Progress</span>
		</div>

		<h3 class="mt-8 mb-4 text-lg font-bold">Different Progress Values and Sizes</h3>
		<div class="flex flex-wrap items-center gap-4">
			<ProgressCircle progress={25} size="sm" color="danger" />
			<ProgressCircle progress={50} size="md" color="warning" />
			<ProgressCircle progress={75} size="lg" color="success" />
			<ProgressCircle progress={100} size="md" color="primary">Done!</ProgressCircle>
		</div>
	{/snippet}
</Story>
