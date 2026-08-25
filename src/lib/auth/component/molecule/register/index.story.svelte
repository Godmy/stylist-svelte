<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import Register from './index.svelte';
	import type { RegistrationData } from '$stylist/auth/type/object/registration-data';

	const controls: SlotStory[] = [
		{ name: 'isLoading', type: 'boolean', defaultValue: false },
		{ name: 'error', type: 'text', defaultValue: '' }
	];

	function handleSubmit(data: RegistrationData) {
		console.info('Register story submit', data);
	}
</script>

<Story
	id="auth-molecule-register"
	title="Register"
	component={Register}
	category="Auth"
	description="Reusable account registration form."
	tags={['auth', 'register', 'form']}
	{controls}
>
	{#snippet children(values: any)}
		<div class="_c1">
			<Register
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
		max-width: 30rem;
		padding: 1rem;
	}
</style>
