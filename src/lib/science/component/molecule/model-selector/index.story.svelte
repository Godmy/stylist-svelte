<script lang="ts">
	// @ts-nocheck
  import Story from '$stylist/playground/component/molecule/story/index.svelte';
  import ModelSelector from './index.svelte';
  import type { TokenControllerType } from '$stylist/interaction/type/record/controller-type';

  type Model = {
    id: string;
    name: string;
    description: string;
    provider: string;
    version: string;
    capabilities: string[];
  };

  const sampleModels: Model[] = [
    { id: 'gpt-4', name: 'GPT-4', description: 'Most capable model', capabilities: ['text', 'code'], provider: 'OpenAI', version: '4.0' },
    { id: 'gpt-3.5', name: 'GPT-3.5', description: 'Fast and capable', capabilities: ['text', 'code'], provider: 'OpenAI', version: '3.5' },
    { id: 'claude', name: 'Claude', description: 'Balanced model', capabilities: ['text'], provider: 'Anthropic', version: '2.0' }
  ];

  const controls = [
    {
      name: 'title',
      type: 'text' as TokenControllerType,
      defaultValue: 'AI Model Selector',
      description: 'Title for the model selector'
    },
    {
      name: 'selectedModelId',
      type: 'text' as TokenControllerType,
      defaultValue: '',
      description: 'ID of the selected model'
    }
  ];

  const handleModelSelect = (modelId: string) => {
    console.log('Selected model:', modelId);
  };
</script>

<Story
  {controls}
  title="ModelSelector Component"
  description="A component for selecting AI models from a list"
 
>
  {#snippet children(controlValues: any)}
  <ModelSelector
    models={sampleModels}
    onModelSelect={handleModelSelect}
    title={controlValues.title}
  />

  {/snippet}
</Story>


