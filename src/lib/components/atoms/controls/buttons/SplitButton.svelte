<script lang="ts">
  import type { HTMLButtonAttributes } from 'svelte/elements';
  import { ChevronDown } from 'lucide-svelte';
  import { createEventDispatcher, onMount, onDestroy } from 'svelte';

  type Snippet = any; // Placeholder for now

  interface SplitButtonItem {
    label: string;
    onClick: () => void;
    disabled?: boolean;
  }

  /**
   * Split Button component - A button with a primary action and a dropdown menu for additional actions
   *
   * @param variant - Visual style of the button ('primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'ghost' | 'link')
   * @param size - Size of the button ('sm' | 'md' | 'lg')
   * @param disabled - Whether the button is disabled
   * @param items - Array of items for the dropdown menu
   * @param primaryAction - Function to execute when the primary button is clicked
   * @returns A split button with primary action and dropdown menu
   */
  type ButtonVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'ghost' | 'link';
  type ButtonSize = 'sm' | 'md' | 'lg';

  type Props = {
    variant?: ButtonVariant;
    size?: ButtonSize;
    disabled?: boolean;
    items: SplitButtonItem[];
    primaryAction: () => void;
    primaryLabel?: string;
  } & HTMLButtonAttributes;

  let {
    variant = 'primary',
    size = 'md',
    disabled = false,
    items = [],
    primaryAction,
    primaryLabel = 'Action',
    class: className = ''
  }: Props = $props();

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

  let variantClasses = $derived({
    primary: 'bg-[--color-primary-600] hover:bg-[--color-primary-700] text-[--color-text-inverse]',
    secondary: 'bg-[--color-secondary-100] hover:bg-[--color-secondary-200] text-[--color-text-primary] dark:bg-[--color-secondary-700] dark:hover:bg-[--color-secondary-600] dark:text-[--color-text-inverse]',
    success: 'bg-[--color-success-600] hover:bg-[--color-success-700] text-[--color-text-inverse]',
    warning: 'bg-[--color-warning-500] hover:bg-[--color-warning-600] text-[--color-text-inverse]',
    danger: 'bg-[--color-danger-600] hover:bg-[--color-danger-700] text-[--color-text-inverse]',
    ghost: 'bg-transparent hover:bg-[--color-secondary-100] text-[--color-text-primary] border border-[--color-border-primary] dark:hover:bg-[--color-secondary-700] dark:text-[--color-text-inverse] dark:border-[--color-border-primary]',
    link: 'bg-transparent hover:bg-[--color-secondary-100] text-[--color-primary-600] underline dark:hover:bg-[--color-secondary-700] dark:text-[--color-primary-400]'
  }[variant]);

  let sizeClasses = $derived({
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg'
  }[size]);

  let btnSizeClasses = $derived({
    sm: 'px-3 py-1.5',
    md: 'px-4 py-2',
    lg: 'px-6 py-3'
  }[size]);

  let dropdownSizeClasses = $derived({
    sm: 'p-1.5 min-w-[8rem]',
    md: 'p-2 min-w-[10rem]',
    lg: 'p-2.5 min-w-[12rem]'
  }[size]);

  const toggleDropdown = () => {
    if (!disabled) {
      isOpen = !isOpen;
    }
  };

  const closeDropdown = () => {
    isOpen = false;
  };
</script>

<div class="relative inline-flex rounded-md {className}" id={buttonId}>
  <button
    type="button"
    class="relative inline-flex items-center rounded-l-md border border-r-0 {variantClasses} {btnSizeClasses} {sizeClasses}"
    onclick={primaryAction}
    disabled={disabled}
  >
    {primaryLabel}
  </button>
  <button
    type="button"
    class="relative inline-flex items-center rounded-r-md border {variantClasses} {btnSizeClasses} {sizeClasses}"
    onclick={toggleDropdown}
    aria-haspopup="true"
    aria-expanded={isOpen}
    disabled={disabled}
  >
    <ChevronDown class="h-4 w-4" aria-hidden="true" />
  </button>

  {#if isOpen}
    <div
      class="absolute z-10 mt-1 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none {dropdownSizeClasses} dark:bg-gray-800"
      role="menu"
      aria-orientation="vertical"
      tabindex="-1"
    >
      <div class="flex flex-col gap-1" role="none">
        {#each items as item, i}
          <button
            class="text-left rounded px-3 py-1.5 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
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