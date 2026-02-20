<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';
  import { createRawSnippet } from 'svelte';

  import WidgetContainer from './index.svelte';

  type Dataset = 'support' | 'growth' | 'ops';

  const controls: ControlConfig[] = [
    { name: 'title', type: 'text', defaultValue: 'Operations overview' },
    { name: 'subtitle', type: 'text', defaultValue: 'Live metrics for support team' },
    { name: 'collapsible', type: 'boolean', defaultValue: true },
    { name: 'initiallyCollapsed', type: 'boolean', defaultValue: false },
    { name: 'resizable', type: 'boolean', defaultValue: true },
    { name: 'draggable', type: 'boolean', defaultValue: true },
    { name: 'maximizable', type: 'boolean', defaultValue: true },
    { name: 'size', type: 'select', options: ['sm', 'md', 'lg'], defaultValue: 'md' }
  ];

  let title = $state('Operations overview');
  let subtitle = $state('Live metrics for support team');
  let collapsible = $state(true);
  let initiallyCollapsed = $state(false);
  let resizable = $state(true);
  let draggable = $state(true);
  let maximizable = $state(true);
  let size = $state<'sm' | 'md' | 'lg'>('md');
  let showActions = $state(true);
  let selectedDataset = $state<Dataset>('support');
  let ticketVolume = $state(128);
  let sla = $state(92);
  let trend = $state(12);

  let contentSnippet = $derived.by(() => createRawSnippet(() => {
    const dataset = selectedDataset.toUpperCase();
    const tickets = ticketVolume;
    const slaValue = sla;
    const trendValue = trend;
    const trendSign = trend > 0 ? '+' : '';

    return {
      render: () => `<div class="space-y-4">
      <p class="text-sm text-[--color-text-secondary]">Dataset: ${dataset}</p>
      <div class="grid grid-cols-2 gap-3">
        <div class="rounded-lg border border-[--color-border-primary] bg-[--color-background-secondary] p-3">
          <p class="text-xs text-[--color-text-secondary]">Tickets</p>
          <p class="text-2xl font-semibold text-[--color-text-primary]">${tickets}</p>
        </div>
        <div class="rounded-lg border border-[--color-border-primary] bg-[--color-background-secondary] p-3">
          <p class="text-xs text-[--color-text-secondary]">SLA</p>
          <p class="text-2xl font-semibold text-[--color-text-primary]">${slaValue}%</p>
        </div>
      </div>
      <div class="rounded-lg border border-dashed border-[--color-border-primary] p-3 text-sm text-[--color-text-secondary]">
        Weekly change: ${trendSign}${trendValue}%
      </div>
    </div>`
    };
  }));

  let actionsSnippet = $derived(showActions
    ? createRawSnippet(() => {
        return {
          render: () => `<div class="flex items-center gap-2 text-[--color-text-secondary]">
          <button class="rounded-md border border-[--color-border-primary] px-2 py-1 text-xs font-medium hover:border-[--color-primary-600]">Refresh</button>
          <button class="rounded-md border border-[--color-border-primary] px-2 py-1 text-xs font-medium hover:border-[--color-primary-600]">Export</button>
        </div>`
        };
      })
    : undefined);
</script>

<Story
  id="molecules-widget-container"
  title="Widget Container"
  component={WidgetContainer}
  category="Molecules"
  description="Container for mini-applications with drag, collapse, and custom actions."
  controls={controls}
>
  {#snippet children(props)}
    <section class="grid w-full gap-8 lg:grid-cols-[1fr_1fr]">
      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-primary] p-6 shadow-sm">
        <p class="text-sm font-semibold uppercase tracking-wide text-[--color-text-secondary]">
          Interactive Widget Container Example
        </p>
        <p class="mt-1 text-[--color-text-primary]">Container for mini-applications with drag, collapse, and custom actions.</p>

        <div class="mt-6">
          <WidgetContainer
            title={props.title}
            subtitle={props.subtitle}
            content={contentSnippet}
            actions={actionsSnippet}
            collapsible={props.collapsible}
            initiallyCollapsed={props.initiallyCollapsed}
            resizable={props.resizable}
            draggable={props.draggable}
            maximizable={props.maximizable}
            size={props.size}
            class="max-w-2xl mx-auto"
          />
        </div>
      </div>

      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-secondary] p-6 shadow-sm">
        <h3 class="text-base font-semibold text-[--color-text-primary]">Widget Variations</h3>
        <p class="text-sm text-[--color-text-secondary]">
          Different widget configurations with various properties and states.
        </p>

        <div class="mt-5 space-y-4">
          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Small Widget</p>
            <WidgetContainer
              title="Small Widget"
              subtitle="Compact version"
              content={contentSnippet}
              collapsible={true}
              initiallyCollapsed={false}
              resizable={false}
              draggable={false}
              maximizable={false}
              size="sm"
            />
          </article>

          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Initially Collapsed</p>
            <WidgetContainer
              title="Collapsed Widget"
              subtitle="Starts collapsed"
              content={contentSnippet}
              collapsible={true}
              initiallyCollapsed={true}
              resizable={true}
              draggable={true}
              maximizable={true}
              size="md"
            />
          </article>

          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Large Widget</p>
            <WidgetContainer
              title="Large Widget"
              subtitle="Expanded version"
              content={contentSnippet}
              collapsible={true}
              initiallyCollapsed={false}
              resizable={true}
              draggable={true}
              maximizable={true}
              size="lg"
            />
          </article>
        </div>
      </div>
    </section>
  {/snippet}
</Story>


