<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import type { StructWbdSession } from '$stylist/wbd/type/struct/session';
	import type { StructWbdSessionLifecycleAction } from '$stylist/wbd/type/struct/session-lifecycle-action';
	import SessionLifecycleToolbar from './index.svelte';

	const controls: SlotStory[] = [];
	const session: StructWbdSession = {
		id: 'session-1',
		title: 'Resource base forecast 2026',
		status: 'round_2',
		currentRound: 2,
		maxRounds: 3
	};

	function handleTriggerAction(action: StructWbdSessionLifecycleAction): void {
		console.info('WBD lifecycle action', action.id);
	}
</script>

<Story
	title="Session Lifecycle Toolbar"
	component={SessionLifecycleToolbar}
	category="Organisms/Wbd"
	description="Coordinator actions for opening, closing, advancing, and finalizing rounds."
	{controls}
>
	{#snippet children()}
		<SessionLifecycleToolbar {session} onTriggerAction={handleTriggerAction} />
	{/snippet}
</Story>
