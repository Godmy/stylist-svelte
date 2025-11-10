<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { Lock, AlertCircle, User, ShieldAlert } from 'lucide-svelte';
  import type { Snippet } from 'svelte';
  import Loader from '../../atoms/feedback/Loader.svelte';

  type Props = {
    isAuthenticated?: boolean;
    requiredRole?: string;
    allowedRoles?: string[];
    redirectUrl?: string;
    fallback?: Snippet;
    unauthorizedFallback?: Snippet;
    onAuthChange?: (isAuthenticated: boolean) => void;
    onContactAdmin?: () => void; // Added onContactAdmin prop
    class?: string;
    headerClass?: string;
    contentClass?: string;
    fallbackClass?: string;
    children?: Snippet; // Added for Svelte 5 slot replacement
  } & HTMLAttributes<HTMLDivElement>;

  let {
    isAuthenticated = false,
    requiredRole,
    allowedRoles = [],
    redirectUrl = '/login',
    fallback,
    unauthorizedFallback,
    onAuthChange,
    onContactAdmin, // Destructure onContactAdmin
    class: className = '',
    headerClass = '',
    contentClass = '',
    fallbackClass = '',
    children, // Destructure children
    ...restProps
  }: Props = $props();

  let isAuthorized = $state(false);
  let isLoading = $state(true); // Added isLoading state
  let isLoggedIn = $state(false); // Added isLoggedIn state
  let loginUrl = $state('/login'); // Added loginUrl state
  let hasRequiredPermissions = $state(false); // Added hasRequiredPermissions state

  $effect(() => {
    isLoading = true;
    isLoggedIn = isAuthenticated;
    isAuthorized = isAuthenticated && checkAuthorization();
    hasRequiredPermissions = isAuthorized;
    loginUrl = redirectUrl;
    isLoading = false;
  });

  function checkAuthorization(): boolean {
    // If no specific role is required, just check authentication
    if (!requiredRole && allowedRoles.length === 0) {
      return isAuthenticated;
    }
    
    // Check if user has required role
    if (requiredRole) {
      return userRoles.includes(requiredRole);
    }
    
    // Check if user has any of the allowed roles
    if (allowedRoles.length > 0) {
      return userRoles.some(role => allowedRoles.includes(role));
    }
    
    return isAuthenticated;
  }

  function handleUnauthorized() {
    // Redirect to login or unauthorized page
    if (redirectUrl) {
      window.location.href = redirectUrl;
    }
  }

  // Get user roles (this would typically come from context or store)
  const userRoles = $state<string[]>([]);
</script>

{#if isLoading}
  <div class={`flex flex-col items-center justify-center p-12 ${fallbackClass} ${className}`} {...restProps}>
    <Loader class="h-12 w-12 text-blue-500 animate-spin" />
    <p class="mt-4 text-lg font-medium text-gray-900">Verifying access rights</p>
    <p class="mt-2 text-sm text-gray-500">Please wait while we check your permissions...</p>
  </div>
{:else if !isLoggedIn}
  <div class={`flex flex-col items-center justify-center p-12 ${fallbackClass} ${className}`} {...restProps}>
    <Lock class="h-16 w-16 text-gray-400" />
    <h3 class="mt-4 text-lg font-medium text-gray-900">Access Denied</h3>
    <p class="mt-2 text-sm text-gray-500 text-center max-w-md">
      You need to sign in to access this resource.
    </p>
    <div class="mt-6">
      <a
        href={loginUrl}
        class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
      >
        Sign in to your account
      </a>
    </div>
  </div>
{:else if !hasRequiredPermissions}
  <div class={`flex flex-col items-center justify-center p-12 ${fallbackClass} ${className}`} {...restProps}>
    <ShieldAlert class="h-16 w-16 text-red-400" />
    <h3 class="mt-4 text-lg font-medium text-gray-900">Insufficient Permissions</h3>
    <p class="mt-2 text-sm text-gray-500 text-center max-w-md">
      You don't have the required permissions to access this resource.
    </p>
    {#if onContactAdmin}
      <div class="mt-6">
        <button
          type="button"
          class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
          onclick={onContactAdmin}
        >
          Contact Administrator
        </button>
      </div>
    {/if}
  </div>
{:else}
  <div class={className} {...restProps}>
    {#if children}{@render children()}{/if}
  </div>
{/if}