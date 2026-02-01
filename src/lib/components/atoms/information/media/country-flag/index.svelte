<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import type { CountryFlagProps } from '$stylist/design-system/media';
  import { createCountryFlagState } from '../state.svelte';

  type Props = CountryFlagProps & HTMLAttributes<HTMLSpanElement>;

  let {
    content,
    ...restProps
  }: Props = $props();

  const state = createCountryFlagState(restProps);
</script>

{#if state.isValid}
  <span class={state.classes} style={state.style} {...restProps}>
    {state.emoji}
  </span>
{:else}
  <div class={state.fallbackClasses} style={state.fallbackStyle}>
    {#if content}
      {@render content()}
    {:else}
      ?
    {/if}
  </div>
{/if}
