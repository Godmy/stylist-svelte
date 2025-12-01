<script lang="ts">
    import { Story } from '$lib/playground';
    import type { ControlConfig } from '$lib/playground';
    import Toolbar from './Toolbar.svelte';

    type Props = {
        // Toolbar doesn't typically have props, but we can define common ones if needed
    };

    const controls: ControlConfig[] = [];

    function handleZoomIn() {
        console.log('Zoom in');
    }

    function handleZoomOut() {
        console.log('Zoom out');
    }

    function handleFitView() {
        console.log('Fit to view');
    }

    function handleResetView() {
        console.log('Reset view');
    }

    function handleExport(e: CustomEvent<{format: string}>) {
        console.log('Export image:', e.detail.format);
    }

    function handleToggleLegend() {
        console.log('Toggle legend');
    }

    function handleToggleSearch() {
        console.log('Toggle search');
    }
</script>

<Story
    id="molecules-toolbar"
    title="Toolbar"
    component={Toolbar}
    category="Molecules"
    description="Toolbar component with various actions"
    controls={controls}
>
    {#snippet children(props: Props)}
        <div class="p-4">
            <Toolbar
                on:zoomIn={handleZoomIn}
                on:zoomOut={handleZoomOut}
                on:fitView={handleFitView}
                on:resetView={handleResetView}
                on:exportImage={handleExport}
                on:toggleLegend={handleToggleLegend}
                on:toggleSearch={handleToggleSearch}
            />
        </div>
    {/snippet}
</Story>