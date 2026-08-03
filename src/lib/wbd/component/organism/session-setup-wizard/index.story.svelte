<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import type { StructWbdSession } from '$stylist/wbd/type/struct/session';
	import SessionSetupWizard from './index.svelte';

	const controls: SlotStory[] = [
		{ name: 'step', type: 'select', defaultValue: 'basics', options: ['basics', 'questions', 'experts', 'review'] }
	];
	const session: Partial<StructWbdSession> = {
		title: 'Resource base forecast 2026',
		description: 'Estimate key reserve and approval outcomes.',
		status: 'draft',
		currentRound: 0,
		maxRounds: 3
	};

	function handleUpdateSession(nextSession: Partial<StructWbdSession>): void {
		console.info('WBD setup session updated', nextSession);
	}

	function handleChangeStep(step: 'basics' | 'questions' | 'experts' | 'review'): void {
		console.info('WBD setup step changed', step);
	}

	function handleCreateSession(): void {
		console.info('WBD setup create session');
	}
</script>

<Story
	title="Session Setup Wizard"
	component={SessionSetupWizard}
	category="Organisms/Wbd"
	description="Coordinator wizard for creating a new WBD session."
	{controls}
>
	{#snippet children(values: any)}
		<SessionSetupWizard
			{session}
			step={values.step}
			onUpdateSession={handleUpdateSession}
			onChangeStep={handleChangeStep}
			onCreateSession={handleCreateSession}
		/>
	{/snippet}
</Story>
