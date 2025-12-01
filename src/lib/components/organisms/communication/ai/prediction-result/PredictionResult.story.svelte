<script lang="ts">
  import PredictionResult from './PredictionResult.svelte';

  // Sample data for the PredictionResult component
  const samplePredictions = [
    { label: 'Class A', value: 0.85, confidence: 0.92 },
    { label: 'Class B', value: 0.12, confidence: 0.65 },
    { label: 'Class C', value: 0.03, confidence: 0.43 }
  ];
</script>

<svelte:head>
  <title>PredictionResult Story</title>
</svelte:head>

<PredictionResult
  predictions={samplePredictions}
/>