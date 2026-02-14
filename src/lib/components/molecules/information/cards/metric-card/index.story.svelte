<script lang="ts">
  import MetricCard from './index.svelte';
  import type { IMetricCardProps } from '$stylist/design-system/props/metric-card';

  // Define StoryFn type if not available
  type StoryFn<T = any> = (args?: Record<string, any>) => { Component: typeof MetricCard; props: T };

  // Define the meta information for the story
  const meta = {
    title: 'Molecules/Data Display/MetricCard',
    component: MetricCard,
    tags: ['autodocs'],
    parameters: {
      layout: 'centered'
    },
    argTypes: {
      title: {
        control: { type: 'text' },
        description: 'Название метрики',
        defaultValue: 'Atoms SOLID Compliance'
      },
      value: {
        control: { type: 'number' },
        description: 'Значение метрики',
        defaultValue: 40
      },
      max: {
        control: { type: 'number' },
        description: 'Максимальное значение для расчёта прогресса',
        defaultValue: 75
      },
      percentage: {
        control: { type: 'number' },
        description: 'Процентное значение метрики',
        defaultValue: 53.3
      },
      description: {
        control: { type: 'text' },
        description: 'Описание метрики',
        defaultValue: '40 out of 75 atoms are fully compliant'
      },
      variant: {
        control: { type: 'select', options: ['success', 'warning', 'danger', 'info'] },
        description: 'Вариант оформления метрики',
        defaultValue: 'success'
      },
      showProgressBar: {
        control: { type: 'boolean' },
        description: 'Показывать ли прогресс-бар',
        defaultValue: true
      },
      class: {
        control: { type: 'text' },
        description: 'Дополнительные CSS классы'
      }
    }
  };

  // Default story
  const DefaultStory: StoryFn = (args?: Record<string, any>) => {
    return {
      Component: MetricCard,
      props: args || {}
    };
  };

  // Story with different configurations
  const WarningVariantStory: StoryFn = (args?: Record<string, any>) => {
    return {
      Component: MetricCard,
      props: { ...args, title: 'Test Coverage', value: 65, max: 100, percentage: 65, description: 'Below target threshold', variant: 'warning' }
    };
  };

  const DangerVariantStory: StoryFn = (args?: Record<string, any>) => {
    return {
      Component: MetricCard,
      props: { ...args, title: 'Bugs Found', value: 23, max: 50, percentage: 46, description: 'Above acceptable threshold', variant: 'danger' }
    };
  };

  const WithoutProgressBarStory: StoryFn = (args?: Record<string, any>) => {
    return {
      Component: MetricCard,
      props: { ...args, title: 'Total Components', value: 429, max: 500, percentage: 85.8, description: 'Components in library', showProgressBar: false }
    };
  };
</script>

<!-- Default story -->
<div id="molecules-metric-card">
  <h1>MetricCard</h1>
  <p>MetricCard - компонент для отображения метрики с прогресс-баром и дополнительной информацией</p>

  <h2>Default</h2>
  <div class="p-4 border rounded-lg max-w-sm">
    <svelte:component this={DefaultStory}
      title="Atoms SOLID Compliance"
      value={40}
      max={75}
      percentage={53.3}
      description="40 out of 75 atoms are fully compliant"
      variant="success"
      showProgressBar={true} />
  </div>

  <h2>Warning Variant</h2>
  <div class="p-4 border rounded-lg max-w-sm">
    <svelte:component this={WarningVariantStory} />
  </div>

  <h2>Danger Variant</h2>
  <div class="p-4 border rounded-lg max-w-sm">
    <svelte:component this={DangerVariantStory} />
  </div>

  <h2>Without Progress Bar</h2>
  <div class="p-4 border rounded-lg max-w-sm">
    <svelte:component this={WithoutProgressBarStory} />
  </div>
</div>

<!-- Export the meta for Storybook -->
{@html `<script type="application/json" id="svelte-meta">${JSON.stringify(meta)}</script>`}
