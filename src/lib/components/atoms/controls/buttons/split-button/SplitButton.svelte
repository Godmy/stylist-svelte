<script lang="ts">
  import type { HTMLButtonAttributes } from 'svelte/elements';
  import { ChevronDown } from 'lucide-svelte';
  import { createEventDispatcher } from 'svelte';

  import type { ISplitButtonProps, ISplitButtonItem } from './types';
  import { SplitButtonStyleManager } from './styles';

  /**
   * SplitButton component - A button with a primary action and a dropdown menu for additional actions
   *
   * Following SOLID principles:
   * - Single Responsibility: Only handles split button rendering and state
   * - Open/Closed: Extendable through properties but closed for modification
   * - Liskov Substitution: Can be substituted with other button components
   * - Interface Segregation: Small focused interface
   * - Dependency Inversion: Depends on abstractions (interfaces) rather than concretions
   *
   * Note: This component has a high complexity score and implements state management,
   * which suggests it might be better categorized as a molecule rather than an atom.
   * However, it's being refactored following the same pattern as other atoms for consistency.
   *
   * @param variant - Visual style of the button ('primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'ghost' | 'link')
   * @param size - Size of the button ('sm' | 'md' | 'lg')
   * @param disabled - Whether the button is disabled
   * @param items - Array of items for the dropdown menu
   * @param primaryAction - Function to execute when the primary button is clicked
   * @param primaryLabel - Label for the primary button
   * @param class - Additional CSS classes
   * @returns A split button with primary action and dropdown menu
   */
  import type { HTMLAttributes } from 'svelte/elements';

  type Props = ISplitButtonProps;

  let {
    variant = 'primary',
    size = 'md',
    disabled = false,
    items = [],
    primaryAction,
    primaryLabel = 'Action',
    class: className = '',
    ...restProps
  }: Props = $props();

  // Extract div-specific attributes to avoid type conflicts
  let divAttributes = $derived(() => {
    const { id, class: cls, ...others } = restProps as HTMLAttributes<HTMLDivElement>;
    return { id, class: cls, ...others };
  });

  let isOpen = $state(false);
  let buttonId = `split-button-${Math.random().toString(36).substr(2, 9)}`;
  const dispatch = createEventDispatcher();

  // Handle clicks outside to close dropdown
  $effect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: Event) => {
      if (!event.composedPath().some((el) => el instanceof Element && el.id === buttonId)) {
        isOpen = false;
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  });

  let variantClasses = $derived(SplitButtonStyleManager.getVariantClasses(variant));
  let textSizeClasses = $derived(SplitButtonStyleManager.getSizeTextClasses(size));
  let buttonSizeClasses = $derived(SplitButtonStyleManager.getButtonSizeClasses(size));
  let dropdownSizeClasses = $derived(SplitButtonStyleManager.getDropdownSizeClasses(size));

  const toggleDropdown = () => {
    if (!disabled) {
      isOpen = !isOpen;
    }
  };

  const closeDropdown = () => {
    isOpen = false;
  };
</script>

<div class={SplitButtonStyleManager.getMainContainerClasses(className)} id={buttonId} {...divAttributes}>
  <button
    type="button"
    class={SplitButtonStyleManager.getPrimaryButtonClasses(variantClasses, buttonSizeClasses, textSizeClasses)}
    onclick={primaryAction}
    disabled={disabled}
  >
    {primaryLabel}
  </button>
  <button
    type="button"
    class={SplitButtonStyleManager.getSecondaryButtonClasses(variantClasses, buttonSizeClasses, textSizeClasses)}
    onclick={toggleDropdown}
    aria-haspopup="true"
    aria-expanded={isOpen}
    disabled={disabled}
  >
    <ChevronDown class="h-4 w-4" aria-hidden="true" />
  </button>

  {#if isOpen}
    <div
      class={SplitButtonStyleManager.getDropdownClasses(dropdownSizeClasses)}
      role="menu"
      aria-orientation="vertical"
      tabindex="-1"
    >
      <div class="flex flex-col gap-1" role="none">
        {#each items as item, i}
          <button
            class={SplitButtonStyleManager.getDropdownItemClasses()}
            onclick={() => {
              item.onClick();
              closeDropdown();
            }}
            disabled={item.disabled}
            role="menuitem"
          >
            {item.label}
          </button>
        {/each}
      </div>
    </div>
  {/if}
</div>