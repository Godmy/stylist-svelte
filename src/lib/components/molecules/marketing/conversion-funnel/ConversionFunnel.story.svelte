<script lang="ts">
  import ConversionFunnel from './ConversionFunnel.svelte';

  // Sample data for the ConversionFunnel component
  const sampleSteps = [
    { id: 'visitors', name: 'Visitors', value: 10000, color: '#3b82f6' },
    { id: 'viewed', name: 'Viewed Product', value: 5000, color: '#60a5fa' },
    { id: 'cart', name: 'Added to Cart', value: 1000, color: '#93c5fd' },
    { id: 'purchase', name: 'Completed Purchase', value: 500, color: '#bfdbfe' }
  ];
</script>

<svelte:head>
  <title>ConversionFunnel Story</title>
</svelte:head>

<ConversionFunnel
  title="Sample Conversion Funnel"
  steps={sampleSteps}
/>