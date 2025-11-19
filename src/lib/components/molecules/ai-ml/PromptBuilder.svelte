<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { Plus, Trash2, Edit3, Play, Copy, Check, Loader2 } from 'lucide-svelte';
  import { PromptBuilderStyleManager } from './PromptBuilder.styles';

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

  function addTemplate() {
    // This function doesn't make sense in the current implementation since
    // templates are passed as props, so we'll just add a template to the local variable
    // For the UI, we'll just select the first template for now
    if (templates.length > 0) {
      selectTemplate(templates[0].id);
    }
  }

  // Generate CSS classes using the style manager
  const containerClass = $derived(PromptBuilderStyleManager.getContainerClass(className));
  const headerClassComputed = $derived(PromptBuilderStyleManager.getHeaderClass(headerClass));
  const titleClass = $derived(PromptBuilderStyleManager.getTitleClass());
  const headerButtonsClass = $derived(PromptBuilderStyleManager.getHeaderButtonsClass());
  const copyButtonClass = $derived(PromptBuilderStyleManager.getCopyButtonClass(copied));
  const runButtonClass = $derived(PromptBuilderStyleManager.getRunButtonClass(running));
  const loadingSpinnerClass = $derived(PromptBuilderStyleManager.getLoadingSpinnerClass());
  const mainLayoutClass = $derived(PromptBuilderStyleManager.getMainLayoutClass());
  const templatesSidebarClass = $derived(PromptBuilderStyleManager.getTemplatesSidebarClass());
  const templatesHeaderClass = $derived(PromptBuilderStyleManager.getTemplatesHeaderClass());
  const templatesTitleClass = $derived(PromptBuilderStyleManager.getTemplatesTitleClass());
  const addTemplateButtonClass = $derived(PromptBuilderStyleManager.getAddTemplateButtonClass());
  const templatesListClass = $derived(PromptBuilderStyleManager.getTemplatesListClass());
  const templateItemClass = (isSelected: boolean) => PromptBuilderStyleManager.getTemplateItemClass(isSelected);
  const templateNameClass = $derived(PromptBuilderStyleManager.getTemplateNameClass());
  const templateDescriptionClass = $derived(PromptBuilderStyleManager.getTemplateDescriptionClass());
  const mainContentClass = $derived(PromptBuilderStyleManager.getMainContentClass());
  const promptEditorSectionClass = $derived(PromptBuilderStyleManager.getPromptEditorSectionClass());
  const promptEditorLabelClass = $derived(PromptBuilderStyleManager.getPromptEditorLabelClass());
  const promptEditorClassComputed = $derived(PromptBuilderStyleManager.getPromptEditorClass(editorClass));
  const variablesSectionClass = $derived(PromptBuilderStyleManager.getVariablesSectionClass());
  const variablesHeaderClass = $derived(PromptBuilderStyleManager.getVariablesHeaderClass());
  const variablesTitleClass = $derived(PromptBuilderStyleManager.getVariablesTitleClass());
  const addVariableButtonClass = $derived(PromptBuilderStyleManager.getAddVariableButtonClass());
  const variablesListClass = $derived(PromptBuilderStyleManager.getVariablesListClass());
  const variableItemClassComputed = $derived(PromptBuilderStyleManager.getVariableItemClass(variablesClass));
  const variableInfoContainerClass = $derived(PromptBuilderStyleManager.getVariableInfoContainerClass());
  const variableNameClass = $derived(PromptBuilderStyleManager.getVariableNameClass());
  const variableTypeBadgeClass = $derived(PromptBuilderStyleManager.getVariableTypeBadgeClass());
  const requiredBadgeClass = $derived(PromptBuilderStyleManager.getRequiredBadgeClass());
  const variableActionsClass = $derived(PromptBuilderStyleManager.getVariableActionsClass());
  const variableActionButtonClass = $derived(PromptBuilderStyleManager.getVariableActionButtonClass());
  const variableDescriptionClass = $derived(PromptBuilderStyleManager.getVariableDescriptionClass());
  const footerClassComputed = $derived(PromptBuilderStyleManager.getFooterClass(footerClass));
  const cancelButtonClass = $derived(PromptBuilderStyleManager.getCancelButtonClass());
  const saveButtonClass = $derived(PromptBuilderStyleManager.getSaveButtonClass());
