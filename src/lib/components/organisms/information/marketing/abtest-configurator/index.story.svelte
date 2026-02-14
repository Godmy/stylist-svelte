<script lang="ts">
  import ABTestConfigurator from './index.svelte';

  // Sample A/B test configuration
  const testConfig = {
    id: 'ab-test-1',
    name: 'Homepage CTA Button',
    description: 'Testing different CTA button designs',
    variants: [
      {
        id: 'variant-a',
        name: 'Original',
        description: 'Blue button',
        weight: 50,
        isActive: true
      },
      {
        id: 'variant-b',
        name: 'Test',
        description: 'Green button',
        weight: 50,
        isActive: true
      }
    ],
    startDate: new Date(),
    endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    status: 'draft' as const,
    successMetrics: ['Conversion Rate', 'Click Through Rate']
  };
</script>

<svelte:head>
  <title>ABTestConfigurator Story</title>
</svelte:head>

<ABTestConfigurator
  initialTest={testConfig}
/>