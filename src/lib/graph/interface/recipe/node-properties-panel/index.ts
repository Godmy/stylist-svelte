import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
/**
 * NodePropertiesPanel РІР‚вЂќ Р С—Р В°Р Р…Р ВµР В»РЎРЉ РЎРѓР Р†Р С•Р в„–РЎРѓРЎвЂљР Р† РЎС“Р В·Р В»Р В°..
 *
 * LEGO-РЎРѓР С•РЎРѓРЎвЂљР В°Р Р†:
 *   ILabelSlot        (information) РІР‚вЂќ label (Label)
 */
import type { ChildrenProp } from '$stylist/information/type/struct/children-prop';
import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { LiteGraphNodeProperty } from '$stylist/graph/type/struct/lite-graph-node-property';

export interface RecipeNodePropertiesPanel
	extends StructIntersectAll<[SlotTheme, ChildrenProp, HTMLAttributes<HTMLElement>]> {
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
