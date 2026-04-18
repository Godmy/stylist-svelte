<script lang="ts">
  import { Story } from '$stylist/development/svelte/playground';
  import type { InterfaceControllerSettings } from '$stylist/development/type/struct/interface-controller-settings';
  import type { SlotScreenReader as ScreenReaderProps } from '$stylist/form/interface/slot/screen-reader';
  import { ScreenReaderStyleManager } from '$stylist';
  import ScreenReader from './index.svelte';

  type Props = {
    showSkipLink: boolean;
    showAriaLive: boolean;
    showAnnouncements: boolean;
    announcePageChanges: boolean;
  };

  const controls: InterfaceControllerSettings[] = [
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
  {#snippet children(values: any)}
    <div class={ScreenReaderStyleManager.skipLink('sb-organisms-screen-reader p-4')}>
      <h1 class="text-lg font-semibold mb-4">ScreenReader Component</h1>

      <div class="mb-6 p-4 border rounded">
        <h2 class="text-md font-semibold mb-2">Interactive ScreenReader</h2>
        <div class="max-w-lg">
          <ScreenReader
          />
        </div>
      </div>
    </div>
  {/snippet}
</Story>




