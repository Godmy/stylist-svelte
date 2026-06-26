<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import AdvancedPasswordInput from './index.svelte';
	import type { TokenControllerType } from '$stylist/interaction/type/record/controller-type';

	const controls = [
		{
			name: 'placeholder',
			type: 'text' as TokenControllerType,
			defaultValue: 'Enter password',
			description: 'Placeholder text for the password input'
		},
		{
			name: 'showStrength',
			type: 'boolean' as TokenControllerType,
			defaultValue: true,
			description: 'Whether to show the password strength indicator'
		},
		{
			name: 'disabled',
			type: 'boolean' as TokenControllerType,
			defaultValue: false,
			description: 'Disable the password field'
		}
	];

	let password = $state('Starter123!');
</script>

<Story
	{controls}
	title="AdvancedPasswordInput Component"
	description="A password input field with strength indicator and visibility toggle"
>
	{#snippet children(controlValues: any)}
		<div class="_c1">
			<AdvancedPasswordInput
				value={password}
				placeholder={controlValues.placeholder}
				showStrengthMeter={controlValues.showStrength}
				disabled={controlValues.disabled}
				onValueChange={(next: string) => (password = next)}
			/>
			<p class="_c4">Length: {password.length} characters</p>
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		display: grid;
		gap: 0.75rem;
		max-width: 28rem;
		padding: 1.5rem;
	}
	._c4 {
		margin: 0;
		font-size: 0.875rem;
		color: var(--color-text-secondary);
	}
</style>
