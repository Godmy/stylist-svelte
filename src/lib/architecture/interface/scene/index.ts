import type { PlacePoint } from '$stylist/architecture/interface/place-point/index';
import type { FoundationDepth } from '$stylist/architecture/function/depth';

export interface FoundationSceneNode {
	id: string;
	title: string;
	label?: string;
	description?: string;
	iconText?: string;
	position: PlacePoint;
	depth: FoundationDepth;
	accent: string;
	children?: readonly FoundationSceneNode[];
}
