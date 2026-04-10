<script lang="ts">
  import { Icon } from '$stylist';
  import { createMenuItemState } from '$stylist/control/function/state/menu-item';
  import type { MenuItemProps } from '$stylist/control/type/struct/menu-item-props';

  let props: MenuItemProps = $props();

  const state = createMenuItemState(props);

  const restProps = $derived(
    (() => {
      const { class: _class, children: _children, ...rest } = props;
      return rest;
    })()
  );
</script>

{#if state.href}
  <a
    href={state.href}
    class={state.containerClasses}
    target={state.external ? '_blank' : undefined}
    rel={state.external ? 'noopener noreferrer' : undefined}
    aria-current={state.active ? 'page' : undefined}
    role="menuitem"
    onclick={state.handleClick}
    {...restProps}
  >
    {#if state.icon}
      <Icon name={state.icon} class="mr-2 h-4 w-4" aria-hidden="true" />
    {/if}
    {#if state.children}
      {@render state.children()}
    {/if}
    {#if state.external}
      <Icon name="external-link" class="ml-1 h-4 w-4" aria-hidden="true" />
    {/if}
  </a>
{:else}
  <button
    class={state.containerClasses}
    disabled={state.disabled}
    aria-current={state.active ? 'true' : undefined}
    role="menuitem"
    onclick={state.handleClick}
    {...restProps}
  >
    {#if state.icon}
      <Icon name={state.icon} class="mr-2 h-4 w-4" aria-hidden="true" />
    {/if}
    {#if state.children}
      {@render state.children()}
    {/if}
  </button>
{/if}


