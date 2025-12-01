<script lang="ts">
  import ChatInterface from './ChatInterface.svelte';

  // Define the Message type to match the component's internal type
  type Message = {
    id: string;
    content: string;
    sender: 'user' | 'ai';
    timestamp: Date;
    status?: 'sending' | 'delivered' | 'read' | 'error';
  };

  // Sample data for the ChatInterface component
  const sampleMessages: Message[] = [
    { id: '1', content: 'Hello there!', sender: 'user', timestamp: new Date() },
    { id: '2', content: 'Hi, how can I help you?', sender: 'ai', timestamp: new Date() }
  ];

  const handleSend = (message: string) => {
    console.log('Sending message:', message);
  };
</script>

<svelte:head>
  <title>ChatInterface Story</title>
</svelte:head>

<ChatInterface
  messages={sampleMessages}
  onSend={handleSend}
  placeholder="Type a message..."
/>