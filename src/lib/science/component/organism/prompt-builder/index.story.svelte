<script lang="ts">
	// @ts-nocheck
  import { Story } from '$stylist/playground/component';
  import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
  import PromptBuilder from './index.svelte';
  import type { SlotPromptTemplate as PromptTemplate } from '$stylist/science/interface/slot/prompt-template';

  const controls: InterfaceControllerSettings[] = [
    { name: 'showTemplates', type: 'boolean', defaultValue: true },
    { name: 'showVariables', type: 'boolean', defaultValue: true },
    { name: 'initialPrompt', type: 'text', defaultValue: 'You are a helpful assistant.' }
  ];

  const sampleTemplates: PromptTemplate[] = [
    {
      id: 'assistant',
      name: 'General Assistant',
      description: 'Helpful assistant for broad tasks',
      content: 'You are a helpful assistant. {{user_query}}',
      variables: [
        { id: 'user_query', name: 'User Query', description: 'Primary user request', type: 'text', required: true }
      ]
    },
    {
      id: 'summarizer',
      name: 'Summarizer',
      description: 'Summarize long text',
      content: 'Summarize this text in 5 bullet points: {{input_text}}',
      variables: [
        { id: 'input_text', name: 'Input Text', description: 'Text to summarize', type: 'text', required: true }
      ]
    }
  ];
</script>

<Story
  id="organisms-prompt-builder"
  title="Prompt Builder"
  component={PromptBuilder}
  category="Organisms"
  description="Build and run prompt templates with editable variables."
  controls={controls}
>
  {#snippet children(values: any)}
    <section class="sb-organisms-prompt-builder grid gap-6 rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-secondary] p-6">
      <PromptBuilder
        templates={sampleTemplates}
        initialPrompt={values.initialPrompt}
        showTemplates={values.showTemplates}
        showVariables={values.showVariables}
      />
    </section>
  {/snippet}
</Story>





