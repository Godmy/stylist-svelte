<script lang="ts">
  import NPMBadge from './NPMBadge.svelte';
  import type { Meta, StoryFn } from '$lib/playground/interfaces';

  // Define the meta information for the story
  const meta: Meta = {
    title: 'Atoms/Data Display/NPMBadge',
    component: NPMBadge,
    tags: ['autodocs'],
    parameters: {
      layout: 'centered'
    },
    argTypes: {
      type: {
        control: { type: 'select', options: ['version', 'downloads', 'license', 'size', 'custom'] },
        description: 'Type of the NPM badge',
        defaultValue: 'version'
      },
      value: {
        control: { type: 'text' },
        description: 'Value to display in the badge',
        defaultValue: '1.0.0'
      },
      label: {
        control: { type: 'text' },
        description: 'Label for custom badge type',
        defaultValue: ''
      },
      color: {
        control: { type: 'color' },
        description: 'Hex color for custom badge',
        defaultValue: ''
      },
      link: {
        control: { type: 'text' },
        description: 'URL to link to when clicked',
        defaultValue: ''
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
      Component: NPMBadge,
      props: args || {}
    };
  };

  // Story with different configurations
  const VersionStory: StoryFn = (args?: Record<string, any>) => {
    return {
      Component: NPMBadge,
      props: { ...args, type: 'version', value: '0.8.0' }
    };
  };

  const DownloadsStory: StoryFn = (args?: Record<string, any>) => {
    return {
      Component: NPMBadge,
      props: { ...args, type: 'downloads', value: '1.2K/week' }
    };
  };

  const LicenseStory: StoryFn = (args?: Record<string, any>) => {
    return {
      Component: NPMBadge,
      props: { ...args, type: 'license', value: 'MIT' }
    };
  };

  const SizeStory: StoryFn = (args?: Record<string, any>) => {
    return {
      Component: NPMBadge,
      props: { ...args, type: 'size', value: '142KB' }
    };
  };

  const CustomStory: StoryFn = (args?: Record<string, any>) => {
    return {
      Component: NPMBadge,
      props: { ...args, type: 'custom', value: 'Beta', label: 'Status' }
    };
  };
</script>

<!-- Default story -->
<div id="atoms-npm-badge">
  <h1>NPMBadge</h1>
  <p>NPM statistics badge component (version, downloads, license, size)</p>
  
  <h2>Version Badge</h2>
  <div class="p-4 border rounded-lg">
    <svelte:component this={VersionStory} />
  </div>
  
  <h2>Downloads Badge</h2>
  <div class="p-4 border rounded-lg">
    <svelte:component this={DownloadsStory} />
  </div>
  
  <h2>License Badge</h2>
  <div class="p-4 border rounded-lg">
    <svelte:component this={LicenseStory} />
  </div>
  
  <h2>Size Badge</h2>
  <div class="p-4 border rounded-lg">
    <svelte:component this={SizeStory} />
  </div>
  
  <h2>Custom Badge</h2>
  <div class="p-4 border rounded-lg">
    <svelte:component this={CustomStory} />
  </div>
</div>

<!-- Export the meta for Storybook -->
{@html `<script type="application/json" id="svelte-meta">${JSON.stringify(meta)}</script>`}