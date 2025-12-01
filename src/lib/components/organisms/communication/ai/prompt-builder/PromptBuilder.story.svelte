<script lang="ts">
  import PromptBuilder from './PromptBuilder.svelte';

  type PromptVariable = {
    id: string;
    name: string;
    description: string;
    type: 'text' | 'number' | 'boolean' | 'select';
    required?: boolean;
    defaultValue?: string | number | boolean;
    options?: { value: string; label: string }[]; // For select type
  };

  type PromptTemplate = {
    id: string;
    name: string;
    description: string;
    content: string;
    variables: PromptVariable[];
    tags?: string[];
  };

  // Sample initial prompt for the PromptBuilder component
  const initialPrompt = 'You are a helpful assistant that explains concepts clearly.';

  // Sample templates for the PromptBuilder component
  const sampleTemplates: PromptTemplate[] = [
    {
      id: 'assistant',
      name: 'General Assistant',
      description: 'A helpful assistant that explains concepts clearly',
      content: 'You are a helpful assistant that explains concepts clearly. {{user_query}}',
      variables: [
        {
          id: 'user_query',
          name: 'User Query',
          description: 'The user\'s question or request',
          type: 'text',
          required: true
        }
      ]
    },
    {
      id: 'summarizer',
      name: 'Text Summarizer',
      description: 'Summarizes text in a concise manner',
      content: 'Please summarize the following text: {{input_text}}',
      variables: [
        {
          id: 'input_text',
          name: 'Input Text',
          description: 'The text to be summarized',
          type: 'text',
          required: true
        }
      ]
    }
  ];
</script>

<svelte:head>
  <title>PromptBuilder Story</title>
</svelte:head>

<PromptBuilder
  initialPrompt={initialPrompt}
  templates={sampleTemplates}
/>