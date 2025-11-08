<script lang="ts">
	import { Story } from '$lib/playground';
	import type { ControlConfig } from '$lib/playground';
	import StepIcon from './StepIcon.svelte';

	const statusOptions = ['pending', 'active', 'completed', 'error'] as const;
	const sizeOptions = ['sm', 'md', 'lg'] as const;

	type Props = {
		status: (typeof statusOptions)[number];
		stepNumber: number | undefined;
		iconName: string | undefined;
		size: (typeof sizeOptions)[number];
	};

	const controls: ControlConfig[] = [
		{ name: 'status', type: 'select', defaultValue: 'pending', options: [...statusOptions] },
		{ name: 'stepNumber', type: 'number', defaultValue: 1 },
		{ name: 'iconName', type: 'text', defaultValue: '' },
		{ name: 'size', type: 'select', defaultValue: 'md', options: [...sizeOptions] }
	];
</script>

<Story
	id="atoms-navigation-step-icon"
	title="StepIcon"
	component={StepIcon}
	category="Atoms"
	description="An icon or number indicating the status of a step in a multi-step process."
	controls={controls}
>
	{#snippet children(props: Props)}
		<div class="flex flex-col gap-4">
			<h3 class="mb-4 text-lg font-bold">StepIcon States</h3>
			<div class="flex items-center gap-4">
				<StepIcon status="pending" stepNumber={1} size={props.size} />
				<StepIcon status="active" stepNumber={2} size={props.size} />
				<StepIcon status="completed" stepNumber={3} size={props.size} />
				<StepIcon status="error" stepNumber={4} size={props.size} />
			</div>

			<h3 class="mt-8 mb-4 text-lg font-bold">StepIcon with Custom Icon</h3>
			<div class="flex items-center gap-4">
				<StepIcon status="pending" iconName="user" size={props.size} />
				<StepIcon status="active" iconName="settings" size={props.size} />
				<StepIcon status="completed" iconName="check" size={props.size} />
			</div>
		</div>
	{/snippet}
</Story>
