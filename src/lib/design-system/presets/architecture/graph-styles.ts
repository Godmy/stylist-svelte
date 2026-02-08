import type { GraphEdgeType } from '$stylist/design-system/attributes';

export const getGraphEdgeClasses = (directed: boolean, type: GraphEdgeType) => {
	const baseClasses = 'graph-edge';
	const directionalClass = directed ? 'directed' : '';

	return `${baseClasses} ${directionalClass}`.trim();
};

export const getGraphEdgeStyles = (style: Record<string, string>) => {
	return Object.entries(style)
		.map(([key, value]) => `${key}:${value}`)
		.join(';');
};

export const graphEdgeCSS = `
.graph-edge {
  stroke: #94a3b8;
  stroke-width: 2px;
  fill: none;
}

.graph-edge.directed {
  marker-end: url(#arrowhead);
}
`;
