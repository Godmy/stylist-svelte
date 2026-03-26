import { derived, writable } from 'svelte/store';
import type { ErrorMessageProps } from '$stylist/interaction/interface/error-message';
import { mergeClasses } from '$stylist/information/function/classes';

export function createErrorMessageState(props: ErrorMessageProps) {
  // Initialize props with defaults
  const error = props.error;
  const title = props.title ?? 'Error';
  const onRetry = props.onRetry;
  const showRetry = props.showRetry ?? true;

  // Local state for error message
  let errorMessage = $state<string | null>(null);

  // Update error message when prop changes
  $effect(() => {
    if (error) {
      errorMessage = typeof error === 'string' ? error : error.message || 'An unknown error occurred';
    } else {
      errorMessage = null;
    }
  });

  const styles = {
    container: 'rounded-lg border border-[--color-danger-200] bg-[--color-danger-50] p-4 text-[--color-danger-900]',
    title: 'text-sm font-semibold',
    text: 'mt-1 text-sm',
    button: 'inline-flex items-center rounded-md bg-[--color-danger-600] px-3 py-1.5 text-sm font-medium text-[--color-text-inverse] transition-colors hover:bg-[--color-danger-700]',
    buttonContainer: 'mt-3'
  };

  // Merge classes with custom classes
  const containerClasses = derived(
    [writable(props.class), writable(styles.container)],
    ([$class, $container]) => mergeClasses($container, $class)
  );

  return {
    error,
    title,
    onRetry,
    showRetry,
    get errorMessage() {
      return errorMessage;
    },
    containerClasses,
    titleClasses: styles.title,
    textClasses: styles.text,
    buttonClasses: styles.button,
    buttonContainerClasses: styles.buttonContainer
  };
}

export default createErrorMessageState;



