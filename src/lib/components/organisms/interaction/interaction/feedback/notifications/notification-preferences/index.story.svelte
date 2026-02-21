<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
  import type { NotificationPreferencesProps } from '$stylist/design-system/props';
  import { NotificationStyleManager } from '$stylist/design-system/styles';
  import NotificationPreferences from './index.svelte';

  type Props = {
    showEmail: boolean;
    showPush: boolean;
    showSms: boolean;
    showInApp: boolean;
    allowBulkToggle: boolean;
  };

  const controls: ControlConfig[] = [
    { name: 'showEmail', type: 'boolean', defaultValue: true },
    { name: 'showPush', type: 'boolean', defaultValue: true },
    { name: 'showSms', type: 'boolean', defaultValue: false },
    { name: 'showInApp', type: 'boolean', defaultValue: true },
    { name: 'allowBulkToggle', type: 'boolean', defaultValue: true }
  ];

  function handleSave(preferences: any) {
    console.log('Notification preferences saved:', preferences);
    alert('Notification preferences saved!');
  }

  function handleReset() {
    console.log('Preferences reset to defaults');
  }
</script>

<Story
  id="organisms-notification-preferences"
  title="Organisms / Interaction / Feedback / Notifications / Notification Preferences"
  component={NotificationPreferences}
  category="Organisms/Interaction/Feedback/Notifications"
  description="A notification preferences component for managing user notification settings across different channels."
  tags={['notification', 'preferences', 'settings', 'channels']}
  controls={controls}
>
  {#snippet children(values: any)}
    <div class={NotificationStyleManager.preferences('sb-organisms-notification-preferences p-4')}>
      <h1 class="text-lg font-semibold mb-4">NotificationPreferences Component</h1>

      <div class="mb-6 p-4 border rounded">
        <h2 class="text-md font-semibold mb-2">Interactive NotificationPreferences</h2>
        <div class="max-w-2xl">
          <NotificationPreferences 
            showEmail={values.showEmail}
            showPush={values.showPush}
            showSms={values.showSms}
            showInApp={values.showInApp}
            allowBulkToggle={values.allowBulkToggle}
            onSave={handleSave}
            onReset={handleReset}
          />
        </div>
      </div>
    </div>
  {/snippet}
</Story>

