<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import MessageStatus from './index.svelte';

	const controls: SlotStory[] = [
		{
			name: 'status',
			type: 'select',
			defaultValue: 'read',
			options: ['sent', 'delivered', 'read']
		},
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
		<div class="_c1">
			<span class="_c2">Status:</span>
			<MessageStatus
				status={values.status as 'sent' | 'delivered' | 'read'}
				size={values.size as 'sm' | 'md' | 'lg'}
			/>
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		border-radius: 0.5rem;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		background-color: var(--color-background-primary);
		padding: 1rem;
	}
	._c2 {
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}
</style>
