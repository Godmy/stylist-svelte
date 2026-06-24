<script lang="ts">
	import BaseIcon from '$stylist/svg/component/atom/icon/index.svelte';
	import type { RecipePromptBuilder as PromptBuilderContract } from '$stylist/science/interface/recipe/prompt-builder';
	import createPromptBuilderState from '$stylist/science/function/state/prompt-builder/index.svelte';

	let props: PromptBuilderContract = $props();
	const state = createPromptBuilderState(props);
</script>

<div class={state.containerClass} {...state.restProps}>
	<div class={state.headerClass}>
		<h3 class={state.titleClass}>Prompt Builder</h3>
		<div class={state.headerButtonsClass}>
			<button type="button" class={state.copyButtonClass} onclick={state.copyToClipboard}>
				{#if state.copied}
					<BaseIcon name="check" style="width: 1rem; height: 1rem; margin-right: 0.25rem;" />Copied
				{:else}
					<BaseIcon name="copy" style="width: 1rem; height: 1rem; margin-right: 0.25rem;" />Copy
				{/if}
			</button>
			<button
				type="button"
				class={state.runButtonClass}
				onclick={state.handleRun}
				disabled={state.running}
			>
				{#if state.running}
					<BaseIcon
						name="loader-2"
						style="width: 1rem; height: 1rem; margin-right: var(--spacing-xs); animation: spin 1s linear infinite;"
					/>Running...
				{:else}
					<BaseIcon name="play" style="width: 1rem; height: 1rem; margin-right: 0.25rem;" />Run
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
						<BaseIcon name="plus" style="width: 1rem; height: 1rem;" />
					</button>
				</div>
				<div class={state.templatesListClass}>
					{#each state.templates as template}
						<button
							type="button"
							class={state.getTemplateItemClass(state.selectedTemplate === template.id)}
							onclick={() => state.selectTemplate(template.id)}
						>
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
				<textarea
					id="prompt-editor"
					class={state.promptEditorClass}
					bind:value={state.prompt}
					placeholder="Enter your prompt here..."
				></textarea>
			</div>

			{#if state.showVariables}
				<div class={state.variablesSectionClass}>
					<div class={state.variablesHeaderClass}>
						<h4 class={state.variablesTitleClass}>Variables</h4>
						<button type="button" class={state.addVariableButtonClass} onclick={state.addVariable}>
							<BaseIcon
								name="plus"
								style="width: 0.75rem; height: 0.75rem; margin-right: 0.25rem;"
							/>Add Variable
						</button>
					</div>

					<div class={state.variablesListClass}>
						{#each state.currentVariables as variable}
							<div class={state.variableItemClass}>
								<div class={state.variableInfoContainerClass}>
									<div class="prompt-builder__variable-meta">
										<span class={state.variableNameClass}>{variable.name}</span>
										<span class={state.variableTypeBadgeClass}>{variable.type}</span>
										{#if variable.required}
											<span class={state.requiredBadgeClass}>Required</span>
										{/if}
									</div>
									<div class={state.variableActionsClass}>
										<button
											type="button"
											class={state.variableActionButtonClass}
											onclick={() => state.insertVariableAtCursor(variable.id)}
											title="Insert variable"
										>
											<BaseIcon name="edit-3" style="width: 1rem; height: 1rem;" />
										</button>
										<button
											type="button"
											class={state.variableActionButtonClass}
											onclick={() => state.removeVariable(variable.id)}
											title="Remove variable"
										>
											<BaseIcon name="trash-2" style="width: 1rem; height: 1rem;" />
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
		<button type="button" class={state.saveButtonClass} onclick={state.handleSave}
			>Save Prompt</button
		>
	</div>
</div>

<style>
	:global(.prompt-builder) {
		background-color: var(--color-background-primary);
		border-radius: 0.5rem;
		box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
		border: 1px solid var(--color-border-primary);
		overflow: hidden;
	}

	:global(.prompt-builder__header) {
		border-bottom: 1px solid var(--color-border-primary);
		padding: var(--spacing-md);
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	:global(.prompt-builder__title) {
		font-size: 1.125rem;
		font-weight: var(--font-weight-medium, 500);
		color: var(--color-text-primary);
	}

	:global(.prompt-builder__header-actions) {
		display: flex;
		gap: var(--spacing-sm);
	}

	:global(.prompt-builder__copy-btn) {
		display: inline-flex;
		align-items: center;
		padding: var(--spacing-xs) var(--spacing-sm);
		border: 1px solid var(--color-border-primary);
		font-size: 0.875rem;
		font-weight: var(--font-weight-medium, 500);
		border-radius: 0.375rem;
		color: var(--color-text-primary);
		background-color: var(--color-background-primary);
		cursor: pointer;
	}

	:global(.prompt-builder__copy-btn:hover) {
		background-color: var(--color-background-secondary);
	}

	:global(.prompt-builder__copy-btn--copied) {
		color: var(--color-success-600);
	}

	:global(.prompt-builder__run-btn) {
		display: inline-flex;
		align-items: center;
		padding: var(--spacing-xs) var(--spacing-sm);
		border: 1px solid transparent;
		font-size: 0.875rem;
		font-weight: var(--font-weight-medium, 500);
		border-radius: 0.375rem;
		box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
		color: var(--color-text-inverse);
		background-color: var(--color-primary-600);
		cursor: pointer;
	}

	:global(.prompt-builder__run-btn:hover:not(:disabled)) {
		background-color: var(--color-primary-700);
	}

	:global(.prompt-builder__run-btn--running),
	:global(.prompt-builder__run-btn:disabled) {
		opacity: var(--opacity-50, 0.5);
		cursor: not-allowed;
	}

	:global(.prompt-builder__layout) {
		display: flex;
	}

	:global(.prompt-builder__sidebar) {
		width: var(--width-sidebar-md, 14rem);
		border-right: 1px solid var(--color-border-primary);
		padding: var(--spacing-md);
		flex-shrink: 0;
	}

	:global(.prompt-builder__sidebar-header) {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: var(--spacing-md);
	}

	:global(.prompt-builder__sidebar-title) {
		font-size: 0.875rem;
		font-weight: var(--font-weight-medium, 500);
		color: var(--color-text-primary);
	}

	:global(.prompt-builder__sidebar-add-btn) {
		color: var(--color-text-secondary);
		background: none;
		border: none;
		cursor: pointer;
		padding: 0.25rem;
		border-radius: 0.25rem;
	}

	:global(.prompt-builder__sidebar-add-btn:hover) {
		color: var(--color-text-tertiary);
	}

	:global(.prompt-builder__templates-list) {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-sm);
	}

	:global(.prompt-builder__template-item) {
		width: 100%;
		text-align: left;
		padding: var(--spacing-sm);
		border-radius: 0.375rem;
		font-size: 0.875rem;
		background: none;
		border: none;
		cursor: pointer;
	}

	:global(.prompt-builder__template-item:hover) {
		background-color: var(--color-background-secondary);
	}

	:global(.prompt-builder__template-item--selected) {
		background-color: var(--color-primary-100);
		color: var(--color-primary-800);
	}

	:global(.prompt-builder__template-name) {
		font-weight: var(--font-weight-medium, 500);
	}

	:global(.prompt-builder__template-description) {
		font-size: 0.75rem;
		color: var(--color-text-secondary);
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	:global(.prompt-builder__main) {
		flex: 1;
		display: flex;
		flex-direction: column;
	}

	:global(.prompt-builder__editor-section) {
		flex: 1;
		padding: var(--spacing-md);
	}

	:global(.prompt-builder__editor-label) {
		display: block;
		font-size: 0.875rem;
		font-weight: var(--font-weight-medium, 500);
		color: var(--color-text-secondary);
		margin-bottom: var(--spacing-xs);
	}

	:global(.prompt-builder__editor) {
		width: 100%;
		height: 12rem;
		padding: var(--spacing-sm);
		border: 1px solid var(--color-border-primary);
		border-radius: 0.375rem;
		box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.05);
		font-family: var(--font-mono, monospace);
		font-size: 0.875rem;
		background-color: var(--color-background-primary);
		color: var(--color-text-primary);
		resize: vertical;
	}

	:global(.prompt-builder__editor:focus) {
		outline: none;
		border-color: var(--color-primary-500);
		box-shadow: 0 0 0 2px var(--color-primary-100);
	}

	:global(.prompt-builder__variables-section) {
		border-top: 1px solid var(--color-border-primary);
		padding: var(--spacing-md);
	}

	:global(.prompt-builder__variables-header) {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: var(--spacing-sm);
	}

	:global(.prompt-builder__variables-title) {
		font-size: 0.875rem;
		font-weight: var(--font-weight-medium, 500);
		color: var(--color-text-primary);
	}

	:global(.prompt-builder__add-variable-btn) {
		display: inline-flex;
		align-items: center;
		padding: 0.375rem 0.625rem;
		border: 1px solid transparent;
		font-size: 0.75rem;
		font-weight: var(--font-weight-medium, 500);
		border-radius: 0.25rem;
		box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
		color: var(--color-text-inverse);
		background-color: var(--color-primary-600);
		cursor: pointer;
	}

	:global(.prompt-builder__add-variable-btn:hover) {
		background-color: var(--color-primary-700);
	}

	:global(.prompt-builder__variables-list) {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-sm);
	}

	:global(.prompt-builder__variable-item) {
		border: 1px solid var(--color-border-primary);
		border-radius: 0.375rem;
		padding: var(--spacing-sm);
	}

	:global(.prompt-builder__variable-info) {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	:global(.prompt-builder__variable-meta) {
		display: flex;
		align-items: center;
		gap: var(--spacing-xs);
	}

	:global(.prompt-builder__variable-name) {
		font-size: 0.875rem;
		font-weight: var(--font-weight-medium, 500);
		color: var(--color-text-primary);
	}

	:global(.prompt-builder__badge) {
		display: inline-flex;
		align-items: center;
		padding: 0.125rem 0.5rem;
		border-radius: 9999px;
		font-size: 0.75rem;
		font-weight: var(--font-weight-medium, 500);
		margin-left: var(--spacing-sm);
	}

	:global(.prompt-builder__badge--type) {
		background-color: var(--color-background-tertiary);
		color: var(--color-text-secondary);
	}

	:global(.prompt-builder__badge--required) {
		background-color: var(--color-danger-100);
		color: var(--color-danger-800);
	}

	:global(.prompt-builder__variable-actions) {
		display: flex;
		gap: var(--spacing-sm);
	}

	:global(.prompt-builder__variable-action-btn) {
		color: var(--color-text-secondary);
		background: none;
		border: none;
		cursor: pointer;
		padding: 0.25rem;
		border-radius: 0.25rem;
	}

	:global(.prompt-builder__variable-action-btn:hover) {
		color: var(--color-text-primary);
	}

	:global(.prompt-builder__variable-description) {
		margin-top: var(--spacing-xs);
		font-size: 0.75rem;
		color: var(--color-text-secondary);
	}

	:global(.prompt-builder__footer) {
		border-top: 1px solid var(--color-border-primary);
		padding: var(--spacing-md);
		display: flex;
		justify-content: flex-end;
		gap: var(--spacing-md);
	}

	:global(.prompt-builder__cancel-btn) {
		display: inline-flex;
		align-items: center;
		padding: 0.5rem var(--spacing-sm);
		border: 1px solid var(--color-border-primary);
		box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
		font-size: 0.875rem;
		font-weight: var(--font-weight-medium, 500);
		border-radius: 0.375rem;
		color: var(--color-text-primary);
		background-color: var(--color-background-primary);
		cursor: pointer;
	}

	:global(.prompt-builder__cancel-btn:hover) {
		background-color: var(--color-background-secondary);
	}

	:global(.prompt-builder__save-btn) {
		display: inline-flex;
		align-items: center;
		padding: 0.5rem var(--spacing-sm);
		border: 1px solid transparent;
		font-size: 0.875rem;
		font-weight: var(--font-weight-medium, 500);
		border-radius: 0.375rem;
		box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
		color: var(--color-text-inverse);
		background-color: var(--color-primary-600);
		cursor: pointer;
	}

	:global(.prompt-builder__save-btn:hover) {
		background-color: var(--color-primary-700);
	}

	@keyframes spin {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
</style>
