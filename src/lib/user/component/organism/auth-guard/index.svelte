<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { RecipeAuthGuard } from '$stylist/user/interface/recipe/auth-guard';
	import createAuthGuardState from '$stylist/user/function/state/auth-guard/index.svelte';

	export type AuthGuardProps = RecipeAuthGuard & {
		class?: string;
		fallback?: Snippet;
		unauthorizedFallback?: Snippet;
		children?: Snippet;
		onAuthChange?: (isAuthorized: boolean) => void;
		onContactAdmin?: () => void;
	};

	let props: AuthGuardProps = $props();

	const state = createAuthGuardState(props);

	$effect(() => {
		props.onAuthChange?.(state.resolved.isAuthorized);
	});
</script>

{#if state.loading}
	<div class={state.sectionClasses} {...props}>
		<p class={state.titleClasses}>Verifying access rights</p>
		<p class={state.textClasses}>Please wait while we check your permissions.</p>
	</div>
{:else if !state.resolved.isLoggedIn}
	<div class={state.sectionClasses} {...props}>
		{#if props.fallback}
			{@render props.fallback()}
		{:else}
			<h3 class={state.titleClasses}>Access denied</h3>
			<p class={state.textClasses}>You need to sign in to access this resource.</p>
			<a href={state.redirectUrl} class={state.actionLinkClasses}> Sign in to your account </a>
		{/if}
	</div>
{:else if !state.resolved.hasRequiredPermissions}
	<div class={state.sectionClasses} {...props}>
		{#if props.unauthorizedFallback}
			{@render props.unauthorizedFallback()}
		{:else}
			<h3 class={state.titleClasses}>Insufficient permissions</h3>
			<p class={state.textClasses}>You do not have the required permissions for this resource.</p>
			{#if props.onContactAdmin}
				<button
					type="button"
					class={state.actionLinkClasses}
					onclick={() => props.onContactAdmin?.()}
				>
					Contact administrator
				</button>
			{/if}
		{/if}
	</div>
{:else}
	<div class={state.rootClasses} {...props}>
		{#if props.children}
			{#if props.children}{@render props.children()}{/if}
		{/if}
	</div>
{/if}

<style>
	.c-auth-guard {
		width: 100%;
	}

	.c-auth-guard__section {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 0.75rem;
		border-radius: 1.5rem;
		border: 1px solid var(--color-border-primary, #e5e7eb);
		background: var(--color-background-primary, #fff);
		padding: 1.75rem 1.5rem;
		text-align: center;
		box-shadow: 0 2px 8px rgb(0 0 0 / 0.08);
	}

	.c-auth-guard__title {
		font-size: 1.125rem;
		font-weight: 600;
		letter-spacing: 0.01em;
		color: var(--color-text-primary, #111827);
		margin: 0;
	}

	.c-auth-guard__text {
		max-width: 40ch;
		font-size: 0.875rem;
		line-height: 1.5;
		color: var(--color-text-secondary, #6b7280);
		margin: 0;
	}

	.c-auth-guard__action {
		display: inline-flex;
		align-items: center;
		border-radius: 9999px;
		background: var(--color-primary-600, #4f46e5);
		padding: 0.5rem 1rem;
		font-size: 0.875rem;
		font-weight: 500;
		color: var(--color-text-inverse, #fff);
		text-decoration: none;
		transition: background 0.15s;
	}

	.c-auth-guard__action:hover {
		background: var(--color-primary-700, #4338ca);
	}
</style>
