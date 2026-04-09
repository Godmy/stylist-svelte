import type { SceneCamera } from '$stylist/architecture/type/struct/scene-camera';
import type { SceneNode } from '$stylist/architecture/type/struct/scene-node';

export type PresenterNodeShellProps = {
	node: SceneNode;
	camera: SceneCamera;
	selected?: boolean;
	class?: string;
	onselect?: (node: SceneNode) => void;
};
