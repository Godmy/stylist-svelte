<script lang="ts">
  import { Button } from '$stylist';
  import type { GeneralToolbarRecipe } from '$stylist/navigation/type/struct/general-toolbar-props';
  import { createGeneralToolbarState } from '$stylist/navigation/function/state/general-toolbar';

  let props: GeneralToolbarRecipe = $props();
  const state = createGeneralToolbarState(props);
</script>

<style>
  .toolbar {
    display: flex;
    gap: var(--spacing-2);
    align-items: center;
    padding: var(--spacing-2);
    background-color: var(--color-background-secondary);
    border-radius: var(--border-radius-lg);
    border: 1px solid var(--color-border-secondary);
  }
</style>

<div class="toolbar" class:{props.class}>{#each props.toolbarItems ?? [] as item}
    <Button
      variant="ghost"
      size={state.buttonSize}
      onclick={() => {
        if (!props.disabled) {
          item.action();
        }
      }}
      title={item.label}
      disabled={props.disabled}
    >
      {item.icon}
    </Button>
  {/each}
</div>
