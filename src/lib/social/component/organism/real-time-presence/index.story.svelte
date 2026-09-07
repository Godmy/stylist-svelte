<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';

	import RealTimePresence from './index.svelte';

	type PresenceUser = {
		id: string;
		name: string;
		avatar?: string;
		status: 'online' | 'away' | 'busy' | 'offline';
		lastSeen?: Date;
		cursorPosition?: { x: number; y: number };
		activeArea?: string;
	};

	const users: PresenceUser[] = [
		{
			id: '1',
			name: 'John Doe',
			status: 'online',
			activeArea: 'Editing the launch brief',
			cursorPosition: { x: 280, y: 144 }
		},
		{
			id: '2',
			name: 'Jane Smith',
			status: 'away',
			lastSeen: new Date(Date.now() - 600000),
			activeArea: 'Reviewing comments',
			cursorPosition: { x: 92, y: 318 }
		},
		{
			id: '3',
			name: 'Bob Johnson',
			status: 'offline',
			lastSeen: new Date(Date.now() - 3600000)
		},
		{
			id: '4',
			name: 'Alice Brown',
			status: 'busy',
			activeArea: 'Resolving moderation queue',
			cursorPosition: { x: 414, y: 72 }
		}
	];

	type Props = {
		title: string;
		showAvatars: boolean;
		showStatus: boolean;
		showLastSeen: boolean;
		showCursorPositions: boolean;
	};

	const controls: SlotStory[] = [
		{ name: 'title', type: 'text', defaultValue: 'People viewing this workspace' },
		{ name: 'showAvatars', type: 'boolean', defaultValue: true },
		{ name: 'showStatus', type: 'boolean', defaultValue: true },
		{ name: 'showLastSeen', type: 'boolean', defaultValue: true },
		{ name: 'showCursorPositions', type: 'boolean', defaultValue: false }
	];
</script>

<Story
	id="organisms-real-time-presence"
	title="Real-Time Presence"
	component={RealTimePresence}
	category="Organisms"
	description="Live collaboration roster showing active users, availability, current area and optional cursor coordinates."
	{controls}
>
	{#snippet children(values: any)}
		<div class="sb-organisms-real-time-presence _c1">
			<p class="_c3">Collaboration presence panel</p>
			<p class="_c4">Shows who is currently around a shared screen or workspace.</p>
			<RealTimePresence
				users={users as any}
				title={values.title}
				showAvatars={values.showAvatars}
				showStatus={values.showStatus}
				showLastSeen={values.showLastSeen}
				showCursorPositions={values.showCursorPositions}
				class="_c2"
			/>
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		padding: 1rem;
	}
	._c3 {
		margin: 0;
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 600;
		color: var(--color-text-primary);
	}
	._c4 {
		margin: 0.25rem 0 1rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}
	._c2 {
		margin-top: 0.5rem;
		margin-bottom: 0.5rem;
	}
</style>
