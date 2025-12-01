<script lang="ts">
  import SentimentAnalysis from './SentimentAnalysis.svelte';

  // Sample result for the SentimentAnalysis component
  const sampleResult = {
    score: 0.7,
    label: 'positive' as const,
    confidence: 0.95,
    breakdown: {
      positive: 0.7,
      neutral: 0.2,
      negative: 0.1
    }
  };
</script>

<svelte:head>
  <title>SentimentAnalysis Story</title>
</svelte:head>

<SentimentAnalysis
  result={sampleResult}
  status="completed"
/>