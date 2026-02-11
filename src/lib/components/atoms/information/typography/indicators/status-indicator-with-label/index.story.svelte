<script lang="ts">
	import { Story } from '$stylist/design-system/playground';
	import type { ControlConfig } from '$stylist/design-system/tokens/controls';
	import StatusIndicatorWithLabel from './index.svelte';

	type Status = 'success' | 'warning' | 'info' | 'neutral' | 'custom';
	
	type Props = {
		status: Status;
		label: string;
		customColor?: string;
		size?: 'sm' | 'md' | 'lg';
		showLabel?: boolean;
	};

	const controls: ControlConfig[] = [
		{
			name: 'status',
			type: 'select',
			options: ['success', 'warning', 'info', 'default', 'custom'],
			defaultValue: 'default'
		},
		{
			name: 'label',
			type: 'text',
			defaultValue: 'Active'
		},
		{
			name: 'size',
			type: 'select',
			options: ['sm', 'md', 'lg'],
			defaultValue: 'md'
		}
	];
</script>

<Story
	id="molecules-status-indicator-with-label"
	title="StatusIndicatorWithLabel"
	component={StatusIndicatorWithLabel}
	category="Molecules"
	description="Status indicator with label component"
	{controls}
>
	{#snippet children(props: Record<string, unknown>)}
		<div class="p-4">
			<StatusIndicatorWithLabel 
				status={props.status as Status ?? 'neutral'} 
				label={props.label as string ?? 'Active'} 
				size={props.size as 'sm' | 'md' | 'lg' ?? 'md'} 
			/>
		</div>
	{/snippet}
</Story>
