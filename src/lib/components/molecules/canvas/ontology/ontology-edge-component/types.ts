/**
 * Типы для компонента OntologyEdgeComponent
 *
 * Этот файл содержит все типы и интерфейсы, используемые в компоненте OntologyEdgeComponent,
 * в соответствии с архитектурой SAMO (SOLID + Atomic Design).
 */

import type { OntologyEdge, OntologyNode } from '$lib/types/ontology';

// Re-export shared ontology types
export type { Position2D, OntologyNode, OntologyEdge } from '$lib/types/ontology';

/**
 * @interface IOntologyEdgeComponentProps
 * @description Пропсы компонента OntologyEdgeComponent
 */
export interface IOntologyEdgeComponentProps {
  edge: OntologyEdge;
  sourceNode: OntologyNode;
  targetNode: OntologyNode;
  showLabel?: boolean;
  class?: string;
}