<script lang="ts">
	import type { RecipeSecuritySettings } from '$stylist/auth/interface/recipe/security-settings';
	import { createSecuritySettingsState } from './state.svelte';

	let props: RecipeSecuritySettings = $props();
	const state = createSecuritySettingsState(props);
</script>

<form class={state.containerClasses} {...state.restProps}>
	<label class="_c1"
		><input type="checkbox" checked={state.twoFactor} /> Two-factor authentication</label
	>
	<label class="_c1"><input type="checkbox" checked={state.loginAlerts} /> Login alerts</label>
	<button class="_c2" type="submit">Save security settings</button>
</form>

<style>
	._c1 {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
	}
	._c2 {
		border-radius: 0.25rem;
		background-color: var(--color-primary-600);
		padding-left: 0.75rem;
		padding-right: 0.75rem;
		padding-top: 0.25rem;
		padding-bottom: 0.25rem;
		color: var(--color-text-inverse);
	}
</style>

