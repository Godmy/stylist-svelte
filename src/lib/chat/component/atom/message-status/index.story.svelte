<script lang="ts">
	import { Story } from '$stylist/playground/component/molecule/story';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import MessageStatus from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'status', type: 'select', defaultValue: 'read', options: ['sent', 'delivered', 'read'] },
		{ name: 'size', type: 'select', defaultValue: 'md', options: ['sm', 'md', 'lg'] }
	];
</script>

<Story
	{controls}
	component={MessageStatus}
	title="MessageStatus"
	category="Atoms/Information/Messages"
	description="Message delivery state indicator."
	tags={['message', 'status', 'delivery']}
>
	{#snippet children(values: any)}
		<div class="flex items-center gap-3 rounded-lg border border-[var(--color-border-primary)] bg-[var(--color-background-primary)] p-4">
			<span class="text-sm text-[var(--color-text-secondary)]">Status:</span>
			<MessageStatus
				status={values.status as 'sent' | 'delivered' | 'read'}
				size={values.size as 'sm' | 'md' | 'lg'}
			/>
		</div>
	{/snippet}
</Story>



