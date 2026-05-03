<script lang="ts">
  import type { Snippet } from 'svelte';
  import { createPermissionGateState } from '$stylist/management/function/state/permission-gate';

  let props: Parameters<typeof createPermissionGateState>[0] = $props();
  const state = createPermissionGateState(props);
</script>

{#if state.hasPermission}
  {#if props.children}{#if props.children}{@render props.children()}{/if}{/if}
{:else}
  {#if state.fallback}
    {@render state.fallback()}
  {:else}
    <div class="p-4 text-center text-[var(--color-text-secondary)]">
      You do not have permission to view this content.
    </div>
  {/if}
{/if}
