<script lang="ts">
  import type { IDropdownMenuProps } from './types';
  import { DropdownMenuStyleManager } from './styles';
  import { Button, Icon } from '$lib/components/atoms';
  import './DropdownMenu.css';

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

  let isOpen = $state(false);
  let dropdownId = `dropdown-${Math.random().toString(36).substr(2, 9)}`;

  // Handle clicks outside to close dropdown
  $effect(() => {
    const handleClickOutside = (event: Event) => {
      if (isOpen && !event.composedPath().some((el) => el instanceof Element && el.id === dropdownId)) {
        isOpen = false;
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  });

  const toggleDropdown = () => {
    if (!disabled) {
      isOpen = !isOpen;
    }
  };

  const closeDropdown = () => {
    isOpen = false;
  };

  let classes = $derived(
    DropdownMenuStyleManager.getAllClasses(position, disabled, className)
  );

  const menuClasses = $derived(
    DropdownMenuStyleManager.getMenuClasses(position)
  );

  let chevronClass = $derived(`dropdown-chevron ${isOpen ? 'rotated' : ''}`);
</script>

<div class={classes} id={dropdownId} {...restProps}>
  <div>
    <Button
      variant="ghost"
      class="dropdown-button"
      aria-expanded={isOpen}
      aria-haspopup="true"
      aria-controls="dropdown-menu"
      disabled={disabled}
      onclick={toggleDropdown}
    >
      {label}
      <Icon
        name="chevron-down"
        class={chevronClass}
        aria-hidden="true"
      />
    </Button>
  </div>

  {#if isOpen}
    <div
      id="dropdown-menu"
      class={menuClasses}
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="menu-button"
      tabindex="-1"
    >
      <div class="dropdown-content" role="none">
        {#if children}
          {@render children({ closeDropdown })}
        {/if}
      </div>
    </div>
  {/if}
</div>