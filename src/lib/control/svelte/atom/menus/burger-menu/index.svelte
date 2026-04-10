<script lang="ts">
  import { createBurgerMenuState } from '$stylist/control/function/state/burger-menu';
  import type { BurgerMenuProps } from '$stylist/control/type/struct/burger-menu-props';

  let props: BurgerMenuProps = $props();
  const state = createBurgerMenuState(props);

  const restProps = $derived.by(() => {
    const {
      class: _class,
      open: _open,
      size: _size,
      color: _color,
      activeColor: _activeColor,
      ariaLabel: _ariaLabel,
      onValueInput: _onValueInput,
      onValueChange: _onValueChange,
      onClick: _onClick,
      ...rest
    } = props;
    return rest;
  });
</script>

<button
  class={state.containerClasses}
  aria-label={state.ariaLabel}
  aria-expanded={state.open}
  tabindex="0"
  onclick={state.handleClick}
  {...restProps}
>
  <div class={state.iconClasses} role="img" aria-label="Menu toggle icon">
    <!-- Hamburger lines -->
    <span
      class={state.lineClasses}
      style={`top: calc(50% - 6px); background-color: ${state.open ? state.activeColor : state.color}; transform: ${state.open ? 'rotate(45deg) translate(0, 0)' : 'rotate(0) translate(0, 0)'};`}
      aria-hidden="true"
    ></span>
    <span
      class={`${state.lineClasses} ${state.open ? 'opacity-[var(--opacity-0)]' : 'opacity-[var(--opacity-100)]'}`}
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



