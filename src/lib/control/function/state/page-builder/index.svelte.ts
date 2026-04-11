import type { TokenComponentType } from '$stylist/architecture/type/enum/component-type';
import type { PageBuilderElement } from '../../../type/struct/page-builder-element';
import type { PageBuilderProps } from '../../../type/struct/page-builder-props';
import {
	pageBuilderGetDefaultAttributes,
	pageBuilderGetDefaultContent
} from '../../../function/script/page-builder';

export function createPageBuilderState(props: PageBuilderProps) {
	let elements = $state<PageBuilderElement[]>(props.initialElements ?? []);
	let selectedElementId = $state<string | null>(null);
	let dragIndex = $state<number | null>(null);
	let isPreviewMode = $state(false);

	function selectElement(id: string): void {
		selectedElementId = id;
	}

	function addElement(type: TokenComponentType, index?: number): void {
		const newElement: PageBuilderElement = {
			id: `element-${Date.now()}`,
			type,
			content: pageBuilderGetDefaultContent(type),
			attributes: pageBuilderGetDefaultAttributes(type)
		};
		if (index === undefined) {
			elements = [...elements, newElement];
		} else {
			elements = [...elements.slice(0, index), newElement, ...elements.slice(index)];
		}
		selectedElementId = newElement.id;
	}

	function updateElement(id: string, updates: Partial<PageBuilderElement>): void {
		elements = elements.map((el) => (el.id === id ? { ...el, ...updates } : el));
	}

	function deleteElement(id: string): void {
		elements = elements.filter((el) => el.id !== id);
		if (selectedElementId === id) {
			selectedElementId = null;
		}
	}

	function duplicateElement(id: string): void {
		const element = elements.find((el) => el.id === id);
		if (!element) return;
		const newElement = { ...element, id: `element-${Date.now()}` };
		const index = elements.findIndex((el) => el.id === id);
		elements = [...elements.slice(0, index + 1), newElement, ...elements.slice(index + 1)];
	}

	function moveElement(fromIndex: number, toIndex: number): void {
		const nextElements = [...elements];
		const [movedItem] = nextElements.splice(fromIndex, 1);
		nextElements.splice(toIndex, 0, movedItem);
		elements = nextElements;
	}

	function handleDragOver(event: DragEvent, targetIndex: number): void {
		event.preventDefault();
		if (dragIndex === null || dragIndex === targetIndex) return;
		moveElement(dragIndex, targetIndex);
		dragIndex = targetIndex;
	}

	function handleSave(): void {
		props.onSave?.(elements);
	}

	const selectedElement = $derived(elements.find((el) => el.id === selectedElementId));
	const className = $derived(props.class ?? '');
	const toolbarClass = $derived(props.toolbarClass ?? '');
	const canvasClass = $derived(props.canvasClass ?? '');
	const elementClass = $derived(props.elementClass ?? '');
	const showToolbar = $derived(props.showToolbar ?? true);
	const editable = $derived(props.editable ?? true);
	const restProps = $derived.by(() => {
		const {
			initialElements,
			onSave,
			showToolbar: _showToolbar,
			editable: _editable,
			class: _class,
			toolbarClass: _toolbarClass,
			canvasClass: _canvasClass,
			elementClass: _elementClass,
			...rest
		} = props as Record<string, unknown>;
		return rest as Record<string, unknown>;
	});

	return {
		get elements() {
			return elements;
		},
		set elements(value: PageBuilderElement[]) {
			elements = value;
		},
		get selectedElementId() {
			return selectedElementId;
		},
		set selectedElementId(value: string | null) {
			selectedElementId = value;
		},
		get dragIndex() {
			return dragIndex;
		},
		set dragIndex(value: number | null) {
			dragIndex = value;
		},
		get isPreviewMode() {
			return isPreviewMode;
		},
		set isPreviewMode(value: boolean) {
			isPreviewMode = value;
		},
		get selectedElement() {
			return selectedElement;
		},
		get className() {
			return className;
		},
		get toolbarClass() {
			return toolbarClass;
		},
		get canvasClass() {
			return canvasClass;
		},
		get elementClass() {
			return elementClass;
		},
		get showToolbar() {
			return showToolbar;
		},
		get editable() {
			return editable;
		},
		get restProps() {
			return restProps;
		},
		selectElement,
		addElement,
		updateElement,
		deleteElement,
		duplicateElement,
		moveElement,
		handleDragOver,
		handleSave
	};
}

export default createPageBuilderState;
