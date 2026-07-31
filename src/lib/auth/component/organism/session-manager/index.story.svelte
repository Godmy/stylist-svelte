<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import SessionManager from './index.svelte';

	const controls: SlotStory[] = [
		{ name: 'activeSessions', type: 'number', defaultValue: 3 },
		{ name: 'expiresAt', type: 'text', defaultValue: '2026-07-23 18:30' }
	];
</script>

<Story
	id="auth-organism-session-manager"
	title="SessionManager"
	component={SessionManager}
	category="Auth"
	description="Session overview and termination action."
	tags={['auth', 'session', 'security']}
	{controls}
>
	{#snippet children(values: any)}
		<div class="_c1">
			<SessionManager
				activeSessions={Number(values.activeSessions || 0)}
				expiresAt={String(values.expiresAt || '')}
			/>
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		max-width: 28rem;
		padding: 1rem;
	}
</style>
