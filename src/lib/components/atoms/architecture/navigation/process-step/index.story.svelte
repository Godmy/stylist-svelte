<script lang="ts">
  import ProcessStep from './index.svelte';

  // Define StoryFn type if not available
  type StoryFn<T = any> = (args?: Record<string, any>) => { Component: typeof ProcessStep; props: T };

  // Define the meta information for the story
  const meta = {
    title: 'Molecules/Data Display/ProcessStep',
    component: ProcessStep,
    tags: ['autodocs'],
    parameters: {
      layout: 'centered'
    },
    argTypes: {
      number: {
        control: { type: 'number' },
        description: 'Step number for the process',
        defaultValue: 1
      },
      title: {
        control: { type: 'text' },
        description: 'Title of the process step',
        defaultValue: 'PLAN'
      },
      description: {
        control: { type: 'text' },
        description: 'Description of the process step',
        defaultValue: 'Product Strategy'
      },
      agent: {
        control: { type: 'text' },
        description: 'Agent responsible for this step',
        defaultValue: 'Codex'
      },
      icon: {
        control: { type: 'text' },
        description: 'Icon name for the process step',
        defaultValue: ''
      },
      active: {
        control: { type: 'boolean' },
        description: 'Whether this step is currently active',
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
      Component: ProcessStep,
      props: args || {}
    };
  };

  // Story with different configurations
  const ActiveStory: StoryFn = (args?: Record<string, any>) => {
    return {
      Component: ProcessStep,
      props: { ...args, active: true }
    };
  };

  const BuildStepStory: StoryFn = (args?: Record<string, any>) => {
    return {
      Component: ProcessStep,
      props: {
        ...args,
        number: 2,
        title: 'BUILD',
        description: 'Implementation',
        agent: 'Qwen'
      }
    };
  };
</script>

<!-- Default story -->
<div id="molecules-process-step">
  <h1>ProcessStep</h1>
  <p>Process step for timeline</p>
  
  <h2>Plan Step</h2>
  <div class="p-4 border rounded-lg max-w-md">
    <svelte:component this={DefaultStory} 
      number={1}
      title="PLAN" 
      description="Product Strategy"
      agent="Codex" />
  </div>
  
  <h2>Active Step</h2>
  <div class="p-4 border rounded-lg max-w-md">
    <svelte:component this={ActiveStory} 
      number={2}
      title="BUILD" 
      description="Implementation"
      agent="Qwen"
      active={true} />
  </div>
  
  <h2>Verify Step</h2>
  <div class="p-4 border rounded-lg max-w-md">
    <svelte:component this={DefaultStory} 
      number={3}
      title="VERIFY" 
      description="Documentation & Analysis"
      agent="Claude" />
  </div>
</div>

<!-- Export the meta for Storybook -->
{@html `<script type="application/json" id="svelte-meta">${JSON.stringify(meta)}</script>`}
