<script lang="ts">
  import type { IToastProps } from '$stylist/design-system/props/interaction/toast';
  import { ToastStyleManager } from '$stylist/design-system/styles/interaction/toast';
  import { Icon } from '$stylist/components/atoms';

  /**
   * Toast component - A flexible notification component with various types and states
   *
   * Following SOLID principles:
   * - Single Responsibility: Only handles toast rendering and state
   * - Open/Closed: Extendable through properties but closed for modification
   * - Liskov Substitution: Can be substituted with other toast components
   * - Interface Segregation: Small focused interface
   * - Dependency Inversion: Depends on abstractions (interfaces) rather than concretions
   *
   * @param type - Visual style of the toast ('info' | 'success' | 'warning' | 'error')
   * @param visible - Whether the toast is visible
   * @param duration - Duration in ms before auto-hiding (0 means persistent)
   * @param title - Snippet for the title content
   * @param description - Snippet for the description content
   * @returns An accessible, styled toast element
   */
  let {
    type = 'info',
    visible = true,
    duration = 5000,
    title,
    description,
    class: className = '',
    children,
    ...restProps
  }: IToastProps = $props();

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

  let classes = $derived(
    ToastStyleManager.getAllClasses(type, internalVisible, className)
  );

  function closeToast() {
    internalVisible = false;
    // Dispatch event to notify parent that toast is closed
    const event = new CustomEvent('toastClosed', { detail: {} });
    dispatchEvent(event);
  }
</script>

{#if internalVisible}
  <div
    class={classes}
    role="alert"
    {...restProps}
  >
    <div class="toast-content">
      {#if title}
        <div class="toast-title">
          {@render title()}
        </div>
      {/if}
      {#if description}
        <div class="toast-description">
          {@render description()}
        </div>
      {/if}
      {#if children}
        {@render children?.()}
      {/if}
    </div>
    <button
      type="button"
      class="toast-close-button"
      onclick={closeToast}
      aria-label="Close"
    >
      <Icon name="x" size="sm" />
    </button>
  </div>
{/if}

<style>
/* Base toast styles */
.toast-base {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.toast-hidden {
  opacity: 0;
  max-height: 0;
  overflow: hidden;
  margin: 0;
}

.toast-visible {
  opacity: 1;
  max-height: 300px;
}

/* Toast variant styles */
.toast-variant-info {
  background-color: var(--color-info-50) !important;
  border-color: var(--color-info-200) !important;
  color: var(--color-info-700) !important;
}

.toast-variant-success {
  background-color: var(--color-success-50) !important;
  border-color: var(--color-success-200) !important;
  color: var(--color-success-700) !important;
}

.toast-variant-warning {
  background-color: var(--color-warning-50) !important;
  border-color: var(--color-warning-200) !important;
  color: var(--color-warning-700) !important;
}

.toast-variant-error {
  background-color: var(--color-danger-50) !important;
  border-color: var(--color-danger-200) !important;
  color: var(--color-danger-700) !important;
}

/* Close button styles */
.toast-close-button {
  background: none;
  border: none;
  color: var(--color-text-secondary);
  cursor: pointer;
  padding: 0.25rem;
  border-radius: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.toast-close-button:hover {
  background-color: var(--color-secondary-100);
  color: var(--color-text-primary);
}

.toast-content {
  flex: 1;
  min-width: 0;
}

.toast-title {
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.toast-description {
  font-size: 0.875rem;
}
</style>
