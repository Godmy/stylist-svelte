<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import type { Snippet } from 'svelte';
  import { X } from 'lucide-svelte';

  type Props = {
    show: boolean;
    title?: string;
    size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
    closable?: boolean;
    closeOnOverlayClick?: boolean;
    closeOnEscapeKey?: boolean;
    class?: string;
    overlayClass?: string;
    headerClass?: string;
    bodyClass?: string;
    footerClass?: string;
    contentClass?: string;
    body?: Snippet;
    footer?: Snippet;
    onClose?: () => void;
  } & HTMLAttributes<HTMLDivElement>;

  let {
    show = false,
    title = 'Modal Title',
    size = 'md',
    closable = true,
    closeOnOverlayClick = true,
    closeOnEscapeKey = true,
    class: className = '',
    overlayClass = '',
    headerClass = '',
    bodyClass = '',
    footerClass = '',
    contentClass = '',
    body,
    footer,
    onClose,
    ...restProps
  }: Props = $props();

  let modalRef = $state<HTMLDivElement | null>(null);
  let contentRef = $state<HTMLDivElement | null>(null);

  function close() {
    if (onClose) {
      onClose();
    }
  }

  // Handle Escape key
  $effect(() => {
    if (!show) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && closeOnEscapeKey) {
        close();
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  });

  // Handle click outside
  $effect(() => {
    if (!show) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (
        modalRef &&
        contentRef &&
        !contentRef.contains(e.target as Node) &&
        closeOnOverlayClick
      ) {
        close();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  });
</script>

{#if show}
  <div
    class={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 ${overlayClass}`}
    bind:this={modalRef}
  >
    <div
      class={`relative ${
        size === 'sm' ? 'max-w-sm' :
        size === 'lg' ? 'max-w-lg' :
        size === 'xl' ? 'max-w-xl' :
        size === 'full' ? 'max-w-full w-full h-full m-0 rounded-none' :
        'max-w-md' // default is md
      } w-full max-h-[90vh] overflow-hidden rounded-lg shadow-xl ${
        closable ? 'bg-white' : 'bg-white'
      } ${contentClass}`}
      bind:this={contentRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      {...restProps}
    >
      {#if title || closable}
        <div class={`flex items-center justify-between p-4 border-b ${headerClass}`}>
          {#if title}
            <h3 id="modal-title" class="text-lg font-semibold text-gray-900">
              {title}
            </h3>
          {/if}
          {#if closable}
            <button
              type="button"
              class="text-gray-400 hover:text-gray-600 rounded-full p-1"
              onclick={close}
              aria-label="Close"
            >
              <X class="h-5 w-5" />
            </button>
          {/if}
        </div>
      {/if}

      <div class={`overflow-y-auto ${bodyClass}`}>
        {#if body}
          {@render body()}
        {/if}
      </div>

      {#if footer}
        {@render footer()}
      {/if}
    </div>
  </div>
{/if}