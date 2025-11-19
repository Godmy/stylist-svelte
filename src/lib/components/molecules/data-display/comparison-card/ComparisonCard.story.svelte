<script lang="ts">
  import ComparisonCard from './ComparisonCard.svelte';
  import type { Meta, StoryFn } from '$lib/playground/interfaces';

  // Define the meta information for the story
  const meta: Meta = {
    title: 'Molecules/Data Display/ComparisonCard',
    component: ComparisonCard,
    tags: ['autodocs'],
    parameters: {
      layout: 'centered'
    },
    argTypes: {
      title: {
        control: { type: 'text' },
        description: 'Title of the comparison card',
        defaultValue: 'Before vs After'
      },
      before: {
        control: { type: 'object' },
        description: 'Data for the before comparison',
        defaultValue: {
          title: 'Before SAMO',
          items: [
            { label: 'Architecture', value: 'Inconsistent' },
            { label: 'Components', value: '400+' },
            { label: 'Quality', value: 'Subjective' },
            { label: 'Refactoring', value: 'Manual reviews' }
          ]
        }
      },
      after: {
        control: { type: 'object' },
        description: 'Data for the after comparison',
        defaultValue: {
          title: 'After SAMO',
          items: [
            { label: 'Architecture', value: 'Unified' },
            { label: 'Components', value: '429+' },
            { label: 'Quality', value: 'Quantitative metrics' },
            { label: 'Refactoring', value: 'Automated checks' }
          ]
        }
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
      Component: ComparisonCard,
      props: args || {}
    };
  };

  // SAMO example story
  const SAMOExampleStory: StoryFn = (args?: Record<string, any>) => {
    return {
      Component: ComparisonCard,
      props: {
        title: 'SAMO Implementation Results',
        before: {
          title: 'Before SAMO',
          items: [
            { label: 'SOLID Compliance', value: 'Low' },
            { label: 'Code Quality', value: 'Subjective' },
            { label: 'Architecture', value: 'Inconsistent' },
            { label: 'Testing', value: 'Manual' }
          ]
        },
        after: {
          title: 'After SAMO',
          items: [
            { label: 'SOLID Compliance', value: '53.3%' },
            { label: 'Code Quality', value: 'Quantitative' },
            { label: 'Architecture', value: 'Standardized' },
            { label: 'Testing', value: 'Automated' }
          ]
        }
      }
    };
  };
</script>

<!-- Default story -->
<div id="molecules-comparison-card">
  <h1>ComparisonCard</h1>
  <p>Before/After comparison card for SAMO case study</p>
  
  <h2>Basic Comparison</h2>
  <div class="p-4 border rounded-lg max-w-4xl">
    <svelte:component this={DefaultStory} />
  </div>
  
  <h2>SAMO Implementation Results</h2>
  <div class="p-4 border rounded-lg max-w-4xl">
    <svelte:component this={SAMOExampleStory} />
  </div>
</div>

<!-- Export the meta for Storybook -->
{@html `<script type="application/json" id="svelte-meta">${JSON.stringify(meta)}</script>`}