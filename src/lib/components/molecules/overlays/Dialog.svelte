<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import type { Snippet } from 'svelte';
  import { X } from 'lucide-svelte';

  type RestProps = Omit<HTMLAttributes<HTMLDivElement>, 'class'>;

  type Props = RestProps & {
    open?: boolean;
    title?: string;
    description?: string;
    children: Snippet;
    footer?: Snippet;
    class?: string;
    contentClass?: string;
    headerClass?: string;
    bodyClass?: string;
    footerClass?: string;
    closable?: boolean;
    onClose?: () => void;
    width?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
    variant?: 'default' | 'success' | 'warning' | 'error' | 'info';
  };

  let {
    open = false,
    title,
    description,
    children,
    footer,
    class: hostClass = '',
    contentClass = '',
    headerClass = '',
    bodyClass = '',
    footerClass = '',
    closable = true,
    onClose,
    width = 'md',
    variant = 'default',
    ...restProps
  }: Props = $props();

  let widthClass = $derived({
    'sm': 'max-w-md',
    'md': 'max-w-lg',
    'lg': 'max-w-2xl',
    'xl': 'max-w-4xl',
    'full': 'max-w-full'
  }[width]);

  let variantClass = $derived({
    'default': 'bg-white',
    'success': 'bg-green-50 border-green-200',
    'warning': 'bg-yellow-50 border-yellow-200',
    'error': 'bg-red-50 border-red-200',
    'info': 'bg-blue-50 border-blue-200'
  }[variant]);

  function handleClose() {
    if (closable) {
      onClose?.();
    }
  }

  function handleBackdropClick(e: Event) {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  }
</script>

{#if open}
  <div 
    class="fixed inset-0 z-50 overflow-y-auto"
    aria-labelledby="dialog-title"
    aria-describedby="dialog-description"
    role="dialog"
    aria-modal="true"
  >
    <div class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      <button 
        type="button"
        class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        onclick={handleBackdropClick}
        aria-label="Закрыть диалог"
      ></button>

      <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

      <div 
        class={`inline-block align-bottom rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:w-full ${widthClass} ${variantClass} ${hostClass}`}
        {...restProps}
      >
        <div class={`px-4 pt-5 pb-4 sm:p-6 sm:pb-4 ${contentClass}`}>
          {#if title || description || closable}
            <div class={`flex items-start justify-between ${headerClass}`}>
              <div class="flex-1">
                {#if title}
                  <h3 
                    id="dialog-title"
                    class="text-lg leading-6 font-medium text-gray-900"
                  >
                    {title}
                  </h3>
                {/if}
                {#if description}
                  <div id="dialog-description" class="mt-2">
                    <p class="text-sm text-gray-500">
                      {description}
                    </p>
                  </div>
                {/if}
              </div>
              {#if closable}
                <div class="ml-4 flex-shrink-0">
                  <button
                    type="button"
                    class="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    onclick={handleClose}
                    aria-label="Close"
                  >
                    <X class="h-5 w-5" />
                  </button>
                </div>
              {/if}
            </div>
          {/if}
          
          <div class={`mt-4 ${bodyClass}`}>
            {@render children()}
          </div>
        </div>
        
        {#if footer}
          <div class={`bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse ${footerClass}`}>
            {@render footer()}
          </div>
        {/if}
      </div>
    </div>
  </div>
{/if}
