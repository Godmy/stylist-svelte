<script lang="ts">
  import { onMount } from 'svelte';
  import { X } from 'lucide-svelte';

  type Snippet = any; // Placeholder for now

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
  }

  function handleBackdropClick() {
    if (closeOnClickOutside) {
      onClose();
    }
  }

  onMount(() => {
    document.addEventListener('keydown', handleKeydown);
    return () => {
      document.removeEventListener('keydown', handleKeydown);
    };
  });
</script>

{#if isOpen}
  <div class="fixed z-50 inset-0 overflow-y-auto" role="dialog" aria-modal="true" aria-labelledby="modal-title">
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
