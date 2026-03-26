import type { InterfaceZoomStep } from '$stylist/architecture/interface/zoom-step';

export interface InterfaceZoom<TValue = number> {
	id: string;
	label: string;
	display: 'number' | 'text' | 'icon' | 'preview';
	steps: readonly InterfaceZoomStep<TValue>[];
}
