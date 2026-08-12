import type { SceneCamera } from '$stylist/architecture/type/object/scene-camera';
import type { SceneNode } from '$stylist/architecture/type/object/scene-node/scene-node';

export type PresenterNodeShellProps = {
	node: SceneNode;
	camera: SceneCamera;
	selected?: boolean;
	class?: string;
	onselect?: (node: SceneNode) => void;
};
