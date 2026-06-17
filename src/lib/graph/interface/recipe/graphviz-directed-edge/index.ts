import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
/**
 * GraphvizDirectedEdge РІР‚вЂќ РЎР‚Р ВµР В±РЎР‚Р С• Graphviz..
 *
 * LEGO-РЎРѓР С•РЎРѓРЎвЂљР В°Р Р†:
 *   ILabelSlot        (information) РІР‚вЂќ label (Label)
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';

export interface RecipeGraphvizDirectedEdge
	extends StructIntersectAll<
		[
			SlotTheme,
			Omit<StructIntersectAll<[SlotTheme, ILabelSlot, HTMLAttributes<SVGPathElement>]>, 'style'>
		]
	> {
	id?: string;
	sourceX?: number;
	sourceY?: number;
	targetX?: number;
	targetY?: number;
	color?: string;
	width?: number;
	style?: 'solid' | 'dashed' | 'dotted';
}
