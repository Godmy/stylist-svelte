<script lang="ts">
  import { Story } from '$stylist/development/svelte/playground';
  import type { InterfaceControllerSettings } from '$stylist/development/type/struct/interface-controller-settings';

  import TrafficAnalytics from './index.svelte';

  let {
    id = '',
    title = '',
    description = '',
    controls = []
  } = $props<{
    id?: string;
    title?: string;
    description?: string;
    controls?: InterfaceControllerSettings[]
  }>();

  const trafficSources = [
    { id: 'direct', name: 'Direct', value: 45, percentage: 45, color: '#3b82f6' },
    { id: 'social', name: 'Social', value: 25, percentage: 25, color: '#8b5cf6' },
    { id: 'referral', name: 'Referral', value: 20, percentage: 20, color: '#ec4899' },
    { id: 'organic', name: 'Organic', value: 10, percentage: 10, color: '#10b981' }
  ];

  const trafficData = [
    { date: new Date(2023, 0, 1), value: 1000 },
    { date: new Date(2023, 0, 2), value: 1200 },
    { date: new Date(2023, 0, 3), value: 900 },
    { date: new Date(2023, 0, 4), value: 1400 },
    { date: new Date(2023, 0, 5), value: 1600 },
    { date: new Date(2023, 0, 6), value: 1800 },
    { date: new Date(2023, 0, 7), value: 1300 }
  ];
</script>

<Story
  {id}
  {title}
  {description}
  component={TrafficAnalytics}
  category="Organisms"
  controls={controls}
>
  {#snippet children(values: any)}
    <section class="sb-organisms-traffic-analytics grid w-full gap-8 lg:grid-cols-[1fr_1fr]">
      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-primary] p-6 shadow-sm">
        <p class="text-sm font-semibold uppercase tracking-wide text-[--color-text-secondary]">
          Default Traffic Analytics
        </p>
        <p class="mt-1 text-[--color-text-primary]">Standard analytics dashboard with traffic sources and chart.</p>

        <div class="mt-6">
          <TrafficAnalytics
            totalVisitors={12500}
            uniqueVisitors={9800}
            pageViews={52000}
            timeOnPage="2m 45s"
            bounceRate={32}
            trafficSources={trafficSources}
            trafficData={trafficData}
          />
        </div>
      </div>

      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-secondary] p-6 shadow-sm">
        <h3 class="text-base font-semibold text-[--color-text-primary]">High Bounce Rate Variant</h3>
        <p class="text-sm text-[--color-text-secondary]">
          Analytics with elevated bounce rate indicator.
        </p>

        <div class="mt-5">
          <TrafficAnalytics
            title="Weekly Overview"
            subtitle="High traffic period"
            totalVisitors={3200}
            uniqueVisitors={2100}
            pageViews={8900}
            timeOnPage="1m 12s"
            bounceRate={72}
            trafficSources={trafficSources}
            trafficData={trafficData}
          />
        </div>
      </div>
    </section>
  {/snippet}
</Story>
