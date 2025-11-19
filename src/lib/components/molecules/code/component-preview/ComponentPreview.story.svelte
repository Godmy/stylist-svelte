<script lang="ts">
  import ComponentPreview from './ComponentPreview.svelte';
  import type { Meta, StoryFn } from '$lib/playground/interfaces';
  import Button from '../../../atoms/controls/buttons/button/Button.svelte';

  // Define the meta information for the story
  const meta: Meta = {
    title: 'Molecules/Code/ComponentPreview',
    component: ComponentPreview,
    tags: ['autodocs'],
    parameters: {
      layout: 'centered'
    },
    argTypes: {
      title: {
        control: { type: 'text' },
        description: 'Title of the component',
        defaultValue: 'Button Component'
      },
      description: {
        control: { type: 'text' },
        description: 'Description of the component',
        defaultValue: 'Primary action button with variants'
      },
      code: {
        control: { type: 'text' },
        description: 'Code snippet to display',
        defaultValue: '<Button variant="primary">Click me</Button>'
      },
      language: {
        control: { type: 'text' },
        description: 'Programming language for syntax highlighting',
        defaultValue: 'svelte'
      },
      showCode: {
        control: { type: 'boolean' },
        description: 'Whether to show the code by default',
        defaultValue: false
      },
      class: {
        control: { type: 'text' },
        description: 'Additional CSS classes'
      }
    }
  };

  // Default story
  const DefaultStory: StoryFn = (args) => {
    return {
      Component: ComponentPreview,
      props: {
        ...args,
        componentDemo() {
          return {
            Component: Button,
            props: { variant: 'primary', children: 'Click me' }
          };
        }
      }
    };
  };

  // Story with different configurations
  const SecondaryButtonStory: StoryFn = (args) => {
    return {
      Component: ComponentPreview,
      props: {
        ...args,
        title: 'Secondary Button',
        description: 'Secondary action button',
        code: '<Button variant="secondary">Secondary Action</Button>',
        componentDemo() {
          return {
            Component: Button,
            props: { variant: 'secondary', children: 'Secondary Action' }
          };
        }
      }
    };
  };
</script>

<!-- Default story -->
<div id="molecules-component-preview">
  <h1>ComponentPreview</h1>
  <p>Component preview with code and demo</p>
  
  <h2>Primary Button</h2>
  <div class="p-4 border rounded-lg max-w-2xl">
    <svelte:component this={DefaultStory} 
      title="Button Component"
      description="Primary action button with variants"
      code={'<Button variant="primary">Click me</Button>'} />
  </div>
  
  <h2>Secondary Button</h2>
  <div class="p-4 border rounded-lg max-w-2xl">
    <svelte:component this={SecondaryButtonStory} />
  </div>
</div>

<!-- Export the meta for Storybook -->
{@html `<script type="application/json" id="svelte-meta">${JSON.stringify(meta)}</script>`}