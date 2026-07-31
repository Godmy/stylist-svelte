<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import AuthError from './index.svelte';

	const controls: SlotStory[] = [
		{ name: 'message', type: 'text', defaultValue: 'Invalid email or password. Try again.' }
	];
</script>

<Story
	id="auth-atom-auth-error"
	title="AuthError"
	component={AuthError}
	category="Auth"
	description="Inline authentication error message."
	tags={['auth', 'error', 'feedback']}
	{controls}
>
	{#snippet children(values: any)}
		<div class="_c1">
			<AuthError message={String(values.message || '')} />
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		max-width: 24rem;
		padding: 1rem;
	}
</style>
