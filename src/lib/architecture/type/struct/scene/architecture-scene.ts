import type { SceneNode } from '$stylist/architecture/type/struct/scene-node';

export type FoundationSceneNode = SceneNode;

export interface ArchitectureScene {
	node: Record<string, unknown>;
	surface: Record<string, unknown>;
	transitions: Record<string, unknown>;
}
