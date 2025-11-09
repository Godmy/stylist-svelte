<script lang="ts">
  import Story from '$lib/playground/components/Story.svelte';
  import NumberFlow from './NumberFlow.svelte';
  import type { ControlConfig } from 'stylist-svelte/playground';

  const controls: ControlConfig[] = [
    {
      name: 'value',
      type: 'number',
      defaultValue: 1234.56,
      min: 0,
      max: 1000000,
      step: 0.01
    },
    {
      name: 'prefix',
      type: 'text',
      defaultValue: '$'
    },
    {
      name: 'suffix',
      type: 'text',
      defaultValue: ''
    },
    {
      name: 'animated',
      type: 'boolean',
      defaultValue: true
    },
    {
      name: 'locales',
      type: 'text',
      defaultValue: 'en-US'
    },
    {
      name: 'format',
      type: 'select',
      defaultValue: 'currency',
      options: ['decimal', 'currency', 'percent', 'compact']
    }
  ];
  
  // Helper to convert format string to Intl.NumberFormat options
  const getFormatOptions = (format: string) => {
    switch(format) {
      case 'currency':
        return { style: 'currency', currency: 'USD' };
      case 'percent':
        return { style: 'percent' };
      case 'compact':
        return { notation: 'compact' };
      default:
        return { style: 'decimal' };
    }
  };
</script>

<Story
  id="atoms-numberflow"
  title="NumberFlow"
  component={NumberFlow}
  category="Atoms"
  description="Animated number display component with smooth transitions"
  tags={['number', 'animation', 'formatting', 'intl']}
  controls={controls}
>
  {#snippet children(props: import('./NumberFlow.svelte').NumberFlowProps)}
    <NumberFlow
      value={props.value}
      prefix={props.prefix}
      suffix={props.suffix}
      animated={props.animated}
      locales={props.locales as string | string[]}
      format={getFormatOptions(props.format as string) as Intl.NumberFormatOptions}
    />
  {/snippet}
</Story>