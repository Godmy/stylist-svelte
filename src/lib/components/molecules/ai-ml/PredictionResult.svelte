<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { BarChart3, TrendingUp, TrendingDown, Loader, AlertCircle } from 'lucide-svelte';

  type Prediction = {
    label: string;
    value: number;
    confidence?: number;
  };

  type Props = {
    title?: string;
    description?: string;
    predictions: Prediction[];
    actualValue?: number;
    predictedValue?: number;
    modelUsed?: string;
    confidence?: number;
    status?: 'success' | 'error' | 'loading' | 'warning';
    onRetry?: () => void;
    showChart?: boolean;
    class?: string;
    headerClass?: string;
    contentClass?: string;
    footerClass?: string;
  } & HTMLAttributes<HTMLDivElement>;

  let {
    title = 'Prediction Result',
    description,
    predictions = [],
    actualValue,
    predictedValue,
    modelUsed,
    confidence,
    status = 'success',
    onRetry,
    showChart = true,
    class: className = '',
    headerClass = '',
    contentClass = '',
    footerClass = '',
    ...restProps
  }: Props = $props();

  // Calculate max value for chart scaling
  const maxValue = Math.max(
    ...predictions.map(p => p.confidence !== undefined ? p.confidence : p.value),
    actualValue || 0,
    predictedValue || 0
  );
</script>

<div class={`bg-white rounded-lg shadow border border-gray-200 overflow-hidden ${className}`} {...restProps}>
  <!-- Header -->
  <div class={`border-b px-4 py-3 flex items-center justify-between ${headerClass}`}>
    <div class="flex items-center">
      {#if status === 'loading'}
        <Loader class="h-5 w-5 text-blue-500 animate-spin mr-2" />
      {:else if status === 'error'}
        <AlertCircle class="h-5 w-5 text-red-500 mr-2" />
      {:else if status === 'warning'}
        <AlertCircle class="h-5 w-5 text-yellow-500 mr-2" />
      {:else}
        <BarChart3 class="h-5 w-5 text-blue-500 mr-2" />
      {/if}
      <h3 class="text-lg font-medium text-gray-900">{title}</h3>
    </div>
    {#if modelUsed}
      <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
        {modelUsed}
      </span>
    {/if}
  </div>

  <!-- Content -->
  <div class={`p-4 ${contentClass}`}>
    {#if description}
      <p class="text-sm text-gray-500 mb-4">{description}</p>
    {/if}

    {#if status === 'loading'}
      <div class="flex flex-col items-center justify-center py-8">
        <Loader class="h-8 w-8 text-blue-500 animate-spin" />
        <p class="mt-2 text-sm text-gray-500">Analyzing data...</p>
      </div>
    {:else if status === 'error'}
      <div class="flex flex-col items-center justify-center py-8">
        <AlertCircle class="h-8 w-8 text-red-500" />
        <p class="mt-2 text-sm text-gray-500">Prediction failed</p>
        {#if onRetry}
          <button
            type="button"
            class="mt-4 px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none"
            onclick={onRetry}
          >
            Retry
          </button>
        {/if}
      </div>
    {:else}
      <div class="space-y-4">
        <!-- Prediction summary -->
        <div class="grid grid-cols-2 gap-4">
          {#if predictedValue !== undefined}
            <div class="bg-blue-50 p-3 rounded-lg">
              <p class="text-sm font-medium text-gray-500">Predicted</p>
              <p class="text-2xl font-bold text-gray-900">{predictedValue}</p>
            </div>
          {/if}
          {#if actualValue !== undefined}
            <div class="bg-green-50 p-3 rounded-lg">
              <p class="text-sm font-medium text-gray-500">Actual</p>
              <p class="text-2xl font-bold text-gray-900">{actualValue}</p>
            </div>
          {/if}
        </div>

        {#if confidence !== undefined}
          <div>
            <div class="flex items-center justify-between mb-1">
              <p class="text-sm font-medium text-gray-700">Confidence</p>
              <p class="text-sm font-medium text-gray-900">{Math.round(confidence * 100)}%</p>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2">
              <div 
                class="h-2 rounded-full bg-blue-600" 
                style={`width: ${confidence * 100}%`}
              ></div>
            </div>
          </div>
        {/if}

        <!-- Prediction breakdown -->
        {#if predictions.length > 0}
          <div class="mt-4">
            <h4 class="text-sm font-medium text-gray-700 mb-2">Prediction Breakdown</h4>
            <div class="space-y-2">
              {#each predictions as prediction}
                <div>
                  <div class="flex justify-between text-sm mb-1">
                    <span class="text-gray-600">{prediction.label}</span>
                    <span class="text-gray-900 font-medium">
                      {prediction.confidence !== undefined 
                        ? `${Math.round(prediction.confidence * 100)}%` 
                        : prediction.value}
                    </span>
                  </div>
                  {#if showChart && maxValue > 0}
                    <div class="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        class="h-2 rounded-full bg-blue-500" 
                        style={`width: ${(prediction.confidence !== undefined 
                          ? prediction.confidence 
                          : prediction.value) / maxValue * 100}%`}
                      ></div>
                    </div>
                  {/if}
                </div>
              {/each}
            </div>
          </div>
        {/if}
      </div>
    {/if}
  </div>

  <!-- Footer -->
  {#if status === 'success' && predictedValue !== undefined && actualValue !== undefined}
    <div class={`border-t px-4 py-3 ${footerClass}`}>
      <div class="flex items-center">
        {#if predictedValue > actualValue}
          <TrendingUp class="h-5 w-5 text-green-500" />
          <span class="ml-2 text-sm text-green-600">
            Prediction was {Math.abs(Math.round((predictedValue - actualValue) / actualValue * 100))}% higher than actual
          </span>
        {:else if predictedValue < actualValue}
          <TrendingDown class="h-5 w-5 text-red-500" />
          <span class="ml-2 text-sm text-red-600">
            Prediction was {Math.abs(Math.round((predictedValue - actualValue) / actualValue * 100))}% lower than actual
          </span>
        {:else}
          <span class="text-sm text-gray-600">Prediction matches actual value</span>
        {/if}
      </div>
    </div>
  {/if}
</div>