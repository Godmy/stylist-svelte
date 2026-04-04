import type { PresenterSceneLink } from '$stylist/architecture/type/struct/presenter-scene/presenter-scene';
import type { SceneNode } from '$stylist/architecture/type/struct/scene-node';

export function resolvePresenterSceneLinks(nodes: readonly SceneNode[]): PresenterSceneLink[] {
	const links: PresenterSceneLink[] = [];

	for (const node of nodes) {
		for (const child of node.children ?? []) {
			const target = nodes.find((candidate) => candidate.id === child.id);

			if (!target) continue;

			links.push({
				id: `${node.id}->${target.id}`,
				from: node,
				to: target
			});
		}
	}

	return links;
}

export function projectSceneCoordinate(value: number, offset: number, zoom: number): number {
	return (value - offset) * zoom;
}
