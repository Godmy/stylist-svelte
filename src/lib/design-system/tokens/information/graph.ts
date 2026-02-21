/**
 * Graph tokens
 * Centralized token definitions for graph-related UI primitives.
 * Keep these values stable to avoid breaking visual or behavioral contracts.
 */

/**
 * Edge rendering styles.
 * - line: straight segment between nodes
 * - curve: smoothed or bezier path
 * - polyline: segmented straight path (useful for orthogonal routing)
 */
export const GRAPH_EDGE_TYPES = ['line', 'curve', 'polyline'] as const;
export type GraphEdgeType = (typeof GRAPH_EDGE_TYPES)[number];

/**
 * Default graph edge behavior.
 * These defaults are intended for styling and layout helpers.
 */
export const GRAPH_EDGE_DEFAULTS = {
	type: 'line' as GraphEdgeType,
	directed: false
} as const;
