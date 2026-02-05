<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { X } from 'lucide-svelte';

  import type { TagProps } from '$stylist/design-system/attributes';
  import { createTagState } from '../state.svelte';

  const dispatch = createEventDispatcher<{ close: void }>();

  let props: TagProps = $props();

  const state = createTagState(props);
  const icon = $derived(props.icon);
  const content = $derived(props.content);

  function handleClose() {
    if (state.disabled) return;
    dispatch('close');
  }
</script>

<span class={state.classes}>
  {#if icon}
    <span class="flex items-center" aria-hidden="true">
      {@render icon()}
    </span>
  {/if}

  <span>
    {#if content}
      {@render content()}
    {:else if state.text}
      {state.text}
    {/if}
  </span>

  {#if state.closable}
    <button
      type="button"
      class={state.closeButtonClasses}
      onclick={handleClose}
      disabled={state.disabled}
      aria-label="Remove tag"
    >
      <X class={state.closeButtonIconClasses} />
    </button>
  {/if}
</span>
