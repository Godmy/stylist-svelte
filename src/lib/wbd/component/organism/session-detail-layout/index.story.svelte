<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import type { StructWbdSession } from '$stylist/wbd/type/struct/session';
	import SessionDetailLayout from './index.svelte';

	const controls: SlotStory[] = [];
	const session: StructWbdSession = {
		id: 'session-1',
		title: 'Resource base forecast 2026',
		description: 'Coordinator workspace for a three-round Wideband Delphi assessment.',
		status: 'round_2',
		currentRound: 2,
		maxRounds: 3,
		expertCount: 12,
		questionCount: 18,
		responseCount: 96,
		createdAt: '2026-08-01T09:00:00Z'
	};
</script>

<Story
	title="Session Detail Layout"
	component={SessionDetailLayout}
	category="Organisms/Wbd"
	description="Main two-column shell for a WBD session workspace."
	{controls}
>
	{#snippet children()}
		<SessionDetailLayout {session}>
			{#snippet sidebar()}
				<nav style="display: grid; gap: 0.5rem;">
					<a href="/app/sessions/session-1">Overview</a>
					<a href="/app/sessions/session-1/questions">Questions</a>
					<a href="/app/sessions/session-1/experts">Experts</a>
				</nav>
			{/snippet}
			<section style="display: grid; gap: 1rem;">
				<strong>Round 2 is collecting expert answers.</strong>
				<p>Aggregates will be locked when the coordinator closes the round.</p>
			</section>
		</SessionDetailLayout>
	{/snippet}
</Story>
