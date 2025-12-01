<script lang="ts">
  import { onMount } from 'svelte';
  import { X } from 'lucide-svelte';

  /**
   * Accessible Modal component with focus management and keyboard navigation
   * 
   * The modal provides proper accessibility features including focus trapping,
   * returning focus to the triggering element when closed, and keyboard navigation. 
   * It supports multiple sizes and can be configured to close on escape key press
   * or when clicking outside the modal.
   * 
   * @param {boolean} isOpen - Controls whether the modal is open or closed
   * @param {Function} onClose - Callback function to handle modal closing
   * @param {string} title - Title text for the modal header
   * @param {'sm'|'md'|'lg'|'xl'} [size='md'] - Size of the modal ('sm', 'md', 'lg', 'xl')
   * @param {boolean} [closeOnEscape=true] - Whether to close the modal when the escape key is pressed
   * @param {boolean} [closeOnClickOutside=true] - Whether to close the modal when clicking outside
   * @param {any} [content] - Snippet content to render inside the modal body
   * @param {any} [footerContent] - Snippet content to render in the modal footer
   * @returns {HTMLElement} An accessible modal dialog with proper focus management
   */
  import type { Snippet } from 'svelte';

  type Props = {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    size?: 'sm' | 'md' | 'lg' | 'xl';
    closeOnEscape?: boolean;
    closeOnClickOutside?: boolean;
    content?: Snippet; // Add content prop
    footerContent?: Snippet; // Add footerContent prop
  };

  let {
    isOpen = $bindable(),
    onClose,
    title,
    size = 'md',
    closeOnEscape = true,
    closeOnClickOutside = true,
    content, // Destructure content
    footerContent // Destructure footerContent
  }: Props = $props();

  // Store the element that had focus before opening the modal
  let previousActiveElement: HTMLElement | null = null;
  let modalElement = $state<HTMLElement | null>(null);

  const sizeClasses = {
    sm: 'sm:max-w-sm',
    md: 'sm:max-w-lg',
    lg: 'sm:max-w-2xl',
    xl: 'sm:max-w-4xl'
  };

  function handleKeydown(e: KeyboardEvent) {
    if (closeOnEscape && e.key === 'Escape' && isOpen) {
      onClose();
    }
    // Trap focus with Tab key
    if (e.key === 'Tab' && modalElement) {
      const focusableElements = modalElement.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      ) as NodeListOf<HTMLElement>;
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (e.shiftKey && document.activeElement === firstElement) {
        lastElement.focus();
        e.preventDefault();
      } else if (!e.shiftKey && document.activeElement === lastElement) {
        firstElement.focus();
        e.preventDefault();
      }
    }
  }

  function handleBackdropClick() {
    if (closeOnClickOutside) {
      onClose();
    }
  }

  // Handle focus management when modal opens/closes
  $effect(() => {
    if (isOpen) {
      // Save currently focused element
      previousActiveElement = document.activeElement as HTMLElement;
      
      // Add event listeners
      document.addEventListener('keydown', handleKeydown);
      
      // Focus the modal when it opens
      if (modalElement) {
        modalElement.focus();
      }
    } else {
      // Remove event listeners
      document.removeEventListener('keydown', handleKeydown);
      
      // Return focus to the element that was focused before the modal opened
      if (previousActiveElement) {
        previousActiveElement.focus();
      }
    }
  });
</script>

{#if isOpen}
  <div 
    class="fixed z-50 inset-0 overflow-y-auto" 
    role="dialog" 
    aria-modal="true" 
    aria-labelledby="modal-title"
    bind:this={modalElement}
    tabindex="-1"
  >
    <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      <!-- Background overlay -->
      <button
        type="button"
        class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity cursor-default z-40"
        onclick={handleBackdropClick}
        aria-label="Close modal"
        tabindex="-1"
      ></button>

      <!-- Spacer element to trick the browser into centering the modal contents -->
      <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

      <!-- Modal panel -->
      <div class="relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle {sizeClasses[size]} sm:w-full z-50">
        <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div class="flex items-start justify-between mb-4">
            <h3 id="modal-title" class="text-lg leading-6 font-medium text-gray-900">
              {title}
            </h3>
            <button
              type="button"
              class="text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 rounded-md"
              onclick={onClose}
              aria-label="Close"
            >
              <X class="h-6 w-6" />
            </button>
          </div>
          <div>
            {#if content}
              {@render content()}
            {/if}
          </div>
        </div>
        {#if footerContent}
          <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            {@render footerContent()}
          </div>
        {/if}
      </div>
    </div>
  </div>
{/if}
