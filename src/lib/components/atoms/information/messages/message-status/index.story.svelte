<script lang="ts">
	import Story from '$stylist/design-system/playground/Story.svelte';
	import type { ControlConfig } from '$stylist/design-system/defaults/interaction/controls';
	import MessageStatus from './index.svelte';

	const controls: ControlConfig[] = [
		{ name: 'title', type: 'text', defaultValue: 'Success' },
		{ name: 'message', type: 'text', defaultValue: 'Operation completed successfully!' },
		{ name: 'variant', type: 'select', defaultValue: 'success', options: ['success', 'warning', 'error', 'info'] },
		{ name: 'show', type: 'boolean', defaultValue: true },
		{ name: 'closable', type: 'boolean', defaultValue: true },
		{ name: 'duration', type: 'number', defaultValue: 5000, min: 0, max: 10000, step: 500 },
		{ name: 'position', type: 'select', defaultValue: 'top-right', options: ['top-right', 'top-left', 'bottom-right', 'bottom-left', 'top-center', 'bottom-center'] }
	];
</script>

<Story
	{controls}
	component={MessageStatus}
	title="MessageStatus"
	category="Atoms/Information/Messages"
	description="Flexible message status component with multiple variants for displaying success, warning, error, and info messages"
	tags={['message', 'status', 'notification', 'feedback', 'alert']}
>
	{#snippet children(values: any)}
		<MessageStatus
			title={values.title as string}
			message={values.message as string}
			variant={values.variant as 'success' | 'warning' | 'error' | 'info'}
			show={values.show as boolean}
			closable={values.closable as boolean}
			duration={Number(values.duration) || 0}
			position={values.position as 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center'}
		/>
	{/snippet}
</Story>


