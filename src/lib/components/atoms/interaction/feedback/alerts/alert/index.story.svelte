<script lang="ts">
	import { Story } from '$stylist/design-system/playground';
	import type { ControlConfig } from '$stylist/design-system/tokens/controls';
	import Alert from './index.svelte';

	type Props = {
		variant?: 'info' | 'success' | 'warning' | 'error';
		title?: string;
		closable?: boolean;
	};

	const controls: ControlConfig[] = [
		{
			name: 'variant',
			type: 'select',
			options: ['info', 'success', 'warning', 'error'],
			defaultValue: 'info'
		},
		{
			name: 'title',
			type: 'text',
			defaultValue: 'Sample Alert'
		},
		{
			name: 'closable',
			type: 'boolean',
			defaultValue: false
		}
	];
</script>

<Story
	id="molecules-alert"
	title="Alert"
	component={Alert}
	category="Molecules/Feedback/Alerts"
	description="Display important messages to users with different severity levels."
	{controls}
>
	{#snippet children(props: Props)}
		<div class="max-w-md p-4">
			<Alert variant={props.variant} title={props.title} closable={props.closable}>
				{#snippet children()}
					<p class="text-sm">
						{props.variant === 'success'
							? 'Everything looks good! Keep monitoring for anomalies.'
							: 'Add remediation steps or contextual information inside the slot.'}
					</p>
				{/snippet}
			</Alert>
		</div>
	{/snippet}
</Story>
