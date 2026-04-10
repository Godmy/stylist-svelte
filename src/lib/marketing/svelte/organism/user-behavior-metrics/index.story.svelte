<script lang="ts">
  import { Story } from '$stylist/development/svelte/playground';
  import type { InterfaceControllerSettings } from '$stylist/development/type/struct/interface-controller-settings';

  import UserBehaviorMetrics from './index.svelte';

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

  const sampleMetrics = [
    { id: 'pageviews', name: 'Page Views', value: '23,456', change: 12.5, changeType: 'positive' as const, description: 'Total number of pages viewed' },
    { id: 'session', name: 'Session Duration', value: '4m 32s', change: 8.2, changeType: 'positive' as const, description: 'Average session length' },
    { id: 'bounce', name: 'Bounce Rate', value: '32.1%', change: -4.3, changeType: 'negative' as const, description: 'Percentage of single-page sessions' },
    { id: 'pages', name: 'Pages/Session', value: '3.24', change: 2.1, changeType: 'positive' as const, description: 'Average pages viewed per session' }
  ];

  const minimalMetrics = [
    { id: 'clicks', name: 'Clicks', value: '5,120', description: 'Total link clicks' },
    { id: 'conversions', name: 'Conversions', value: '312', description: 'Goal completions' }
  ];
</script>

<Story
  {id}
  {title}
  {description}
  component={UserBehaviorMetrics}
  category="Organisms"
  controls={controls}
>
  {#snippet children(values: any)}
    <section class="sb-organisms-user-behavior-metrics grid w-full gap-8 lg:grid-cols-[1fr_1fr]">
      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-primary] p-6 shadow-sm">
        <p class="text-sm font-semibold uppercase tracking-wide text-[--color-text-secondary]">
          Default User Behavior Metrics
        </p>
        <p class="mt-1 text-[--color-text-primary]">Full set of metrics with change indicators.</p>

        <div class="mt-6">
          <UserBehaviorMetrics metrics={sampleMetrics} />
        </div>
      </div>

      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-secondary] p-6 shadow-sm">
        <h3 class="text-base font-semibold text-[--color-text-primary]">Minimal Variant</h3>
        <p class="text-sm text-[--color-text-secondary]">
          Condensed view with fewer metrics and custom title.
        </p>

        <div class="mt-5">
          <UserBehaviorMetrics
            title="Quick Stats"
            subtitle="Last 24 hours"
            metrics={minimalMetrics}
          />
        </div>
      </div>
    </section>
  {/snippet}
</Story>
