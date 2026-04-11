<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { AuthGuardRecipe } from '$stylist/management/interface/recipe/auth-guard';
  import { createAuthGuardState } from '$stylist/communication/function/state/auth-guard';

  export type AuthGuardProps = AuthGuardRecipe & {
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
      <a href={state.redirectUrl} class={state.actionLinkClasses}>
        Sign in to your account
      </a>
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
        <button type="button" class={state.actionLinkClasses} onclick={() => props.onContactAdmin?.()}>
          Contact administrator
        </button>
      {/if}
    {/if}
  </div>
{:else}
  <div class={state.rootClasses} {...props}>
    {#if props.children}
      {@render props.children()}
    {/if}
  </div>
{/if}
