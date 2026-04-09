/**
 * GraphvizDirectedEdge — ребро Graphviz..
 *
 * LEGO-состав:
 *   ILabelSlot        (information) — label (Label)
 */
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { ILabelSlot } from '$stylist/typography/interface/proto/label-slot';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export type GraphvizDirectedEdgeRecipe =
	Omit<
		RecordArchitectureMerge<[
			ILabelSlot,
			ThemeAttributes<SVGPathElement>
		]>,
		'style'
	> & {
		id?: string;
		sourceX?: number;
		sourceY?: number;
		targetX?: number;
		targetY?: number;
		color?: string;
		width?: number;
		style?: 'solid' | 'dashed' | 'dotted';
	};
