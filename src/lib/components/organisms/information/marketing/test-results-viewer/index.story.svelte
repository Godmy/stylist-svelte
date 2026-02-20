<script lang="ts">
  import { Story } from '$stylist/playground';
  import type { ControlConfig } from '$stylist/playground';

  import TestResultsViewer from './index.svelte';

  let {
    id = '',
    title = '',
    description = '',
    controls = [
      { name: 'showCharts', type: 'boolean', defaultValue: true },
      { name: 'showSignificance', type: 'boolean', defaultValue: true },
      { name: 'showConfidence', type: 'boolean', defaultValue: true }
    ]
  } = $props<{
    id?: string;
    title?: string;
    description?: string;
    controls?: ControlConfig[]
  }>();

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

  const testResults: TestResult[] = [
    { id: '1', testName: 'CTA Test', variantName: 'Variant A', visitors: 1000, conversions: 50, conversionRate: 5, statisticalSignificance: 95, improvement: 10, status: 'winning' },
    { id: '2', testName: 'CTA Test', variantName: 'Variant B', visitors: 1000, conversions: 40, conversionRate: 4, statisticalSignificance: 80, improvement: -10, status: 'losing' }
  ];
  const testOverview = {
    totalTests: 1,
    winningTests: 1,
    losingTests: 1,
    averageImprovement: 0
  } as any;

  function handleExport(results: TestResult[]) {
    console.log('Exported:', results);
  }
</script>

<Story
  {id}
  {title}
  {description}
  component={TestResultsViewer}
  category="Organisms"
  controls={controls}
>
  {#snippet children(values: any)}
    <section class="sb-organisms-test-results-viewer grid w-full gap-8 lg:grid-cols-[1fr_1fr]">
      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-primary] p-6 shadow-sm">
        <p class="text-sm font-semibold uppercase tracking-wide text-[--color-text-secondary]">
          Primary Test Results Viewer Example
        </p>
        <p class="mt-1 text-[--color-text-primary]">Interactive test results viewer with customizable options.</p>

        <div class="mt-6">
          <TestResultsViewer
            testResults={testResults}
            testOverview={testOverview}
            showCharts={values.showCharts}
          />
        </div>
      </div>

      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-secondary] p-6 shadow-sm">
        <h3 class="text-base font-semibold text-[--color-text-primary]">Test Results Variations</h3>
        <p class="text-sm text-[--color-text-secondary]">
          Different test results viewer configurations with various options.
        </p>

        <div class="mt-5 space-y-4">
          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Without Charts</p>
            <div>
              <TestResultsViewer
                testResults={testResults}
                testOverview={testOverview}
                showCharts={false}
              />
            </div>
          </article>

          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Minimal View</p>
            <div>
              <TestResultsViewer
                testResults={testResults}
                testOverview={testOverview}
              />
            </div>
          </article>
        </div>
      </div>
    </section>
  {/snippet}
</Story>

