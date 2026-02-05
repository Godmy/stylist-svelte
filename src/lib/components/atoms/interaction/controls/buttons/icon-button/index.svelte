<script lang="ts">
  import { Loader2 } from 'lucide-svelte';
  import type { HTMLButtonAttributes } from 'svelte/elements';
  import type { IconButtonProps } from '$stylist/design-system/attributes';
  import { ICON_BUTTON_PRESET } from '$stylist/design-system/presets';
  import { createState } from '../state.svelte';

  /**
   * IconButton component - A button that primarily displays an icon
   * Uses the same props as Button for consistency (SOLID - Liskov Substitution)
   *
   * @param variant - Visual style of the button
   * @param size - Size of the button
   * @param disabled - Whether the button is disabled
   * @param loading - Whether the button is in a loading state
   * @param icon - The icon component to display in the button
   * @param ariaLabel - Accessible label for the button
   * @param class - Additional CSS classes
   * @returns An accessible, styled icon button element
   */
  let props: IconButtonProps & HTMLButtonAttributes = $props();

  // Use centralized state management
  let state = createState(ICON_BUTTON_PRESET, {
    ...props,
    class: `${props.class ?? ''} icon-button`.trim()
  });
</script>

<button
  {...$$restProps}
  type={props.type ?? 'button'}
  class={state.classes}
  {...state.attrs}
>
  {#if state.loading}
    <Loader2 class={state.loaderClasses} aria-hidden="true" />
    <span class="sr-only">{props.loadingLabel ?? 'Loading...'}</span>
  {:else if props.icon !== undefined && props.icon !== null}
    {@const Icon = props.icon}
    <Icon />
  {:else if props.children}
    {@render props.children()}
  {/if}
</button>
