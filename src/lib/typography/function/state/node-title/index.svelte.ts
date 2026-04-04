import { createNodeTitleState as createBaseNodeTitleState } from '$stylist/science/function/state/node-title';
import { StyleManagerNodeTitle } from '$stylist/typography/class/style-manager/node-title';
import type { ThemeNodeTitleRecipe } from '$stylist/typography/interface/recipe/node-title';

export function createNodeTitleState(props: ThemeNodeTitleRecipe) {
	const baseState = createBaseNodeTitleState(props);
	const title = $derived(props.title ?? '');
	const className = $derived(typeof props.class === 'string' ? props.class : undefined);
	const defaultColor = $derived(
		baseState.selected
			? StyleManagerNodeTitle.variantColor('selected')
			: StyleManagerNodeTitle.variantColor(props.variant ?? 'default')
	);
	const titleColor = $derived(props.color ?? defaultColor);
	const classes = $derived(
		StyleManagerNodeTitle.root(
			baseState.variant,
			baseState.size,
			baseState.selected,
			className
		)
	);
	const styles = $derived(
		`${baseState.styles} ${StyleManagerNodeTitle.styles(titleColor)}`.trim()
	);
	const restProps = $derived.by(() => {
		const { class: _class, title: _title, variant: _variant, size: _size, color: _color, icon: _icon, trailingIcon: _trailingIcon, selected: _selected, editable: _editable, onchange: _onchange, ondblclick: _ondblclick, children: _children, ...rest } = props;
		return rest;
	});
	let isEditing = $state(false);
	let editValue = $state('');

	$effect(() => {
		if (!isEditing) {
			editValue = title;
		}
	});

	function handleDoubleClick(
		event: MouseEvent & { currentTarget: EventTarget & HTMLHeadingElement }
	): void {
		if (props.editable) {
			isEditing = true;
			editValue = title;
		}
		props.ondblclick?.(event);
	}

	function commitEdit(): void {
		isEditing = false;
		if (props.onchange && editValue !== title) {
			props.onchange(editValue);
		}
	}

	function cancelEdit(): void {
		isEditing = false;
		editValue = title;
	}

	function handleKeydown(event: KeyboardEvent): void {
		if (event.key === 'Enter') {
			commitEdit();
		}
		if (event.key === 'Escape') {
			cancelEdit();
		}
	}

	return {
		get title() {
			return title;
		},
		get classes() {
			return classes;
		},
		get styles() {
			return styles;
		},
		get selected() {
			return baseState.selected;
		},
		get isEditing() {
			return isEditing;
		},
		get editValue() {
			return editValue;
		},
		set editValue(value: string) {
			editValue = value;
		},
		get inputClass() {
			return StyleManagerNodeTitle.input();
		},
		get restProps() {
			return restProps;
		},
		handleDoubleClick,
		commitEdit,
		cancelEdit,
		handleKeydown
	};
}

export default createNodeTitleState;
