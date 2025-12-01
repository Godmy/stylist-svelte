<script lang="ts">
  import StatCard from './StatCard.svelte';

  // Define StoryFn type if not available
  type StoryFn<T = any> = (args?: Record<string, any>) => { Component: typeof StatCard; props: T };

  // Define the meta information for the story
  const meta = {
    title: 'Molecules/Data Display/StatCard',
    component: StatCard,
    tags: ['autodocs'],
    parameters: {
      layout: 'centered'
    },
    argTypes: {
      title: {
        control: { type: 'text' },
        description: 'Title of the statistic',
        defaultValue: 'Total Components'
      },
      value: {
        control: { type: 'text' },
        description: 'Value of the statistic',
        defaultValue: '429'
      },
      icon: {
        control: { type: 'text' },
        description: 'Icon name or SVG to display with the stat',
        defaultValue: 'package'
      },
      trend: {
        control: { type: 'select', options: ['up', 'down', 'neutral'] },
        description: 'Trend direction of the statistic',
        defaultValue: 'up'
      },
      trendValue: {
        control: { type: 'text' },
        description: 'Value of the trend (e.g. "+12.5%")',
        defaultValue: '+23 this month'
      },
      description: {
        control: { type: 'text' },
        description: 'Description of the statistic',
        defaultValue: 'Production-ready Svelte 5 components'
      },
      variant: {
        control: { type: 'select', options: ['default', 'gradient'] },
        description: 'Visual variant of the stat card',
        defaultValue: 'default'
      },
      animated: {
        control: { type: 'boolean' },
        description: 'Whether to use animated number display',
        defaultValue: false
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
      Component: StatCard,
      props: args || {}
    };
  };

  // Story with different configurations
  const WithAnimationStory: StoryFn = (args?: Record<string, any>) => {
    return {
      Component: StatCard,
      props: { ...args, animated: true }
    };
  };

  const WithGradientStory: StoryFn = (args?: Record<string, any>) => {
    return {
      Component: StatCard,
      props: { ...args, variant: 'gradient' }
    };
  };

  const WithDownTrendStory: StoryFn = (args?: Record<string, any>) => {
    return {
      Component: StatCard,
      props: { ...args, trend: 'down', trendValue: '-5.2%' }
    };
  };
</script>

<!-- Default story -->
<div id="molecules-stat-card">
  <h1>StatCard</h1>
  <p>Card with statistics (number + description + trend)</p>
  
  <h2>Basic Usage</h2>
  <div class="p-4 border rounded-lg">
    <svelte:component this={DefaultStory} 
      title="Total Components" 
      value="429" 
      icon="package"
      trend="up"
      trendValue="+23 this month"
      description="Production-ready Svelte 5 components" />
  </div>
  
  <h2>With Animation</h2>
  <div class="p-4 border rounded-lg">
    <svelte:component this={WithAnimationStory} 
      title="SOLID Compliance" 
      value="53.3" 
      icon="check"
      trend="up"
      trendValue="+12.5%"
      description="Percentage of atoms following SOLID principles" />
  </div>
  
  <h2>With Gradient</h2>
  <div class="p-4 border rounded-lg">
    <svelte:component this={WithGradientStory} 
      title="Test Coverage" 
      value="94%" 
      icon="shield"
      trend="neutral"
      description="Automated testing coverage" />
  </div>
  
  <h2>Down Trend</h2>
  <div class="p-4 border rounded-lg">
    <svelte:component this={WithDownTrendStory} 
      title="Bug Reports" 
      value="12" 
      icon="bug"
      description="Issues reported this month" />
  </div>
</div>

<!-- Export the meta for Storybook -->
{@html `<script type="application/json" id="svelte-meta">${JSON.stringify(meta)}</script>`}