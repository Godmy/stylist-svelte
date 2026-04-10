/** AREA: STYLIST CODER MODEL -> AUTO-GENERATED */
import type { AccessibilityToolbarRecipe } from '$stylist/control/interface/recipe/accessibility-toolbar';
import { AccessibilityToolbarStyleManager } from '$stylist/control/class/style-manager/accessibility-toolbar';

export function createAccessibilityToolbarState(props: AccessibilityToolbarRecipe) {
  const showFontSizeControls = $derived(props.showFontSizeControls ?? true);
  const showScreenReaderTester = $derived(props.showScreenReaderTester ?? true);
  const showFocusIndicatorToggle = $derived(props.showFocusIndicatorToggle ?? true);
  const showAnimationToggle = $derived(props.showAnimationToggle ?? true);
  const variant = $derived((props.variant ?? 'default') as 'default' | 'minimal' | 'compact');
  const size = $derived((props.size ?? 'md') as 'sm' | 'md' | 'lg');

  const containerClass = $derived(AccessibilityToolbarStyleManager.getContainerClass(props.class));
  const toolbarClass = $derived(AccessibilityToolbarStyleManager.getToolbarClass(props.toolbarClass));
  const buttonClass = $derived(AccessibilityToolbarStyleManager.getButtonClass(props.buttonClass));
  const activeButtonClass = $derived(AccessibilityToolbarStyleManager.getActiveButtonClass(props.buttonClass));
  const fontSizeDisplayClass = $derived(AccessibilityToolbarStyleManager.getFontSizeDisplayClass());
  let fontSizeScale = $state(1);
  let screenReaderMode = $state(false);
  let focusIndicator = $state(true);
  let disableTokenAnimation = $state(false);

  const restProps = $derived.by(() => {
    const {
      class: _class,
      toolbarClass: _toolbarClass,
      buttonClass: _buttonClass,
      showFontSizeControls: _showFontSizeControls,
      showScreenReaderTester: _showScreenReaderTester,
      showFocusIndicatorToggle: _showFocusIndicatorToggle,
      showAnimationToggle: _showAnimationToggle,
      variant: _variant,
      size: _size,
      children: _children,
      ...rest
    } = props;
    return rest;
  });

  return {
    get showFontSizeControls() { return showFontSizeControls; },
    get showScreenReaderTester() { return showScreenReaderTester; },
    get showFocusIndicatorToggle() { return showFocusIndicatorToggle; },
    get showAnimationToggle() { return showAnimationToggle; },
    get variant() { return variant; },
    get size() { return size; },
    get containerClass() { return containerClass; },
    get toolbarClass() { return toolbarClass; },
    get buttonClass() { return buttonClass; },
    get activeButtonClass() { return activeButtonClass; },
    get fontSizeDisplayClass() { return fontSizeDisplayClass; },
    get restProps() { return restProps; },
    get fontSizeScale() { return fontSizeScale; },
    get screenReaderMode() { return screenReaderMode; },
    get focusIndicator() { return focusIndicator; },
    get disableTokenAnimation() { return disableTokenAnimation; },
    increaseFontSize() {
      if (fontSizeScale < 1.5) {
        fontSizeScale = Math.round((fontSizeScale + 0.1) * 10) / 10;
        document.documentElement.style.fontSize = `${fontSizeScale * 16}px`;
      }
    },
    decreaseFontSize() {
      if (fontSizeScale > 0.8) {
        fontSizeScale = Math.round((fontSizeScale - 0.1) * 10) / 10;
        document.documentElement.style.fontSize = `${fontSizeScale * 16}px`;
      }
    },
    toggleScreenReaderMode() {
      screenReaderMode = !screenReaderMode;
      alert(
        screenReaderMode
          ? 'Screen reader mode activated. All visual elements will be described.'
          : 'Screen reader mode deactivated.'
      );
    },
    toggleFocusIndicator() {
      focusIndicator = !focusIndicator;
      document.body.classList.toggle('no-focus-outline', !focusIndicator);
    },
    toggleTokenAnimation() {
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
  };
}

export default createAccessibilityToolbarState;
