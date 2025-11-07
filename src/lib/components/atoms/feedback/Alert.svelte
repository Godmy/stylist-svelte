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
    info: 'text-blue-400',
    success: 'text-green-400',
    warning: 'text-yellow-400',
    error: 'text-red-400'
  }[variant]);

  let bgColor = $derived({
    info: 'bg-blue-50 border-blue-200',
    success: 'bg-green-50 border-green-200',
    warning: 'bg-yellow-50 border-yellow-200',
    error: 'bg-red-50 border-red-200'
  }[variant]);

  let textColor = $derived({
    info: 'text-blue-800',
    success: 'text-green-800',
    warning: 'text-yellow-800',
    error: 'text-red-800'
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
