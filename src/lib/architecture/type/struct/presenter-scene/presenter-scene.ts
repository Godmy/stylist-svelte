import type { SceneCameraInput } from '$stylist/architecture/type/struct/camera';
import type { SceneNode } from '$stylist/architecture/type/struct/scene-node';

export type PresenterSceneProps = {
	nodes: SceneNode[];
	camera?: SceneCameraInput;
	title?: string;
	class?: string;
	onfocusnode?: (node: SceneNode) => void;
};

export type PresenterSceneLink = {
	id: string;
	from: SceneNode;
	to: SceneNode;
};
