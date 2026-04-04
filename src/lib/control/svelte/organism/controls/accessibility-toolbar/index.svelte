<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import type { ArchitectureHTMLAttributes } from '$stylist/layout/type/struct/item';
  import { Icon as BaseIcon } from '$stylist';
const Accessibility = 'accessibility';
const Volume2 = 'volume-2';
const Eye = 'eye';
const Minus = 'minus';
const Plus = 'plus';
const Type = 'type';
const Grid = 'grid';

  import { createAccessibilityToolbarState } from '$stylist/control/function/state/accessibility-toolbar';

  type AccessibilityToolbarProps = {
    showFontSizeControls?: boolean;
    showScreenReaderTester?: boolean;
    showFocusIndicator?: boolean;
    showTokenAnimationToggle?: boolean;
    class?: string;
    toolbarClass?: string;
    buttonClass?: string;
    variant?: 'default' | 'minimal' | 'compact';
    size?: 'sm' | 'md' | 'lg';
  } & ArchitectureHTMLAttributes<HTMLDivElement>;

  let {
    showFontSizeControls = true,
    showScreenReaderTester = true,
    showFocusIndicator = true,
    showTokenAnimationToggle = true,
    class: className = '',
    toolbarClass = '',
    buttonClass = '',
    variant = 'default',
    size = 'md',
    ...restProps
  }: AccessibilityToolbarProps & HTMLAttributes<HTMLDivElement> = $props();
  const hostClass = className == null ? undefined : String(className);

  const toolbarState = createAccessibilityToolbarState({
    showFontSizeControls,
    showScreenReaderTester,
    showFocusIndicatorToggle: showFocusIndicator,
    showAnimationToggle: showTokenAnimationToggle,
    class: className,
    toolbarClass,
    buttonClass,
    variant,
    size
  });

  let fontSizeScale = $state(1);
  let screenReaderMode = $state(false);
  let focusIndicator = $state(true);
  let disableTokenAnimation = $state(false);

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
  function toggleTokenAnimation() {
    disableTokenAnimation = !disableTokenAnimation;

    if (disableTokenAnimation) {
      document.body.classList.add('reduce-motion');
      document.documentElement.style.setProperty('--animation-duration', '0.01ms');
      document.documentElement.style.setProperty('--animation-iteration-count', '1');
    } else {
      document.body.classList.remove('reduce-motion');
      document.documentElement.style.removeProperty('--animation-duration');
      document.documentElement.style.removeProperty('--animation-iteration-count');
    }
  }
</script>

<div class={toolbarState.containerClass} {...toolbarState.restProps}>
  <div class={toolbarState.toolbarClass}>
    {#if toolbarState.showFontSizeControls}
      <button
        type="button"
        class={toolbarState.buttonClass}
        aria-label="Decrease font size"
        onclick={decreaseFontSize}
      >
        <BaseIcon name={Minus} class="h-5 w-5" />
      </button>

      <span class={toolbarState.fontSizeDisplayClass}>{Math.round(fontSizeScale * 100)}%</span>

      <button
        type="button"
        class={toolbarState.buttonClass}
        aria-label="Increase font size"
        onclick={increaseFontSize}
      >
        <BaseIcon name={Plus} class="h-5 w-5" />
      </button>
    {/if}

    {#if toolbarState.showScreenReaderTester}
      <button
        type="button"
        class={`${toolbarState.buttonClass} ${screenReaderMode ? toolbarState.activeButtonClass : 'text-[--color-text-primary]'}`}
        aria-label={screenReaderMode ? "Disable screen reader tester" : "Enable screen reader tester"}
        aria-pressed={screenReaderMode}
        onclick={toggleScreenReaderMode}
      >
        <BaseIcon name={Volume2} class="h-5 w-5" />
      </button>
    {/if}

    {#if toolbarState.showFocusIndicatorToggle}
      <button
        type="button"
        class={`${toolbarState.buttonClass} ${focusIndicator ? toolbarState.activeButtonClass : 'text-[--color-text-primary]'}`}
        aria-label={focusIndicator ? "Hide focus indicators" : "Show focus indicators"}
        aria-pressed={focusIndicator}
        onclick={toggleFocusIndicator}
      >
        <BaseIcon name={Eye} class="h-5 w-5" />
      </button>
    {/if}

    {#if toolbarState.showAnimationToggle}
      <button
        type="button"
        class={`${toolbarState.buttonClass} ${disableTokenAnimation ? toolbarState.activeButtonClass : 'text-[--color-text-primary]'}`}
        aria-label={disableTokenAnimation ? "Enable animations" : "Reduce animations"}
        aria-pressed={disableTokenAnimation}
        onclick={toggleTokenAnimation}
      >
        <BaseIcon name={Grid} class="h-5 w-5" />
      </button>
    {/if}

    <button
      type="button"
      class={toolbarState.buttonClass}
      aria-label="Accessibility settings"
    >
      <BaseIcon name={Accessibility} class="h-5 w-5" />
    </button>
  </div>
</div>



