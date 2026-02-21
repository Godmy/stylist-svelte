<script lang="ts">
  import { createBurgerMenuState } from '$stylist/design-system/models/interaction/burger-menu.svelte';
  import type { BurgerMenuProps } from '$stylist/design-system/props/interaction/burger-menu';
  import type { HTMLButtonAttributes } from 'svelte/elements';

  type Props = BurgerMenuProps & HTMLButtonAttributes;
  let props: Props = $props();

  const state = createBurgerMenuState(props);
  const containerClasses = state.containerClasses;
  const ariaLabel = state.ariaLabel;

  const handleClick = (e: MouseEvent) => {
    props.onValueInput?.(e);
    props.onValueChange?.(e);
    props.onClick?.(e);
  };
</script>

<button
  class={$containerClasses}
  aria-label={$ariaLabel}
  aria-expanded={state.open}
  tabindex="0"
  onclick={handleClick}
>
  <div class={state.iconClasses} role="img" aria-label="Menu toggle icon">
    <!-- Hamburger lines -->
    <span
      class={state.lineClasses}
      style={`top: calc(50% - 6px); background-color: ${state.open ? state.activeColor : state.color}; transform: ${state.open ? 'rotate(45deg) translate(0, 0)' : 'rotate(0) translate(0, 0)'};`}
      aria-hidden="true"
    ></span>
    <span
      class={`${state.lineClasses} ${state.open ? 'opacity-0' : 'opacity-100'}`}
      style={`top: 50%; transform: translateY(-50%); background-color: ${state.color};`}
      aria-hidden="true"
    ></span>
    <span
      class={state.lineClasses}
      style={`top: calc(50% + 6px); background-color: ${state.open ? state.activeColor : state.color}; transform: ${state.open ? 'rotate(-45deg) translate(0, 0)' : 'rotate(0) translate(0, 0)'};`}
      aria-hidden="true"
    ></span>
  </div>
</button>
