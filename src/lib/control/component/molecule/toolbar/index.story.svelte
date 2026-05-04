<script lang="ts">
  import Story from '$stylist/playground/component/molecule/story/index.svelte';

  import Toolbar from './index.svelte';
</script>

<Story component={Toolbar} title="Toolbar Component" description="Toolbar component with various actions">
  {#snippet children()}
    <Toolbar
      onZoomIn={() => console.log('Zoom in')}
      onZoomOut={() => console.log('Zoom out')}
      onFitView={() => console.log('Fit to view')}
      onResetView={() => console.log('Reset view')}
      onExportImage={(format: 'png' | 'jpeg' | 'svg') => console.log('Export image:', format)}
      onToggleLegend={() => console.log('Toggle legend')}
      onToggleSearch={() => console.log('Toggle search')}
    />
  {/snippet}
</Story>
