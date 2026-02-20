<script lang="ts">
  import { Story } from '$stylist/playground';
  import type { ControlConfig } from '$stylist/playground';

  import ComparisonCard from './index.svelte';

  let {
    id = '',
    title = '',
    description = '',
    controls = [
      { name: 'title', type: 'text', defaultValue: 'Before vs After' }
    ]
  } = $props<{
    id?: string;
    title?: string;
    description?: string;
    controls?: ControlConfig[]
  }>();

  // Sample data for the comparison card
  const sampleBefore = {
    title: 'Before SAMO',
    items: [
      { label: 'SOLID Compliance', value: 'Low' },
      { label: 'Code Quality', value: 'Subjective' },
      { label: 'Architecture', value: 'Inconsistent' },
      { label: 'Testing', value: 'Manual' }
    ]
  };

  const sampleAfter = {
    title: 'After SAMO',
    items: [
      { label: 'SOLID Compliance', value: '53.3%' },
      { label: 'Code Quality', value: 'Quantitative' },
      { label: 'Architecture', value: 'Standardized' },
      { label: 'Testing', value: 'Automated' }
    ]
  };
</script>

<Story
  {id}
  {title}
  {description}
  component={ComparisonCard}
  category="Organisms"
  controls={controls}
>
  {#snippet children(values: any)}
    <section class="sb-organisms-comparison-card grid w-full gap-8 lg:grid-cols-[1fr_1fr]">
      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-primary] p-6 shadow-sm">
        <p class="text-sm font-semibold uppercase tracking-wide text-[--color-text-secondary]">
          Primary Comparison Card Example
        </p>
        <p class="mt-1 text-[--color-text-primary]">Before/After comparison card for SAMO case study.</p>

        <div class="mt-6">
          <ComparisonCard
            title={values.title}
            before={sampleBefore}
            after={sampleAfter}
          />
        </div>
      </div>

      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-secondary] p-6 shadow-sm">
        <h3 class="text-base font-semibold text-[--color-text-primary]">Comparison Variations</h3>
        <p class="text-sm text-[--color-text-secondary]">
          Different comparison card configurations with various data sets.
        </p>

        <div class="mt-5 space-y-4">
          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Performance Metrics</p>
            <div>
              <ComparisonCard
                title="Performance Metrics"
                before={{
                  title: 'Legacy System',
                  items: [
                    { label: 'Load Time', value: '5.2s' },
                    { label: 'Memory Usage', value: '240MB' },
                    { label: 'CPU Usage', value: '65%' },
                    { label: 'Errors', value: '12/hour' }
                  ]
                }}
                after={{
                  title: 'Optimized System',
                  items: [
                    { label: 'Load Time', value: '1.8s' },
                    { label: 'Memory Usage', value: '120MB' },
                    { label: 'CPU Usage', value: '32%' },
                    { label: 'Errors', value: '2/hour' }
                  ]
                }}
              />
            </div>
          </article>

          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">User Experience</p>
            <div>
              <ComparisonCard
                title="User Experience"
                before={{
                  title: 'Old UX',
                  items: [
                    { label: 'Completion Rate', value: '65%' },
                    { label: 'Satisfaction', value: '3.2/5' },
                    { label: 'Support Tickets', value: '120/month' },
                    { label: 'Churn Rate', value: '12%' }
                  ]
                }}
                after={{
                  title: 'New UX',
                  items: [
                    { label: 'Completion Rate', value: '87%' },
                    { label: 'Satisfaction', value: '4.6/5' },
                    { label: 'Support Tickets', value: '45/month' },
                    { label: 'Churn Rate', value: '5%' }
                  ]
                }}
              />
            </div>
          </article>
        </div>
      </div>
    </section>
  {/snippet}
</Story>


