<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import DarkModeToggle from './DarkModeToggle.svelte';

  type DarkModeToggleStoryProps = {
    darkMode: boolean;
    disabled: boolean;
  };

  const controls: ControlConfig[] = [
    {
      name: 'darkMode',
      type: 'boolean',
      defaultValue: false
    },
    {
      name: 'disabled',
      type: 'boolean',
      defaultValue: false
    }
  ];
</script>

<Story
  id="molecules-dark-mode-toggle"
  title="DarkModeToggle"
  component={DarkModeToggle}
  category="Molecules"
  description="A toggle for switching between dark and light mode."
  tags={['theme', 'toggle', 'dark-mode']}
  controls={controls}
>
  {#snippet children(props: DarkModeToggleStoryProps)}
    <div class="p-8 bg-gray-50 rounded-lg">
      <h2 class="text-xl font-bold mb-4">DarkModeToggle Story</h2>
      <DarkModeToggle
        darkMode={props.darkMode}
        disabled={props.disabled}
      />
    </div>
  {/snippet}
</Story>
