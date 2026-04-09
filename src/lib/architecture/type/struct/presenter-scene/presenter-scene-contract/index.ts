import type { ArchitectureHTMLAttributes } from '$stylist/architecture/type/struct/item-architecture-html-attributes';
import type { SceneCamera } from '$stylist/architecture/type/struct/scene-camera';
import type { SceneNode } from '$stylist/architecture/type/struct/scene-node';

export type PresenterSceneContract = ArchitectureHTMLAttributes<HTMLElement> & {
	class?: string;
	title?: string;
	camera?: Partial<SceneCamera>;
	nodes?: SceneNode[];
	showHeader?: boolean;
	showDepthControls?: boolean;
	showGrid?: boolean;
	showLinks?: boolean;
	showInspector?: boolean;
	onfocusnode?: (node: SceneNode) => void;
};
