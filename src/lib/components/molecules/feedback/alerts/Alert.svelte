<script lang="ts">
  import { Info, CheckCircle, AlertTriangle, XCircle, X } from 'lucide-svelte';

  type Snippet = any; // Placeholder for now

  /**
   * Alert component - Displays important messages to the user with different variants
   * 
   * @param variant - Visual style of the alert ('info' | 'success' | 'warning' | 'error')
   * @param title - Title or header text for the alert
   * @param closable - Whether the alert can be closed by the user
   * @param icon - Whether to show the status icon
   * @param content - Snippet content to display in the alert body
   * @returns A styled alert component with proper icon and coloring based on variant
   */
  export type AlertVariant = 'info' | 'success' | 'warning' | 'error';

  type Props = {
    variant?: AlertVariant;
    title?: string;
    closable?: boolean;
    icon?: boolean;
    content?: Snippet; // Add content prop
  };

  let { variant = 'info', title, closable = false, icon = true, content }: Props = $props();
  let open = $state(true);

  let IconComponent = $derived({
    info: Info,
    success: CheckCircle,
    warning: AlertTriangle,
    error: XCircle
  }[variant]);

  let iconColor = $derived({
    info: 'text-[--color-primary-500]',
    success: 'text-[--color-success-500]',
    warning: 'text-[--color-warning-500]',
    error: 'text-[--color-danger-500]'
  }[variant]);

  let bgColor = $derived({
    info: 'bg-[--color-primary-50] border border-[--color-primary-200] dark:bg-[--color-primary-900] dark:border-[--color-primary-700]',
    success: 'bg-[--color-success-50] border border-[--color-success-200] dark:bg-[--color-success-900] dark:border-[--color-success-700]',
    warning: 'bg-[--color-warning-50] border border-[--color-warning-200] dark:bg-[--color-warning-900] dark:border-[--color-warning-700]',
    error: 'bg-[--color-danger-50] border border-[--color-danger-200] dark:bg-[--color-danger-900] dark:border-[--color-danger-700]'
  }[variant]);

  let textColor = $derived({
    info: 'text-[--color-primary-800] dark:text-[--color-primary-200]',
    success: 'text-[--color-success-800] dark:text-[--color-success-200]',
    warning: 'text-[--color-warning-800] dark:text-[--color-warning-200]',
    error: 'text-[--color-danger-800] dark:text-[--color-danger-200]'
  }[variant]);
</script>

{#if open}
  <div 
    role="alert" 
    class={`rounded-md border p-4 ${bgColor} ${textColor}`}
    aria-live="polite"
    aria-atomic="true"
  >
    <div class="flex">
      {#if icon}
        <div class="flex-shrink-0">
          <IconComponent class="h-5 w-5 {iconColor}" aria-hidden="true" />
        </div>
      {/if}
      <div class="ml-3">
        {#if title}
          <h3 class="text-sm font-medium">{title}</h3>
        {/if}
        <div class="mt-2 text-sm">
          <p>
            {#if content}
              {@render content()}
            {/if}
          </p>
        </div>
      </div>
      {#if closable}
        <div class="ml-auto pl-3">
          <button
            type="button"
            class={`-mx-1.5 -my-1.5 rounded-md p-1.5 focus:outline-none focus:ring-2 ${textColor.replace('text-', 'focus:ring-').replace('-', '-')} ${textColor.replace('text-', 'hover:bg-').replace('-', '-')}`}
            aria-label="Close"
            onclick={() => (open = false)}
          >
            <X class="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      {/if}
    </div>
  </div>
{/if}
