import type { SceneNode } from '$stylist/architecture/interface/slot/scene-node/scene-node';

export type PresenterSceneLink = {
	id: string;
	from: SceneNode;
	to: SceneNode;
};
