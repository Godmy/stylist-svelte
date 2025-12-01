<script lang="ts">
  import type { IToastProps } from './types';
  import { ToastStyleManager } from './styles';
  import { Icon } from '$lib/components/atoms';
  import './Toast.css';

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
        {@render children()}
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