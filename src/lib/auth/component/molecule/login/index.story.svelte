<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import Login from './index.svelte';
	import type { LoginCredentials } from '$stylist/auth/type/object/login-credentials';

	const controls: SlotStory[] = [
		{ name: 'isLoading', type: 'boolean', defaultValue: false },
		{ name: 'error', type: 'text', defaultValue: '' }
	];

	function handleSubmit(credentials: LoginCredentials) {
		console.info('Login story submit', credentials);
	}
</script>

<Story
	id="auth-molecule-login"
	title="Login"
	component={Login}
	category="Auth"
	description="Reusable login form."
	tags={['auth', 'login', 'form']}
	{controls}
>
	{#snippet children(values: any)}
		<div class="_c1">
			<Login
				formState={{
					isLoading: Boolean(values.isLoading),
					error: String(values.error || '')
				}}
				onSubmit={handleSubmit}
			/>
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		max-width: 26rem;
		padding: 1rem;
	}
</style>
