<script lang="ts">
  import MessageComposer from './index.svelte';
  import Story from '$stylist/design-system/playground/Story.svelte';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';

  // Define controls for the story
  const controls: ControlConfig[] = [
    {
      name: 'placeholder',
      type: 'text',
      defaultValue: 'Type a message...',
      description: 'Placeholder text for the input'
    },
    {
      name: 'disabled',
      type: 'boolean',
      defaultValue: false,
      description: 'Whether the component is disabled'
    },
    {
      name: 'showAttachmentButton',
      type: 'boolean',
      defaultValue: true,
      description: 'Whether to show the attachment button'
    },
    {
      name: 'showVoiceButton',
      type: 'boolean',
      defaultValue: true,
      description: 'Whether to show the voice button'
    }
  ];

  function handleSendMessage(text: string) {
    console.log('Sending message:', text);
  }

  function handleAttachmentClick() {
    console.log('Attachment clicked');
  }

  function handleVoiceClick() {
    console.log('Voice clicked');
  }
</script>

<div class="p-4">
  <h1 class="mb-4 text-lg font-semibold">MessageComposer Component</h1>

  <div class="mb-6 rounded border p-4">
    <h2 class="text-md mb-2 font-semibold">Interactive MessageComposer</h2>
    <Story {controls}>
      {#snippet children(values: any)}
        <MessageComposer
          {...values}
          onSendMessage={handleSendMessage}
          onAttachmentClick={handleAttachmentClick}
          onVoiceClick={handleVoiceClick}
        />
      {/snippet}
    </Story>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
    <div class="p-4 border rounded">
      <h2 class="text-md font-semibold mb-2">With Attachment Button Hidden</h2>
      <MessageComposer
        placeholder="Type a message..."
        showAttachmentButton={false}
        showVoiceButton={true}
        onSendMessage={handleSendMessage}
        onAttachmentClick={handleAttachmentClick}
        onVoiceClick={handleVoiceClick}
      />
    </div>

    <div class="p-4 border rounded">
      <h2 class="text-md font-semibold mb-2">With Voice Button Hidden</h2>
      <MessageComposer
        placeholder="Type a message..."
        showAttachmentButton={true}
        showVoiceButton={false}
        onSendMessage={handleSendMessage}
        onAttachmentClick={handleAttachmentClick}
        onVoiceClick={handleVoiceClick}
      />
    </div>

    <div class="p-4 border rounded">
      <h2 class="text-md font-semibold mb-2">Disabled State</h2>
      <MessageComposer
        placeholder="Type a message..."
        disabled={true}
        onSendMessage={handleSendMessage}
        onAttachmentClick={handleAttachmentClick}
        onVoiceClick={handleVoiceClick}
      />
    </div>

    <div class="p-4 border rounded">
      <h2 class="text-md font-semibold mb-2">Default MessageComposer</h2>
      <MessageComposer
        onSendMessage={handleSendMessage}
        onAttachmentClick={handleAttachmentClick}
        onVoiceClick={handleVoiceClick}
      />
    </div>
  </div>
</div>
