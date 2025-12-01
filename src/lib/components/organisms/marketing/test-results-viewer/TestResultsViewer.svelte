<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { BarChart3, TrendingUp, TrendingDown, AlertTriangle, CheckCircle, XCircle, Users, Activity } from 'lucide-svelte';

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
  } & HTMLAttributes<HTMLDivElement>;

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

<div class={`bg-white rounded-lg shadow border border-gray-200 overflow-hidden ${className}`}>
  <div class={`border-b px-6 py-5 ${headerClass}`}>
    <div class="flex items-center">
      <BarChart3 class="h-6 w-6 text-gray-500 mr-2" />
      <h3 class="text-lg font-medium text-gray-900">{title}</h3>
    </div>
    <p class="mt-1 text-sm text-gray-500">{description}</p>
  </div>

  <div class={`p-6 ${resultsClass}`}>
    <!-- Test Overview -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
      <div class="border rounded-lg p-4">
        <div class="flex items-center">
          <div class="p-2 rounded-md bg-blue-100">
            <Activity class="h-5 w-5 text-blue-600" />
          </div>
          <div class="ml-4">
            <p class="text-sm font-medium text-gray-500">Test Status</p>
            <p class={`text-xl font-semibold ${
              testOverview.status === 'completed' ? 'text-green-600' :
              testOverview.status === 'running' ? 'text-blue-600' : 'text-yellow-600'
            }`}>
              {testOverview.status.charAt(0).toUpperCase() + testOverview.status.slice(1)}
            </p>
          </div>
        </div>
      </div>

      <div class="border rounded-lg p-4">
        <div class="flex items-center">
          <div class="p-2 rounded-md bg-blue-100">
            <Users class="h-5 w-5 text-blue-600" />
          </div>
          <div class="ml-4">
            <p class="text-sm font-medium text-gray-500">Total Visitors</p>
            <p class="text-xl font-semibold text-gray-900">{totalVisitors.toLocaleString()}</p>
          </div>
        </div>
      </div>

      <div class="border rounded-lg p-4">
        <div class="flex items-center">
          <div class="p-2 rounded-md bg-green-100">
            <CheckCircle class="h-5 w-5 text-green-600" />
          </div>
          <div class="ml-4">
            <p class="text-sm font-medium text-gray-500">Total Conversions</p>
            <p class="text-xl font-semibold text-gray-900">{totalConversions.toLocaleString()}</p>
          </div>
        </div>
      </div>

      <div class="border rounded-lg p-4">
        <div class="flex items-center">
          <div class="p-2 rounded-md bg-purple-100">
            <TrendingUp class="h-5 w-5 text-purple-600" />
          </div>
          <div class="ml-4">
            <p class="text-sm font-medium text-gray-500">Overall CR</p>
            <p class="text-xl font-semibold text-gray-900">{overallConversionRate.toFixed(2)}%</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Variants Detail -->
    <div class="mb-8">
      <h4 class="text-md font-medium text-gray-900 mb-4">Variant Performance</h4>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {#each testResults as result}
          <div class={`border rounded-lg p-5 ${
            result.status === 'winning' ? 'border-green-500 ring-2 ring-green-200' :
            result.status === 'losing' ? 'border-red-500' : 'border-gray-200'
          }`}>
            <div class={`flex justify-between items-start ${
              result.status === 'winning' ? 'text-green-700' : 
              result.status === 'losing' ? 'text-red-700' : 'text-gray-900'
            }`}>
              <h5 class="font-medium text-lg">{result.variantName}</h5>
              <span class={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                result.status === 'winning' ? 'bg-green-100 text-green-800' :
                result.status === 'losing' ? 'bg-red-100 text-red-800' : 'bg-gray-100 text-gray-800'
              }`}>
                {result.status.charAt(0).toUpperCase() + result.status.slice(1)}
              </span>
            </div>
            
            <div class="mt-4 space-y-3">
              <div class="flex justify-between">
                <span class="text-sm text-gray-500">Visitors</span>
                <span class="text-sm font-medium text-gray-900">{result.visitors.toLocaleString()}</span>
              </div>
              
              <div class="flex justify-between">
                <span class="text-sm text-gray-500">Conversions</span>
                <span class="text-sm font-medium text-gray-900">{result.conversions.toLocaleString()}</span>
              </div>
              
              <div class="flex justify-between">
                <span class="text-sm text-gray-500">Conversion Rate</span>
                <span class="text-sm font-medium text-gray-900">{result.conversionRate.toFixed(2)}%</span>
              </div>
              
              {#if result.improvement !== 0}
                <div class="flex justify-between">
                  <span class="text-sm text-gray-500">Improvement</span>
                  <span class={`text-sm font-medium ${
                    result.improvement > 0 ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {result.improvement > 0 ? '+' : ''}{result.improvement.toFixed(2)}%
                  </span>
                </div>
              {/if}
              
              {#if showStatisticalSignificance}
                <div class="flex justify-between">
                  <span class="text-sm text-gray-500">Significance</span>
                  <span class={`text-sm font-medium ${
                    result.statisticalSignificance >= 95 ? 'text-green-600' : 
                    result.statisticalSignificance >= 90 ? 'text-yellow-600' : 'text-red-600'
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
        <h4 class="text-md font-medium text-gray-900 mb-4">Performance Visualization</h4>
        
        <!-- Conversion Rate Chart -->
        <div class="mb-6">
          <h5 class="text-sm font-medium text-gray-700 mb-2">Conversion Rates by Variant</h5>
          <div class="flex items-end h-32 space-x-2">
            {#each testResults as result}
              <div class="flex flex-col items-center flex-1">
                <div 
                  class="w-full bg-blue-500 rounded-t hover:bg-blue-600 transition-colors"
                  style={`height: ${result.conversionRate * 2}px; min-height: 4px;`}
                  title={`${result.variantName}: ${result.conversionRate.toFixed(2)}%`}
                ></div>
                <span class="text-xs text-gray-600 mt-2">{result.variantName}</span>
                <span class="text-xs text-gray-900">{result.conversionRate.toFixed(2)}%</span>
              </div>
            {/each}
          </div>
        </div>
        
        <!-- Statistical Significance Chart -->
        {#if showStatisticalSignificance}
          <div>
            <h5 class="text-sm font-medium text-gray-700 mb-2">Statistical Significance</h5>
            <div class="space-y-4">
              {#each testResults as result}
                <div>
                  <div class="flex justify-between text-sm mb-1">
                    <span>{result.variantName}</span>
                    <span>{result.statisticalSignificance.toFixed(1)}%</span>
                  </div>
                  <div class="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      class={`h-2.5 rounded-full ${
                        result.statisticalSignificance >= 95 ? 'bg-green-500' : 
                        result.statisticalSignificance >= 90 ? 'bg-yellow-500' : 'bg-red-500'
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
      <div class="border rounded-lg p-4 bg-blue-50">
        <div class="flex items-start">
          <div class="flex-shrink-0">
            <CheckCircle class="h-5 w-5 text-blue-400" />
          </div>
          <div class="ml-3">
            <h4 class="text-sm font-medium text-blue-800">Recommendation</h4>
            <div class="mt-2 text-sm text-blue-700">
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
    <div class="flex items-center justify-between text-xs text-gray-500">
      <div>Test Results Analysis</div>
      <div>
        {#if testOverview.confidence >= 95}
          <span class="inline-flex items-center text-green-600">
            <CheckCircle class="h-4 w-4 mr-1" />
            Results are statistically significant ({testOverview.confidence.toFixed(1)}% confidence)
          </span>
        {:else}
          <span class="inline-flex items-center text-yellow-600">
            <AlertTriangle class="h-4 w-4 mr-1" />
            Low confidence ({testOverview.confidence.toFixed(1)}% confidence)
          </span>
        {/if}
      </div>
    </div>
  </div>
</div>