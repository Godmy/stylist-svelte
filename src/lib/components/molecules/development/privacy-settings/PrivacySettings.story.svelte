<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import PrivacySettings from './PrivacySettings.svelte';

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
  title="PrivacySettings"
  component={PrivacySettings}
  category="Molecules"
  description="A component for managing privacy settings."
  tags={['privacy', 'settings', 'controls']}
  controls={controls}
>
  {#snippet children(props: PrivacySettingsStoryProps)}
    <div class="p-8 bg-gray-50 rounded-lg">
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