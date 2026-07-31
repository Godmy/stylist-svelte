<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import SecureForm from './index.svelte';

	const controls: SlotStory[] = [
		{ name: 'token', type: 'text', defaultValue: 'csrf-demo-token' }
	];
</script>

<Story
	id="auth-organism-secure-form"
	title="SecureForm"
	component={SecureForm}
	category="Auth"
	description="Secure form shell with hidden token."
	tags={['auth', 'security', 'form']}
	{controls}
>
	{#snippet children(values: any)}
		<div class="_c1">
			<SecureForm token={String(values.token || '')} />
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		max-width: 28rem;
		padding: 1rem;
	}
</style>
