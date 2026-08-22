<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import LoginField from './index.svelte';

	const controls: SlotStory[] = [
		{ name: 'label', type: 'text', defaultValue: 'Email' },
		{
			name: 'fieldType',
			type: 'select',
			options: ['email', 'password', 'text'],
			defaultValue: 'email'
		},
		{ name: 'placeholder', type: 'text', defaultValue: 'you@example.com' },
		{ name: 'value', type: 'text', defaultValue: '' },
		{ name: 'fieldError', type: 'text', defaultValue: '' },
		{ name: 'disabled', type: 'boolean', defaultValue: false },
		{ name: 'required', type: 'boolean', defaultValue: true }
	];
</script>

<Story
	id="auth-atom-login-field"
	title="LoginField"
	component={LoginField}
	category="Auth"
	description="Labeled input for auth forms."
	tags={['auth', 'input', 'field']}
	{controls}
>
	{#snippet children(values: any)}
		<div class="_c1">
			<LoginField
				id="story-login-field"
				label={String(values.label || 'Field')}
				fieldType={values.fieldType}
				placeholder={String(values.placeholder || '')}
				value={String(values.value || '')}
				fieldError={String(values.fieldError || '')}
				disabled={Boolean(values.disabled)}
				required={Boolean(values.required)}
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
