import type { ModelSelectorContract, ModelOption } from '$stylist/science/interface/record/science';
import { ModelSelectorStyleManager } from '$stylist/science/class/style-manager/model-selector';

export function createModelSelectorState(props: ModelSelectorContract) {
	let isOpen = $state(false);
	let selectedModelValue = $state<ModelOption | undefined>(
		(props.models ?? []).find((model) => model.id === props.selectedModel)
	);

	const models = $derived(props.models ?? []);
	const showTags = $derived(props.showTags ?? true);
	const showCapabilities = $derived(props.showCapabilities ?? true);
	const placeholder = $derived(props.placeholder ?? 'Select a model...');
	const restProps = $derived.by(() => {
		const {
			models: _models,
			selectedModel: _selectedModel,
			onModelSelect: _onModelSelect,
			showTags: _showTags,
			showCapabilities: _showCapabilities,
			placeholder: _placeholder,
			class: _class,
			dropdownClass: _dropdownClass,
			modelItemClass: _modelItemClass,
			headerClass: _headerClass,
			children: _children,
			...rest
		} = props;

		return rest;
	});
	const containerClass = $derived(ModelSelectorStyleManager.getContainerClass(props.class ?? ''));
	const dropdownButtonClass = $derived(ModelSelectorStyleManager.getDropdownButtonClass(props.dropdownClass ?? ''));
	const modelInfoContainerClass = $derived(ModelSelectorStyleManager.getModelInfoContainerClass());
	const selectedModelNameClass = $derived(ModelSelectorStyleManager.getSelectedModelNameClass());
	const selectedModelDescriptionClass = $derived(ModelSelectorStyleManager.getSelectedModelDescriptionClass());
	const placeholderClass = $derived(ModelSelectorStyleManager.getPlaceholderClass());
	const chevronClass = $derived(ModelSelectorStyleManager.getChevronClass(isOpen));
	const dropdownMenuClass = $derived(ModelSelectorStyleManager.getDropdownMenuClass(props.dropdownClass ?? ''));
	const modelDetailsContainerClass = $derived(ModelSelectorStyleManager.getModelDetailsContainerClass());
	const modelNameClass = $derived(ModelSelectorStyleManager.getModelNameClass());
	const modelProviderVersionClass = $derived(ModelSelectorStyleManager.getModelProviderVersionClass());
	const modelDescriptionClass = $derived(ModelSelectorStyleManager.getModelDescriptionClass());
	const capabilitiesContainerClass = $derived(ModelSelectorStyleManager.getCapabilitiesContainerClass());
	const capabilityTagClass = $derived(ModelSelectorStyleManager.getCapabilityTagClass());
	const moreCapabilitiesTagClass = $derived(ModelSelectorStyleManager.getMoreCapabilitiesTagClass());
	const tagsContainerClass = $derived(ModelSelectorStyleManager.getTagsContainerClass());
	const tagClass = $derived(ModelSelectorStyleManager.getTagClass());

	function selectModel(model: ModelOption) {
		selectedModelValue = model;
		isOpen = false;
		props.onModelSelect?.(model.id);
	}

	function toggleOpen() {
		isOpen = !isOpen;
	}

	function getModelItemClass(isSelected: boolean) {
		return ModelSelectorStyleManager.getModelItemClass(isSelected, props.modelItemClass ?? '');
	}

	return {
		get isOpen() {
			return isOpen;
		},
		get selectedModelValue() {
			return selectedModelValue;
		},
		get models() {
			return models;
		},
		get showTags() {
			return showTags;
		},
		get showCapabilities() {
			return showCapabilities;
		},
		get placeholder() {
			return placeholder;
		},
		get restProps() {
			return restProps;
		},
		get containerClass() {
			return containerClass;
		},
		get dropdownButtonClass() {
			return dropdownButtonClass;
		},
		get modelInfoContainerClass() {
			return modelInfoContainerClass;
		},
		get selectedModelNameClass() {
			return selectedModelNameClass;
		},
		get selectedModelDescriptionClass() {
			return selectedModelDescriptionClass;
		},
		get placeholderClass() {
			return placeholderClass;
		},
		get chevronClass() {
			return chevronClass;
		},
		get dropdownMenuClass() {
			return dropdownMenuClass;
		},
		get modelDetailsContainerClass() {
			return modelDetailsContainerClass;
		},
		get modelNameClass() {
			return modelNameClass;
		},
		get modelProviderVersionClass() {
			return modelProviderVersionClass;
		},
		get modelDescriptionClass() {
			return modelDescriptionClass;
		},
		get capabilitiesContainerClass() {
			return capabilitiesContainerClass;
		},
		get capabilityTagClass() {
			return capabilityTagClass;
		},
		get moreCapabilitiesTagClass() {
			return moreCapabilitiesTagClass;
		},
		get tagsContainerClass() {
			return tagsContainerClass;
		},
		get tagClass() {
			return tagClass;
		},
		getModelItemClass,
		selectModel,
		toggleOpen
	};
}

export default createModelSelectorState;
