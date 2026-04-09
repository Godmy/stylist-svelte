import type { OntologyEdgeComponentProps } from '$stylist/science/type/struct/ontology-edge-component';
import { OntologyEdgeComponentStyleManager } from '$stylist/science/class/style-manager/ontology-edge-component';

export function createOntologyEdgeComponentState(props: OntologyEdgeComponentProps) {
	const startX = $derived((props.sourceNode.position?.x || 0) + (props.sourceNode.width || 120) / 2);
	const startY = $derived((props.sourceNode.position?.y || 0) + (props.sourceNode.height || 60) / 2);
	const endX = $derived((props.targetNode.position?.x || 0) + (props.targetNode.width || 120) / 2);
	const endY = $derived((props.targetNode.position?.y || 0) + (props.targetNode.height || 60) / 2);
	const style = $derived(OntologyEdgeComponentStyleManager.getEdgeStyle(props.edge.relationship));
	const containerClass = $derived(OntologyEdgeComponentStyleManager.getBaseClasses(props.class ?? ''));

	return {
		get startX() {
			return startX;
		},
		get startY() {
			return startY;
		},
		get endX() {
			return endX;
		},
		get endY() {
			return endY;
		},
		get style() {
			return style;
		},
		get containerClass() {
			return containerClass;
		}
	};
}

export default createOntologyEdgeComponentState;
