export const GEOMETRY = {
	trajectory: ['straight', 'curve', 'polyline', 'bezier', 'arc', 'loop', 'elbow', 'step', 'smooth-step'],
	connector: ['invisible', 'line', 'arrow', 'ring', 'anchor'],
	relationship: ['owner', 'input', 'output', 'one-to-one', 'one-to-many', 'many-to-many'],
	shape: ['circle', 'pill', 'square', 'rectangle', 'diamond', 'triangle', 'star', 'flag'],
	corner: ['rounded', 'sharp'],
	chart: ['pie', 'bar', 'line', 'area', 'bubble', 'radar', 'heatmap', 'tree', 'sankey', 'gantt', 'timeline', 'funnel'],
	skeleton: ['text', 'card', 'image', 'icon'],
	marker: ['dot', 'number', 'letter', 'check', 'x'],
	pin: ['person', 'place', 'business'],
	ownership: ['government', 'private', 'brand']
} as const;

export type PrimitiveGroup = keyof typeof GEOMETRY;
export type PrimitiveTrajectory = (typeof GEOMETRY.trajectory)[number];
export type PrimitiveConnector = (typeof GEOMETRY.connector)[number];
export type PrimitiveRelationship = (typeof GEOMETRY.relationship)[number];
export type PrimitiveShape = (typeof GEOMETRY.shape)[number];
export type PrimitiveCorner = (typeof GEOMETRY.corner)[number];
export type PrimitiveChart = (typeof GEOMETRY.chart)[number];
export type PrimitiveSkeleton = (typeof GEOMETRY.skeleton)[number];
export type PrimitiveMarker = (typeof GEOMETRY.marker)[number];
export type PrimitivePin = (typeof GEOMETRY.pin)[number];
export type PrimitiveOwnership = (typeof GEOMETRY.ownership)[number];
