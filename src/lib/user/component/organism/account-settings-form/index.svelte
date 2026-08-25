<script lang="ts">
	import type { RecipeAccountSettingsForm } from '$stylist/user/interface/recipe/account-settings-form';
	import { createAccountSettingsFormState } from './state.svelte';

	let props: RecipeAccountSettingsForm = $props();
	const state = createAccountSettingsFormState(props);
</script>

<form class={state.containerClasses} {...state.restProps}>
	<div>
		<label class="_c1" for={state.nameId}>Name</label><input
			id={state.nameId}
			class="_c2"
			value={state.name}
		/>
	</div>
	<div>
		<label class="_c1" for={state.emailId}>Email</label><input
			id={state.emailId}
			class="_c2"
			value={state.email}
		/>
	</div>
	<div>
		<label class="_c1" for={state.localeId}>Locale</label><input
			id={state.localeId}
			class="_c2"
			value={state.locale}
		/>
	</div>
	<button type="submit" class="_c3">Save</button>
</form>

<style>
	._c1 {
		font-size: 0.875rem;
		line-height: 1.25rem;
	}
	._c2 {
		width: 100%;
		border-radius: 0.25rem;
		border-width: 1px;
		border-style: solid;
		padding-left: 0.5rem;
		padding-right: 0.5rem;
		padding-top: 0.25rem;
		padding-bottom: 0.25rem;
	}
	._c3 {
		border-radius: 0.25rem;
		background-color: var(--color-primary-600);
		padding-left: 0.75rem;
		padding-right: 0.75rem;
		padding-top: 0.25rem;
		padding-bottom: 0.25rem;
		color: var(--color-text-inverse);
	}
</style>
