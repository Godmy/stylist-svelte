<script lang="ts">
  import Story from '$stylist/playground/component/molecule/story/index.svelte';
  import ChatMessage from './index.svelte';
  import type { TokenControllerType } from '$stylist/interaction/type/record/controller-type';

  const controls = [
    {
      name: 'isOwn',
      type: 'boolean' as TokenControllerType,
      defaultValue: false,
      description: 'Whether the message is sent by the current user'
    },
    {
      name: 'status',
      type: 'select' as TokenControllerType,
      defaultValue: 'sent',
      options: ['sent', 'delivered', 'read'],
      description: 'Status of the message'
    },
    {
      name: 'variant',
      type: 'select' as TokenControllerType,
      defaultValue: 'default',
      options: ['default', 'primary', 'secondary'],
      description: 'Visual variant of the message'
    }
  ];
</script>

<Story
  {controls}
  title="ChatMessage Component"
  description="A component to display a single chat message"
 
>
  {#snippet children(controlValues: any)}
  <ChatMessage
    text="Hello! This is a sample message with the current props."
    sender="Sample User"
    timestamp="Just now"
    isOwn={controlValues.isOwn}
    status={controlValues.status}
    variant={controlValues.variant}
  />

  {/snippet}
</Story>




