<script lang="ts">
  import type { InformationHTMLAttributes } from '$stylist/information/type/attribute/item';
  import { Icon as BaseIcon } from '$stylist';
const BarChart3 = 'bar-chart-3';
const TrendingUp = 'trending-up';
const TrendingDown = 'trending-down';
const AlertTriangle = 'alert-triangle';
const CheckCircle = 'check-circle';
const XCircle = 'x-circle';
const Users = 'users';
const Activity = 'activity';


  type TestResult = {
    id: string;
    testName: string;
    variantName: string;
    visitors: number;
    conversions: number;
    conversionRate: number;
    statisticalSignificance: number; // 0-100%
    improvement: number; // percentage difference
    status: 'winning' | 'losing' | 'inconclusive';
  };

  type TestOverview = {
    testName: string;
    startDate: Date;
    endDate?: Date;
    status: 'running' | 'completed' | 'paused';
    winningVariant?: string;
    confidence: number; // 0-100%
  };

  type Props = {
    testResults: TestResult[];
    testOverview: TestOverview;
    title?: string;
    description?: string;
    showCharts?: boolean;
    showStatisticalSignificance?: boolean;
    class?: string;
    headerClass?: string;
    resultsClass?: string;
    chartClass?: string;
    footerClass?: string;
  } & InformationHTMLAttributes<HTMLDivElement>;

  let {
    testResults = [],
    testOverview,
    title = 'Test Results Viewer',
    description = 'Detailed analysis of your A/B test performance',
    showCharts = true,
    showStatisticalSignificance = true,
    class: className = '',
    headerClass = '',
    resultsClass = '',
    chartClass = '',
    footerClass = '',
  }: Props = $props();

  // Calculate overall metrics
  const totalVisitors = testResults.reduce((sum, result) => sum + result.visitors, 0);
  const totalConversions = testResults.reduce((sum, result) => sum + result.conversions, 0);
  const overallConversionRate = totalVisitors > 0 ? (totalConversions / totalVisitors) * 100 : 0;

  // Find the best performing variant
  function getBestVariant(results: TestResult[]): TestResult | undefined {
    if (results.length === 0) return undefined;
    return results.reduce((best, current) => 
      current.conversionRate > best.conversionRate ? current : best
    );
  }

  const bestVariant = getBestVariant(testResults);
</script>

