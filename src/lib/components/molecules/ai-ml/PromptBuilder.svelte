<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { Plus, Trash2, Edit3, Play, Copy, Check, Loader } from 'lucide-svelte';

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

  type Props = {
    templates?: PromptTemplate[];
    initialPrompt?: string;
    variables?: PromptVariable[];
    onSave?: (prompt: string, variables: PromptVariable[]) => void;
    onRun?: (prompt: string, variables: Record<string, any>) => void;
    showTemplates?: boolean;
    showVariables?: boolean;
    class?: string;
    headerClass?: string;
    editorClass?: string;
    variablesClass?: string;
    footerClass?: string;
  } & HTMLAttributes<HTMLDivElement>;

  let {
    templates = [],
    initialPrompt = '',
    variables = [],
    onSave,
    onRun,
    showTemplates = true,
    showVariables = true,
    class: className = '',
    headerClass = '',
    editorClass = '',
    variablesClass = '',
    footerClass = '',
    ...restProps
  }: Props = $props();

  let prompt = $state(initialPrompt);
  let currentVariables = $state<PromptVariable[]>(variables);
  let selectedTemplate = $state<string | null>(null);
  let editingVariable: PromptVariable | null = $state(null);
  let copied = $state(false);
  let running = $state(false);

  function addTemplate() {
    // Заглушка для добавления шаблона
  }

  function addVariable() {
    const newVar: PromptVariable = {
      id: `var_${Date.now()}`,
      name: 'new_variable',
      description: 'Description of the variable',
      type: 'text',
      required: false
    };
    currentVariables = [...currentVariables, newVar];
  }

  function updateVariable(updatedVar: PromptVariable) {
    currentVariables = currentVariables.map(v => 
      v.id === updatedVar.id ? updatedVar : v
    );
  }

  function removeVariable(id: string) {
    currentVariables = currentVariables.filter(v => v.id !== id);
    // Also remove references from the prompt
    prompt = prompt.replace(new RegExp(`{{${id}}}`, 'g'), '');
  }

  function selectTemplate(templateId: string) {
    const template = templates.find(t => t.id === templateId);
    if (template) {
      prompt = template.content;
      currentVariables = template.variables;
      selectedTemplate = templateId;
    }
  }

  function handleRun() {
    if (!onRun) return;
    
    running = true;
    
    // Create a mapping of variable values
    const variableValues: Record<string, any> = {};
    currentVariables.forEach(v => {
      // In a real implementation, we would get actual values from input fields
      variableValues[v.id] = v.defaultValue || '';
    });
    
    // Trigger the onRun callback with the prompt and variables
    onRun(prompt, variableValues);
    
    setTimeout(() => {
      running = false;
    }, 1000); // Simulate processing time
  }

  function handleSave() {
    if (onSave) {
      onSave(prompt, currentVariables);
    }
  }

  function insertVariableAtCursor(variableId: string) {
    const textarea = document.querySelector('textarea') as HTMLTextAreaElement;
    if (textarea) {
      const startPos = textarea.selectionStart;
      const endPos = textarea.selectionEnd;
      const before = prompt.substring(0, startPos);
      const after = prompt.substring(endPos, prompt.length);
      
      prompt = before + `{{${variableId}}}` + after;
    }
  }

  function copyToClipboard() {
    navigator.clipboard.writeText(prompt);
    copied = true;
    setTimeout(() => copied = false, 2000);
  }
</script>

