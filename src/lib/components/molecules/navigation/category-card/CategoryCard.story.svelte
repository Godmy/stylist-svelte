<script lang="ts">
  import CategoryCard from './CategoryCard.svelte';
  import type { Meta, StoryFn } from '$lib/playground/interfaces';

  // Define the meta information for the story
  const meta: Meta = {
    title: 'Molecules/Navigation/CategoryCard',
    component: CategoryCard,
    tags: ['autodocs'],
    parameters: {
      layout: 'centered'
    },
    argTypes: {
      title: {
        control: { type: 'text' },
        description: 'Title of the category',
        defaultValue: 'Controls'
      },
      icon: {
        control: { type: 'text' },
        description: 'Icon name or identifier for the category',
        defaultValue: 'sliders'
      },
      count: {
        control: { type: 'number' },
        description: 'Number of items in the category',
        defaultValue: 15
      },
      description: {
        control: { type: 'text' },
        description: 'Description of the category',
        defaultValue: 'Buttons, Inputs, Toggles, Sliders'
      },
      link: {
        control: { type: 'text' },
        description: 'Link to navigate to when the card is clicked',
        defaultValue: '/stylist/controls'
      },
      examples: {
        control: { type: 'object' },
        description: 'Array of example component names in this category',
        defaultValue: ['Button', 'Input', 'Switch']
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
      Component: CategoryCard,
      props: args || {}
    };
  };

  // Story with different configurations
  const ChartsStory: StoryFn = (args?: Record<string, any>) => {
    return {
      Component: CategoryCard,
      props: {
        ...args,
        title: 'Charts & Visualization',
        icon: 'bar-chart',
        count: 23,
        description: 'Line, Bar, Pie, Donut, Heatmap',
        link: '/stylist/charts',
        examples: ['LineChart', 'BarChart', 'PieChart']
      }
    };
  };

  const TablesStory: StoryFn = (args?: Record<string, any>) => {
    return {
      Component: CategoryCard,
      props: {
        ...args,
        title: 'Tables & Data Display',
        icon: 'table',
        count: 18,
        description: 'DataTable, TreeView, VirtualList',
        link: '/stylist/tables',
        examples: ['DataTable', 'TreeView', 'VirtualList']
      }
    };
  };
</script>

<!-- Default story -->
<div id="molecules-category-card">
  <h1>CategoryCard</h1>
  <p>Card for component categories (for /stylist page)</p>
  
  <h2>Controls Category</h2>
  <div class="p-4 border rounded-lg max-w-sm">
    <svelte:component this={DefaultStory} 
      title="Controls" 
      icon="sliders"
      count={15}
      description="Buttons, Inputs, Toggles, Sliders"
      link="/stylist/controls"
      examples={['Button', 'Input', 'Switch']} />
  </div>
  
  <h2>Charts Category</h2>
  <div class="p-4 border rounded-lg max-w-sm">
    <svelte:component this={ChartsStory} />
  </div>
  
  <h2>Tables Category</h2>
  <div class="p-4 border rounded-lg max-w-sm">
    <svelte:component this={TablesStory} />
  </div>
</div>

<!-- Export the meta for Storybook -->
{@html `<script type="application/json" id="svelte-meta">${JSON.stringify(meta)}</script>`}