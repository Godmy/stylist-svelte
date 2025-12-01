<script lang="ts">
  import TrafficAnalytics from './TrafficAnalytics.svelte';

  // Sample data for the TrafficAnalytics component
  const sampleTrafficSources = [
    { id: 'direct', name: 'Direct', value: 45, percentage: 45, color: '#3b82f6' },
    { id: 'social', name: 'Social', value: 25, percentage: 25, color: '#8b5cf6' },
    { id: 'referral', name: 'Referral', value: 20, percentage: 20, color: '#ec4899' },
    { id: 'organic', name: 'Organic', value: 10, percentage: 10, color: '#10b981' }
  ];

  // Additional required data for the component
  const sampleTrafficData = [
    { date: new Date(2023, 0, 1), value: 1000 },
    { date: new Date(2023, 0, 2), value: 1200 },
    { date: new Date(2023, 0, 3), value: 900 },
    { date: new Date(2023, 0, 4), value: 1400 },
    { date: new Date(2023, 0, 5), value: 1600 },
    { date: new Date(2023, 0, 6), value: 1800 },
    { date: new Date(2023, 0, 7), value: 1300 }
  ];
</script>

<svelte:head>
  <title>TrafficAnalytics Story</title>
</svelte:head>

<TrafficAnalytics
  totalVisitors={12500}
  uniqueVisitors={9800}
  pageViews={52000}
  timeOnPage="2m 45s"
  bounceRate={32}
  trafficSources={sampleTrafficSources}
  trafficData={sampleTrafficData}
/>