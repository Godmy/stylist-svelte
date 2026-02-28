import type { NodePropertiesPanelProps } from '$stylist/design-system/contracts';
import type { ComponentSize } from '$stylist/design-system/tokens/architecture';
import { NodePropertiesPanelStyleManager } from '$stylist/design-system/styles';

export function createNodePropertiesPanelState(props: NodePropertiesPanelProps) {
	const size = $derived((props.size ?? 'md') as ComponentSize);
	const compact = $derived(props.compact ?? false);
	const showHeader = $derived(props.showHeader ?? true);
	const showClose = $derived(props.showClose ?? true);
	const editable = $derived(props.editable ?? true);
	const groupByType = $derived(props.groupByType ?? false);
	const hasProperties = $derived((props.properties?.length ?? 0) > 0);

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
		get classes() {
			return classes;
		}
	};
}

export default createNodePropertiesPanelState;
