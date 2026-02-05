<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import type { NumberFlowProps } from '$stylist/design-system';
  import { createNumberFlowState } from '../state.svelte';

  type Props = NumberFlowProps & HTMLAttributes<HTMLDivElement>;

  let {
    class: className,
    ...restProps
  }: Props = $props();

  const state = createNumberFlowState({ ...restProps, class: className });
</script>

<div class={state.classes.container} role="status" aria-live="polite">
  {#if state.prefix}
    <span class={state.classes.prefix} aria-hidden="true">{state.prefix}</span>
  {/if}

  <span>{state.formattedValue}</span>

  {#if state.suffix}
    <span class={state.classes.suffix} aria-hidden="true">{state.suffix}</span>
  {/if}

  <span class={state.classes.srOnly} aria-live="assertive">
    {state.prefix}{state.formattedValue}{state.suffix}
  </span>
</div>
