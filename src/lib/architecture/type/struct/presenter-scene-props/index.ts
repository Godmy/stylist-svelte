import type { ArchitectureHTMLAttributes } from '$stylist/architecture/type/struct/item-architecture-html-attributes';
import type { SceneCameraInput } from '$stylist/architecture/type/struct/camera-input';
import type { SceneNode } from '$stylist/architecture/type/struct/scene-node';

export type PresenterSceneProps = {
	nodes: SceneNode[];
	camera?: SceneCameraInput;
	title?: string;
	class?: string;
	onfocusnode?: (node: SceneNode) => void;
};
