<script lang="ts">
	import { Icon as BaseIcon } from '$stylist/media';
	import type { RecipePromptBuilder as PromptBuilderContract } from '$stylist/science/interface/recipe/prompt-builder';
	import { createPromptBuilderState } from '$stylist/science/function/state/prompt-builder';

	let props: PromptBuilderContract = $props();
	const state = createPromptBuilderState(props);
</script>

<div class={`c-prompt-builder ${state.containerClass}`} {...state.restProps}>
	<div class={state.headerClass}>
		<h3 class={state.titleClass}>Prompt Builder</h3>
		<div class={state.headerButtonsClass}>
			<button type="button" class={state.copyButtonClass} onclick={state.copyToClipboard}>
				{#if state.copied}
					<BaseIcon name="check" class="h-4 w-4 mr-1" />Copied
				{:else}
					<BaseIcon name="copy" class="h-4 w-4 mr-1" />Copy
				{/if}
			</button>
			<button type="button" class={state.runButtonClass} onclick={state.handleRun} disabled={state.running}>
				{#if state.running}
					<BaseIcon name="loader-2" class={state.loadingSpinnerClass} />Running...
				{:else}
					<BaseIcon name="play" class="h-4 w-4 mr-1" />Run
				{/if}
			</button>
		</div>
	</div>

	<div class={state.mainLayoutClass}>
		{#if state.showTemplates && state.templates.length > 0}
			<div class={state.templatesSidebarClass}>
				<div class={state.templatesHeaderClass}>
					<h4 class={state.templatesTitleClass}>Templates</h4>
					<button type="button" class={state.addTemplateButtonClass} onclick={state.addTemplate}>
						<BaseIcon name="plus" class="h-4 w-4" />
					</button>
				</div>
				<div class={state.templatesListClass}>
					{#each state.templates as template}
						<button type="button" class={state.getTemplateItemClass(state.selectedTemplate === template.id)} onclick={() => state.selectTemplate(template.id)}>
							<div class={state.templateNameClass}>{template.name}</div>
							<div class={state.templateDescriptionClass}>{template.description}</div>
						</button>
					{/each}
				</div>
			</div>
		{/if}

		<div class={state.mainContentClass}>
			<div class={state.promptEditorSectionClass}>
				<label for="prompt-editor" class={state.promptEditorLabelClass}>Prompt</label>
				<textarea id="prompt-editor" class={state.promptEditorClass} bind:value={state.prompt} placeholder="Enter your prompt here..."></textarea>
			</div>

			{#if state.showVariables}
				<div class={state.variablesSectionClass}>
					<div class={state.variablesHeaderClass}>
						<h4 class={state.variablesTitleClass}>Variables</h4>
						<button type="button" class={state.addVariableButtonClass} onclick={state.addVariable}>
							<BaseIcon name="plus" class="h-3 w-3 mr-1" />Add Variable
						</button>
					</div>

					<div class={state.variablesListClass}>
						{#each state.currentVariables as variable}
							<div class={state.variableItemClass}>
								<div class={state.variableInfoContainerClass}>
									<div class="flex items-center">
										<span class={state.variableNameClass}>{variable.name}</span>
										<span class={state.variableTypeBadgeClass}>{variable.type}</span>
										{#if variable.required}
											<span class={state.requiredBadgeClass}>Required</span>
										{/if}
									</div>
									<div class={state.variableActionsClass}>
										<button type="button" class={state.variableActionButtonClass} onclick={() => state.insertVariableAtCursor(variable.id)} title="Insert variable">
											<BaseIcon name="edit-3" class="h-4 w-4" />
										</button>
										<button type="button" class={state.variableActionButtonClass} onclick={() => state.removeVariable(variable.id)} title="Remove variable">
											<BaseIcon name="trash-2" class="h-4 w-4" />
										</button>
									</div>
								</div>
								<p class={state.variableDescriptionClass}>{variable.description}</p>
							</div>
						{/each}
					</div>
				</div>
			{/if}
		</div>
	</div>

	<div class={state.footerClass}>
		<button type="button" class={state.cancelButtonClass}>Cancel</button>
		<button type="button" class={state.saveButtonClass} onclick={state.handleSave}>Save Prompt</button>
	</div>
</div>
