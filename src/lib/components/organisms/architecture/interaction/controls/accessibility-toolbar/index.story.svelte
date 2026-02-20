<script lang="ts">
  import Story from '$stylist/design-system/playground/Story.svelte';
  import AccessibilityToolbar from './index.svelte';
  import { CONTROL_TYPES } from '$stylist/design-system/tokens/controls';

  const controls = [
    {
      name: 'showContrastToggle',
      type: CONTROL_TYPES.BOOLEAN,
      defaultValue: true
    },
    {
      name: 'showFontSizeControls',
      type: CONTROL_TYPES.BOOLEAN,
      defaultValue: true
    },
    {
      name: 'showScreenReaderTester',
      type: CONTROL_TYPES.BOOLEAN,
      defaultValue: true
    },
    {
      name: 'showFocusIndicator',
      type: CONTROL_TYPES.BOOLEAN,
      defaultValue: true
    },
    {
      name: 'showAnimationsToggle',
      type: CONTROL_TYPES.BOOLEAN,
      defaultValue: true
    }
  ];
</script>

<Story
  {controls}
  title="AccessibilityToolbar"
  category="Organisms/Interaction/Controls"
  description="Accessibility toolbar component for improving web accessibility."
  tags={['accessibility', 'toolbar', 'contrast', 'screen-reader', 'focus']}
>
  {#snippet children(values: any)}
    <AccessibilityToolbar
      showContrastToggle={values.showContrastToggle}
      showFontSizeControls={values.showFontSizeControls}
      showScreenReaderTester={values.showScreenReaderTester}
      showFocusIndicator={values.showFocusIndicator}
      showAnimationsToggle={values.showAnimationsToggle}
    />
  {/snippet}
</Story>


