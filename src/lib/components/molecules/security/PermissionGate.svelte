<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { Lock, AlertTriangle, Shield, UserCheck } from 'lucide-svelte';
  import type { Snippet } from 'svelte';

  type Permission = {
    id: string;
    name: string;
    description: string;
  };

  type Role = {
    id: string;
    name: string;
    permissions: string[]; // Array of permission IDs
  };

  type User = {
    id: string;
    name: string;
    roles: string[]; // Array of role IDs
    permissions?: string[]; // Direct permissions beyond those granted by roles
  };

  type Props = {
    user: User;
    requiredPermission?: string;
    requiredRole?: string;
    allowedPermissions?: string[];
    allowedRoles?: string[];
    fallback?: HTMLElement;
    unauthorizedFallback?: HTMLElement;
    onUnauthorized?: () => void;
    showFallback?: boolean;
    class?: string;
    fallbackClass?: string;
    unauthorizedClass?: string;
    children?: Snippet; // Added for Svelte 5 slot replacement
  } & HTMLAttributes<HTMLDivElement>;

  let {
    user,
    requiredPermission,
    requiredRole,
    allowedPermissions = [],
    allowedRoles = [],
    fallback,
    unauthorizedFallback,
    onUnauthorized,
    showFallback = true,
    class: className = '',
    fallbackClass = '',
    unauthorizedClass = '',
    children, // Destructure children
    ...restProps
  }: Props = $props();

  let hasPermission = $state(false);

  $effect(() => {
    hasPermission = checkPermission();
  });

  function checkPermission(): boolean {
    // If no specific permission or role is required, allow access
    if (!requiredPermission && !requiredRole && allowedPermissions.length === 0 && allowedRoles.length === 0) {
      return true;
    }

    // Check if user has the required permission directly
    if (requiredPermission && user.permissions?.includes(requiredPermission)) {
      return true;
    }

    // Check if user has the required role
    if (requiredRole && user.roles.includes(requiredRole)) {
      return true;
    }

    // Check if user has any of the allowed permissions
    if (allowedPermissions.length > 0 && 
        user.permissions && 
        allowedPermissions.some((perm: string) => user.permissions?.includes(perm))) {
      return true;
    }

    // Check if user has any of the allowed roles
    if (allowedRoles.some((role: string) => user.roles.includes(role))) {
      return true;
    }

    // Check if user has permissions through their roles
    if (requiredPermission) {
      // In a complete implementation, we would check role permissions as well
      // For now, we'll assume that if it gets here, they don't have permission
      return false;
    }

    return false;
  }

  function handleUnauthorized() {
    if (onUnauthorized) {
      onUnauthorized();
    }
  }
</script>

{#if hasPermission}
  <div class={className} {...restProps}>
    {#if children}{@render children()}{/if}
  </div>
{:else if showFallback}
  <div class={`bg-yellow-50 border-l-4 border-yellow-400 p-4 ${unauthorizedClass || fallbackClass}`} {...restProps}>
    <div class="flex">
      <div class="flex-shrink-0">
        <Lock class="h-5 w-5 text-yellow-400" />
      </div>
      <div class="ml-3">
        <p class="text-sm text-yellow-700">
          {#if requiredPermission}
            You don't have the required permission: <span class="font-medium">{requiredPermission}</span>
          {:else if requiredRole}
            You don't have the required role: <span class="font-medium">{requiredRole}</span>
          {:else}
            You don't have the required permissions to access this content.
          {/if}
        </p>
      </div>
    </div>
  </div>
{/if}