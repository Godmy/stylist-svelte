<script lang="ts">
	import type { RecipeUserProfileCard } from '$stylist/user/interface/recipe/user-profile-card';
	import { createUserProfileCardState } from './state.svelte';

	let props: RecipeUserProfileCard = $props();
	const state = createUserProfileCardState(props);
</script>

<div class={state.containerClasses} {...state.restProps}>
	<div class="_c1">
		{state.initial}
	</div>
	<div class="_c2">{state.name}</div>
	<div class="_c3">{state.role}</div>
	<div class="_c3">{state.email}</div>
</div>

<style>
	._c1 {
		display: flex;
		height: 3rem;
		width: 3rem;
		align-items: center;
		justify-content: center;
		border-radius: 9999px;
		background-color: var(--color-primary-100);
		font-weight: 600;
		color: var(--color-primary-700);
	}
	._c2 {
		margin-top: 0.5rem;
		font-weight: 600;
	}
	._c3 {
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}
</style>

