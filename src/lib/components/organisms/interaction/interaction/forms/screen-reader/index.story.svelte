<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';
  import type { ScreenReaderProps } from '$stylist/design-system/props';
  import { ScreenReaderStyleManager } from '$stylist/design-system/styles';
  import ScreenReader from './index.svelte';

  type Props = {
    showSkipLink: boolean;
    showAriaLive: boolean;
    showAnnouncements: boolean;
    announcePageChanges: boolean;
  };

  const controls: ControlConfig[] = [
    { name: 'showSkipLink', type: 'boolean', defaultValue: true },
    { name: 'showAriaLive', type: 'boolean', defaultValue: true },
    { name: 'showAnnouncements', type: 'boolean', defaultValue: true },
    { name: 'announcePageChanges', type: 'boolean', defaultValue: true }
  ];

  function handleAnnounce(message: string) {
    console.log('Announced:', message);
  }
</script>

<Story
  id="organisms-screen-reader"
  title="Organisms / Interaction / Forms / Screen Reader"
  component={ScreenReader}
  category="Organisms/Interaction/Forms"
  description="A screen reader support component providing accessibility features and ARIA announcements."
  tags={['accessibility', 'screen-reader', 'aria', 'a11y']}
  controls={controls}
>
  {#snippet children(props)}
    <div class={ScreenReaderStyleManager.skipLink('sb-organisms-screen-reader p-4')}>
      <h1 class="text-lg font-semibold mb-4">ScreenReader Component</h1>

      <div class="mb-6 p-4 border rounded">
        <h2 class="text-md font-semibold mb-2">Interactive ScreenReader</h2>
        <div class="max-w-lg">
          <ScreenReader 
            showSkipLink={props.showSkipLink}
            showAriaLive={props.showAriaLive}
            showAnnouncements={props.showAnnouncements}
            announcePageChanges={props.announcePageChanges}
            onAnnounce={handleAnnounce}
          />
        </div>
      </div>
    </div>
  {/snippet}
</Story>

