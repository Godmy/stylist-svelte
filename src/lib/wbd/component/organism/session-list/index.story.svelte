<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import type { StructWbdSession } from '$stylist/wbd/type/struct/session';
	import SessionList from './index.svelte';

	const controls: SlotStory[] = [];
	const sessions: StructWbdSession[] = [
		{
			id: 'session-1',
			title: 'Resource base forecast 2026',
			description: 'Three-round expert assessment for reserve uncertainty.',
			status: 'round_2',
			currentRound: 2,
			maxRounds: 3,
			expertCount: 12,
			questionCount: 18,
			responseCount: 96
		},
		{
			id: 'session-2',
			title: 'Market access scenarios',
			description: 'Completed pricing and logistics forecast.',
			status: 'completed',
			currentRound: 3,
			maxRounds: 3,
			expertCount: 9,
			questionCount: 14,
			responseCount: 126
		}
	];

	function handleSelectSession(sessionId: string): void {
		console.info('WBD session selected', sessionId);
	}

	function handleCreateSession(): void {
		console.info('WBD create session requested');
	}
</script>

<Story
	title="Session List"
	component={SessionList}
	category="Organisms/Wbd"
	description="Coordinator list of WBD sessions."
	{controls}
>
	{#snippet children()}
		<SessionList
			{sessions}
			selectedSessionId="session-1"
			onSelectSession={handleSelectSession}
			onCreateSession={handleCreateSession}
		/>
	{/snippet}
</Story>
