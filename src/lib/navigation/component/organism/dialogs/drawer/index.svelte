<script lang="ts">
  import type { DrawerProps } from '$stylist/navigation/type/struct/drawer-props';
  import { createDrawerState as stateFn } from '$stylist/navigation/function/state/drawer';

  let props: DrawerProps = $props();
  const state = stateFn(props);
</script>

<svelte:window onkeydown={(e) => state.handleEscapeFn(e)} />

{#if state.isOpen}
<div
  class={state.backdropClasses}
  bind:this={state.backdropEl}
  onclick={(e) => state.handleBackdropClickFn(e)}
  onkeydown={(e) => state.handleBackdropKeyDownFn(e)}
  role="button"
  tabindex="0"
  aria-label="Close drawer via backdrop"
>
  <div
    class={`${state.drawerClasses} ${state.drawerOpenClasses}`}
    bind:this={state.drawerEl}
    role="dialog"
    aria-modal="true"
    aria-labelledby="drawer-title"
    style={`--size: ${state.size};`}
  >
    <div class={state.headerClasses}>
      {#if props.header}
        {@render props.header()}
      {:else}
        <h2 id="drawer-title">Drawer Title</h2>
      {/if}
      {#if state.closable}
        <button class={state.closeButtonClasses} onclick={() => state.closeFn()} aria-label="Close drawer">x</button>
      {/if}
    </div>
    <div class={state.contentClasses}>
      {#if props.children}
        {#if props.children}{@render props.children()}{/if}
      {/if}
    </div>
    <div class={state.actionsClasses}>
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
</style>
