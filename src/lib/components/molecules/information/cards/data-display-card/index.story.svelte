<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';
  import { createRawSnippet } from 'svelte';

  import DataDisplayCard from './index.svelte';

  type Props = {
    title: string;
    subtitle: string;
    description: string;
    showImage: boolean;
    showActions: boolean;
    showFooter: boolean;
  };

  const controls: ControlConfig[] = [
    { name: 'title', type: 'text', defaultValue: 'Active subscribers' },
    { name: 'subtitle', type: 'text', defaultValue: 'Q2 cohort performance' },
    {
      name: 'description',
      type: 'text',
      defaultValue: 'Track retention and activation metrics for the newest customers.'
    },
    { name: 'showImage', type: 'boolean', defaultValue: true },
    { name: 'showActions', type: 'boolean', defaultValue: true },
    { name: 'showFooter', type: 'boolean', defaultValue: true }
  ];

  const summaryCards = [
    {
      title: 'MRR',
      subtitle: 'Monthly recurring revenue',
      description: '$146,240 · ↑ 9.2% vs last month'
    },
    {
      title: 'Conversion',
      subtitle: 'Trials → paid',
      description: '37% conversion after onboarding refresh'
    },
    {
      title: 'Churn',
      subtitle: 'Logo churn',
      description: '2.1% churn with new save playbooks'
    }
  ];

  const previewImage =
    'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=900&q=60';

  const actionsSnippet = createRawSnippet(() => ({
    render: () =>
      `<button class="inline-flex items-center rounded-full bg-[--color-primary-600] px-4 py-2 text-sm font-semibold text-[--color-text-inverse]">
        View report
      </button>`
  }));

  const footerSnippet = createRawSnippet(() => ({
    render: () =>
      `<div class="flex items-center justify-between text-xs text-gray-500">
        <span>Updated 5 minutes ago</span>
        <span>Data Warehouse · ETL #42</span>
      </div>`
  }));
</script>

<Story
  id="molecules-data-display-card"
  title="DataDisplayCard"
  component={DataDisplayCard}
  category="Molecules"
  description="Narrative card that blends key metrics, narrative context, imagery, and actions."
  controls={controls}
>
  {#snippet children(values: any)}
    <section class="grid w-full gap-8 lg:grid-cols-[1.2fr_0.8fr]">
      <div class="rounded-[2.5rem] border border-[--color-border-primary] bg-[--color-background-primary] p-6 shadow-sm">
        <header class="flex items-center justify-between">
          <div>
            <p class="text-sm font-semibold uppercase tracking-wide text-[--color-text-secondary]">Executive view</p>
            <p class="text-lg text-[--color-text-primary]">
              Tune the copy, imagery, and CTA with the controls in the panel.
            </p>
          </div>
          <span class="rounded-full bg-[--color-background-secondary] px-4 py-1 text-xs font-semibold text-[--color-text-primary]">
            {values.showImage ? 'Image on' : 'Image off'}
          </span>
        </header>

        <div class="mt-6">
          <DataDisplayCard
            title={values.title}
            subtitle={values.subtitle}
            description={values.description}
            image={values.showImage ? previewImage : undefined}
            actions={values.showActions ? actionsSnippet : undefined}
            footer={values.showFooter ? footerSnippet : undefined}
          />
        </div>
      </div>

      <div class="rounded-[2.5rem] border border-[--color-border-primary] bg-[--color-background-secondary] p-6 shadow-sm">
        <h3 class="text-base font-semibold text-[--color-text-primary]">Secondary cards</h3>
        <p class="text-sm text-[--color-text-secondary]">Drop these insights into dashboards or onboarding flows.</p>

        <div class="mt-6 space-y-4">
          {#each summaryCards as card}
            <DataDisplayCard
              title={card.title}
              subtitle={card.subtitle}
              description={card.description}
              class="border border-[--color-border-primary] bg-[--color-background-primary]"
            />
          {/each}
        </div>
      </div>
    </section>
  {/snippet}
</Story>




