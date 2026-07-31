<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import ForgotPassword from './index.svelte';
	import type { PasswordResetRequest } from '$stylist/auth/type/object/password-reset-request';

	const controls: SlotStory[] = [
		{ name: 'isLoading', type: 'boolean', defaultValue: false },
		{ name: 'success', type: 'boolean', defaultValue: false },
		{ name: 'error', type: 'text', defaultValue: '' },
		{ name: 'loginHref', type: 'text', defaultValue: '/login' }
	];

	function handleSubmit(data: PasswordResetRequest) {
		console.info('Forgot password story submit', data);
	}
</script>

<Story
	id="auth-molecule-forgot-password"
	title="ForgotPassword"
	component={ForgotPassword}
	category="Auth"
	description="Password reset request form."
	tags={['auth', 'password', 'form']}
	{controls}
>
	{#snippet children(values: any)}
		<div class="_c1">
			<ForgotPassword
				formState={{
					isLoading: Boolean(values.isLoading),
					success: Boolean(values.success),
					error: String(values.error || '')
				}}
				loginHref={String(values.loginHref || '/login')}
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
