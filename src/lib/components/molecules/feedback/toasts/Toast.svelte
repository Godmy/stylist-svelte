<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import type { Snippet } from 'svelte';

  export type ToastType = 'info' | 'success' | 'warning' | 'error';

  type Props = {
    type?: ToastType;
    visible?: boolean;
    duration?: number; // in ms, 0 means persistent
    title?: Snippet;
    description?: Snippet;
  } & HTMLAttributes<HTMLDivElement>;

  let {
    type = 'info',
    visible = true,
    duration = 5000,
    title,
    description,
    ...restProps
  }: Props = $props();

  let internalVisible = $state(visible);

  // Handle visibility prop changes
  $effect(() => {
    internalVisible = visible;
  });

  // Auto-hide toast if duration is set
  $effect(() => {
    if (internalVisible && duration > 0) {
      const timer = setTimeout(() => {
        internalVisible = false;
        // Dispatch event to notify parent that toast is closed
        const event = new CustomEvent('toastClosed', { detail: {} });
        dispatchEvent(event);
      }, duration);

      // Cleanup timeout when component unmounts or visibility changes
      return () => clearTimeout(timer);
    }
  });

  let typeClasses = $derived(() => {
    const classesMap = {
      info: 'bg-blue-50 border-blue-200 text-blue-700',
      success: 'bg-green-50 border-green-200 text-green-700',
      warning: 'bg-yellow-50 border-yellow-200 text-yellow-700',
      error: 'bg-red-50 border-red-200 text-red-700'
    };
    return classesMap[type];
  });

  function closeToast() {
    internalVisible = false;
    // Dispatch event to notify parent that toast is closed
    const event = new CustomEvent('toastClosed', { detail: {} });
    dispatchEvent(event);
  }
</script>

{#if internalVisible}
  <div class={`border rounded-md p-4 mb-2 ${typeClasses}`} role="alert" {...restProps}>
    <div class="flex justify-between items-start">
      <div class="flex-1">
        {@render title?.()}
        <div class="mt-1 text-sm">
          {@render description?.()}
        </div>
      </div>
      <button
        type="button"
        class="ml-4 text-gray-400 hover:text-gray-500"
        onclick={closeToast}
        aria-label="Close"
      >
        <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
      </button>
    </div>
  </div>
{/if}