<script lang="ts">
	import type { RecipePermissionGate } from '$stylist/management/interface/recipe/permission-gate';
	import createPermissionGateState from './state.svelte';

	let props: Parameters<typeof createPermissionGateState>[0] = $props();
	const state = createPermissionGateState(props);
</script>

{#if state.hasPermission}
	{#if props.children}{#if props.children}{@render props.children()}{/if}{/if}
{:else if state.fallback}
	{@render state.fallback()}
{:else}
	<div class="_c1">You do not have permission to view this content.</div>
{/if}

<style>
	._c1 {
		padding: 1rem;
		text-align: center;
		color: var(--color-text-secondary);
	}
</style>
