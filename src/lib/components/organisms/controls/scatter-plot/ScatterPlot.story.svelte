<script lang="ts">
    import { Story } from '$lib/playground';
    import type { ControlConfig } from '$lib/playground';
    import ScatterPlot from './ScatterPlot.svelte';

    type ChartDataPoint = {
        id: string;
        x: number;
        y: number;
        name?: string;
        size?: number;
        color?: string;
        category?: string;
    };

    type Props = {
        data?: ChartDataPoint[];
        showGrid: boolean;
    };

    const sampleData: ChartDataPoint[] = [
        { id: '1', x: 1, y: 2 },
        { id: '2', x: 2, y: 3 },
        { id: '3', x: 3, y: 1 },
        { id: '4', x: 4, y: 5 },
        { id: '5', x: 5, y: 4 },
    ];

    const controls: ControlConfig[] = [
        {
            name: 'data',
            type: 'object',
            defaultValue: sampleData
        },
        {
            name: 'showGrid',
            type: 'boolean',
            defaultValue: false
        }
    ];
</script>

<Story
    id="molecules-scatter-plot"
    title="ScatterPlot"
    component={ScatterPlot}
    category="Molecules"
    description="Scatter plot component for displaying data points"
    controls={controls}
>
    {#snippet children(props: Props)}
        <div class="p-4">
            <ScatterPlot
                data={props.data || sampleData}
                showGrid={props.showGrid}
            />
        </div>
    {/snippet}
</Story>
