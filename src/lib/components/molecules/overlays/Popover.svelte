<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import type { Snippet } from 'svelte';
  import { X } from 'lucide-svelte';

  type RestProps = Omit<HTMLAttributes<HTMLDivElement>, 'class'>;

  type Props = RestProps & {
    open?: boolean;
    anchor: HTMLElement | null;
    title?: string;
    children: Snippet;
    footer?: Snippet;
    class?: string;
    contentClass?: string;
    headerClass?: string;
    bodyClass?: string;
    footerClass?: string;
    closable?: boolean;
    onClose?: () => void;
    width?: 'sm' | 'md' | 'lg' | 'xl' | 'auto';
    position?: 'top' | 'bottom' | 'left' | 'right';
    variant?: 'default' | 'success' | 'warning' | 'error' | 'info';
  };

  let {
    open = false,
    anchor = null,
    title,
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
    position = 'bottom',
    variant = 'default',
    ...restProps
  }: Props = $props();

  let positionClasses = $derived({
    'top': 'bottom-full left-1/2 transform -translate-x-1/2 mb-2',
    'bottom': 'top-full left-1/2 transform -translate-x-1/2 mt-2',
    'left': 'right-full top-1/2 transform -translate-y-1/2 mr-2',
    'right': 'left-full top-1/2 transform -translate-y-1/2 ml-2'
  }[position]);

  let widthClasses = $derived({
    'sm': 'max-w-sm',
    'md': 'max-w-md',
    'lg': 'max-w-lg',
    'xl': 'max-w-xl',
    'auto': ''
  }[width]);

  let variantClasses = $derived({
    'default': 'bg-white border border-gray-200',
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
</script>

{#if open && anchor}
  <div 
    class={`fixed z-50 rounded-lg shadow-lg ${variantClasses} ${widthClasses} ${positionClasses} ${hostClass}`}
    style={`position: fixed; ${position === 'top' ? `bottom: ${anchor.getBoundingClientRect().top - 10}px;` : ''} 
    ${position === 'bottom' ? `top: ${anchor.getBoundingClientRect().bottom + 10}px;` : ''} 
    ${position === 'left' ? `right: ${window.innerWidth - anchor.getBoundingClientRect().left + 10}px;` : ''} 
    ${position === 'right' ? `left: ${anchor.getBoundingClientRect().right + 10}px;` : ''} 
    left: ${anchor.getBoundingClientRect().left + anchor.offsetWidth / 2 - 100}px;`}
    role="dialog"
    aria-modal="true"
    {...restProps}
  >
    <div class={`px-4 pt-5 pb-4 ${contentClass}`}>
      {#if title || closable}
        <div class={`flex items-start justify-between ${headerClass}`}>
          <div class="flex-1">
            {#if title}
              <h3 class="text-lg leading-6 font-medium text-gray-900">
                {title}
              </h3>
            {/if}
          </div>
          {#if closable}
            <div class="ml-4 flex-shrink-0">
              <button
                type="button"
                class="text-gray-400 hover:text-gray-500 focus:outline-none"
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
      
      {#if footer}
        <div class={`mt-4 ${footerClass}`}>
          {@render footer()}
        </div>
      {/if}
    </div>
  </div>
{/if}
