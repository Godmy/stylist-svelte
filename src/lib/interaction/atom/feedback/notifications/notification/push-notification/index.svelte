<script lang="ts">
  let {
    title = '',
    message = '',
    type = 'info', // 'info', 'success', 'warning', 'error'
    showIcon = true,
    autoDismiss = true,
    duration = 5000,
    onClose = () => {},
    class: className = ''
  } = $props<{
    title?: string;
    message?: string;
    type?: 'info' | 'success' | 'warning' | 'error';
    showIcon?: boolean;
    autoDismiss?: boolean;
    duration?: number;
    onClose?: () => void;
    class?: string;
  }>();

  let visible = $state(true);
  
  $effect(() => {
    if (autoDismiss && visible) {
      const timer = setTimeout(() => {
        visible = false;
        onClose();
      }, duration);
      
      return () => clearTimeout(timer);
    }
  });

  const typeStyles: Record<'info' | 'success' | 'warning' | 'error', string> = {
    info: 'bg-[var(--color-primary-50)] border-[var(--color-primary-200)] text-[var(--color-primary-800)]',
    success: 'bg-[var(--color-success-50)] border-[var(--color-success-200)] text-[var(--color-success-800)]',
    warning: 'bg-yellow-50 border-yellow-200 text-yellow-800',
    error: 'bg-[var(--color-danger-50)] border-[var(--color-danger-200)] text-[var(--color-danger-800)]'
  };

  const typeIcons: Record<'info' | 'success' | 'warning' | 'error', string> = {
    info: 'ℹ',
    success: '✓',
    warning: '⚠',
    error: '✕'
  };
</script>

{#if visible}
  <div class={`border-l-4 p-4 rounded-r-lg flex items-start justify-between ${typeStyles[type as keyof typeof typeStyles]} ${className}`}>
    <div class="flex items-start">
      {#if showIcon}
        <span class="mr-3 text-lg">{typeIcons[type as keyof typeof typeIcons]}</span>
      {/if}
      <div>
        {#if title}
          <h3 class="font-semibold">{title}</h3>
        {/if}
        <p>{message}</p>
      </div>
    </div>
    <button
      onclick={() => {
        visible = false;
        onClose();
      }}
      aria-label="Close notification"
      class="ml-4 text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
    >
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  </div>
{/if}




