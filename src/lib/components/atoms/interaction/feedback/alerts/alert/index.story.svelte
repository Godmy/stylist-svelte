<script lang="ts">
	import { Story } from '$stylist/design-system/playground';
	import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
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
	{#snippet children(values: any)}
		{@const variant =
			typeof values.variant === 'string' ? (values.variant as NonNullable<Props['variant']>) : 'info'}
		{@const title = typeof values.title === 'string' ? values.title : 'Sample Alert'}
		{@const closable = typeof values.closable === 'boolean' ? values.closable : false}
		<div class="max-w-md p-4">
			<Alert {variant} {title} {closable}>
				{#snippet children()}
					<p class="text-sm">
						{variant === 'success'
							? 'Everything looks good! Keep monitoring for anomalies.'
							: 'Add remediation steps or contextual information inside the slot.'}
					</p>
				{/snippet}
			</Alert>
		</div>
	{/snippet}
</Story>




