<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import ChatStatusIndicator from './index.svelte';

	const controls: SlotStory[] = [
		{
			name: 'status',
			type: 'select',
			defaultValue: 'online',
			options: ['online', 'offline', 'away', 'typing']
		},
		{ name: 'size', type: 'select', defaultValue: 'sm', options: ['sm', 'md', 'lg'] },
		{ name: 'showLabel', type: 'boolean', defaultValue: false }
	];
</script>

<Story
	{controls}
	component={ChatStatusIndicator}
	title="ChatStatusIndicator"
	category="Atoms/Interaction/Chat"
	description="User presence indicator for chat interfaces"
>
	{#snippet children(values: any)}
		<div class="_c1">
			<ChatStatusIndicator
				status={values.status as 'online' | 'offline' | 'away' | 'typing'}
				size={values.size as 'sm' | 'md' | 'lg'}
				showLabel={values.showLabel as boolean}
			/>
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		border-radius: 0.25rem;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		background-color: var(--color-background-secondary);
		padding: 1rem;
	}
</style>
