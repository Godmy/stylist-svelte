<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import LoginPage from './index.svelte';
	import type { LoginCredentials } from '$stylist/auth/type/object/login-credentials';

	const controls: SlotStory[] = [
		{ name: 'title', type: 'text', defaultValue: 'Sign in' },
		{ name: 'subtitle', type: 'text', defaultValue: 'Use your workspace account to continue.' },
		{ name: 'isLoading', type: 'boolean', defaultValue: false },
		{ name: 'error', type: 'text', defaultValue: '' }
	];

	function handleSubmit(credentials: LoginCredentials) {
		console.info('Login page story submit', credentials);
	}
</script>

<Story
	id="auth-organism-login-page"
	title="LoginPage"
	component={LoginPage}
	category="Auth"
	description="Full login page composition."
	tags={['auth', 'login', 'page']}
	{controls}
>
	{#snippet children(values: any)}
		<div class="_c1">
			<LoginPage
				title={String(values.title || 'Sign in')}
				subtitle={String(values.subtitle || '')}
				formState={{
					isLoading: Boolean(values.isLoading),
					error: String(values.error || '')
				}}
				forgotPasswordHref="/forgot-password"
				registerHref="/register"
				onSubmit={handleSubmit}
			/>
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		min-height: 42rem;
	}
</style>
