<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import RegisterPage from './index.svelte';
	import type { RegistrationData } from '$stylist/auth/type/object/registration-data';

	const controls: SlotStory[] = [
		{ name: 'title', type: 'text', defaultValue: 'Create account' },
		{ name: 'subtitle', type: 'text', defaultValue: 'Start with a reusable auth form from the library.' },
		{ name: 'isLoading', type: 'boolean', defaultValue: false },
		{ name: 'error', type: 'text', defaultValue: '' }
	];

	function handleSubmit(data: RegistrationData) {
		console.info('Register page story submit', data);
	}
</script>

<Story
	id="auth-organism-register-page"
	title="RegisterPage"
	component={RegisterPage}
	category="Auth"
	description="Full registration page composition."
	tags={['auth', 'register', 'page']}
	{controls}
>
	{#snippet children(values: any)}
		<div class="_c1">
			<RegisterPage
				title={String(values.title || 'Create account')}
				subtitle={String(values.subtitle || '')}
				formState={{
					isLoading: Boolean(values.isLoading),
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
		min-height: 48rem;
	}
</style>
