<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import type { Snippet } from 'svelte';
  import { Button, Icon } from '$lib/components/atoms';
  
  interface CloseDropdownFunc {
    closeDropdown: () => void;
  }
  
  type Props = {
    label: string;
    position?: 'left' | 'right' | 'center';
    disabled?: boolean;
    children?: Snippet<[CloseDropdownFunc]>;
  } & HTMLAttributes<HTMLElement>;

  let { 
    label, 
    position = 'left',
    disabled = false,
    children,
    class: className = '' 
  }: Props = $props();
  
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
  
  const positionClass = position === 'right' ? 'right-0' : 
                      position === 'center' ? 'left-1/2 transform -translate-x-1/2' : 
                      'left-0';
</script>

<div class="relative inline-block text-left {className}" id={dropdownId}>
  <div>
    <Button 
      id="menu-button"
      variant="ghost" 
      class="flex items-center justify-between gap-1"
      aria-expanded={isOpen}
      aria-haspopup="true"
      aria-controls="dropdown-menu"
      disabled={disabled}
      onclick={toggleDropdown}
    >
      {label}
      <Icon 
        name="chevron-down" 
        class="ml-1 h-4 w-4 transition-transform duration-200 {isOpen ? 'rotate-180' : ''}" 
        aria-hidden="true"
      />
    </Button>
  </div>

  {#if isOpen}
    <div 
      id="dropdown-menu"
      class="origin-top-right absolute {positionClass} mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50 dark:bg-gray-800 dark:ring-gray-700"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="menu-button"
      tabindex="-1"
    >
      <div class="py-1" role="none">
        {#if children}
          {@render children({ closeDropdown })}
        {/if}
      </div>
    </div>
  {/if}
</div>
