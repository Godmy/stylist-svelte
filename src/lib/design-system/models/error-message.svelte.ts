import { derived, writable } from 'svelte/store';
import { createErrorMessageStyles } from '../styles/error-message';
import type { ErrorMessageProps } from '../props/error-message';
import { mergeClasses } from '../../utils/classes';

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

  // Generate styles
  const styles = createErrorMessageStyles({});

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
    errorMessage,
    containerClasses,
    titleClasses: styles.title,
    textClasses: styles.text,
    buttonClasses: styles.button,
    buttonContainerClasses: styles.buttonContainer
  };
}

export default createErrorMessageState;