<div class={`bg-white rounded-lg shadow border border-gray-200 overflow-hidden ${className}`} {...restProps}>
  <!-- Header -->
  <div class={`border-b px-4 py-3 flex items-center justify-between ${headerClass}`}>
    <h3 class="text-lg font-medium text-gray-900">Prompt Builder</h3>
    <div class="flex space-x-2">
      <button
        type="button"
        class="inline-flex items-center px-3 py-1 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"
        onclick={copyToClipboard}
      >
        {#if copied}
          <Check class="h-4 w-4 mr-1" />
          Copied
        {:else}
          <Copy class="h-4 w-4 mr-1" />
          Copy
        {/if}
      </button>
      <button
        type="button"
        class="inline-flex items-center px-3 py-1 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
        onclick={handleRun}
        disabled={running}
      >
        {#if running}
          <Loader class="h-4 w-4 mr-1 animate-spin" />
          Running...
        {:else}
          <Play class="h-4 w-4 mr-1" />
          Run
        {/if}
      </button>
    </div>
  </div>

  <div class="flex">
    <!-- Templates sidebar -->
    {#if showTemplates && templates.length > 0}
      <div class="w-64 border-r p-4">
        <div class="flex items-center justify-between mb-4">
          <h4 class="text-sm font-medium text-gray-900">Templates</h4>
          <button
            type="button"
            class="text-gray-400 hover:text-gray-500"
            onclick={addTemplate}
          >
            <Plus class="h-4 w-4" />
          </button>
        </div>
        <div class="space-y-2">
          {#each templates as template}
            <button
              type="button"
              class={`w-full text-left p-2 rounded-md text-sm ${
                selectedTemplate === template.id 
                  ? 'bg-blue-100 text-blue-800' 
                  : 'hover:bg-gray-100'
              }`}
              onclick={() => selectTemplate(template.id)}
            >
              <div class="font-medium">{template.name}</div>
              <div class="text-xs text-gray-500 truncate">{template.description}</div>
            </button>
          {/each}
        </div>
      </div>
    {/if}

    <!-- Main content -->
    <div class="flex-1 flex flex-col">
      <!-- Prompt editor -->
      <div class="flex-1 p-4">
        <label for="prompt-editor" class="block text-sm font-medium text-gray-700 mb-1">
          Prompt
        </label>
        <textarea
          id="prompt-editor"
          class={`w-full h-48 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 font-mono text-sm ${
            editorClass
          }`}
          bind:value={prompt}
          placeholder="Enter your prompt here..."
        ></textarea>
      </div>

      <!-- Variables section -->
      {#if showVariables}
        <div class="border-t p-4">
          <div class="flex items-center justify-between mb-3">
            <h4 class="text-sm font-medium text-gray-900">Variables</h4>
            <button
              type="button"
              class="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
              onclick={addVariable}
            >
              <Plus class="h-3 w-3 mr-1" />
              Add Variable
            </button>
          </div>

          <div class="space-y-3">
            {#each currentVariables as variable}
              <div class={`border rounded-md p-3 ${variablesClass}`}>
                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <span class="text-sm font-medium text-gray-900">{variable.name}</span>
                    <span class="ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                      {variable.type}
                    </span>
                    {#if variable.required}
                      <span class="ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                        Required
                      </span>
                    {/if}
                  </div>
                  <div class="flex space-x-2">
                    <button
                      type="button"
                      class="text-gray-400 hover:text-gray-600"
                      onclick={() => insertVariableAtCursor(variable.id)}
                      title="Insert variable"
                    >
                      <Edit3 class="h-4 w-4" />
                    </button>
                    <button
                      type="button"
                      class="text-gray-400 hover:text-gray-600"
                      onclick={() => removeVariable(variable.id)}
                      title="Remove variable"
                    >
                      <Trash2 class="h-4 w-4" />
                    </button>
                  </div>
                </div>
                <p class="mt-1 text-xs text-gray-500">{variable.description}</p>
              </div>
            {/each}
          </div>
        </div>
      {/if}
    </div>
  </div>

  <!-- Footer -->
  <div class={`border-t px-4 py-3 flex justify-end space-x-3 ${footerClass}`}>
    <button
      type="button"
      class="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"
    >
      Cancel
    </button>
    <button
      type="button"
      class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
      onclick={handleSave}
    >
      Save Prompt
    </button>
  </div>
</div>