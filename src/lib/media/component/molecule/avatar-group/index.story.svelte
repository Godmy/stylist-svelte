<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import AvatarGroup from './index.svelte';

	const controls: SlotStory[] = [
		{ name: 'maxVisible', type: 'number', defaultValue: 3, min: 1, max: 8 },
		{ name: 'size', type: 'select', options: ['sm', 'md', 'lg'], defaultValue: 'md' }
	];

	const avatars = [
		{
			id: '1',
			name: 'John Doe',
			src: 'https://i.pravatar.cc/120?img=1',
			status: 'online' as const
		},
		{
			id: '2',
			name: 'Jane Smith',
			src: 'https://i.pravatar.cc/120?img=2',
			status: 'away' as const
		},
		{
			id: '3',
			name: 'Bob Lee',
			src: 'https://i.pravatar.cc/120?img=3',
			status: 'offline' as const
		},
		{ id: '4', name: 'Sara Kim', src: 'https://i.pravatar.cc/120?img=4', status: 'busy' as const },
		{
			id: '5',
			name: 'Mike Hall',
			src: 'https://i.pravatar.cc/120?img=5',
			status: 'online' as const
		}
	];
</script>

<Story
	id="molecules-avatar-group"
	title="Molecules / Information / Media / AvatarGroup"
	component={AvatarGroup}
	category="Molecules/Information/Media"
	description="Stacked avatar set with overflow indicator."
	{controls}
>
	{#snippet children(args: any)}
		<div class="_c1">
			<AvatarGroup {avatars} maxVisible={args.maxVisible} size={args.size} />
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
