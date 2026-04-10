<script lang="ts">
  import type { IDropdownMenuProps } from '$stylist/control/interface/component/dropdown-menu/other';
  import { createDropdownMenuState } from '$stylist/control/function/state/dropdown-menu';
  import { Button, Icon } from '$stylist';

  /**
   * DropdownMenu component - A flexible dropdown menu component with various positions and states
   *
   * Following SOLID principles:
   * - Single Responsibility: Only handles dropdown menu rendering and state
   * - Open/Closed: Extendable through properties but closed for modification
   * - Liskov Substitution: Can be substituted with other menu components
   * - Interface Segregation: Small focused interface
   * - Dependency Inversion: Depends on abstractions (interfaces) rather than concretions
   *
   * @param label - The label for the dropdown button
   * @param position - Position of the dropdown menu ('left' | 'right' | 'center')
   * @param disabled - Whether the dropdown is disabled
   * @param children - Snippet content for the dropdown menu items
   * @returns An accessible, styled dropdown menu element
   */
  let {
    label,
    position = 'left',
    disabled = false,
    class: className = '',
    children,
    ...restProps
  }: IDropdownMenuProps = $props();
  const state = createDropdownMenuState({
    position,
    disabled,
    class: className
  });
</script>

<div class={state.classes} id={state.dropdownId} {...restProps}>
  <div>
    <Button
      variant="ghost"
      class="dropdown-button"
      aria-expanded={state.isOpen}
      aria-haspopup="true"
      aria-controls="dropdown-menu"
      disabled={disabled}
      onclick={state.toggleDropdown}
    >
      {label}
      <Icon
        name="chevron-down"
        class={state.chevronClass}
        aria-hidden="true"
      />
    </Button>
  </div>

  {#if state.isOpen}
    <div
      id="dropdown-menu"
      class={state.menuClasses}
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="menu-button"
      tabindex="-1"
    >
      <div class="dropdown-content" role="none">
        {#if children}
          {@render children({ closeDropdown: state.closeDropdown })}
        {/if}
      </div>
    </div>
  {/if}
</div>

<style>
/* Base dropdown styles */
.dropdown-base {
  position: relative;
  display: inline-block;
  text-align: left;
}

.dropdown-menu-base {
  min-width: var(--size-14rem);
  margin-top: var(--spacing-2);
  padding: var(--spacing-1) 0;
}

.dropdown-position-left {
  left: 0;
}

.dropdown-position-right {
  right: 0;
}

.dropdown-position-center {
  left: 50%;
  transform: translateX(-50%);
}

.dropdown-button {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--spacing-1);
}

.dropdown-content {
  padding: var(--spacing-1) 0;
}

.dropdown-chevron {
  margin-left: var(--spacing-1);
  transition: transform var(--duration-200) var(--animation-ease-in-out);
}

.dropdown-chevron.rotated {
  transform: rotate(180deg);
}
</style>






