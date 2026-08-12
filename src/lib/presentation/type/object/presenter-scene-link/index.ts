import type { SceneNode } from '$stylist/architecture/type/object/scene-node/scene-node';

export type PresenterSceneLink = {
	id: string;
	from: SceneNode;
	to: SceneNode;
};