</script>

<div class={containerClass} {...restProps}>
  <!-- Header -->
  <div class={headerClassComputed}>
    <h3 class={titleClass}>Prompt Builder</h3>
    <div class={headerButtonsClass}>
      <button
        type="button"
        class={copyButtonClass}
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
        class={runButtonClass}
        onclick={handleRun}
        disabled={running}
      >
        {#if running}
          <Loader2 class={loadingSpinnerClass} />
          Running...
        {:else}
          <Play class="h-4 w-4 mr-1" />
          Run
        {/if}
      </button>
    </div>
  </div>

  <div class={mainLayoutClass}>
    <!-- Templates sidebar -->
    {#if showTemplates && templates.length > 0}
      <div class={templatesSidebarClass}>
        <div class={templatesHeaderClass}>
          <h4 class={templatesTitleClass}>Templates</h4>
          <button
            type="button"
            class={addTemplateButtonClass}
            onclick={addTemplate}
          >
            <Plus class="h-4 w-4" />
          </button>
        </div>
        <div class={templatesListClass}>
          {#each templates as template}
            <button
              type="button"
              class={templateItemClass(selectedTemplate === template.id)}
              onclick={() => selectTemplate(template.id)}
            >
              <div class={templateNameClass}>{template.name}</div>
              <div class={templateDescriptionClass}>{template.description}</div>
            </button>
          {/each}
        </div>
      </div>
    {/if}

    <!-- Main content -->
    <div class={mainContentClass}>
      <!-- Prompt editor -->
      <div class={promptEditorSectionClass}>
        <label for="prompt-editor" class={promptEditorLabelClass}>
          Prompt
        </label>
        <textarea
          id="prompt-editor"
          class={promptEditorClassComputed}
          bind:value={prompt}
          placeholder="Enter your prompt here..."
        ></textarea>
      </div>

      <!-- Variables section -->
      {#if showVariables}
        <div class={variablesSectionClass}>
          <div class={variablesHeaderClass}>
            <h4 class={variablesTitleClass}>Variables</h4>
            <button
              type="button"
              class={addVariableButtonClass}
              onclick={addVariable}
            >
              <Plus class="h-3 w-3 mr-1" />
              Add Variable
            </button>
          </div>

          <div class={variablesListClass}>
            {#each currentVariables as variable}
              <div class={variableItemClassComputed}>
                <div class={variableInfoContainerClass}>
                  <div class="flex items-center">
                    <span class={variableNameClass}>{variable.name}</span>
                    <span class={variableTypeBadgeClass}>
                      {variable.type}
                    </span>
                    {#if variable.required}
                      <span class={requiredBadgeClass}>
                        Required
                      </span>
                    {/if}
                  </div>
                  <div class={variableActionsClass}>
                    <button
                      type="button"
                      class={variableActionButtonClass}
                      onclick={() => insertVariableAtCursor(variable.id)}
                      title="Insert variable"
                    >
                      <Edit3 class="h-4 w-4" />
                    </button>
                    <button
                      type="button"
                      class={variableActionButtonClass}
                      onclick={() => removeVariable(variable.id)}
                      title="Remove variable"
                    >
                      <Trash2 class="h-4 w-4" />
                    </button>
                  </div>
                </div>
                <p class={variableDescriptionClass}>{variable.description}</p>
              </div>
            {/each}
          </div>
        </div>
      {/if}
    </div>
  </div>

  <!-- Footer -->
  <div class={footerClassComputed}>
    <button
      type="button"
      class={cancelButtonClass}
    >
      Cancel
    </button>
    <button
      type="button"
      class={saveButtonClass}
      onclick={handleSave}
    >
      Save Prompt
    </button>
  </div>
</div>