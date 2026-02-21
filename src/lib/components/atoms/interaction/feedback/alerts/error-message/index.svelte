<script lang="ts">
  import { createErrorMessageState } from '$stylist/design-system/models/interaction/error-message.svelte';
  import type { ErrorMessageProps } from '$stylist/design-system/props/interaction/error-message';

  type Props = ErrorMessageProps;
  let props: Props = $props();

  const state = createErrorMessageState(props);

  const restProps = $derived(
    (() => {
      const { class: _class, title: _title, error: _error, showRetry: _showRetry, onRetry: _onRetry, ...rest } = props;
      return rest;
    })()
  );
</script>

{#if state.errorMessage}
  <div class={state.containerClasses} {...restProps}>
    <div class={state.titleClasses}>{state.title}</div>
    <div class={state.textClasses}>{state.errorMessage}</div>
    {#if state.showRetry && state.onRetry}
      <div class={state.buttonContainerClasses}>
        <button class={state.buttonClasses} onclick={state.onRetry} aria-label="Retry action">Retry</button>
      </div>
    {/if}
  </div>
{/if}