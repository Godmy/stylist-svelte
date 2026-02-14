<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { Accessibility, Contrast, Volume2, Eye, Minus, Plus, Type, Grid } from 'lucide-svelte';
  import { AccessibilityToolbarStyleManager } from '$stylist/design-system/styles/accessibility-toolbar';

  type Props = {
    showContrastToggle?: boolean;
    showFontSizeControls?: boolean;
    showScreenReaderTester?: boolean;
    showFocusIndicator?: boolean;
    showAnimationsToggle?: boolean;
    class?: string;
    toolbarClass?: string;
    buttonClass?: string;
  } & HTMLAttributes<HTMLDivElement>;

  let {
    showContrastToggle = true,
    showFontSizeControls = true,
    showScreenReaderTester = true,
    showFocusIndicator = true,
    showAnimationsToggle = true,
    class: className = '',
    toolbarClass = '',
    buttonClass = '',
    ...restProps
  }: Props = $props();

  let fontSizeScale = $state(1);
  let highContrast = $state(false);
  let screenReaderMode = $state(false);
  let focusIndicator = $state(true);
  let disableAnimations = $state(false);

  // Increase font size
  function increaseFontSize() {
    if (fontSizeScale < 1.5) {
      fontSizeScale = Math.round((fontSizeScale + 0.1) * 10) / 10;
      document.documentElement.style.fontSize = `${fontSizeScale * 16}px`;
    }
  }

  // Decrease font size
  function decreaseFontSize() {
    if (fontSizeScale > 0.8) {
      fontSizeScale = Math.round((fontSizeScale - 0.1) * 10) / 10;
      document.documentElement.style.fontSize = `${fontSizeScale * 16}px`;
    }
  }

  // Toggle high contrast
  function toggleHighContrast() {
    highContrast = !highContrast;

    if (highContrast) {
      document.body.classList.add('high-contrast-mode');
    } else {
      document.body.classList.remove('high-contrast-mode');
    }
  }

  // Toggle screen reader mode
  function toggleScreenReaderMode() {
    screenReaderMode = !screenReaderMode;
    alert(screenReaderMode ?
      "Screen reader mode activated. All visual elements will be described." :
      "Screen reader mode deactivated.");
  }

  // Toggle focus indicator
  function toggleFocusIndicator() {
    focusIndicator = !focusIndicator;
    document.body.classList.toggle('no-focus-outline', !focusIndicator);
  }

  // Toggle animations
  function toggleAnimations() {
    disableAnimations = !disableAnimations;

    if (disableAnimations) {
      document.body.classList.add('reduce-motion');
      document.documentElement.style.setProperty('--animation-duration', '0.01ms');
      document.documentElement.style.setProperty('--animation-iteration-count', '1');
    } else {
      document.body.classList.remove('reduce-motion');
      document.documentElement.style.removeProperty('--animation-duration');
      document.documentElement.style.removeProperty('--animation-iteration-count');
    }
  }

  // Generate CSS classes using the style manager
  const containerClass = $derived(AccessibilityToolbarStyleManager.getContainerClass(className));
  const toolbarClassComputed = $derived(AccessibilityToolbarStyleManager.getToolbarClass(toolbarClass));
  const buttonClassComputed = $derived(AccessibilityToolbarStyleManager.getButtonClass(buttonClass));
  const activeButtonClass = $derived(AccessibilityToolbarStyleManager.getActiveButtonClass(buttonClass));
  const fontSizeDisplayClass = $derived(AccessibilityToolbarStyleManager.getFontSizeDisplayClass());
</script>

<div class={containerClass} {...restProps}>
  <div class={toolbarClassComputed}>
    {#if showContrastToggle}
      <button
        type="button"
        class={`${buttonClassComputed} ${highContrast ? activeButtonClass : 'text-[--color-text-primary]'}`}
        aria-label={highContrast ? "Disable high contrast" : "Enable high contrast"}
        aria-pressed={highContrast}
        onclick={toggleHighContrast}
      >
        <Contrast class="h-5 w-5" />
      </button>
    {/if}

    {#if showFontSizeControls}
      <button
        type="button"
        class={buttonClassComputed}
        aria-label="Decrease font size"
        onclick={decreaseFontSize}
      >
        <Minus class="h-5 w-5" />
      </button>

      <span class={fontSizeDisplayClass}>{Math.round(fontSizeScale * 100)}%</span>

      <button
        type="button"
        class={buttonClassComputed}
        aria-label="Increase font size"
        onclick={increaseFontSize}
      >
        <Plus class="h-5 w-5" />
      </button>
    {/if}

    {#if showScreenReaderTester}
      <button
        type="button"
        class={`${buttonClassComputed} ${screenReaderMode ? activeButtonClass : 'text-[--color-text-primary]'}`}
        aria-label={screenReaderMode ? "Disable screen reader tester" : "Enable screen reader tester"}
        aria-pressed={screenReaderMode}
        onclick={toggleScreenReaderMode}
      >
        <Volume2 class="h-5 w-5" />
      </button>
    {/if}

    {#if showFocusIndicator}
      <button
        type="button"
        class={`${buttonClassComputed} ${focusIndicator ? activeButtonClass : 'text-[--color-text-primary]'}`}
        aria-label={focusIndicator ? "Hide focus indicators" : "Show focus indicators"}
        aria-pressed={focusIndicator}
        onclick={toggleFocusIndicator}
      >
        <Eye class="h-5 w-5" />
      </button>
    {/if}

    {#if showAnimationsToggle}
      <button
        type="button"
        class={`${buttonClassComputed} ${disableAnimations ? activeButtonClass : 'text-[--color-text-primary]'}`}
        aria-label={disableAnimations ? "Enable animations" : "Reduce animations"}
        aria-pressed={disableAnimations}
        onclick={toggleAnimations}
      >
        <Grid class="h-5 w-5" />
      </button>
    {/if}

    <button
      type="button"
      class={buttonClassComputed}
      aria-label="Accessibility settings"
    >
      <Accessibility class="h-5 w-5" />
    </button>
  </div>
</div>

