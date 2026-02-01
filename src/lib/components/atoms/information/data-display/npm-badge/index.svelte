<script lang="ts">
  import type { NpmBadgeProps } from '$stylist/design-system/data-display';
  import { createNpmBadgeState } from '../state.svelte';

  let props: NpmBadgeProps = $props();

  const state = createNpmBadgeState(props);
  const value = $derived(props.value);
  const link = $derived(props.link);
</script>

{#if link}
  <a href={link} class={state.linkClasses} target="_blank" rel="noopener noreferrer">
    <span class={state.classes}>
      <span class="npm-badge-label font-semibold">{state.label}:</span>
      <span class="npm-badge-value ml-1">{value}</span>
    </span>
  </a>
{:else}
  <span class={state.classes}>
    <span class="npm-badge-label font-semibold">{state.label}:</span>
    <span class="npm-badge-value ml-1">{value}</span>
  </span>
{/if}
