<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { BarChart3, Frown, Meh, Smile, Loader, AlertCircle } from 'lucide-svelte';

  type SentimentResult = {
    score: number; // -1 to 1, where -1 is very negative and 1 is very positive
    label: 'very negative' | 'negative' | 'neutral' | 'positive' | 'very positive';
    confidence: number; // 0 to 1
    breakdown?: {
      positive: number;
      neutral: number;
      negative: number;
    };
  };

  type Props = {
    text?: string;
    result?: SentimentResult;
    onAnalyze?: (text: string) => void;
    status?: 'idle' | 'analyzing' | 'completed' | 'error';
    errorMessage?: string;
    class?: string;
    headerClass?: string;
    contentClass?: string;
    inputClass?: string;
    resultClass?: string;
    footerClass?: string;
  } & HTMLAttributes<HTMLDivElement>;

  let {
    text = '',
    result,
    onAnalyze,
    status = 'idle',
    errorMessage = '',
    class: className = '',
    headerClass = '',
    contentClass = '',
    inputClass = '',
    resultClass = '',
    footerClass = '',
    ...restProps
  }: Props = $props();

  // Определяем переменные, которые не являются пропсами
  let unused = { ...restProps }; // Используем restProps, чтобы избежать предупреждения о неиспользуемых переменных

  let inputText = $state(text);

  function analyzeSentiment() {
    if (onAnalyze && inputText.trim()) {
      onAnalyze(inputText);
    }
  }

  // Get appropriate icon based on sentiment
  function getSentimentIcon(score: number) {
    if (score < -0.5) return Frown;
    if (score < 0) return Meh;
    if (score <= 0.5) return Meh;
    return Smile;
  }

  // Get color based on sentiment
  function getSentimentColor(score: number) {
    if (score < -0.3) return 'text-red-500';
    if (score < 0.3) return 'text-yellow-500';
    return 'text-green-500';
  }

  // Get background color for score bar
  function getScoreBarColor(score: number) {
    if (score < -0.3) return 'bg-red-500';
    if (score < 0.3) return 'bg-yellow-500';
    return 'bg-green-500';
  }
</script>

<div class={`bg-white rounded-lg shadow border border-gray-200 overflow-hidden ${className}`} {...restProps}>
  <!-- Header -->
  <div class={`border-b px-4 py-3 flex items-center ${headerClass}`}>
    <BarChart3 class="h-5 w-5 text-blue-500 mr-2" />
    <h3 class="text-lg font-medium text-gray-900">Sentiment Analysis</h3>
  </div>

  <!-- Content -->
  <div class={`p-4 ${contentClass}`}>
    <div class="mb-4">
      <label for="sentiment-input" class="block text-sm font-medium text-gray-700 mb-1">
        Enter text to analyze
      </label>
      <textarea
        id="sentiment-input"
        class={`w-full h-32 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${
          inputClass
        }`}
        bind:value={inputText}
        placeholder="Enter text to analyze for sentiment..."
      ></textarea>
    </div>

    <button
      type="button"
      class={`w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white ${
        status === 'analyzing' 
          ? 'bg-blue-400 cursor-not-allowed' 
          : 'bg-blue-600 hover:bg-blue-700'
      } focus:outline-none`}
      onclick={analyzeSentiment}
      disabled={status === 'analyzing' || !inputText.trim()}
    >
      {#if status === 'analyzing'}
        <Loader class="h-4 w-4 mr-2 animate-spin" />
        Analyzing...
      {:else}
        Analyze Sentiment
      {/if}
    </button>

    {#if status === 'error' && errorMessage}
      <div class="mt-4 p-3 bg-red-50 rounded-md flex items-center">
        <AlertCircle class="h-5 w-5 text-red-500 mr-2" />
        <span class="text-sm text-red-700">{errorMessage}</span>
      </div>
    {/if}

    {#if status === 'completed' && result}
      <div class={`mt-6 p-4 border rounded-lg ${resultClass}`}>
        <div class="flex items-center justify-center mb-4">
          {#if result}
            {@const SentimentIcon = getSentimentIcon(result.score)}
            <SentimentIcon class={`h-12 w-12 ${getSentimentColor(result.score)}`} />
          {/if}
        </div>

        <div class="text-center mb-4">
          <h4 class="text-lg font-semibold text-gray-900 capitalize">{result.label}</h4>
          <p class={`text-3xl font-bold ${getSentimentColor(result.score)}`}>
            {Math.round(result.score * 100)}%
          </p>
          <p class="text-sm text-gray-500 mt-1">
            Confidence: {Math.round(result.confidence * 100)}%
          </p>
        </div>

        <div class="mt-4">
          <div class="flex justify-between text-sm text-gray-600 mb-1">
            <span>Negative</span>
            <span>Neutral</span>
            <span>Positive</span>
          </div>
          <div class="w-full h-2 bg-gray-200 rounded-full overflow-hidden flex">
            <div 
              class="h-full bg-red-500" 
              style={`width: ${result.breakdown ? result.breakdown.negative * 100 : 0}%`}
            ></div>
            <div 
              class="h-full bg-yellow-500" 
              style={`width: ${result.breakdown ? result.breakdown.neutral * 100 : 0}%`}
            ></div>
            <div 
              class="h-full bg-green-500" 
              style={`width: ${result.breakdown ? result.breakdown.positive * 100 : 0}%`}
            ></div>
          </div>
        </div>

        <div class="mt-6">
          <div class="flex items-center justify-center">
            <div class="w-full h-4 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-full relative">
              <div 
                class={`absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full ${getScoreBarColor(result.score)}`}
                style={`left: ${((result.score + 1) / 2) * 100}%`}
              ></div>
            </div>
          </div>
          <div class="flex justify-between text-xs text-gray-500 mt-1">
            <span>Negative</span>
            <span>Neutral</span>
            <span>Positive</span>
          </div>
        </div>
      </div>
    {/if}
  </div>

  <!-- Footer -->
  <div class={`border-t px-4 py-3 text-xs text-gray-500 ${footerClass}`}>
    Sentiment analysis powered by AI. Results are estimates and may not reflect the true sentiment.
  </div>
</div>