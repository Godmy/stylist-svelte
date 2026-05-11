import type { NodeTitleRecipe } from '$stylist/science/interface/recipe/node-title';
import { NodeTitleStyleManager } from '$stylist/science/class/style-manager/node-title';

export function createNodeTitleState(props: NodeTitleRecipe) {
	const variant = $derived((props.variant ?? 'default') as NonNullable<NodeTitleRecipe['variant']>);
	const size = $derived((props.size ?? 'md') as NonNullable<NodeTitleRecipe['size']>);
	const selected = $derived(Boolean(props.selected));
	const editable = $derived(Boolean(props.editable));
	const title = $derived(props.title ?? '');
	const className = $derived(typeof props.class === 'string' ? props.class : undefined);
	const defaultColor = $derived(
		selected
			? NodeTitleStyleManager.getVariantColor('selected')
			: NodeTitleStyleManager.getVariantColor(variant)
	);
	const titleColor = $derived(props.color ?? defaultColor);
	const classes = $derived(
		`${NodeTitleStyleManager.getTitleClasses(variant, size, selected)} ${className ?? ''}`.trim()
	);
	const styles = $derived(
		`${NodeTitleStyleManager.getTitleStyles(undefined)} ${NodeTitleStyleManager.getTitleStyles(titleColor)}`.trim()
	);
	const restProps = $derived.by(() => {
		const {
			class: _class,
			title: _title,
			variant: _variant,
			size: _size,
			color: _color,
			icon: _icon,
			trailingIcon: _trailingIcon,
			selected: _selected,
			editable: _editable,
			onchange: _onchange,
			ondblclick: _ondblclick,
			children: _children,
			...rest
		} = props;
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
		get variant() {
			return variant;
		},
		get size() {
			return size;
		},
		get selected() {
			return selected;
		},
		get editable() {
			return editable;
		},
		get classes() {
			return classes;
		},
		get styles() {
			return styles;
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
			return NodeTitleStyleManager.getInputClass();
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
