import type { NodePropertiesPanelRecipe as NodePropertiesPanelProps } from '$stylist/science/interface/recipe/node-properties-panel';
import type { TokenSize } from '$stylist/layout/type/enum/size';
import { ObjectManagerNodePropertiesPanel } from '$stylist/science/class/object-manager/node-properties-panel';
import { NodePropertiesPanelStyleManager } from '$stylist/science/class/style-manager/node-properties-panel';

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
		NodePropertiesPanelStyleManager.getPanelClasses(size, compact, showHeader)
	);

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
		}
	};
}

export default createNodePropertiesPanelState;



