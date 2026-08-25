import type { RecipeModelSelector as ModelSelectorContract } from '$stylist/ai/interface/recipe/model-selector';
import type { SlotModelOption as ModelOption } from '$stylist/ai/interface/slot/model-option';

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

	const containerClass = $derived(props.class ? `model-selector ${props.class}` : 'model-selector');
	const dropdownButtonClass = $derived(
		props.dropdownClass ? `model-selector__button ${props.dropdownClass}` : 'model-selector__button'
	);
	const dropdownMenuClass = $derived(
		props.dropdownClass ? `model-selector__menu ${props.dropdownClass}` : 'model-selector__menu'
	);
	const chevronClass = $derived(
		isOpen ? 'model-selector__chevron model-selector__chevron--open' : 'model-selector__chevron'
	);

	function getModelItemClass(isSelected: boolean) {
		const base = props.modelItemClass
			? `model-selector__item ${props.modelItemClass}`
			: 'model-selector__item';
		return isSelected ? `${base} model-selector__item--selected` : base;
	}

	function selectModel(model: ModelOption) {
		selectedModelValue = model;
		isOpen = false;
		props.onModelSelect?.(model.id);
	}

	function toggleOpen() {
		isOpen = !isOpen;
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
			return 'model-selector__info';
		},
		get selectedModelNameClass() {
			return 'model-selector__selected-name';
		},
		get selectedModelDescriptionClass() {
			return 'model-selector__selected-description';
		},
		get placeholderClass() {
			return 'model-selector__placeholder';
		},
		get chevronClass() {
			return chevronClass;
		},
		get dropdownMenuClass() {
			return dropdownMenuClass;
		},
		get modelDetailsContainerClass() {
			return 'model-selector__item-details';
		},
		get modelNameClass() {
			return 'model-selector__item-name';
		},
		get modelProviderVersionClass() {
			return 'model-selector__item-meta';
		},
		get modelDescriptionClass() {
			return 'model-selector__item-description';
		},
		get capabilitiesContainerClass() {
			return 'model-selector__capabilities';
		},
		get capabilityTagClass() {
			return 'model-selector__tag model-selector__tag--capability';
		},
		get moreCapabilitiesTagClass() {
			return 'model-selector__tag model-selector__tag--more';
		},
		get tagsContainerClass() {
			return 'model-selector__tags';
		},
		get tagClass() {
			return 'model-selector__tag';
		},
		getModelItemClass,
		selectModel,
		toggleOpen
	};
}

export default createModelSelectorState;
