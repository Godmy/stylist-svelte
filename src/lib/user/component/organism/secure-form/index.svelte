<script lang="ts">
	import type { RecipeSecureForm } from '$stylist/user/interface/recipe/secure-form';
	import BaseIcon from '$stylist/svg/component/atom/icon/index.svelte';
	const Lock = 'lock';

	import { createSecureFormState } from '$stylist/user/function/state/secure-form/index.svelte';

	let props: RecipeSecureForm = $props();
	const state = createSecureFormState(props);
</script>

<form class={state.containerClasses} {...state.restProps}>
	<div class="_c1">
		<BaseIcon name={Lock} class="_c2" /> Secure Form
	</div>
	<input class="_c3" type="password" placeholder="Sensitive value" />
	<input type="hidden" value={state.token} />
	<button class="_c4" type="submit">Submit securely</button>
</form>

<style>
	._c1 {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-primary);
	}
	._c2 {
		height: 1rem;
		width: 1rem;
	}
	._c3 {
		width: 100%;
		border-radius: 0.25rem;
		border-width: 1px;
		border-style: solid;
		padding-left: 0.5rem;
		padding-right: 0.5rem;
		padding-top: 0.25rem;
		padding-bottom: 0.25rem;
	}
	._c4 {
		border-radius: 0.25rem;
		background-color: var(--color-primary-600);
		padding-left: 0.75rem;
		padding-right: 0.75rem;
		padding-top: 0.25rem;
		padding-bottom: 0.25rem;
		color: var(--color-text-inverse);
	}
</style>
