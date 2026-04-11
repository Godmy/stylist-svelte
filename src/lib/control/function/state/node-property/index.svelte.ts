import type { NodePropertyRecipe } from '$stylist/science/interface/recipe/node-property';
import { createNodePropertyState } from '$stylist/science/function/state/node-property';
import { NODE_PROPERTY_VECTOR_LABELS } from '$stylist/control/const/struct/node-property-vector-labels';

export function createNodePropertyControlState(props: NodePropertyRecipe) {
	const propertyState = createNodePropertyState(props);
	let currentValue = $state(props.value);
	const label = $derived(props.label ?? props.name);
	const description = $derived(props.description ?? '');
	const isBoolean = $derived(propertyState.type === 'boolean');
	const isEnum = $derived(propertyState.type === 'enum');
	const isColor = $derived(propertyState.type === 'color');
	const isVector = $derived(propertyState.type === 'vector2' || propertyState.type === 'vector3');
	const isNumber = $derived(propertyState.type === 'number');
	const isString = $derived(propertyState.type === 'string');
	const vectorDimensions = $derived(propertyState.type === 'vector3' ? 3 : 2);
	const vectorLabels = NODE_PROPERTY_VECTOR_LABELS;
	const className = $derived(props.class ?? '');

	$effect(() => {
		currentValue = props.value;
	});

	function handleFocus(event: FocusEvent) {
		props.onfocus?.(event as never);
	}

	function handleBlur(event: FocusEvent) {
		props.onblur?.(event as never);
	}

	function emitChange(nextValue: unknown) {
		currentValue = nextValue;
		props.onchange?.(props.name, nextValue);
	}

	function handleVectorChange(index: number, rawValue: string) {
		const base = Array.isArray(currentValue) ? [...currentValue] : [0, 0, 0];
		base[index] = Number(rawValue);
		emitChange(base.slice(0, vectorDimensions));
	}

	const restProps = $derived.by(() => {
		const {
			class: _class,
			id: _id,
			name: _name,
			type: _type,
			value: _value,
			defaultValue: _defaultValue,
			size: _size,
			editable: _editable,
			typeEditable: _typeEditable,
			options: _options,
			min: _min,
			max: _max,
			step: _step,
			prefix: _prefix,
			suffix: _suffix,
			label: _label,
			description: _description,
			icon: _icon,
			error: _error,
			errorMessage: _errorMessage,
			onchange: _onchange,
			onfocus: _onfocus,
			onblur: _onblur,
			children: _children,
			...rest
		} = props;
		return rest;
	});

	return {
		get currentValue() { return currentValue; },
		set currentValue(v: unknown) { currentValue = v; },
		get label() { return label; },
		get description() { return description; },
		get isBoolean() { return isBoolean; },
		get isEnum() { return isEnum; },
		get isColor() { return isColor; },
		get isVector() { return isVector; },
		get isNumber() { return isNumber; },
		get isString() { return isString; },
		get vectorDimensions() { return vectorDimensions; },
		get vectorLabels() { return vectorLabels; },
		get className() { return className; },
		get propertyState() { return propertyState; },
		get restProps() { return restProps; },
		handleFocus,
		handleBlur,
		emitChange,
		handleVectorChange
	};
}

export default createNodePropertyControlState;
