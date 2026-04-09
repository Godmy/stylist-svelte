import type { PromptBuilderContract, PromptVariable } from '$stylist/science/interface/record/science';
import { PromptBuilderStyleManager } from '$stylist/science/class/style-manager/prompt-builder';

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

	const containerClass = $derived(PromptBuilderStyleManager.getContainerClass(props.class ?? ''));
	const headerClass = $derived(PromptBuilderStyleManager.getHeaderClass(props.headerClass ?? ''));
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
	const templateNameClass = $derived(PromptBuilderStyleManager.getTemplateNameClass());
	const templateDescriptionClass = $derived(PromptBuilderStyleManager.getTemplateDescriptionClass());
	const mainContentClass = $derived(PromptBuilderStyleManager.getMainContentClass());
	const promptEditorSectionClass = $derived(PromptBuilderStyleManager.getPromptEditorSectionClass());
	const promptEditorLabelClass = $derived(PromptBuilderStyleManager.getPromptEditorLabelClass());
	const promptEditorClass = $derived(PromptBuilderStyleManager.getPromptEditorClass(props.editorClass ?? ''));
	const variablesSectionClass = $derived(PromptBuilderStyleManager.getVariablesSectionClass());
	const variablesHeaderClass = $derived(PromptBuilderStyleManager.getVariablesHeaderClass());
	const variablesTitleClass = $derived(PromptBuilderStyleManager.getVariablesTitleClass());
	const addVariableButtonClass = $derived(PromptBuilderStyleManager.getAddVariableButtonClass());
	const variablesListClass = $derived(PromptBuilderStyleManager.getVariablesListClass());
	const variableItemClass = $derived(PromptBuilderStyleManager.getVariableItemClass(props.variablesClass ?? ''));
	const variableInfoContainerClass = $derived(PromptBuilderStyleManager.getVariableInfoContainerClass());
	const variableNameClass = $derived(PromptBuilderStyleManager.getVariableNameClass());
	const variableTypeBadgeClass = $derived(PromptBuilderStyleManager.getVariableTypeBadgeClass());
	const requiredBadgeClass = $derived(PromptBuilderStyleManager.getRequiredBadgeClass());
	const variableActionsClass = $derived(PromptBuilderStyleManager.getVariableActionsClass());
	const variableActionButtonClass = $derived(PromptBuilderStyleManager.getVariableActionButtonClass());
	const variableDescriptionClass = $derived(PromptBuilderStyleManager.getVariableDescriptionClass());
	const footerClass = $derived(PromptBuilderStyleManager.getFooterClass(props.footerClass ?? ''));
	const cancelButtonClass = $derived(PromptBuilderStyleManager.getCancelButtonClass());
	const saveButtonClass = $derived(PromptBuilderStyleManager.getSaveButtonClass());

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
			return titleClass;
		},
		get headerButtonsClass() {
			return headerButtonsClass;
		},
		get copyButtonClass() {
			return copyButtonClass;
		},
		get runButtonClass() {
			return runButtonClass;
		},
		get loadingSpinnerClass() {
			return loadingSpinnerClass;
		},
		get mainLayoutClass() {
			return mainLayoutClass;
		},
		get templatesSidebarClass() {
			return templatesSidebarClass;
		},
		get templatesHeaderClass() {
			return templatesHeaderClass;
		},
		get templatesTitleClass() {
			return templatesTitleClass;
		},
		get addTemplateButtonClass() {
			return addTemplateButtonClass;
		},
		get templatesListClass() {
			return templatesListClass;
		},
		get templateNameClass() {
			return templateNameClass;
		},
		get templateDescriptionClass() {
			return templateDescriptionClass;
		},
		get mainContentClass() {
			return mainContentClass;
		},
		get promptEditorSectionClass() {
			return promptEditorSectionClass;
		},
		get promptEditorLabelClass() {
			return promptEditorLabelClass;
		},
		get promptEditorClass() {
			return promptEditorClass;
		},
		get variablesSectionClass() {
			return variablesSectionClass;
		},
		get variablesHeaderClass() {
			return variablesHeaderClass;
		},
		get variablesTitleClass() {
			return variablesTitleClass;
		},
		get addVariableButtonClass() {
			return addVariableButtonClass;
		},
		get variablesListClass() {
			return variablesListClass;
		},
		get variableItemClass() {
			return variableItemClass;
		},
		get variableInfoContainerClass() {
			return variableInfoContainerClass;
		},
		get variableNameClass() {
			return variableNameClass;
		},
		get variableTypeBadgeClass() {
			return variableTypeBadgeClass;
		},
		get requiredBadgeClass() {
			return requiredBadgeClass;
		},
		get variableActionsClass() {
			return variableActionsClass;
		},
		get variableActionButtonClass() {
			return variableActionButtonClass;
		},
		get variableDescriptionClass() {
			return variableDescriptionClass;
		},
		get footerClass() {
			return footerClass;
		},
		get cancelButtonClass() {
			return cancelButtonClass;
		},
		get saveButtonClass() {
			return saveButtonClass;
		},
		getTemplateItemClass(selected: boolean) {
			return PromptBuilderStyleManager.getTemplateItemClass(selected);
		},
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
