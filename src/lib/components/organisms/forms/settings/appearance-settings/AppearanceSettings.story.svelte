<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import AppearanceSettings from './AppearanceSettings.svelte';

  type Props = {
    title: string;
  };

  const controls: ControlConfig[] = [
    {
      name: 'title',
      type: 'text',
      defaultValue: 'Appearance Settings'
    }
  ];
</script>

<Story
  id="molecules-appearance-settings"
  title="AppearanceSettings"
  component={AppearanceSettings}
  category="Molecules"
  description="A form for managing appearance and theme settings."
  tags={['settings', 'theme', 'ui']}
  controls={controls}
>
  {#snippet children(props: Props)}
    <div class="p-6 max-w-md mx-auto">
      <div class="mb-6">
        <h2 class="text-xl font-semibold">{props.title}</h2>
        <p class="text-gray-500">Customize your appearance preferences</p>
      </div>
      <AppearanceSettings />
    </div>
  {/snippet}
</Story>