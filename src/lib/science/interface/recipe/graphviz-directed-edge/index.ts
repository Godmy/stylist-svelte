/**
 * GraphvizDirectedEdge вЂ” СЂРµР±СЂРѕ Graphviz..
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:
 *   ILabelSlot        (information) вЂ” label (Label)
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface GraphvizDirectedEdgeRecipe extends StructIntersectAll<[Omit<
		StructIntersectAll<[
			ILabelSlot,
			ThemeAttributes<SVGPathElement>
		]>,
		'style'
	>]> {		id?: string;
		sourceX?: number;
		sourceY?: number;
		targetX?: number;
		targetY?: number;
		color?: string;
		width?: number;
		style?: 'solid' | 'dashed' | 'dotted';
	
}

