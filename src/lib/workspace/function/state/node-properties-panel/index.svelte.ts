import type { RecipeNodePropertiesPanel as NodePropertiesPanelProps } from '$stylist/workspace/interface/recipe/node-properties-panel';
import type { TokenSize } from '$stylist/theme/type/alias/size';
import { ObjectManagerNodePropertiesPanel } from '$stylist/workspace/class/object-manager/node-properties-panel';

export function createNodePropertiesPanelState(props: NodePropertiesPanelProps) {
	const size = $derived((props.size ?? 'md') as TokenSize);
	const compact = $derived(props.compact ?? false);
	const showHeader = $derived(props.showHeader ?? true);
	const showClose = $derived(props.showClose ?? true);
	const editable = $derived(props.editable ?? true);
	const groupByType = $derived(props.groupByType ?? false);
	const hasProperties = $derived((props.properties?.length ?? 0) > 0);
	const restProps = $derived(ObjectManagerNodePropertiesPanel.getRestProps(props));
	const propertyGroups = $derived(
		ObjectManagerNodePropertiesPanel.getPropertyGroups(props.properties ?? [])
	);

	const classes = $derived(
		`node-properties-panel node-properties-panel--size-${size}${compact ? ' node-properties-panel--compact' : ''}${showHeader ? ' node-properties-panel--with-header' : ''}`
	);

	function handlePropertyChange(propertyId: string, value: unknown) {
		props.onPropertyChange?.(propertyId, value);
	}

	function handleCloseClick(event: MouseEvent) {
		props.onclose?.(event as never);
	}

	return {
		get size() {
			return size;
		},
		get compact() {
			return compact;
		},
		get showHeader() {
			return showHeader;
		},
		get showClose() {
			return showClose;
		},
		get editable() {
			return editable;
		},
		get groupByType() {
			return groupByType;
		},
		get hasProperties() {
			return hasProperties;
		},
		get restProps() {
			return restProps;
		},
		get propertyGroups() {
			return propertyGroups;
		},
		get classes() {
			return classes;
		},
		handlePropertyChange,
		handleCloseClick
	};
}

export default createNodePropertiesPanelState;
