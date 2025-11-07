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
  type AlertVariant = 'info' | 'success' | 'warning' | 'error';

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
    info: 'text-[--stylist-alert-info-icon]',
    success: 'text-[--stylist-alert-success-icon]',
    warning: 'text-[--stylist-alert-warning-icon]',
    error: 'text-[--stylist-alert-error-icon]'
  }[variant]);

  let bgColor = $derived({
    info: 'bg-[--stylist-alert-info-bg] border-[--stylist-alert-info-border]',
    success: 'bg-[--stylist-alert-success-bg] border-[--stylist-alert-success-border]',
    warning: 'bg-[--stylist-alert-warning-bg] border-[--stylist-alert-warning-border]',
    error: 'bg-[--stylist-alert-error-bg] border-[--stylist-alert-error-border]'
  }[variant]);

  let textColor = $derived({
    info: 'text-[--stylist-alert-info-text]',
    success: 'text-[--stylist-alert-success-text]',
    warning: 'text-[--stylist-alert-warning-text]',
    error: 'text-[--stylist-alert-error-text]'
  }[variant]);
</script>

{#if open}
  <div class={`rounded-md border p-4 ${bgColor} ${textColor}`}>
    <div class="flex">
      {#if icon}
        <div class="flex-shrink-0">
          <IconComponent class="h-5 w-5 {iconColor}" />
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
            <X class="h-5 w-5" />
          </button>
        </div>
      {/if}
    </div>
  </div>
{/if}
