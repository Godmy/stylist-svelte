/**
 * NodePropertiesPanel — панель свойств узла..
 *
 * LEGO-состав:
 *   ILabelSlot        (information) — label (Label)
 */
import type { ChildrenProp } from '$stylist/information/type/struct/children-prop';
import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { LiteGraphNodeProperty } from '$stylist/science/interface/recipe/litegraph-node';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface NodePropertiesPanelRecipe extends ChildrenProp, ThemeAttributes<HTMLElement> {
	nodeId?: string;
	title?: string;
	visible?: boolean;
	properties?: readonly LiteGraphNodeProperty[];
	size?: TokenSize;
	compact?: boolean;
	showHeader?: boolean;
	showClose?: boolean;
	editable?: boolean;
	groupByType?: boolean;
	onPropertyChange?: (propertyId: string, value: unknown) => void;
}
