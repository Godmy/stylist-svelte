<script lang="ts">
  import { Icon as BaseIcon } from '$stylist/media';
const Accessibility = 'accessibility';
const Volume2 = 'volume-2';
const Eye = 'eye';
const Minus = 'minus';
const Plus = 'plus';
const Type = 'type';
const Grid = 'grid';

  import { createAccessibilityToolbarState } from '$stylist/control/function/state/accessibility-toolbar';
  import type { AccessibilityToolbarProps } from '$stylist/control/type/struct/accessibility-toolbar-props';

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
  }: AccessibilityToolbarProps = $props();
  const state = createAccessibilityToolbarState({
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
</script>

<div class={state.containerClass} {...state.restProps}>
  <div class={state.toolbarClass}>
    {#if state.showFontSizeControls}
      <button
        type="button"
        class={state.buttonClass}
        aria-label="Decrease font size"
        onclick={state.decreaseFontSize}
      >
        <BaseIcon name={Minus} class="h-5 w-5" />
      </button>

      <span class={state.fontSizeDisplayClass}>{Math.round(state.fontSizeScale * 100)}%</span>

      <button
        type="button"
        class={state.buttonClass}
        aria-label="Increase font size"
        onclick={state.increaseFontSize}
      >
        <BaseIcon name={Plus} class="h-5 w-5" />
      </button>
    {/if}

    {#if state.showScreenReaderTester}
      <button
        type="button"
        class={`${state.buttonClass} ${state.screenReaderMode ? state.activeButtonClass : 'text-[--color-text-primary]'}`}
        aria-label={state.screenReaderMode ? "Disable screen reader tester" : "Enable screen reader tester"}
        aria-pressed={state.screenReaderMode}
        onclick={state.toggleScreenReaderMode}
      >
        <BaseIcon name={Volume2} class="h-5 w-5" />
      </button>
    {/if}

    {#if state.showFocusIndicatorToggle}
      <button
        type="button"
        class={`${state.buttonClass} ${state.focusIndicator ? state.activeButtonClass : 'text-[--color-text-primary]'}`}
        aria-label={state.focusIndicator ? "Hide focus indicators" : "Show focus indicators"}
        aria-pressed={state.focusIndicator}
        onclick={state.toggleFocusIndicator}
      >
        <BaseIcon name={Eye} class="h-5 w-5" />
      </button>
    {/if}

    {#if state.showAnimationToggle}
      <button
        type="button"
        class={`${state.buttonClass} ${state.disableTokenAnimation ? state.activeButtonClass : 'text-[--color-text-primary]'}`}
        aria-label={state.disableTokenAnimation ? "Enable animations" : "Reduce animations"}
        aria-pressed={state.disableTokenAnimation}
        onclick={state.toggleTokenAnimation}
      >
        <BaseIcon name={Grid} class="h-5 w-5" />
      </button>
    {/if}

    <button
      type="button"
      class={state.buttonClass}
      aria-label="Accessibility settings"
    >
      <BaseIcon name={Accessibility} class="h-5 w-5" />
    </button>
  </div>
</div>



