<script lang="ts">
	import type { SlotModelOption } from '$stylist/science/interface/slot/model-option';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import Story from '$stylist/playground/component/molecule/story/index.svelte';

	import ModelSelector from './index.svelte';

	const sampleModels: SlotModelOption[] = [
		{ id: 'gpt-4', name: 'GPT-4', description: 'Most capable model', capabilities: ['text', 'code'], provider: 'OpenAI', version: '4.0', tags: ['flagship'] },
		{ id: 'gpt-3.5', name: 'GPT-3.5', description: 'Fast and capable', capabilities: ['text', 'code'], provider: 'OpenAI', version: '3.5', tags: ['fast'] },
		{ id: 'claude', name: 'Claude', description: 'Balanced model', capabilities: ['text'], provider: 'Anthropic', version: '2.0', tags: ['reasoning'] }
	];

	const controls: InterfaceControllerSettings[] = [
		{ name: 'selectedModel', type: 'text', defaultValue: '' },
		{ name: 'placeholder', type: 'text', defaultValue: 'AI Model Selector' },
		{ name: 'showTags', type: 'boolean', defaultValue: true },
		{ name: 'showCapabilities', type: 'boolean', defaultValue: true }
	];
</script>

<Story
  {controls}
  component={ModelSelector}
  title="ModelSelector Component"
  description="A component for selecting AI models from a list"
>
  {#snippet children(controlValues: any)}
	<ModelSelector
		models={sampleModels}
		selectedModel={controlValues.selectedModel as string}
		placeholder={controlValues.placeholder as string}
		showTags={controlValues.showTags as boolean}
		showCapabilities={controlValues.showCapabilities as boolean}
		onModelSelect={(modelId: string) => {
			console.log('Selected model:', modelId);
		}}
	/>
  {/snippet}
</Story>


