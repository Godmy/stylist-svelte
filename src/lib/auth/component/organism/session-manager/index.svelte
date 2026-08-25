<script lang="ts">
	import type { RecipeSessionManager } from '$stylist/auth/interface/recipe/session-manager';
	import { createSessionManagerState } from './state.svelte';

	let props: RecipeSessionManager = $props();
	const state = createSessionManagerState(props);
</script>

<div class={state.containerClasses} {...state.restProps}>
	<div class="_c1">Session Manager</div>
	<div class="_c2">
		Active sessions: {state.activeSessions}
	</div>
	<div class="_c3">Expires at: {state.expiresAt}</div>
	<button class="_c4" type="button">Terminate other sessions</button>
</div>

<style>
	._c1 {
		font-weight: 600;
	}
	._c2 {
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-primary);
	}
	._c3 {
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}
	._c4 {
		border-radius: 0.25rem;
		border-width: 1px;
		border-style: solid;
		padding-left: 0.75rem;
		padding-right: 0.75rem;
		padding-top: 0.25rem;
		padding-bottom: 0.25rem;
	}
</style>
