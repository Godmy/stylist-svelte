<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import AvatarGroup from './index.svelte';

	const controls: SlotStory[] = [
		{ name: 'maxVisible', type: 'number', defaultValue: 3, min: 1, max: 8 },
		{ name: 'size', type: 'select', options: ['sm', 'md', 'lg'], defaultValue: 'md' },
		{
			name: 'stackDirection',
			type: 'select',
			options: ['horizontal', 'vertical'],
			defaultValue: 'horizontal'
		},
		{ name: 'showStatus', type: 'boolean', defaultValue: true },
		{ name: 'showTooltip', type: 'boolean', defaultValue: true }
	];

	const avatars = [
		{
			id: '1',
			name: 'John Doe',
			role: 'Product Lead',
			src: 'https://i.pravatar.cc/120?img=1',
			status: 'online' as const
		},
		{
			id: '2',
			name: 'Jane Smith',
			role: 'Designer',
			src: 'https://i.pravatar.cc/120?img=2',
			status: 'away' as const
		},
		{
			id: '3',
			name: 'Bob Lee',
			role: 'Engineer',
			src: 'https://i.pravatar.cc/120?img=3',
			status: 'offline' as const
		},
		{
			id: '4',
			name: 'Sara Kim',
			role: 'Engineer',
			src: 'https://i.pravatar.cc/120?img=4',
			status: 'busy' as const
		},
		{
			id: '5',
			name: 'Mike Hall',
			role: 'QA',
			src: 'https://i.pravatar.cc/120?img=5',
			status: 'online' as const
		}
	];
</script>

<Story
	id="molecules-avatar-group"
	title="Molecules / Information / User / AvatarGroup"
	component={AvatarGroup}
	category="Molecules/Information/User"
	description="Stacked avatar set with overflow indicator, optional status dots, tooltip and stack direction."
	{controls}
>
	{#snippet children(args: any)}
		<div class="_c1">
			<AvatarGroup
				{avatars}
				maxVisible={args.maxVisible}
				size={args.size}
				stackDirection={args.stackDirection}
				showStatus={args.showStatus}
				showTooltip={args.showTooltip}
			/>
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		border-radius: 0.75rem;
		background-color: var(--color-background-secondary);
		padding: 1.5rem;
	}
</style>
