<script lang="ts">
  import UserBehaviorMetrics from './UserBehaviorMetrics.svelte';

  // Sample data for the UserBehaviorMetrics component
  const sampleMetrics = [
    { id: 'pageviews', name: 'Page Views', value: '23,456', change: 12.5, changeType: 'positive' as const, description: 'Total number of pages viewed' },
    { id: 'session', name: 'Session Duration', value: '4m 32s', change: 8.2, changeType: 'positive' as const, description: 'Average session length' },
    { id: 'bounce', name: 'Bounce Rate', value: '32.1%', change: -4.3, changeType: 'negative' as const, description: 'Percentage of single-page sessions' },
    { id: 'pages', name: 'Pages/Session', value: '3.24', change: 2.1, changeType: 'positive' as const, description: 'Average pages viewed per session' }
  ];
</script>

<svelte:head>
  <title>UserBehaviorMetrics Story</title>
</svelte:head>

<UserBehaviorMetrics
  metrics={sampleMetrics}
/>