/** Domain facade: consolidated presets for factory layer. */

export * from './development-stack';
export * from './graph-node';
export * from './graph-styles';
export * from './layout-aspect-ratio';
export * from './layout-container';
export * from './layout-divider';
export * from './layout-grid-layout';
export * from './layout-horizontal-layout';
export * from './layout-spacer';

import { getStackClasses, getStackGap } from './development-stack';
import { getGraphNodePositionStyle, getGraphNodeSizeClasses, graphNodeCSS } from './graph-node';
import { getGraphEdgeClasses, getGraphEdgeStyles, graphEdgeCSS } from './graph-styles';
import { getAspectRatioClasses } from './layout-aspect-ratio';
import { getContainerClasses } from './layout-container';
import { getDividerLineClasses, getDividerLineFlexClasses } from './layout-divider';
import {
	getGridLayoutContainerClasses,
	getGridLayoutItemClasses,
	getGridLayoutStyle
} from './layout-grid-layout';
import { getHorizontalLayoutClasses } from './layout-horizontal-layout';
import { getSpacerClasses, getSpacerSize } from './layout-spacer';

export const ARCHITECTURE_PRESETS = {
	development: { getStackClasses, getStackGap },
	graph: {
		getGraphNodePositionStyle,
		getGraphNodeSizeClasses,
		graphNodeCSS,
		getGraphEdgeClasses,
		getGraphEdgeStyles,
		graphEdgeCSS
	},
	layout: {
		getAspectRatioClasses,
		getContainerClasses,
		getDividerLineClasses,
		getDividerLineFlexClasses,
		getGridLayoutContainerClasses,
		getGridLayoutItemClasses,
		getGridLayoutStyle,
		getHorizontalLayoutClasses,
		getSpacerClasses,
		getSpacerSize
	}
} as const;
