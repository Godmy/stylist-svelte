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
  {#snippet children(props)}
    <AccessibilityToolbar
      showContrastToggle={props.showContrastToggle}
      showFontSizeControls={props.showFontSizeControls}
      showScreenReaderTester={props.showScreenReaderTester}
      showFocusIndicator={props.showFocusIndicator}
      showAnimationsToggle={props.showAnimationsToggle}
    />
  {/snippet}
</Story>


