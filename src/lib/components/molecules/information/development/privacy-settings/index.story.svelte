<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';
  import PrivacySettings from './index.svelte';

  type PrivacySettingsStoryProps = {
    showSaveButton: boolean;
  };

  const controls: ControlConfig[] = [
    {
      name: 'showSaveButton',
      type: 'boolean',
      defaultValue: true
    }
  ];
</script>

<Story
  id="molecules-privacy-settings"
  title="Molecules / Information / Development / PrivacySettings"
  component={PrivacySettings}
  category="Molecules/Information/Development"
  description="A component for managing privacy settings."
  controls={controls}
>
  {#snippet children(args)}
    <div class="sb-molecules-privacy-settings p-8 bg-gray-50 rounded-lg">
      <h2 class="text-xl font-bold mb-4">PrivacySettings Story</h2>
      <PrivacySettings
        settings={[
          {
            id: 'data-collection',
            label: 'Data Collection',
            description: 'Allow collection of usage analytics',
            enabled: true
          },
          {
            id: 'personalized-ads',
            label: 'Personalized Ads',
            description: 'Receive personalized advertisements',
            enabled: false
          },
          {
            id: 'location-access',
            label: 'Location Access',
            description: 'Allow access to your location data',
            enabled: true
          }
        ]}
        onSave={() => console.log('Settings saved')}
      />
    </div>
  {/snippet}
</Story>



