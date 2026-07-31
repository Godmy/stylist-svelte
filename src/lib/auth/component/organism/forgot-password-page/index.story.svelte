<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import ForgotPasswordPage from './index.svelte';
	import type { PasswordResetRequest } from '$stylist/auth/type/object/password-reset-request';

	const controls: SlotStory[] = [
		{ name: 'title', type: 'text', defaultValue: 'Forgot password?' },
		{ name: 'subtitle', type: 'text', defaultValue: 'No worries, reset instructions will arrive by email.' },
		{ name: 'isLoading', type: 'boolean', defaultValue: false },
		{ name: 'success', type: 'boolean', defaultValue: false },
		{ name: 'error', type: 'text', defaultValue: '' }
	];

	function handleSubmit(data: PasswordResetRequest) {
		console.info('Forgot password page story submit', data);
	}
</script>

<Story
	id="auth-organism-forgot-password-page"
	title="ForgotPasswordPage"
	component={ForgotPasswordPage}
	category="Auth"
	description="Full password reset request page."
	tags={['auth', 'password', 'page']}
	{controls}
>
	{#snippet children(values: any)}
		<div class="_c1">
			<ForgotPasswordPage
				title={String(values.title || 'Forgot password?')}
				subtitle={String(values.subtitle || '')}
				formState={{
					isLoading: Boolean(values.isLoading),
					success: Boolean(values.success),
					error: String(values.error || '')
				}}
				loginHref="/login"
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
