<script lang="ts">
  import MessageBubble from './index.svelte';

  // Define StoryFn type if not available
  type StoryFn<T = any> = (args?: Record<string, any>) => { Component: typeof MessageBubble; props: T };

  // Define the meta information for the story
  const meta = {
    title: 'Atoms/Chat/MessageBubble',
    component: MessageBubble,
    tags: ['autodocs'],
    parameters: {
      layout: 'centered'
    },
    argTypes: {
      author: {
        control: { type: 'text' },
        description: 'Author of the message',
        defaultValue: 'John Doe'
      },
      message: {
        control: { type: 'text' },
        description: 'Content of the message',
        defaultValue: 'Hello, how are you?'
      },
      timestamp: {
        control: { type: 'text' },
        description: 'Timestamp of the message',
        defaultValue: '2 min ago'
      },
      align: {
        control: { type: 'select', options: ['left', 'right'] },
        description: 'Alignment of the message bubble',
        defaultValue: 'left'
      },
      avatar: {
        control: { type: 'text' },
        description: 'URL of the avatar image',
        defaultValue: ''
      },
      variant: {
        control: { type: 'select', options: ['default', 'system'] },
        description: 'Visual variant of the message bubble',
        defaultValue: 'default'
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
      Component: MessageBubble,
      props: args || {}
    };
  };

  // Story with different configurations
  const RightAlignedStory: StoryFn = (args?: Record<string, any>) => {
    return {
      Component: MessageBubble,
      props: { ...args, align: 'right' }
    };
  };

  const SystemMessageStory: StoryFn = (args?: Record<string, any>) => {
    return {
      Component: MessageBubble,
      props: { ...args, variant: 'system', author: 'System', message: 'Welcome to the chat!' }
    };
  };
</script>

<!-- Default story -->
<div id="atoms-message-bubble">
  <h1>MessageBubble</h1>
  <p>Chat message bubble component for displaying messages in a conversation</p>
  
  <h2>Basic Usage</h2>
  <div class="p-4 border rounded-lg bg-gray-50 min-h-32">
    <svelte:component this={DefaultStory} 
      author="Claude" 
      message="I've completed the SAMO analysis and found several interesting patterns." 
      timestamp="2 min ago" />
  </div>
  
  <h2>Right Aligned</h2>
  <div class="p-4 border rounded-lg bg-gray-50 min-h-32">
    <svelte:component this={RightAlignedStory} 
      author="You" 
      message="That's great! Can you share the key findings?" 
      timestamp="1 min ago" 
      align="right" />
  </div>
  
  <h2>System Message</h2>
  <div class="p-4 border rounded-lg bg-gray-50 min-h-32">
    <svelte:component this={SystemMessageStory} />
  </div>
</div>

<!-- Export the meta for Storybook -->
{@html `<script type="application/json" id="svelte-meta">${JSON.stringify(meta)}</script>`}
