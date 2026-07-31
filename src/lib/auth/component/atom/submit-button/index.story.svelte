<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import SubmitButton from './index.svelte';

	const controls: SlotStory[] = [
		{ name: 'label', type: 'text', defaultValue: 'Sign in' },
		{ name: 'loadingLabel', type: 'text', defaultValue: 'Signing in...' },
		{ name: 'isLoading', type: 'boolean', defaultValue: false },
		{ name: 'disabled', type: 'boolean', defaultValue: false }
	];
</script>

<Story
	id="auth-atom-submit-button"
	title="SubmitButton"
	component={SubmitButton}
	category="Auth"
	description="Primary submit button for auth forms."
	tags={['auth', 'button', 'submit']}
	{controls}
>
	{#snippet children(values: any)}
		<div class="_c1">
			<SubmitButton
				label={String(values.label || 'Submit')}
				loadingLabel={String(values.loadingLabel || 'Loading...')}
				isLoading={Boolean(values.isLoading)}
				disabled={Boolean(values.disabled)}
			/>
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		max-width: 24rem;
		padding: 1rem;
	}
</style>
