<script lang="ts">
	import { Story } from '$stylist/design-system/playground';
	import StepIcon from './index.svelte';
	import type { ControlConfig } from '$stylist/design-system/tokens/controls';
	import type { IStepIconProps } from '$stylist/design-system/props';

	let {
		id = '',
		title = '',
		description = '',
		controls = [
			{
				name: 'status',
				type: 'select',
				options: ['pending', 'active', 'completed', 'error'],
				defaultValue: 'pending'
			},
			{ name: 'size', type: 'select', options: ['sm', 'md', 'lg'], defaultValue: 'md' },
			{ name: 'stepNumber', type: 'number', min: 0, max: 100, defaultValue: 1 }
		]
	} = $props<{
		id: string;
		title: string;
		description: string;
		controls: ControlConfig[];
	}>();
</script>

<Story {id} {title} {description} component={StepIcon} category="Atoms" {controls}>
	{#snippet children(props: Record<string, unknown>)}
		{@const status =
			props.status === 'active' || props.status === 'completed' || props.status === 'error'
				? props.status
				: 'pending'}
		{@const size = props.size === 'sm' || props.size === 'lg' ? props.size : 'md'}
		{@const stepNumber = typeof props.stepNumber === 'number' ? props.stepNumber : 1}
		<StepIcon {status} {size} {stepNumber} />
	{/snippet}
</Story>



