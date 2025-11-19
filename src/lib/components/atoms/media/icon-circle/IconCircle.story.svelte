<script lang="ts">
  import IconCircle from './IconCircle.svelte';
  import type { Meta, StoryFn } from '$lib/playground/interfaces';

  // Define the meta information for the story
  const meta: Meta = {
    title: 'Atoms/Media/IconCircle',
    component: IconCircle,
    tags: ['autodocs'],
    parameters: {
      layout: 'centered'
    },
    argTypes: {
      icon: {
        control: { type: 'text' },
        description: 'Name of the icon to display',
        defaultValue: 'code'
      },
      variant: {
        control: { type: 'select', options: ['primary', 'secondary', 'success', 'warning', 'danger', 'info'] },
        description: 'Visual variant of the icon circle',
        defaultValue: 'primary'
      },
      size: {
        control: { type: 'select', options: ['sm', 'md', 'lg', 'xl'] },
        description: 'Size of the icon circle',
        defaultValue: 'md'
      },
      gradient: {
        control: { type: 'boolean' },
        description: 'Whether to use gradient background',
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
      Component: IconCircle,
      props: args || {}
    };
  };

  // Story with different configurations
  const VariantsStory: StoryFn = (args?: Record<string, any>) => {
    return {
      Component: IconCircle,
      props: args || {}
    };
  };

  const SizesStory: StoryFn = (args?: Record<string, any>) => {
    return {
      Component: IconCircle,
      props: args || {}
    };
  };

  const GradientStory: StoryFn = (args?: Record<string, any>) => {
    return {
      Component: IconCircle,
      props: { ...args, gradient: true }
    };
  };
</script>

<!-- Default story -->
<div id="atoms-icon-circle">
  <h1>IconCircle</h1>
  <p>Icon in a colored circle for feature cards</p>
  
  <h2>Basic Usage</h2>
  <div class="p-4 border rounded-lg">
    <svelte:component this={DefaultStory} icon="code" variant="primary" size="md" />
  </div>
  
  <h2>Variants</h2>
  <div class="p-4 border rounded-lg flex flex-wrap gap-4">
    <div>
      <p>Primary</p>
      <svelte:component this={VariantsStory} icon="code" variant="primary" />
    </div>
    <div>
      <p>Secondary</p>
      <svelte:component this={VariantsStory} icon="code" variant="secondary" />
    </div>
    <div>
      <p>Success</p>
      <svelte:component this={VariantsStory} icon="code" variant="success" />
    </div>
    <div>
      <p>Warning</p>
      <svelte:component this={VariantsStory} icon="code" variant="warning" />
    </div>
    <div>
      <p>Danger</p>
      <svelte:component this={VariantsStory} icon="code" variant="danger" />
    </div>
    <div>
      <p>Info</p>
      <svelte:component this={VariantsStory} icon="code" variant="info" />
    </div>
  </div>
  
  <h2>Sizes</h2>
  <div class="p-4 border rounded-lg flex flex-wrap gap-4">
    <div>
      <p>Small</p>
      <svelte:component this={SizesStory} icon="code" size="sm" />
    </div>
    <div>
      <p>Medium</p>
      <svelte:component this={SizesStory} icon="code" size="md" />
    </div>
    <div>
      <p>Large</p>
      <svelte:component this={SizesStory} icon="code" size="lg" />
    </div>
    <div>
      <p>Extra Large</p>
      <svelte:component this={SizesStory} icon="code" size="xl" />
    </div>
  </div>
  
  <h2>Gradient</h2>
  <div class="p-4 border rounded-lg flex flex-wrap gap-4">
    <svelte:component this={GradientStory} icon="code" variant="primary" />
    <svelte:component this={GradientStory} icon="code" variant="secondary" />
    <svelte:component this={GradientStory} icon="code" variant="success" />
  </div>
</div>

<!-- Export the meta for Storybook -->
{@html `<script type="application/json" id="svelte-meta">${JSON.stringify(meta)}</script>`}