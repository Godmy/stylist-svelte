<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import SessionManager from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
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
