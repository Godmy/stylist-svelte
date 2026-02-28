/**
 * Line rendering types for graph/connection primitives.
 */
export const LINES = ['line', 'curve', 'polyline'] as const;

export type GraphEdgeType = (typeof LINES)[number];
