<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { AuthGuardRecipe } from '$stylist/management/interface/recipe/auth-guard';
  import { resolveAuthGuardState } from '$stylist/communication/function/script/resolve-auth-guard-state';
  import { AuthGuardStyleManager } from '$stylist/communication/class/style-manager/auth-guard';
  import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';

  type Props = AuthGuardRecipe & {
    class?: string;
    fallback?: Snippet;
    unauthorizedFallback?: Snippet;
    children?: Snippet;
  };

  let {
    isAuthenticated = false,
    requiredRole,
    allowedRoles = [],
    userRoles = [],
    redirectUrl = '/login',
    showLoadingState = false,
    fallback,
    unauthorizedFallback,
    onAuthChange,
    onContactAdmin,
    class: hostClass = '',
    contentClass = '',
    fallbackClass = '',
    children,
    ...restProps
  }: Props = $props();

  let loading = $derived(showLoadingState);
  let rootClasses = $derived(AuthGuardStyleManager.getRootClasses(mergeClassNames(hostClass)));
  let sectionClasses = $derived(AuthGuardStyleManager.getSectionClasses(fallbackClass ?? ''));
  let titleClasses = $derived(AuthGuardStyleManager.getTitleClasses(contentClass ?? ''));
  let textClasses = $derived(AuthGuardStyleManager.getTextClasses(contentClass ?? ''));

  let resolved = $derived(
    resolveAuthGuardState({
      isAuthenticated,
      requiredRole,
      allowedRoles,
      userRoles
    })
  );

  $effect(() => {
    onAuthChange?.(resolved.isAuthorized);
  });
</script>

{#if loading}
  <div class={sectionClasses} {...restProps}>
    <p class={titleClasses}>Verifying access rights</p>
    <p class={textClasses}>Please wait while we check your permissions.</p>
  </div>
{:else if !resolved.isLoggedIn}
  <div class={sectionClasses} {...restProps}>
    {#if fallback}
      {@render fallback()}
    {:else}
      <h3 class={titleClasses}>Access denied</h3>
      <p class={textClasses}>You need to sign in to access this resource.</p>
      <a href={redirectUrl} class={AuthGuardStyleManager.getActionLinkClasses()}>
        Sign in to your account
      </a>
    {/if}
  </div>
{:else if !resolved.hasRequiredPermissions}
  <div class={sectionClasses} {...restProps}>
    {#if unauthorizedFallback}
      {@render unauthorizedFallback()}
    {:else}
      <h3 class={titleClasses}>Insufficient permissions</h3>
      <p class={textClasses}>You do not have the required permissions for this resource.</p>
      {#if onContactAdmin}
        <button type="button" class={AuthGuardStyleManager.getActionLinkClasses()} onclick={onContactAdmin}>
          Contact administrator
        </button>
      {/if}
    {/if}
  </div>
{:else}
  <div class={rootClasses} {...restProps}>
    {#if children}
      {@render children()}
    {/if}
  </div>
{/if}





