<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { X } from 'lucide-svelte';

  import type { Snippet } from 'svelte';
  import type { TagProps } from './types';
  import {
    DEFAULT_TAG_VARIANT,
    DEFAULT_TAG_SIZE,
    DEFAULT_TAG_CLOSABLE,
    DEFAULT_TAG_DISABLED
  } from './constant';
  import { TagStyleManager } from './styles';

  /**
   * Tag component - A compact component for displaying small pieces of information, often with a close button.
   * If `content` is provided, it will be rendered; otherwise, `text` will be used.
   *
   * Following SOLID principles:
   * - Single Responsibility: Only handles component rendering and state.
   * - Open/Closed: Extendable through properties but closed for modification.
   * - Liskov Substitution: Can be substituted with other similar components.
   * - Interface Segregation: Small focused interface.
   * - Dependency Inversion: Depends on abstractions (interfaces) rather than concretions.
   *
   * @param text - Text content for the tag.
   * @param variant - Color scheme variant of the tag.
   * @param size - Size of the tag.
   * @param closable - Whether the tag can be closed.
   * @param disabled - Disabled state of the tag.
   * @param icon - Icon to display before the tag text.
   * @param content - Slot content for the tag (alternative to text).
   * @param class - Additional CSS classes.
   * @fires close - Dispatched when the close button is clicked.
   * @returns An accessible, styled tag element.
   */
  const dispatch = createEventDispatcher<{ close: void }>();

  let {
    text,
    variant = DEFAULT_TAG_VARIANT,
    size = DEFAULT_TAG_SIZE,
    closable = DEFAULT_TAG_CLOSABLE,
    disabled = DEFAULT_TAG_DISABLED,
    icon,
    content,
    class: className = ''
  }: TagProps = $props();

  let tagClasses = $derived(
    TagStyleManager.getTagClasses(variant, size, disabled, className)
  );

  let closeButtonClasses = $derived(
    TagStyleManager.getCloseButtonClasses(disabled)
  );

  let closeButtonIconClasses = $derived(
    TagStyleManager.getCloseButtonIconClasses()
  );

  function handleClose() {
    if (disabled) return;
    dispatch('close');
  }
</script>

<span class={tagClasses}>
  {#if icon}
    <span class="flex items-center" aria-hidden="true">
      {@render icon()}
    </span>
  {/if}

  <span>
    {#if content}
      {@render content()}
    {:else if text}
      {text}
    {/if}
  </span>

  {#if closable}
    <button
      type="button"
      class={closeButtonClasses}
      onclick={handleClose}
      disabled={disabled}
      aria-label="Удалить тег"
    >
      <X class={closeButtonIconClasses} />
    </button>
  {/if}
</span>
