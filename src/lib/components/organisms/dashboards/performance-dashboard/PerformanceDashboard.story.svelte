<script lang="ts">
  import PerformanceDashboard from './PerformanceDashboard.svelte';
  import { DollarSign, Users, ShoppingCart, Eye } from 'lucide-svelte';

  // Sample data for the PerformanceDashboard component
  const sampleMetrics = [
    { id: 'revenue', title: 'Total Revenue', value: '$45,231.89', change: 20.1, changeType: 'positive' as const, icon: DollarSign, color: 'bg-green-500' },
    { id: 'subscribers', title: 'Subscriptions', value: '+2350', change: 180.1, changeType: 'positive' as const, icon: Users, color: 'bg-blue-500' },
    { id: 'sales', title: 'Sales', value: '+12,234', change: 19, changeType: 'positive' as const, icon: ShoppingCart, color: 'bg-purple-500' },
    { id: 'active', title: 'Active Now', value: '573', change: 201, changeType: 'positive' as const, icon: Eye, color: 'bg-orange-500' }
  ];
</script>

<svelte:head>
  <title>PerformanceDashboard Story</title>
</svelte:head>

<PerformanceDashboard
  metrics={sampleMetrics}
/>