<script lang="ts">
  import type { Snippet } from 'svelte';

  let {
    hasPermission = true,
    fallback = null,
    children
  } = $props<{
    hasPermission?: boolean;
    fallback?: Snippet | null;
    children: Snippet;
  }>();
</script>

{#if hasPermission}
  {@render children?.()}
{:else}
  {#if fallback}
    {@render fallback()}
  {:else}
    <div class="p-4 text-center text-[var(--color-text-secondary)]">
      You do not have permission to view this content.
    </div>
  {/if}
{/if}



