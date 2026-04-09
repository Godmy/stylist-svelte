<script lang="ts">
  import Story from '$stylist/development/svelte/playground/Story.svelte';
  import AccessibilityToolbar from './index.svelte';
  import { TOKEN_CONTROLLER_TYPE } from '$stylist/interaction/const/map/controller-type';

  const controls = [
    {
      name: 'showFontSizeControls',
      type: TOKEN_CONTROLLER_TYPE.BOOLEAN,
      defaultValue: true
    },
    {
      name: 'showScreenReaderTester',
      type: TOKEN_CONTROLLER_TYPE.BOOLEAN,
      defaultValue: true
    },
    {
      name: 'showFocusIndicator',
      type: TOKEN_CONTROLLER_TYPE.BOOLEAN,
      defaultValue: true
    },
    {
      name: 'showTokenAnimationToggle',
      type: TOKEN_CONTROLLER_TYPE.BOOLEAN,
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
      showFontSizeControls={values.showFontSizeControls}
      showScreenReaderTester={values.showScreenReaderTester}
      showFocusIndicator={values.showFocusIndicator}
      showTokenAnimationToggle={values.showTokenAnimationToggle}
    />
  {/snippet}
</Story>





