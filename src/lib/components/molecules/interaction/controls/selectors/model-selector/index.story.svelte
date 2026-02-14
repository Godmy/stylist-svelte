<script lang="ts">
  import ModelSelector from './index.svelte';

  type Model = {
    id: string;
    name: string;
    description: string;
    provider: string;
    version: string;
    capabilities: string[];
  };

  // Sample data for the ModelSelector component
  const sampleModels: Model[] = [
    { id: 'gpt-4', name: 'GPT-4', description: 'Most capable model', capabilities: ['text', 'code'], provider: 'OpenAI', version: '4.0' },
    { id: 'gpt-3.5', name: 'GPT-3.5', description: 'Fast and capable', capabilities: ['text', 'code'], provider: 'OpenAI', version: '3.5' },
    { id: 'claude', name: 'Claude', description: 'Balanced model', capabilities: ['text'], provider: 'Anthropic', version: '2.0' }
  ];

  const handleModelSelect = (modelId: string) => {
    console.log('Selected model:', modelId);
  };
</script>

<svelte:head>
  <title>ModelSelector Story</title>
</svelte:head>

<ModelSelector
  models={sampleModels}
  onModelSelect={handleModelSelect}
  title="AI Model Selector"
/>