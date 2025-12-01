/**
 * Shared types for ontology components
 *
 * These types are used by OntologyEdgeComponent and OntologyNodeComponent
 */

/**
 * @interface Position2D
 * @description 2D position with x and y coordinates
 */
export interface Position2D {
  x: number;
  y: number;
}

/**
 * @interface OntologyNode
 * @description Node structure in ontology
 */
export interface OntologyNode {
  id: string;
  name: string;
  type: string;
  label?: string;
  position?: Position2D;
  width?: number;
  height?: number;
  attributes?: string[];
  properties?: Record<string, any>;
}

/**
 * @interface OntologyEdge
 * @description Edge structure in ontology
 */
export interface OntologyEdge {
  id: string;
  source: string;
  target: string;
  relationship: string;
  label?: string;
  cardinality?: string;
  properties?: Record<string, any>;
}