<div class={`bg-[var(--color-background-primary)] rounded-lg shadow border border-[var(--color-border-primary)] overflow-hidden ${className}`}>
  <div class={`border-b px-6 py-5 ${headerClass}`}>
    <div class="flex items-center">
      <BaseIcon name={BarChart3} class="h-6 w-6 text-[var(--color-text-secondary)] mr-2" />
      <h3 class="text-lg font-medium text-[var(--color-text-primary)]">{title}</h3>
    </div>
    <p class="mt-1 text-sm text-[var(--color-text-secondary)]">{description}</p>
  </div>

  <div class={`p-6 ${resultsClass}`}>
    <!-- Test Overview -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
      <div class="border rounded-lg p-4">
        <div class="flex items-center">
          <div class="p-2 rounded-md bg-[var(--color-primary-100)]">
            <BaseIcon name={Activity} class="h-5 w-5 text-[var(--color-primary-600)]" />
          </div>
          <div class="ml-4">
            <p class="text-sm font-medium text-[var(--color-text-secondary)]">Test Status</p>
            <p class={`text-xl font-semibold ${
              testOverview.status === 'completed' ? 'text-[var(--color-success-600)]' :
              testOverview.status === 'running' ? 'text-[var(--color-primary-600)]' : 'text-yellow-600'
            }`}>
              {testOverview.status.charAt(0).toUpperCase() + testOverview.status.slice(1)}
            </p>
          </div>
        </div>
      </div>

      <div class="border rounded-lg p-4">
        <div class="flex items-center">
          <div class="p-2 rounded-md bg-[var(--color-primary-100)]">
            <BaseIcon name={Users} class="h-5 w-5 text-[var(--color-primary-600)]" />
          </div>
          <div class="ml-4">
            <p class="text-sm font-medium text-[var(--color-text-secondary)]">Total Visitors</p>
            <p class="text-xl font-semibold text-[var(--color-text-primary)]">{totalVisitors.toLocaleString()}</p>
          </div>
        </div>
      </div>

      <div class="border rounded-lg p-4">
        <div class="flex items-center">
          <div class="p-2 rounded-md bg-[var(--color-success-100)]">
            <BaseIcon name={CheckCircle} class="h-5 w-5 text-[var(--color-success-600)]" />
          </div>
          <div class="ml-4">
            <p class="text-sm font-medium text-[var(--color-text-secondary)]">Total Conversions</p>
            <p class="text-xl font-semibold text-[var(--color-text-primary)]">{totalConversions.toLocaleString()}</p>
          </div>
        </div>
      </div>

      <div class="border rounded-lg p-4">
        <div class="flex items-center">
          <div class="p-2 rounded-md bg-[var(--color-secondary-100)]">
            <BaseIcon name={TrendingUp} class="h-5 w-5 text-[var(--color-secondary-600)]" />
          </div>
          <div class="ml-4">
            <p class="text-sm font-medium text-[var(--color-text-secondary)]">Overall CR</p>
            <p class="text-xl font-semibold text-[var(--color-text-primary)]">{overallConversionRate.toFixed(2)}%</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Variants Detail -->
    <div class="mb-8">
      <h4 class="text-md font-medium text-[var(--color-text-primary)] mb-4">Variant Performance</h4>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {#each testResults as result}
          <div class={`border rounded-lg p-5 ${
            result.status === 'winning' ? 'border-[var(--color-success-500)] ring-2 ring-green-200' :
            result.status === 'losing' ? 'border-[var(--color-danger-500)]' : 'border-[var(--color-border-primary)]'
          }`}>
            <div class={`flex justify-between items-start ${
              result.status === 'winning' ? 'text-[var(--color-success-700)]' : 
              result.status === 'losing' ? 'text-[var(--color-danger-700)]' : 'text-[var(--color-text-primary)]'
            }`}>
              <h5 class="font-medium text-lg">{result.variantName}</h5>
              <span class={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                result.status === 'winning' ? 'bg-[var(--color-success-100)] text-[var(--color-success-800)]' :
                result.status === 'losing' ? 'bg-[var(--color-danger-100)] text-[var(--color-danger-800)]' : 'bg-[var(--color-background-secondary)] text-[var(--color-text-primary)]'
              }`}>
                {result.status.charAt(0).toUpperCase() + result.status.slice(1)}
              </span>
            </div>
            
            <div class="mt-4 space-y-3">
              <div class="flex justify-between">
                <span class="text-sm text-[var(--color-text-secondary)]">Visitors</span>
                <span class="text-sm font-medium text-[var(--color-text-primary)]">{result.visitors.toLocaleString()}</span>
              </div>
              
              <div class="flex justify-between">
                <span class="text-sm text-[var(--color-text-secondary)]">Conversions</span>
                <span class="text-sm font-medium text-[var(--color-text-primary)]">{result.conversions.toLocaleString()}</span>
              </div>
              
              <div class="flex justify-between">
                <span class="text-sm text-[var(--color-text-secondary)]">Conversion Rate</span>
                <span class="text-sm font-medium text-[var(--color-text-primary)]">{result.conversionRate.toFixed(2)}%</span>
              </div>
              
              {#if result.improvement !== 0}
                <div class="flex justify-between">
                  <span class="text-sm text-[var(--color-text-secondary)]">Improvement</span>
                  <span class={`text-sm font-medium ${
                    result.improvement > 0 ? 'text-[var(--color-success-600)]' : 'text-[var(--color-danger-600)]'
                  }`}>
                    {result.improvement > 0 ? '+' : ''}{result.improvement.toFixed(2)}%
                  </span>
                </div>
              {/if}
              
              {#if showStatisticalSignificance}
                <div class="flex justify-between">
                  <span class="text-sm text-[var(--color-text-secondary)]">Significance</span>
                  <span class={`text-sm font-medium ${
                    result.statisticalSignificance >= 95 ? 'text-[var(--color-success-600)]' : 
                    result.statisticalSignificance >= 90 ? 'text-yellow-600' : 'text-[var(--color-danger-600)]'
                  }`}>
                    {result.statisticalSignificance.toFixed(1)}%
                  </span>
                </div>
              {/if}
            </div>
          </div>
        {/each}
      </div>
    </div>

    <!-- Charts -->
    {#if showCharts}
      <div class={`border rounded-lg p-4 mb-8 ${chartClass}`}>
        <h4 class="text-md font-medium text-[var(--color-text-primary)] mb-4">Performance Visualization</h4>
        
        <!-- Conversion Rate Chart -->
        <div class="mb-6">
          <h5 class="text-sm font-medium text-[var(--color-text-primary)] mb-2">Conversion Rates by Variant</h5>
          <div class="flex items-end h-32 space-x-2">
            {#each testResults as result}
              <div class="flex flex-col items-center flex-1">
                <div 
                  class="w-full bg-[var(--color-primary-500)] rounded-t hover:bg-[var(--color-primary-600)] transition-colors"
                  style={`height: ${result.conversionRate * 2}px; min-height: var(--spacing-1);`}
                  title={`${result.variantName}: ${result.conversionRate.toFixed(2)}%`}
                ></div>
                <span class="text-xs text-[var(--color-text-secondary)] mt-2">{result.variantName}</span>
                <span class="text-xs text-[var(--color-text-primary)]">{result.conversionRate.toFixed(2)}%</span>
              </div>
            {/each}
          </div>
        </div>
        
        <!-- Statistical Significance Chart -->
        {#if showStatisticalSignificance}
          <div>
            <h5 class="text-sm font-medium text-[var(--color-text-primary)] mb-2">Statistical Significance</h5>
            <div class="space-y-4">
              {#each testResults as result}
                <div>
                  <div class="flex justify-between text-sm mb-1">
                    <span>{result.variantName}</span>
                    <span>{result.statisticalSignificance.toFixed(1)}%</span>
                  </div>
                  <div class="w-full bg-[var(--color-background-tertiary)] rounded-full h-2.5">
                    <div 
                      class={`h-2.5 rounded-full ${
                        result.statisticalSignificance >= 95 ? 'bg-[var(--color-success-500)]' : 
                        result.statisticalSignificance >= 90 ? 'bg-yellow-500' : 'bg-[var(--color-danger-500)]'
                      }`}
                      style={`width: ${result.statisticalSignificance}%`}
                    ></div>
                  </div>
                </div>
              {/each}
            </div>
          </div>
        {/if}
      </div>
    {/if}

    <!-- Recommendation -->
    {#if bestVariant}
      <div class="border rounded-lg p-4 bg-[var(--color-primary-50)]">
        <div class="flex items-start">
          <div class="flex-shrink-0">
            <BaseIcon name={CheckCircle} class="h-5 w-5 text-[var(--color-primary-400)]" />
          </div>
          <div class="ml-3">
            <h4 class="text-sm font-medium text-[var(--color-primary-800)]">Recommendation</h4>
            <div class="mt-2 text-sm text-[var(--color-primary-700)]">
              <p>
                {bestVariant.variantName} is the winning variant with a conversion rate of 
                {bestVariant.conversionRate.toFixed(2)}%. {bestVariant.improvement > 0 ? 
                  `It performs ` + bestVariant.improvement.toFixed(2) + `% better than the baseline.` : 
                  `Consider further testing as performance is similar to baseline.`}
              </p>
            </div>
          </div>
        </div>
      </div>
    {/if}
  </div>

  <div class={`border-t px-6 py-4 ${footerClass}`}>
    <div class="flex items-center justify-between text-xs text-[var(--color-text-secondary)]">
      <div>Test Results Analysis</div>
      <div>
        {#if testOverview.confidence >= 95}
          <span class="inline-flex items-center text-[var(--color-success-600)]">
            <BaseIcon name={CheckCircle} class="h-4 w-4 mr-1" />
            Results are statistically significant ({testOverview.confidence.toFixed(1)}% confidence)
          </span>
        {:else}
          <span class="inline-flex items-center text-yellow-600">
            <BaseIcon name={AlertTriangle} class="h-4 w-4 mr-1" />
            Low confidence ({testOverview.confidence.toFixed(1)}% confidence)
          </span>
        {/if}
      </div>
    </div>
  </div>
</div>




