import type { PlaygroundErrorBoundaryProps } from '$stylist/development/type/struct/playground-error-boundary-props';
export function createPlaygroundErrorBoundaryState(props: PlaygroundErrorBoundaryProps) {
  const component = $derived(props.component);
  const componentProps = $derived(props.props ?? {});
  const children = $derived(props.children);

  let error = $state<string | null>(null);

  function handleError(event: ErrorEvent) {
    console.error('[RecipePlaygroundErrorBoundary] Caught error:', event.error);
    error = event.error?.message || 'Unexpected rendering error';
    event.preventDefault();
  }

  function clearError() {
    error = null;
  }

  return {
    get component() { return component; },
    get componentProps() { return componentProps; },
    get children() { return children; },
    get error() { return error; },
    handleError,
    clearError
  };
}

export default createPlaygroundErrorBoundaryState;
