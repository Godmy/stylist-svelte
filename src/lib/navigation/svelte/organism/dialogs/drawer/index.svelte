<script lang="ts">
  import type { DrawerProps } from '$stylist/navigation/type/struct/drawer-props';
  import { createDrawerState } from '$stylist/navigation/function/state/drawer';

  let props: DrawerProps = $props();
  const drawerState = createDrawerState(props);
  let drawerEl = $state<HTMLElement | null>(null);
  let backdropEl = $state<HTMLElement | null>(null);

  function close() {
    if (drawerState.closable) {
      props.open = false;
    }
  }

  function handleBackdropClick(e: MouseEvent) {
    if (e.target === backdropEl && drawerState.closable) {
      close();
    }
  }

  function handleBackdropKeyDown(e: KeyboardEvent) {
    if ((e.key === 'Enter' || e.key === ' ') && e.target === backdropEl && drawerState.closable) {
      e.preventDefault();
      close();
    }
  }

  function handleEscape(e: KeyboardEvent) {
    if (e.key === 'Escape' && drawerState.closable) {
      close();
    }
  }
</script>

<svelte:window onkeydown={handleEscape} />

{#if drawerState.isOpen}
<div
  class={drawerState.backdropClasses}
  bind:this={backdropEl}
  onclick={handleBackdropClick}
  onkeydown={handleBackdropKeyDown}
  role="button"
  tabindex="0"
  aria-label="Close drawer via backdrop"
>
  <div
    class={`${drawerState.drawerClasses} ${drawerState.drawerOpenClasses}`}
    bind:this={drawerEl}
    role="dialog"
    aria-modal="true"
    aria-labelledby="drawer-title"
    style={`--size: ${drawerState.size};`}
  >
    <div class="drawer-header">
      {#if props.header}
        {@render props.header()}
      {:else}
        <h2 id="drawer-title">Drawer Title</h2>
      {/if}
      {#if drawerState.closable}
        <button class="close-button" onclick={close} aria-label="Close drawer">x</button>
      {/if}
    </div>
    <div class="drawer-content">
      {#if props.children}
        {@render props.children()}
      {/if}
    </div>
    <div class="drawer-actions">
      {#if props.actions}
        {@render props.actions()}
      {/if}
    </div>
  </div>
</div>
{/if}

<style>
  .drawer-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: var(--z-index-dropdown);
    display: flex;
    opacity: var(--opacity-0);
    transition: opacity var(--duration-300) var(--animation-ease);
  }

  .drawer-backdrop.show {
    background-color: color-mix(in srgb, var(--color-text-primary) 50%, transparent);
  }

  .drawer-backdrop.show {
    opacity: var(--opacity-100);
  }

  .drawer-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--spacing-4);
    border-bottom: 1px solid var(--color-border-primary);
  }

  .drawer-content {
    flex: 1;
    overflow-y: auto;
    padding: var(--spacing-4);
  }

  .drawer-actions {
    padding: var(--spacing-4);
    border-top: 1px solid var(--color-border-primary);
  }

  .close-button {
    background: none;
    border: none;
    font-size: var(--font-size-6);
    cursor: pointer;
    padding: var(--spacing-1);
    border-radius: var(--border-radius-base);
  }

  .close-button:hover {
    background-color: var(--color-background-secondary);
  }
</style>
