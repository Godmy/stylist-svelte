<script lang="ts">
  import MessageBubble from './index.svelte';
  import Story from '$stylist/design-system/playground/Story.svelte';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';

  // Define controls for the story
  const controls: ControlConfig[] = [
    {
      name: 'author',
      type: 'text',
      defaultValue: 'John Doe',
      description: 'Author of the message'
    },
    {
      name: 'message',
      type: 'text',
      defaultValue: 'Hello, how are you?',
      description: 'Content of the message'
    },
    {
      name: 'timestamp',
      type: 'text',
      defaultValue: '2 min ago',
      description: 'Timestamp of the message'
    },
    {
      name: 'align',
      type: 'select',
      defaultValue: 'left',
      options: ['left', 'right'],
      description: 'Alignment of the message bubble'
    },
    {
      name: 'avatar',
      type: 'text',
      defaultValue: '',
      description: 'URL of the avatar image'
    },
    {
      name: 'variant',
      type: 'select',
      defaultValue: 'default',
      options: ['default', 'system'],
      description: 'Visual variant of the message bubble'
    },
    {
      name: 'class',
      type: 'text',
      defaultValue: '',
      description: 'Additional CSS classes'
    }
  ];
</script>

<div class="p-4">
  <h1 class="mb-4 text-lg font-semibold">MessageBubble Component</h1>

  <div class="mb-6 rounded border p-4">
    <h2 class="text-md mb-2 font-semibold">Interactive MessageBubble</h2>
    <Story {controls} component={MessageBubble} />
  </div>

  <div class="space-y-4">
    <div class="rounded border p-4">
      <h3 class="mb-2 font-medium">Left Aligned (Default)</h3>
      <MessageBubble 
        author="Claude"
        message="I've completed the SAMO analysis and found several interesting patterns."
        timestamp="2 min ago"
        align="left"
      />
    </div>
    
    <div class="rounded border p-4">
      <h3 class="mb-2 font-medium">Right Aligned</h3>
      <div class="flex justify-end">
        <MessageBubble 
          author="You"
          message="That's great! Can you share the key findings?"
          timestamp="1 min ago"
          align="right"
        />
      </div>
    </div>
    
    <div class="rounded border p-4">
      <h3 class="mb-2 font-medium">System Message</h3>
      <MessageBubble 
        author="System"
        message="Welcome to the chat!"
        variant="system"
      />
    </div>
  </div>
</div>