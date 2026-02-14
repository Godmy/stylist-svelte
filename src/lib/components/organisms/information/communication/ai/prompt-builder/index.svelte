<script lang="ts">
  import { Check, Copy, Edit3, Loader2, Play, Plus, Trash2 } from 'lucide-svelte';
  import { PromptBuilderStyleManager } from '$stylist/design-system/styles/prompt-builder';
  import type { PromptBuilderProps, PromptVariable } from '$stylist/design-system/props/prompt-builder';

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
  }: PromptBuilderProps = $props();

  let prompt = $state(initialPrompt);
  let currentVariables = $state<PromptVariable[]>(variables);
  let selectedTemplate = $state<string | null>(null);
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

  function removeVariable(id: string) {
    currentVariables = currentVariables.filter((v) => v.id !== id);
    prompt = prompt.replace(new RegExp(`{{${id}}}`, 'g'), '');
  }

  function selectTemplate(templateId: string) {
    const template = templates.find((t) => t.id === templateId);
    if (template) {
      prompt = template.content;
      currentVariables = template.variables;
      selectedTemplate = templateId;
    }
  }

  function handleRun() {
    if (!onRun) return;
    running = true;
    const variableValues: Record<string, unknown> = {};
    currentVariables.forEach((v) => {
      variableValues[v.id] = v.defaultValue || '';
    });
    onRun(prompt, variableValues);
    setTimeout(() => {
      running = false;
    }, 1000);
  }

  function handleSave() {
    onSave?.(prompt, currentVariables);
  }

  function insertVariableAtCursor(variableId: string) {
    const textarea = document.querySelector('textarea') as HTMLTextAreaElement;
    if (!textarea) return;
    const startPos = textarea.selectionStart;
    const endPos = textarea.selectionEnd;
    const before = prompt.substring(0, startPos);
    const after = prompt.substring(endPos);
    prompt = before + `{{${variableId}}}` + after;
  }

  function copyToClipboard() {
    navigator.clipboard.writeText(prompt);
    copied = true;
    setTimeout(() => (copied = false), 2000);
  }

  function addTemplate() {
    if (templates.length > 0) selectTemplate(templates[0].id);
  }

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

<div class={`c-prompt-builder ${containerClass}`} {...restProps}>
  <div class={headerClassComputed}>
    <h3 class={titleClass}>Prompt Builder</h3>
    <div class={headerButtonsClass}>
      <button type="button" class={copyButtonClass} onclick={copyToClipboard}>
        {#if copied}
          <Check class="h-4 w-4 mr-1" />Copied
        {:else}
          <Copy class="h-4 w-4 mr-1" />Copy
        {/if}
      </button>
      <button type="button" class={runButtonClass} onclick={handleRun} disabled={running}>
        {#if running}
          <Loader2 class={loadingSpinnerClass} />Running...
        {:else}
          <Play class="h-4 w-4 mr-1" />Run
        {/if}
      </button>
    </div>
  </div>

  <div class={mainLayoutClass}>
    {#if showTemplates && templates.length > 0}
      <div class={templatesSidebarClass}>
        <div class={templatesHeaderClass}>
          <h4 class={templatesTitleClass}>Templates</h4>
          <button type="button" class={addTemplateButtonClass} onclick={addTemplate}>
            <Plus class="h-4 w-4" />
          </button>
        </div>
        <div class={templatesListClass}>
          {#each templates as template}
            <button type="button" class={templateItemClass(selectedTemplate === template.id)} onclick={() => selectTemplate(template.id)}>
              <div class={templateNameClass}>{template.name}</div>
              <div class={templateDescriptionClass}>{template.description}</div>
            </button>
          {/each}
        </div>
      </div>
    {/if}

    <div class={mainContentClass}>
      <div class={promptEditorSectionClass}>
        <label for="prompt-editor" class={promptEditorLabelClass}>Prompt</label>
        <textarea
          id="prompt-editor"
          class={promptEditorClassComputed}
          bind:value={prompt}
          placeholder="Enter your prompt here..."
        ></textarea>
      </div>

      {#if showVariables}
        <div class={variablesSectionClass}>
          <div class={variablesHeaderClass}>
            <h4 class={variablesTitleClass}>Variables</h4>
            <button type="button" class={addVariableButtonClass} onclick={addVariable}>
              <Plus class="h-3 w-3 mr-1" />Add Variable
            </button>
          </div>

          <div class={variablesListClass}>
            {#each currentVariables as variable}
              <div class={variableItemClassComputed}>
                <div class={variableInfoContainerClass}>
                  <div class="flex items-center">
                    <span class={variableNameClass}>{variable.name}</span>
                    <span class={variableTypeBadgeClass}>{variable.type}</span>
                    {#if variable.required}
                      <span class={requiredBadgeClass}>Required</span>
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

  <div class={footerClassComputed}>
    <button type="button" class={cancelButtonClass}>Cancel</button>
    <button type="button" class={saveButtonClass} onclick={handleSave}>Save Prompt</button>
  </div>
</div>

