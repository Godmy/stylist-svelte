import type { SceneNode } from '$stylist/architecture/type/struct/scene-node';

export type PresenterSceneLink = {
	id: string;
	from: SceneNode;
	to: SceneNode;
};
