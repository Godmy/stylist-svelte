<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';

  import ChatInterface from './index.svelte';

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

  const aiProviders = [
    { id: 'gpt-4', name: 'GPT-4', description: 'OpenAI\'s most advanced model' },
    { id: 'claude', name: 'Claude', description: 'Anthropic\'s helpful assistant' },
    { id: 'gemini', name: 'Gemini', description: 'Google\'s conversational AI' }
  ];

  const handleSend = (message: string) => {
    console.log('Sending message:', message);
  };

  type Props = {
    placeholder: string;
    showSettings: boolean;
    showProviderSelector: boolean;
  };

  const controls: ControlConfig[] = [
    { name: 'placeholder', type: 'text', defaultValue: 'Type a message...' },
    { name: 'showSettings', type: 'boolean', defaultValue: true },
    { name: 'showProviderSelector', type: 'boolean', defaultValue: true }
  ];
</script>

<Story
  id="organisms-chat-interface"
  title="Organisms / Interaction / Communication / AI / ChatInterface"
  component={ChatInterface}
  category="Organisms/Interaction/Communication/AI"
  description="Interactive chat interface with AI provider selection and message history."
  controls={controls}
>
  {#snippet children(values: any)}
    <div class="sb-organisms-chat-interface">
      <ChatInterface
        messages={sampleMessages}
        onSend={handleSend}
        aiProviders={aiProviders}
        placeholder={values.placeholder}
        showSettings={values.showSettings}
        showProviderSelector={values.showProviderSelector}
      />
    </div>
  {/snippet}
</Story>


