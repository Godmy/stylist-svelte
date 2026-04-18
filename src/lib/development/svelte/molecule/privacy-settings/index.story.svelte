<script lang="ts">
  import { Story } from '$stylist/development/svelte/playground';
  import type { InterfaceControllerSettings } from '$stylist/development/type/struct/interface-controller-settings';
  import RecipePrivacySettings from './index.svelte';

  let saveCount = $state(0);

  const controls: InterfaceControllerSettings[] = [
    { name: 'analyticsEnabled', type: 'boolean', defaultValue: true },
    { name: 'adsEnabled', type: 'boolean', defaultValue: false },
    { name: 'locationEnabled', type: 'boolean', defaultValue: true }
  ];
</script>

<Story
  id="molecules-privacy-settings"
  title="Molecules / Information / Development / RecipePrivacySettings"
  component={RecipePrivacySettings}
  category="Molecules/Information/Development"
  description="Toggleable privacy preferences with explicit save action."
  {controls}
>
  {#snippet children(args: any)}
    <div class="p-6 rounded-xl bg-gray-50 space-y-3">
      <RecipePrivacySettings
        settings={[
          { id: 'analytics', label: 'Usage analytics', description: 'Share anonymous usage stats', enabled: args.analyticsEnabled },
          { id: 'ads', label: 'Personalized ads', description: 'Allow ad personalization', enabled: args.adsEnabled },
          { id: 'location', label: 'SlotLocation access', description: 'Allow location-based features', enabled: args.locationEnabled }
        ]}
        onSave={() => (saveCount += 1)}
      />
      <p class="text-sm text-gray-600">Saved: {saveCount} times</p>
    </div>
  {/snippet}
</Story>



