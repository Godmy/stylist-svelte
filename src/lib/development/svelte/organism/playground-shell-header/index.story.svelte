<script lang="ts">
  import { Story } from '$stylist/development/svelte/playground';
  import PlaygroundShellHeader from './index.svelte';

  const colorSchemes = [
    { id: 'sunset', name: 'Sunset', accent: '#f97316', accentStrong: '#ea580c' },
    { id: 'ocean', name: 'Ocean', accent: '#0ea5e9', accentStrong: '#0284c7' },
    { id: 'forest', name: 'Forest', accent: '#22c55e', accentStrong: '#16a34a' }
  ];
</script>

<Story
  component={PlaygroundShellHeader}
  title="Playground Shell Header"
  description="Header shell for playground controls and quick actions."
>
  {#snippet children()}
    <PlaygroundShellHeader
      showComponentTree={true}
      showAIPanel={false}
      drawingMode={false}
      drawColor="#ef4444"
      currentViewport="desktop"
      showDeviceFrame={false}
      showGrid={false}
      zoom={1}
      darkMode={false}
      {colorSchemes}
      activeColorScheme={colorSchemes[0]}
      onToggleComponentTree={() => {}}
      onToggleAIPanel={() => {}}
      onToggleDrawingMode={() => {}}
      onTakeScreenshot={() => {}}
      onChangeDrawColor={() => {}}
      onSetViewport={() => {}}
      onToggleDeviceFrame={() => {}}
      onZoomOut={() => {}}
      onZoomIn={() => {}}
      onToggleGrid={() => {}}
      onToggleDarkMode={() => {}}
      onSetColorScheme={() => {}}
    />
  {/snippet}
</Story>


