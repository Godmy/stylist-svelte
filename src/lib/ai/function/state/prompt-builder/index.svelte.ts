import type { RecipePromptBuilder as PromptBuilderContract } from '$stylist/ai/interface/recipe/prompt-builder';
import type { ContractPromptVariable as PromptVariable } from '$stylist/ai/interface/contract/prompt-variable';

export function createPromptBuilderState(props: PromptBuilderContract) {
	let prompt = $state(props.initialPrompt ?? '');
	let currentVariables = $state<PromptVariable[]>(props.variables ?? []);
	let selectedTemplate = $state<string | null>(null);
	let copied = $state(false);
	let running = $state(false);

	const templates = $derived(props.templates ?? []);
	const showTemplates = $derived(props.showTemplates ?? true);
	const showVariables = $derived(props.showVariables ?? true);
	const restProps = $derived.by(() => {
		const {
			templates: _templates,
			initialPrompt: _initialPrompt,
			variables: _variables,
			onSave: _onSave,
			onRun: _onRun,
			showTemplates: _showTemplates,
			showVariables: _showVariables,
			class: _class,
			headerClass: _headerClass,
			editorClass: _editorClass,
			variablesClass: _variablesClass,
			footerClass: _footerClass,
			children: _children,
			...rest
		} = props;

		return rest;
	});

	function addVariable() {
		currentVariables = [
			...currentVariables,
			{
				id: `var_${Date.now()}`,
				name: 'new_variable',
				description: 'Description of the variable',
				type: 'text',
				required: false
			}
		];
	}

	function removeVariable(id: string) {
		currentVariables = currentVariables.filter((variable) => variable.id !== id);
		prompt = prompt.replace(new RegExp(`{{${id}}}`, 'g'), '');
	}

	function selectTemplate(templateId: string) {
		const template = templates.find((item) => item.id === templateId);
		if (!template) return;
		prompt = template.content;
		currentVariables = template.variables;
		selectedTemplate = templateId;
	}

	function handleRun() {
		if (!props.onRun) return;
		running = true;
		const variableValues: Record<string, unknown> = {};
		currentVariables.forEach((variable) => {
			variableValues[variable.id] = variable.defaultValue || '';
		});
		props.onRun(prompt, variableValues);
		setTimeout(() => {
			running = false;
		}, 1000);
	}

	function handleSave() {
		props.onSave?.(prompt, currentVariables);
	}

	function insertVariableAtCursor(variableId: string) {
		const textarea = document.querySelector('textarea');
		if (!(textarea instanceof HTMLTextAreaElement)) return;
		const before = prompt.substring(0, textarea.selectionStart);
		const after = prompt.substring(textarea.selectionEnd);
		prompt = `${before}{{${variableId}}}${after}`;
	}

	function copyToClipboard() {
		navigator.clipboard.writeText(prompt);
		copied = true;
		setTimeout(() => {
			copied = false;
		}, 2000);
	}

	function addTemplate() {
		if (templates.length > 0) selectTemplate(templates[0].id);
	}

	const containerClass = $derived(props.class ? `prompt-builder ${props.class}` : 'prompt-builder');
	const headerClass = $derived(
		props.headerClass ? `prompt-builder__header ${props.headerClass}` : 'prompt-builder__header'
	);
	const copyButtonClass = $derived(
		copied
			? 'prompt-builder__copy-btn prompt-builder__copy-btn--copied'
			: 'prompt-builder__copy-btn'
	);
	const runButtonClass = $derived(
		running ? 'prompt-builder__run-btn prompt-builder__run-btn--running' : 'prompt-builder__run-btn'
	);
	const promptEditorClass = $derived(
		props.editorClass ? `prompt-builder__editor ${props.editorClass}` : 'prompt-builder__editor'
	);
	const variableItemClass = $derived(
		props.variablesClass
			? `prompt-builder__variable-item ${props.variablesClass}`
			: 'prompt-builder__variable-item'
	);
	const footerClass = $derived(
		props.footerClass ? `prompt-builder__footer ${props.footerClass}` : 'prompt-builder__footer'
	);

	function getTemplateItemClass(isSelected: boolean) {
		return isSelected
			? 'prompt-builder__template-item prompt-builder__template-item--selected'
			: 'prompt-builder__template-item';
	}

	return {
		get prompt() {
			return prompt;
		},
		set prompt(value: string) {
			prompt = value;
		},
		get currentVariables() {
			return currentVariables;
		},
		get selectedTemplate() {
			return selectedTemplate;
		},
		get copied() {
			return copied;
		},
		get running() {
			return running;
		},
		get templates() {
			return templates;
		},
		get showTemplates() {
			return showTemplates;
		},
		get showVariables() {
			return showVariables;
		},
		get restProps() {
			return restProps;
		},
		get containerClass() {
			return containerClass;
		},
		get headerClass() {
			return headerClass;
		},
		get titleClass() {
			return 'prompt-builder__title';
		},
		get headerButtonsClass() {
			return 'prompt-builder__header-actions';
		},
		get copyButtonClass() {
			return copyButtonClass;
		},
		get runButtonClass() {
			return runButtonClass;
		},
		get mainLayoutClass() {
			return 'prompt-builder__layout';
		},
		get templatesSidebarClass() {
			return 'prompt-builder__sidebar';
		},
		get templatesHeaderClass() {
			return 'prompt-builder__sidebar-header';
		},
		get templatesTitleClass() {
			return 'prompt-builder__sidebar-title';
		},
		get addTemplateButtonClass() {
			return 'prompt-builder__sidebar-add-btn';
		},
		get templatesListClass() {
			return 'prompt-builder__templates-list';
		},
		get templateNameClass() {
			return 'prompt-builder__template-name';
		},
		get templateDescriptionClass() {
			return 'prompt-builder__template-description';
		},
		get mainContentClass() {
			return 'prompt-builder__main';
		},
		get promptEditorSectionClass() {
			return 'prompt-builder__editor-section';
		},
		get promptEditorLabelClass() {
			return 'prompt-builder__editor-label';
		},
		get promptEditorClass() {
			return promptEditorClass;
		},
		get variablesSectionClass() {
			return 'prompt-builder__variables-section';
		},
		get variablesHeaderClass() {
			return 'prompt-builder__variables-header';
		},
		get variablesTitleClass() {
			return 'prompt-builder__variables-title';
		},
		get addVariableButtonClass() {
			return 'prompt-builder__add-variable-btn';
		},
		get variablesListClass() {
			return 'prompt-builder__variables-list';
		},
		get variableItemClass() {
			return variableItemClass;
		},
		get variableInfoContainerClass() {
			return 'prompt-builder__variable-info';
		},
		get variableNameClass() {
			return 'prompt-builder__variable-name';
		},
		get variableTypeBadgeClass() {
			return 'prompt-builder__badge prompt-builder__badge--type';
		},
		get requiredBadgeClass() {
			return 'prompt-builder__badge prompt-builder__badge--required';
		},
		get variableActionsClass() {
			return 'prompt-builder__variable-actions';
		},
		get variableActionButtonClass() {
			return 'prompt-builder__variable-action-btn';
		},
		get variableDescriptionClass() {
			return 'prompt-builder__variable-description';
		},
		get footerClass() {
			return footerClass;
		},
		get cancelButtonClass() {
			return 'prompt-builder__cancel-btn';
		},
		get saveButtonClass() {
			return 'prompt-builder__save-btn';
		},
		getTemplateItemClass,
		addVariable,
		removeVariable,
		selectTemplate,
		handleRun,
		handleSave,
		insertVariableAtCursor,
		copyToClipboard,
		addTemplate
	};
}

export default createPromptBuilderState;
