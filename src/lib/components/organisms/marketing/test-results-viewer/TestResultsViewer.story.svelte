<script lang="ts">
    import { Story } from '$lib/playground';
    import type { ControlConfig } from '$lib/playground';
    import TestResultsViewer from './TestResultsViewer.svelte';

    type TestResult = {
        id: string;
        testName: string;
        variantName: string;
        visitors: number;
        conversions: number;
        conversionRate: number;
        statisticalSignificance: number;
        improvement: number;
        status: 'winning' | 'losing' | 'inconclusive';
    };

    type TestOverview = {
        testName: string;
        startDate: Date;
        endDate: Date;
        status: 'completed' | 'running' | 'paused';
        winningVariant: string;
        confidence: number;
    };

    type Props = {
        testResults?: TestResult[];
        testOverview?: TestOverview;
        showCharts?: boolean;
    };

    const defaultTestResults: TestResult[] = [
        {
            id: 'variant-a',
            testName: 'Homepage Button Color',
            variantName: 'Control (Blue)',
            visitors: 10000,
            conversions: 850,
            conversionRate: 8.5,
            statisticalSignificance: 97.2,
            improvement: 0,
            status: 'losing'
        },
        {
            id: 'variant-b',
            testName: 'Homepage Button Color',
            variantName: 'Variant (Green)',
            visitors: 10200,
            conversions: 920,
            conversionRate: 9.02,
            statisticalSignificance: 97.2,
            improvement: 6.12,
            status: 'winning'
        },
        {
            id: 'variant-c',
            testName: 'Homepage Button Color',
            variantName: 'Variant (Red)',
            visitors: 9800,
            conversions: 820,
            conversionRate: 8.37,
            statisticalSignificance: 65.3,
            improvement: -1.55,
            status: 'inconclusive'
        }
    ];

    const defaultTestOverview: TestOverview = {
        testName: 'Homepage Button Color Test',
        startDate: new Date('2023-01-15'),
        endDate: new Date('2023-02-15'),
        status: 'completed',
        winningVariant: 'variant-b',
        confidence: 97.2
    };

    const controls: ControlConfig[] = [
        {
            name: 'showCharts',
            type: 'boolean',
            defaultValue: true
        }
    ];
</script>

<Story
    id="molecules-test-results-viewer"
    title="TestResultsViewer"
    component={TestResultsViewer}
    category="Molecules"
    description="Viewer for test results with statistical significance"
    controls={controls}
>
    {#snippet children(props: Props)}
        <div class="p-4">
            <TestResultsViewer
                testResults={props.testResults || defaultTestResults}
                testOverview={props.testOverview || defaultTestOverview}
                showCharts={props.showCharts}
            />
        </div>
    {/snippet}
</Story>
