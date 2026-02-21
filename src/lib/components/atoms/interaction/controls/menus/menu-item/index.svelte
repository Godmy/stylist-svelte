<script lang="ts">
  import { Icon } from '$stylist/components/atoms';
  import { createMenuItemState } from '$stylist/design-system/models/interaction/menu-item.svelte';
  import type { MenuItemProps } from '$stylist/design-system/props/interaction/menu-item';
  import type { HTMLAttributes } from 'svelte/elements';

  type Props = MenuItemProps & HTMLAttributes<HTMLElement>;
  let props: Props = $props();

  const state = createMenuItemState(props);

  const handleClick = (e: MouseEvent) => {
    if (state.disabled) {
      e.preventDefault();
      return;
    }

    props.onValueInput?.(e);
    props.onValueChange?.(e);
    props.onClick?.(e);
  };

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
    onclick={handleClick}
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
    onclick={handleClick}
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