<script lang="ts">
  import AnalyticsChart from './AnalyticsChart.svelte';

  // Sample data for the AnalyticsChart component
  const sampleData = [
    { label: 'Jan', value: 400 },
    { label: 'Feb', value: 300 },
    { label: 'Mar', value: 200 },
    { label: 'Apr', value: 280 },
    { label: 'May', value: 180 },
    { label: 'Jun', value: 220 }
  ];
</script>

<svelte:head>
  <title>AnalyticsChart Story</title>
</svelte:head>

<AnalyticsChart
  title="Sample Analytics Chart"
  data={sampleData}
/>