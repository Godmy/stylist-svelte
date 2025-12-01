/**
 * Типы для компонента OntologyNodeComponent
 *
 * Этот файл содержит все типы и интерфейсы, используемые в компоненте OntologyNodeComponent,
 * в соответствии с архитектурой SAMO (SOLID + Atomic Design).
 */

import type { OntologyNode } from '$lib/types/ontology';

// Re-export shared ontology types for convenience
export type { Position2D, OntologyNode, OntologyEdge } from '$lib/types/ontology';

/**
 * Props for OntologyNodeComponent
 */
export interface IOntologyNodeComponentProps {
  node: OntologyNode;
  class?: string;
  onClick?: (node: OntologyNode) => void;
}