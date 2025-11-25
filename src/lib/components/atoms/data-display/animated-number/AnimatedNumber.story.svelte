<script lang="ts">
  import AnimatedNumber from './AnimatedNumber.svelte';
  import type { Meta, StoryFn } from '$lib/playground/interfaces';

  // Define the meta information for the story
  const meta: Meta = {
    title: 'Atoms/Typography/AnimatedNumber',
    component: AnimatedNumber,
    tags: ['autodocs'],
    parameters: {
      layout: 'centered'
    },
    argTypes: {
      value: {
        control: { type: 'number' },
        description: 'Target value to animate to'
      },
      duration: {
        control: { type: 'number' },
        description: 'Duration of animation in milliseconds',
        defaultValue: 2000
      },
      delay: {
        control: { type: 'number' },
        description: 'Delay before animation starts',
        defaultValue: 0
      },
      easing: {
        control: { type: 'select', options: ['linear', 'ease-in', 'ease-out', 'ease-in-out'] },
        description: 'Animation easing function',
        defaultValue: 'ease-out'
      },
      prefix: {
        control: { type: 'text' },
        description: 'Prefix to show before number (e.g. "$")',
        defaultValue: ''
      },
      suffix: {
        control: { type: 'text' },
        description: 'Suffix to show after number (e.g. "%", "+")',
        defaultValue: ''
      },
      separator: {
        control: { type: 'text' },
        description: 'Thousand separator character',
        defaultValue: ','
      },
      decimals: {
        control: { type: 'number' },
        description: 'Number of decimal places',
        defaultValue: 0
      },
      class: {
        control: { type: 'text' },
        description: 'Additional CSS classes'
      }
    }
  };

  // Default story
  const DefaultStory: StoryFn = (args?: Record<string, any>) => {
    return {
      Component: AnimatedNumber,
      props: args || {}
    };
  };

  // Story with different configurations
  const PercentageStory: StoryFn = (args?: Record<string, any>) => {
    return {
      Component: AnimatedNumber,
      props: { ...args, value: 53.3, suffix: '%', decimals: 1 }
    };
  };

  const CurrencyStory: StoryFn = (args?: Record<string, any>) => {
    return {
      Component: AnimatedNumber,
      props: { ...args, value: 1095, prefix: '$', separator: ',' }
    };
  };

  const LargeNumberStory: StoryFn = (args?: Record<string, any>) => {
    return {
      Component: AnimatedNumber,
      props: { ...args, value: 1000000, suffix: '+', format: (n: number) => `${(n / 1000).toFixed(0)}K` }
    };
  };
</script>

<!-- Default story -->
<div id="atoms-animated-number">
  <h1>AnimatedNumber</h1>
  <p>Animated number component that counts up to a target value</p>
  
  <h2>Basic Usage</h2>
  <div class="p-4 border rounded-lg">
    <svelte:component this={DefaultStory} value={429} suffix=" Components" duration={2000} />
  </div>
  
  <h2>Percentage</h2>
  <div class="p-4 border rounded-lg">
    <svelte:component this={PercentageStory} />
  </div>
  
  <h2>Currency</h2>
  <div class="p-4 border rounded-lg">
    <svelte:component this={CurrencyStory} />
  </div>
  
  <h2>Large Number</h2>
  <div class="p-4 border rounded-lg">
    <svelte:component this={LargeNumberStory} />
  </div>
</div>

<!-- Export the meta for Storybook -->
{@html `<script type="application/json" id="svelte-meta">${JSON.stringify(meta)}</script>`}